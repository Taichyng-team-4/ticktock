<script setup>
import OrgSide from '../../components/OrgSide.vue'
import { ref, onMounted } from 'vue'
import { getActivitiesAPI, editActivitiesAPI } from '@/api.js'
import { useRouter, useRoute } from 'vue-router'
import utilities from '@/utilities.js'

// const router = useRouter()
// const props = defineProps(['orgId'])
// console.log('orgId', props.orgId)

const route = useRoute()
const router = useRouter()
const activityId = route.params.ActivityId // 從路由參數中取得 ActivityId

const activityData = ref(null)

// 取得當前日期
const currentDate = new Date()
// 開始日期、結束日期
const startYear = ref('')
const startMonth = ref('')
const startDay = ref('')
const endYear = ref('')
const endMonth = ref('')
const endDay = ref('')
// 初始化年分
const currentYear = currentDate.getFullYear()
const futureYear = currentYear + 1
const years = Array.from(
  { length: futureYear - currentYear + 1 },
  (_, index) => currentYear + index
)

// 初始化月份
const months = Array.from({ length: 12 }, (_, index) => String(index + 1).padStart(2, '0'))

// 初始化日期
const daysInMonth = (year, month) => new Date(year, month, 0).getDate()
const days = Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, '0'))

// 取得單個活動資料
onMounted(async () => {
  try {
    const headers = utilities.getHeaders()
    const response = await getActivitiesAPI(headers, activityId + '?pop=ticketTypeIds')
    activityData.value = response.data.data

    // 解析日期字串，並將年、月、日指派給相應的變數
    const startDate = new Date(activityData.value.startAt)
    startYear.value = startDate.getFullYear().toString()
    startMonth.value = (startDate.getMonth() + 1).toString().padStart(2, '0')
    startDay.value = startDate.getDate().toString().padStart(2, '0')

    const endDate = new Date(activityData.value.endAt)
    endYear.value = endDate.getFullYear().toString()
    endMonth.value = (endDate.getMonth() + 1).toString().padStart(2, '0')
    endDay.value = endDate.getDate().toString().padStart(2, '0')

    const startAtDate = new Date(activityData.value.startAt)
    const formattedStartAt = `${startAtDate.getFullYear()}/${(startAtDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${startAtDate.getDate().toString().padStart(2, '0')}`
    activityData.value.startAt = formattedStartAt

    const endAtDate = new Date(activityData.value.endAt)
    const formattedendAt = `${endAtDate.getFullYear()}/${(endAtDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${endAtDate.getDate().toString().padStart(2, '0')}`
    activityData.value.endAt = formattedendAt

    tickets.value = response.data.data.ticketTypes.map((ticket) => {
      const saleStartAt = new Date(ticket.saleStartAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      const saleEndAt = new Date(ticket.saleEndAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      return { ...ticket, saleStartAt: saleStartAt, saleEndAt: saleEndAt }
    })
  } catch (error) {
    console.error(error)
  }
})

// 更新活動資料
const saveActivity = async () => {
  try {
    console.log('ed', JSON.parse(JSON.stringify(activityData.value)))

    const startAt = `${startYear.value}/${startMonth.value}/${startDay.value}`
    const endAt = `${endYear.value}/${endMonth.value}/${endDay.value}`
    activityData.value.startAt = startAt
    activityData.value.endAt = endAt
    await editActivitiesAPI(activityData.value, activityId)
    // router.push('/activities') // 編輯完成後跳轉到活動列表頁面
    router.push({ name: 'account' })
  } catch (error) {
    console.error(error)
  }
}

// 票種設定
const tickets = ref([])

const showAddTicket = ref(false)
const editingTicket = ref(null)
const ticketForm = ref({
  name: '',
  zone: '',
  saleStartAt: '',
  saleEndAt: '',
  price: '',
  total: ''
})

// 票種相關函式
const showAddTicketBlock = () => {
  editingTicket.value = null
  ticketForm.value = {
    name: '',
    zone: '',
    saleStartAt: '',
    saleEndAt: '',
    price: '',
    total: ''
  }
  showAddTicket.value = true
}

// 定義函式以轉換日期格式
function formatDate(dateString, format) {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  let formattedDate = format.replace('yyyy', year)
  formattedDate = formattedDate.replace('MM', month)
  formattedDate = formattedDate.replace('dd', day)

  return formattedDate
}

function updateStartDate(event) {
  ticketForm.value = {
    ...ticketForm.value,
    saleStartAt: formatDate(event.target.value, 'yyyy/MM/dd')
  }
}

function updateEndDate(event) {
  ticketForm.value = {
    ...ticketForm.value,
    saleEndAt: formatDate(event.target.value, 'yyyy/MM/dd')
  }
}
const editTicket = (ticket) => {
  editingTicket.value = ticket
  ticketForm.value = {
    name: ticket.name,
    zone: ticket.zone,
    saleStartAt: formatDate(ticket.saleStartAt, 'yyyy/MM/dd'),
    saleEndAt: formatDate(ticket.saleEndAt, 'yyyy/MM/dd'),
    price: ticket.price,
    total: ticket.total
  }
  showAddTicket.value = true
}

const saveTicket = () => {
  if (editingTicket.value) {
    // 更新票種
    editingTicket.value.name = ticketForm.value.name
    editingTicket.value.zone = ticketForm.value.zone
    editingTicket.value.saleStartAt = formatDate(ticketForm.value.saleStartAt, 'yyyy/MM/dd')
    editingTicket.value.saleEndAt = formatDate(ticketForm.value.saleEndAt, 'yyyy/MM/dd')
    editingTicket.value.price = ticketForm.value.price
    editingTicket.value.total = ticketForm.value.total
  } else {
    // 新增票種
    const newTicket = {
      id: tickets.length + 1,
      name: ticketForm.value.name,
      zone: ticketForm.value.zone,
      saleStartAt: ticketForm.value.saleStartAt,
      saleEndAt: ticketForm.value.saleEndAt,
      price: ticketForm.value.price,
      total: ticketForm.value.total
    }
    tickets.value.push(newTicket)
  }
  showAddTicket.value = false
}

const cancelTicket = () => {
  showAddTicket.value = false
}

const deleteTicket = (ticket) => {
  tickets.value = tickets.value.filter((item) => item !== ticket)
}
</script>

<template>
  <!-- <main> -->

  <OrgSide />
  <div class="main bg-white ml-64 p-5" v-if="activityData">
    <div class="w-full">
      <div class="px-6 flex items-center justify-between">
        <h3 class="text-xl font-bold">設定活動資料</h3>
      </div>
      <div class="p-6 flex flex-nowrap w-full">
        <div class="w-8/12">
          <div class="flex flex-row">
            <p>組織名稱</p>
            <p class="px-2">XXX</p>
          </div>
          <div class="flex flex-col py-2">
            <label for="">活動名稱</label>
            <input
              v-model="activityData.name"
              type="text"
              class="w-full h-8 rounded border border-gray30"
            />
          </div>
          <div class="flex flex-col py-2">
            <label for="">開始時間</label>
            <div class="grid grid-cols-3 gap-3">
              <select v-model="startYear" class="h-8 rounded border border-gray30 bg-white">
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
              <select v-model="startMonth" class="h-8 rounded border border-gray30 bg-white">
                <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
              </select>
              <select v-model="startDay" class="h-8 rounded border border-gray30 bg-white">
                <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
              </select>
            </div>
          </div>
          <div class="flex flex-col py-2">
            <label for="">結束時間</label>
            <div class="grid grid-cols-3 gap-3">
              <select v-model="endYear" class="h-8 rounded border border-gray30 bg-white">
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
              <select v-model="endMonth" class="h-8 rounded border border-gray30 bg-white">
                <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
              </select>
              <select v-model="endDay" class="h-8 rounded border border-gray30 bg-white">
                <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
              </select>
            </div>
          </div>
          <!-- <div class="grid grid-cols-2 gap-2 py-2">
            <div class="flex flex-col">
              <label for="">活動人數</label>
              <input
                v-model="activityData.name"
                type="text"
                class="h-8 rounded border border-gray30"
              />
            </div>
            <div class="flex flex-col">
              <label for="">活動形式</label>
              <input
                v-model="activityData.name"
                type="text"
                class="h-8 rounded border border-gray30"
              />
            </div>
          </div> -->
          <!-- <div class="flex flex-col py-2">
            <label for="">活動地址</label>
            <input
              v-model="activityData.name"
              type="text"
              class="w-full h-8 rounded border border-gray30"
            />
          </div> -->

          <div class="flex flex-col py-2">
            <label for="">活動簡介</label>
            <textarea
              v-model="activityData.summary"
              cols="100"
              rows="10"
              placeholder="請簡單介紹你的活動"
              class="rounded border border-gray30"
            ></textarea>
          </div>
          <div class="flex flex-col py-2">
            <label for="">活動描述</label>
            <textarea
              v-model="activityData.description"
              cols="100"
              rows="10"
              placeholder="請詳細描述你的活動"
              class="rounded border border-gray30"
            ></textarea>
          </div>
        </div>
        <div class="flex flex-col w-4/12">
          <!-- <div class="border border-gray30 p-2 rounded">
                        <input type="file">
                    </div> -->
          <div class="flex items-center justify-center w-full p-2">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray30 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <!-- <p class="mb-2 text-sm text-gray-500 dark:text-gray30"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray30">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> -->
              </div>
              <p>上傳活動圖片</p>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
          <!-- <div class="flex items-center justify-center w-full p-2">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray30 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                  </div>
              <p>上傳場地座位分配圖</p>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div> -->
        </div>
      </div>
      <div class="p-6 w-full">
        <div class="px-6 flex items-center justify-between">
          <h3 class="text-xl font-bold">票種設定</h3>
          <button
            class="add_ticket bg-primary mx-2 px-3 py-1 rounded-full hover:text-white hover:bg-primary"
            @click="showAddTicketBlock"
          >
            新增
          </button>
        </div>
        <div class="py-6">
          <table class="table-auto w-full border border-gray30 rounded-md">
            <thead>
              <tr>
                <th class="p-2">票種名稱</th>
                <th class="p-2">區域</th>
                <th class="p-2">販售時間</th>
                <th class="p-2">價格</th>
                <th class="p-2">數量</th>
                <th class="p-2">設定</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="ticket in tickets"
                :key="ticket.id"
                class="border-t border-gray30 text-center"
              >
                <td class="p-2">{{ ticket.name }}</td>
                <td class="p-2">{{ ticket.zone }}</td>
                <td class="p-2">{{ ticket.saleStartAt }} ~ {{ ticket.saleEndAt }}</td>
                <td class="p-2">{{ ticket.price }}</td>
                <td class="p-2">{{ ticket.total }}</td>
                <td class="p-2">
                  <button
                    class="border border-primary text-primary mx-2 p-2 py-1 rounded-md hover:text-white hover:bg-primary"
                    @click="editTicket(ticket)"
                  >
                    編輯
                  </button>
                  <button
                    @click="deleteTicket(ticket)"
                    class="border border-primary text-primary mx-2 p-2 py-1 rounded-md hover:text-white hover:bg-primary"
                  >
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <div class="grid grid-cols-3 gap-3 py-6">
            <div class="border border-gray30 rounded-lg">
              <h3 class="text-xl font-bold p-3 border-b border-gray30">蒐集資料類型</h3>
              <div class="flex items-center m-3">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >只需要聯絡人資料</label
                >
              </div>
              <div class="flex items-center m-3">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >需要報名人資料</label
                >
              </div>
            </div>
            <div class="border border-gray30 rounded-lg grid grid-cols-2 gap-2">
              <h3 class="text-xl font-bold p-3 col-span-2 border-b border-gray30">個人資料</h3>
              <div class="flex items-center m-3">
                <input
                  checked
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 accent-black bg-gray-100 border-gray-300 rounded"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >姓名</label
                >
              </div>
              <div class="flex items-center m-3">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >性別</label
                >
              </div>
              <div class="flex items-center m-3">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >手機</label
                >
              </div>
              <div class="flex items-center m-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >年齡</label
                >
              </div>
              <div class="flex items-center m-3">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Email</label
                >
              </div>
            </div>
            <div class="border border-gray30 rounded-lg">
              <h3 class="text-xl font-bold p-3 border-b border-gray30">報名資料修改期限</h3>
              <div class="flex items-center m-3">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >聯絡人可以隨時自行修改報名資料，以符合最新狀況</label
                >
              </div>
              <div class="flex items-center m-3">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >聯絡人在指定時間後無法將自行修改報名資料</label
                >
              </div>
            </div>
          </div> -->
        </div>
        <div class="flex justify-end">
          <button
            class="bg-primary mx-2 px-3 py-1 rounded-full hover:text-white hover:bg-primary"
            @click="saveActivity"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="add_ticket_block absolute top-0 left-0 w-full h-full bg-gray30/[30%]"
    v-if="showAddTicket"
  >
    <div class="w-2/4 bg-white p-5 rounded absolute top-28 left-0 right-0 m-auto">
      <h4 class="font-bold p-2">{{ editingTicket ? '編輯票種' : '新增票種' }}</h4>
      <div class="flex flex-row">
        <div class="flex flex-col px-2">
          <label for="ticket_name">票種名稱</label>
          <input
            type="text"
            name="ticket_name"
            id="ticket_name"
            class="bg-gray30"
            v-model="ticketForm.name"
          />
        </div>
        <div class="flex flex-col px-2">
          <label for="price">價格</label>
          <input type="text" name="price" id="price" class="bg-gray30" v-model="ticketForm.price" />
        </div>
        <div class="flex flex-col px-2">
          <label for="sales_quantity">販售數量</label>
          <input
            type="text"
            name="sales_quantity"
            id="sales_quantity"
            class="bg-gray30"
            v-model="ticketForm.total"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col px-2">
          <p>販售時間</p>
          <div>
            <input
              type="date"
              name="start_date"
              id="start_date"
              class="bg-gray30 px-2"
              :value="formatDate(ticketForm.saleStartAt, 'yyyy-MM-dd')"
              @input="updateStartDate"
            />
            <input
              type="date"
              name="end_date"
              id="end_date"
              class="bg-gray30 px-2"
              :value="formatDate(ticketForm.saleEndAt, 'yyyy-MM-dd')"
              @input="updateEndDate"
            />
          </div>
        </div>
        <div class="flex flex-col px-2">
          <label for="zone">區域</label>
          <input type="text" name="zone" id="area" class="bg-gray30" v-model="ticketForm.zone" />
        </div>
      </div>
      <div class="py-5">
        <p>1.您可以單獨指定開始或結束時間。如果沒有指定結束時間，會販售到活動結束時間。</p>
        <p>2.每次最少/最多可以購買幾張票，預設是 1 張，最多 10 張。</p>
      </div>
      <button
        class="border border-primary text-primary mx-2 px-2 py-1 rounded hover:text-white hover:bg-primary"
        @click="saveTicket"
      >
        {{ editingTicket ? '更新' : '新增' }}
      </button>
      <button
        class="add_ticket_clear border border-secondary text-secondary mx-2 px-2 py-1 rounded hover:text-white hover:bg-secondary"
        @click="cancelTicket"
      >
        取消
      </button>
    </div>
  </div>
  <!-- </main> -->
</template>

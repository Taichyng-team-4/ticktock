<script setup>
import { ref, onMounted, reactive, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { startOfMonth, endOfMonth, addMonths, startOfYear, endOfYear, format } from 'date-fns'

import utilities from '@/utilities.js'
import * as api from '@/api.js'
import Footer from '../../components/footer.vue'
import Nav from '../../components/Nav.vue'

import { usePaginationStore } from '../../stores/paginationStore.js'

//選擇日期區間
const date = new Date()
const today = format(new Date(), 'yyyy/MM/dd')
const thisMonthStart = format(startOfMonth(date), 'yyyy/MM/dd')
const thisMonthEnd = format(endOfMonth(date), 'yyyy/MM/dd')
const lastMonthStart = format(startOfMonth(addMonths(date, 1)), 'yyyy/MM/dd')
const lastMonthEnd = format(endOfMonth(addMonths(date, 1)), 'yyyy/MM/dd')
const thisYearStart = format(startOfYear(date), 'yyyy/MM/dd')
const thisYearEnd = format(endOfYear(date), 'yyyy/MM/dd')
const paginationStore = usePaginationStore()

const activityList = ref([])
const route = useRoute()
const state = reactive({
  categoryId: '',
  categoryName: '',
  activityStartDate: '',
  activityEndDate: ''
})
const selectedRange = ref('')
const presetRanges = ref('')

const currentPage = ref(paginationStore.currentPage)
const itemsPerPage = ref(paginationStore.itemsPerPage)

watch(selectedRange, (newVal) => {
  updatePresetRanges(newVal)
})

onMounted(async () => {
  state.categoryId = route.query.categoryid || ''
  updatePresetRanges()
  await getActivityClassificationInformation(selectedRange)
})
// //轉換分類
const conversionClassification = (categoryId) => {
  // 音樂 :'1', 運動:'2', 戲劇 :'3', 藝文 :'4', 展覽 :'5', 其他 :'6'
  let category = categoryId
  switch (category) {
    case '1':
      ;(category = 'music'), (state.categoryName = '音樂')
      break
    case '2':
      ;(category = 'sport'), (state.categoryName = '運動')
      break
    case '3':
      ;(category = 'drama'), (state.categoryName = '戲劇')
      break
    case '4':
      ;(category = 'art'), (state.categoryName = '藝文')
      break
    case '5':
      ;(category = 'exhibition'), (state.categoryName = '展覽')
      break
    default:
      ;(category = 'other'), (state.categoryName = '其他')
      break
  }
  return category
}

//取得活動分類資訊
const getActivityClassificationInformation = async () => {
  try {
    const category = conversionClassification(state.categoryId)
    const res = await api.activityClassificationAPI(category)
    activityList.value = res.data.data
    activityList.value.forEach((item) => {
      item.startAt = utilities.toFormatDate(item.startAt)
    })
    // 更新活動列表
    console.log(activityList.value)
  } catch (err) {
    console.log(err)
  }
}

const updatePresetRanges = (range) => {
  switch (range) {
    case 'today':
      presetRanges.value = [{ label: 'Today', range: [today, today] }]
      break
    case 'month':
      presetRanges.value = [{ label: 'This month', range: [thisMonthStart, thisMonthEnd] }]
      break
    case 'lastMonth':
      presetRanges.value = [{ label: 'Last 2 months', range: [thisMonthStart, lastMonthEnd] }]
      break
    default:
      presetRanges.value = [{ label: 'all', range: [today, ''] }]
  }
  const daterange = presetRanges.value[0].range
  state.activityStartDate = daterange[0]
  state.activityEndDate = daterange[1]
  console.log('日期區間:', state.activityStartDate, state.activityEndDate)
}
//根據當前頁與每頁數量計算分頁資料
const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return activityList.value.slice(startIndex, endIndex)
})
// 總頁數
const totalPages = computed(() => Math.ceil(activityList.value.length / itemsPerPage.value))

// 上一頁操作
function goToPreviousPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// 下一頁操作
function goToNextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
function goToPage(pageNumber) {
  currentPage.value = pageNumber
}
</script>

<template>
  <!-- <main> -->

  <Nav />
  <div class="mx-auto px-16 mt-10 flex flex-col justify-center items-center w-full">
    <div class="w-full relative">
      <img
        src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/407dd4d1-1566-4f85-a043-1386e81c6568.jpeg"
        class="w-full h-72 object-none"
      />
      <div class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-5 bg-primary">
        <h3 class="font-bold text-2xl">探索人生 發現人生無限可能</h3>
      </div>
    </div>
    <div class="w-full flex justify-end">
      <div class="text-right py-3 w-1/2 flex justify-end">
        <!-- <input type="text" name="search" id="search" class="border border-primary w-2/5 rounded-full p-1 px-10"
        placeholder="搜尋活動" /> -->
        <!-- <select name="" id="" class="w-32 border border-primary px-5 py-1 mx-3 w-1/5">
        <option value="">全部費用</option>
        <option value="">免費</option>
        <option value="">$1~$1,000</option>
        <option value="">$1000~$2,000</option>
        <option value="">$2000~$3,000</option>
        <option value="">$3,000以上</option>
      </select> -->
        <!-- <select v-model="selectedRange" class="w-32 border border-primary px-5 py-1 mx-3 w-1/5">
          <option value="" selected>全部時間</option>
          <option value="today">今天</option>
          <option value="month">一個月內</option>
          <option value="lastMonth">二個月</option>
        </select> -->
        <!-- <VueDatePicker v-model="date" :range="true" :preset-ranges="presetRanges" :format-date="formatDate"
            class="px-5 py-1 mx-3">
            <template #yearly="{ label, range, presetDateRange }">
              <span @click="presetDateRange(range)">{{ label }}</span>
            </template>
          </VueDatePicker> -->
        <!-- <button class="bg-primary w-1/5">搜尋</button> -->
      </div>
    </div>
    <div class="my-10 grid grid-cols-3 gap-3 w-full">
      <div
        :class="{
          'relative border-4 border-gra50': state.categoryId === '1',
          relative: state.categoryId !== '1'
        }"
      >
        <a :href="`/search?categoryid=1`" target="_self" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/f9e1bbfd-a2b8-4aa8-b13c-9e3d83dc62c3.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            音樂
          </p>
        </a>
      </div>
      <div
        :class="{
          'relative border-4 border-gra50': state.categoryId === '2',
          relative: state.categoryId !== '2'
        }"
      >
        <a :href="`/search?categoryid=2`" target="_self" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/fe7e284c-a4e6-47df-9050-c204790bf710.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            運動
          </p>
        </a>
      </div>
      <div
        :class="{
          'relative border-4 border-gra50': state.categoryId === '3',
          relative: state.categoryId !== '3'
        }"
      >
        <a :href="`/search?categoryid=3`" target="_self" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/013a754d-9a82-49d2-809c-adf797070c0d.png"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            戲劇
          </p>
        </a>
      </div>
      <div
        :class="{
          'relative border-4 border-gra50': state.categoryId === '4',
          relative: state.categoryId !== '4'
        }"
      >
        <a :href="`/search?categoryid=4`" target="_self" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/46382182-03cd-4da6-8af8-30017cfeb746.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            藝文
          </p>
        </a>
      </div>
      <div
        :class="{
          'relative border-4 border-gra50': state.categoryId === '5',
          relative: state.categoryId !== '5'
        }"
      >
        <a :href="`/search?categoryid=5`" target="_self" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/310d89a2-9d3f-42c5-b3ff-1e637310dd2b.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            展覽
          </p>
        </a>
      </div>
      <div
        :class="{
          'relative border-4 border-gra50': state.categoryId === '6',
          relative: state.categoryId !== '6'
        }"
      >
        <a :href="`/search?categoryid=6`" target="_self" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/303dea84-4814-41d6-97df-907349c6df26.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            其他
          </p>
        </a>
      </div>
    </div>
    <div class="my-10 py-10 w-full">
      <h3 class="font-bold text-2xl text-center py-3">{{ state.categoryName }} 相關活動</h3>
      <div class="grid grid-cols-3 gap-3">
        <div class="py-2" v-for="activityItem in paginatedItems" :key="activityItem.id">
          <a href="#" class="hover:text-gray50">
            <img :src="activityItem.themeImg" class="w-full h-72 object-cover" />
            <div class="flex flex-row py-3">
              <p class="pr-2">{{ activityItem.startAt }}</p>
              <p class="pl-2">{{ activityItem.venue.name }}</p>
            </div>
            <h4 class="font-bold text-xl">{{ activityItem.name }}</h4>
          </a>
        </div>
      </div>
    </div>
    <div>
      <!-- 分頁控制-->
      <div class="text-center my-10 flex flex-row">
        <button
          @click="goToPreviousPage"
          :disabled="currentPage === 1"
          class="bg-primary w-full px-5 py-3"
        >
          上一頁
        </button>
        <ul class="flex flex-row mx-1">
          <li
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="border border-primary w-full px-5 py-3 mx-1"
            :class="{ 'bg-primary': pageNumber === currentPage }"
          >
            <button
              class="w-full px-5 py-3"
              @click="goToPage(pageNumber)"
              :disabled="pageNumber === currentPage"
            >
              {{ pageNumber }}
            </button>
          </li>
        </ul>
        <button
          @click="goToNextPage"
          :disabled="currentPage === totalPages"
          class="bg-primary w-full px-5 py-3"
        >
          下一頁
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

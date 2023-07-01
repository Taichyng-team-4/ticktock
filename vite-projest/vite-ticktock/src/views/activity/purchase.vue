<script setup>
import { ref, onMounted, reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Nav from '../../components/Nav.vue'

import utilities from '@/utilities.js'
import * as api from '@/api.js'
import Footer from '../../components/footer.vue'

const termsAccepted = ref(false)
const activityInformation = ref([])
const route = useRoute()
const state = reactive({
  activityId: '',
  categoryName: '',
  activityStartDate: '',
  activityEndDate: '',
  TicketInformation: { tickets: [] }
})

onMounted(async () => {
  state.activityId = route.path.split('/')[2]
  console.log(state.activityId)
  await getActivityInformation()
})

//取得活動單一資訊
const getActivityInformation = async () => {
  try {
    const res = await api.activityAPI(state.activityId)
    activityInformation.value = res.data.data
    activityInformation.value.startAt = utilities.toFormatDate(activityInformation.value.startAt)
    activityInformation.value.endAt = utilities.toFormatDate(activityInformation.value.endAt)
    activityInformation.value.category = utilities.conversionClassification(
      activityInformation.value.category
    )
    activityInformation.value.ticketTypes.forEach((ticketTypeItem) => {
      ticketTypeItem.saleStartAt = utilities.toFormatDate(ticketTypeItem.saleStartAt)
      ticketTypeItem.saleEndAt = utilities.toFormatDate(ticketTypeItem.saleEndAt)
      ticketTypeItem.quantity = 0
    })
    console.log(activityInformation.value.ticketTypes[0].quantity)
    console.log(state.categoryName)
  } catch (err) {
    console.log(err)
  }
}

const decrementQuantity = (index) => {
  const inputElement = document.querySelector(`#quantityInput-${index}`)
  if (parseInt(inputElement.value) > 0) {
    const newValue = parseInt(inputElement.value) - 1
    inputElement.value = newValue.toString()
    activityInformation._value.ticketTypes[index].quantity = newValue
  }
}

const incrementQuantity = (index) => {
  const inputElement = document.querySelector(`#quantityInput-${index}`)
  const newValue = parseInt(inputElement.value) + 1
  inputElement.value = newValue.toString()
  activityInformation._value.ticketTypes[index].quantity = newValue
}

const updateQuantity = (index, value) => {
  const quantity = parseInt(value)
  // 更新 ticketTypeItem.quantity
  activityInformation._value.ticketTypes[index].quantity = quantity
}

const checkPayInformation = () => {
  if (!termsAccepted.value) {
    Swal.fire({
      title: 'Error!',
      text: '請閱讀並同意購票須知',
      allowOutsideClick: false,
      icon: 'error'
    })
  } else {
    let num = 0
    state.TicketInformation.tickets = []
    for (const [index, ticketTypeItem] of activityInformation._value.ticketTypes.entries()) {
      if (ticketTypeItem.quantity > 0) {
        state.TicketInformation.tickets.push({
          ticketTypeId: ticketTypeItem.id,
          quantity: ticketTypeItem.quantity
        })
      }
      num += ticketTypeItem.quantity
    }
    console.log(num)
    if (!num > 0) {
      Swal.fire({
        title: 'Error!',
        text: '請填寫購票數量',
        allowOutsideClick: false,
        icon: 'error'
      })
    } else {
      toPayTicket()
    }
  }
}
//新增訂單
const toPayTicket = async () => {
  const orderData = state.TicketInformation
  try {
    const headers = utilities.getHeaders()
    const response = await api.createOrderAPI(headers, JSON.parse(JSON.stringify(orderData)))
    console.log('活動已成功新增', response.data)
    console.log(response.data.data.info.paymentUrl.web)
    const url = response.data.data.info.paymentUrl.web
    if (url) window.location.href = url
  } catch (error) {
    console.error('購票失敗', error)
    Swal.fire({
      title: '購票失敗!',
      text: '請聯繫客服',
      allowOutsideClick: false,
      icon: 'error'
    })
  }
}
</script>

<template>
  <Nav />
  <div class="" v-if="activityInformation && activityInformation.venue">
    <div class="bg-white mb-10">
      <div class="container mx-auto max-w-screen-sm px-6">
        <div class="px-4 py-5 max-w-7xl flex justify-between items-center">
          <a href="./activity.html">
            <label class="link-secondary text-gray40">1.瀏覽活動</label></a
          >
          <div class="text-center w-1/4">
            <hr style="border: 1px solid grey" />
          </div>
          <label class="link-secondary font-bold">2.選定票卷</label>
          <!-- <div class="text-center w-1/4">
                        <hr style="border: 1px solid grey" />
                    </div>
                    <label class="link-secondary text-gray40">3.確認購票資訊</label> -->
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <!-- Main Content -->
      <main class="p-4 sm:p-6">
        <div class="mb-3">
          <router-link :to="`/search?categoryid=1`" class="link-secondary"> 首頁</router-link>/
          <a href="./activity.html" class="link-secondary">{{ activityInformation.category }}</a
          >/
          <a href="./activity.html" class="link-secondary">{{ activityInformation.name }}</a>
        </div>
        <!-- Event Image -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-2 gap-4 mb-5">
          <div class="p-4 sm:p-6">
            <div class="w-full relative">
              <img src="https://picsum.photos/300/150" alt="Event Image" class="w-full mb-4" />
            </div>
          </div>
          <div class="p-5 flex">
            <div class="self-center">
              <h3 class="font-bold text-2xl mb-10">
                {{ activityInformation.name }}
              </h3>
              <p
                class="flex items-center"
                v-if="activityInformation.startAt === activityInformation.endAt"
              >
                <span class="material-icons mr-3"> access_time_filled </span
                >{{ activityInformation.startAt }}
              </p>
              <p class="flex items-center" v-else>
                <span class="material-icons mr-3"> access_time_filled </span
                >{{ activityInformation.startAt }}-{{ activityInformation.endAt }}
              </p>
              <p class="flex items-center">
                <span class="material-icons mr-3"> place </span
                >{{ activityInformation.venue.address }}
              </p>
              <p class="flex items-center">
                <span class="material-icons mr-3"> warning </span>注意資訊:
                活動場館內禁止飲食,禁止寵物入場
              </p>
            </div>
          </div>
        </div>
        <div class="border text-white bg-gray50 flex items-center p-4 justify-between mb-3">
          <div class="flex items-center">
            <span class="material-icons mr-3"> warning_amber </span>
            <span
              >重要資訊:因為連日大雨導致地震使得場地受損，須待場地人員確認安全後才可使用，活動退票或擇期(根本不會)等資訊會再擇日公布。
            </span>
          </div>
          <span class="material-icons"> expand_more </span>
        </div>

        <img
          src="../../../public/images/2023台北小巨蛋票價圖_0419.jpg"
          alt="Event Image"
          class="w-full rounded-lg mb-4"
        />
        <div class="flex flex-col md:flex-row gap-8 mt-3">
          <table class="table-auto w-full text-left border border-gray30 rounded-l-lg">
            <thead>
              <tr class="text-gray40">
                <th class="px-4 py-2">票種</th>
                <th class="px-4 py-2">狀態</th>
                <th class="px-4 py-2 text-right">售價</th>
                <th class="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-t border-gray30"
                v-for="(ticketTypeItem, index) in activityInformation.ticketTypes"
                :key="ticketTypeItem.id"
              >
                <td class="px-4 py-2">{{ ticketTypeItem.name }}</td>
                <td class="px-4 py-2">電腦劃位</td>
                <td class="px-4 py-2 text-right">
                  NT$<span class="price">{{ ticketTypeItem.price }}</span>
                </td>
                <td class="px-4 py-2 w-1/4">
                  <div class="flex items-center justify-center">
                    <button
                      class="border border-gray-500 px-2 py-1 bg-gray-200"
                      @click="decrementQuantity(index)"
                    >
                      -
                    </button>

                    <input
                      type="number"
                      class="quantity border border-gray-500 text-center w-16 py-1 price"
                      min="0"
                      value="0"
                      :value="ticketTypeItem.quantity"
                      :id="'quantityInput-' + index"
                      @input="updateQuantity(index, $event.target.value)"
                    />

                    <button
                      class="border border-gray-500 px-2 py-1 bg-gray-200"
                      @click="incrementQuantity(index)"
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>

        <div class="flex justify-end">
          <div class="flex items-center mt-4 mr-2">
            <input
              id="terms"
              type="checkbox"
              class="form-checkbox h-5 w-5 text-gray-600"
              v-model="termsAccepted"
            />
            <label for="terms" class="ml-2 block text-gray-900 text-sm">
              我已閱讀並同意
              <a href="/activity/terms" class="link-secondary text-red400">購票須知</a>
            </label>
          </div>

          <button
            class="bg-navbar hover:bg-blue-700 mt-4 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center"
            type="button"
            @click="checkPayInformation"
          >
            前往付款
            <span class="material-icons"> arrow_forward </span>
          </button>
        </div>
      </main>
    </div>
  </div>
  <Footer />
</template>

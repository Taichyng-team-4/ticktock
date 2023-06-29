<script setup>
import OrgSide from '../../components/OrgSide.vue'

import utilities from '@/utilities.js'
import { ref, reactive, onMounted, computed } from 'vue'
import { ordersMeAPI, usersAPI, activitiesAPI } from '@/api'

const isLogin = ref(false)
const token = ref('')
const activityName = ref([])
const data = ref([])
const purchases = ref([])
const selectedActivity = ref(null)

const convertDateFormat = (date) => {
  const dateObject = new Date(date)
  const year = dateObject.getFullYear()
  const month = dateObject.getMonth() + 1
  const day = dateObject.getDate()
  return `${year}/${month}/${day}`
}

const activeState = (activityId) => {
  let state = ''
  const active = data.value.find((activity) => activity.id === activityId)
  const startDate = new Date(active.startAt)
  const endDate = new Date(active.endAt)
  const currentDate = new Date()
  if (currentDate >= startDate && currentDate <= endDate) {
    state = '進行中'
  } else if (currentDate < startDate) {
    state = '未開始'
  } else {
    state = '已結束'
  }
  return state
}

onMounted(async () => {
  // 取得活動名稱
  try {
    const res = await activitiesAPI('?pop=ticketTypeIds')
    const activities = res.data.data
    activityName.value = activities.map((activity) => ({
      id: activity.id,
      name: activity.name
    }))
  } catch (error) {
    console.log('navigate to activity page fail')
    console.log(error)
  }

  // 取得訂單
  try {
    const headers = utilities.getHeaders()
    const res = await ordersMeAPI(headers)
    data.value = res.data.data
    console.log(data.value)

    for (const purchase of data.value) {
      try {
        const response = await usersAPI(`${purchase.ownerId}`)
        const user = {
          id: purchase.id,
          activityId: purchase.detail[0].activityId,
          name: response.data.data.name,
          amount: purchase.amount
        }
        purchases.value.push(user)
        console.log(purchases.value)
      } catch (error) {
        console.error('查詢使用者失敗', error)
      }
    }
  } catch (error) {
    console.log('fail')
    console.log(error)
  }
})

const filteredPurchases = computed(() => {
  if (selectedActivity.value === null) {
    return purchases.value // 如果選擇了全部，返回所有購買資料
  } else {
    return purchases.value.filter((item) => item.activityId === selectedActivity.value)
  }
})

const exportOrders = () => {
  // 將 filteredPurchases 匯出成訂單
  const orders = filteredPurchases.value.map((item) => ({
    orderId: item.id,
    name: item.name,
    email: item.email,
    paymentMethod: item.paymentMethod,
    ticketCount: item.ticketCount,
    amount: item.amount,
    fee: item.fee
  }))

  // 假設您要將訂單資料以 CSV 格式匯出
  const csvContent = 'data:text/csv;charset=utf-8,' + convertArrayToCSV(orders)

  // 建立匯出連結並觸發點擊事件
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'orders.csv')
  document.body.appendChild(link) // 將連結元素加入 DOM
  link.click() // 觸發點擊事件
}

const convertArrayToCSV = (array) => {
  const header = Object.keys(array[0]).join(',') // CSV 標題列
  const data = array.map((item) => Object.values(item).join(',')) // 資料列
  return [header, ...data].join('\n') // 串接標題列與資料列，並以換行符分隔
}
</script>

<template>
  <!-- <main> -->
  <OrgSide />

  <div class="main ml-64 p-5">
    <h3 class="text-xl font-bold">訂單資訊</h3>
    <div class="flex items-end justify-between py-3">
      <div class="flex">
        <p>匯出訂單</p>

        <button @click="exportOrders" class="border border-green400 text-green400 px-2 mx-2">
          匯出csv
        </button>
      </div>
      <select v-model="selectedActivity" name="" id="" class="w-32 bg-gray30 px-5 py-1">
        <option :value="null" :key="null">全部</option>
        <option v-for="activity in activityName" :key="activity.id" :value="activity.id">
          {{ activity.name }}
        </option>
      </select>
    </div>
    <div class="pt-6">
      <table class="table-auto w-full border-x border-b border-gray30">
        <thead>
          <tr class="bg-gray30">
            <th>訂單編號</th>
            <th>姓名</th>
            <th>信箱</th>
            <th>繳費方式</th>
            <th>票數</th>
            <th>金額</th>
            <th>手續費</th>
          </tr>
        </thead>
        <tbody v-for="item in filteredPurchases">
          <tr class="border-t border-gray30 text-center" :data-activityId="item.activityId">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>??@gmail.com</td>
            <td>???</td>
            <td>?</td>
            <td>NT{{ item.amount }}</td>
            <td>NT??</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- </main> -->
</template>

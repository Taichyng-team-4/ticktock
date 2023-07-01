<script setup>
import Footer from '../../components/footer.vue'
import Nav from '../../components/Nav.vue'
import { getActivitiesAPI } from '@/api.js'
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import utilities from '@/utilities.js'

const route = useRoute()
const router = useRouter()
const activityId = route.params.id // 從路由參數中取得 ActivityId
console.log(activityId)
const activityData = ref(null)
// 票種設定
const tickets = ref([])

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
// 取得單個活動資料
onMounted(async () => {
  try {
    // const headers = utilities.getHeaders()
    const response = await getActivitiesAPI({}, activityId + `?pop=ticketTypeIds,venueId,orgId`)
    activityData.value = response.data.data

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
      return {
        ...ticket,
        saleStartAt: formatDate(ticket.saleStartAt, 'yyyy/MM/dd'),
        saleEndAt: formatDate(ticket.saleEndAt, 'yyyy/MM/dd')
      }
    })
    console.log(activityData)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <Nav />
  <div class="bg-white mb-10">
    <div class="container mx-auto max-w-screen-sm px-6">
      <div class="px-4 py-5 max-w-7xl flex justify-between items-center">
        <label class="link-secondary font-bold">1.瀏覽活動</label>
        <div class="text-center w-1/4">
          <hr style="border: 1px solid grey" />
        </div>
        <label class="link-secondary font-bold text-gray40">2.選定票卷</label>
        <!-- <div class="text-center w-1/4">
          <hr style="border: 1px solid grey" />
        </div>
        <label class="link-secondary text-gray40">3.確認購票資訊</label> -->
      </div>
    </div>
  </div>
  <div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8" v-if="activityData">
    <!-- Main Content -->
    <main class="p-4 sm:p-6">
      <div class="mb-3">
        <a href="/" class="link-secondary">首頁</a>/
        <a href="/search" class="link-secondary">{{ activityData.category }}</a
        >/
        <a href="#" class="cursor-default">{{ activityData.name }}</a>
      </div>
      <!-- Event Image -->
      <div class="w-full relative">
        <img :src="activityData.themeImg" alt="Event Image" class="w-full rounded-lg mb-4" />
        <div class="absolute bottom-0 left-0 p-5 bg-primary">
          <h3 class="font-bold text-2xl">{{ activityData.name }}</h3>
          <p class="flex items-center">
            <!-- <span class="material-icons mr-3"> access_time_filled </span>星期四, 五月 25, 2023 -->
            <span class="material-icons mr-3"> access_time_filled </span>{{ activityData.startAt }}
          </p>
          <p class="flex items-center">
            <span class="material-icons mr-3"> place </span>{{ activityData.venue.address }}
          </p>
        </div>
      </div>
      <div class="mx-auto px-6">
        <!-- Event Description -->
        <h1 class="text-3xl mb-2 font-bold py-10">
          {{ activityData.summary }}
        </h1>
        <p>
          <span class="material-icons"> diversity_3 </span>活動主辦方: {{ activityData.org.name }}
        </p>
        <p class="mt-10 text-gray-700 leading-relaxed mb-6">
          {{ activityData.description }}
        </p>
        <h1 class="text-2xl mb-6 font-bold mt-10">聯絡主辦方:</h1>
        <p class="flex items-center mb-5">
          <span class="material-icons mr-3"> local_phone </span>{{ activityData.org.phone }}
        </p>
        <p class="flex items-center">
          <span class="material-icons mr-3"> local_post_office </span>{{ activityData.org.email }}
        </p>

        <h1 class="text-2xl font-bold mt-10 mb-5">活動場地</h1>

        <p class="text-lg font-bold mb-5">{{ activityData.venue.name }}</p>
        <p class="flex items-center">
          <span class="material-icons mr-3"> place </span>{{ activityData.venue.address }}
        </p>
      </div>
      <!-- <h1 class="text-2xl mb-1 font-bold mt-10">活動場地</h1> -->
      <!-- <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.955485801612!2d120.28389129678956!3d22.6181374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e037fc2013e71%3A0xc61249aec47e0cd1!2z6auY6ZuE5rWB6KGM6Z-z5qiC5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1683081781562!5m2!1szh-TW!2stw"
          width="1200"
          height="560"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="w-full p-4">
        <h2 class="text-2xl font-bold">{{ activityData.venue.name }}</h2>
        <div class="flex items-center">
          <span class="material-icons"> place </span>{{ activityData.venue.address }}
        </div>
      </div> -->
      <div class="flex justify-between mb-10">
        <h1 class="text-2xl mb-1 font-bold mt-10">活動票券</h1>

        <a
          class="bg-navbar hover:text-gray50 mt-4 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center"
          :href="`./${activityId}/purchase`"
        >
          前往購票
          <span class="material-icons"> arrow_forward </span>
        </a>
      </div>
      <div class="flex flex-col md:flex-row gap-8 mt-3">
        <table class="table-auto w-full text-left">
          <thead>
            <tr class="text-gray40">
              <th class="py-2 px-4">票種</th>
              <th class="py-2 px-4">販售時間</th>
              <th class="py-2 px-4 text-right">售價</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray30" v-for="ticket in tickets">
              <td class="py-2 px-4">{{ ticket.name }}</td>
              <td class="py-2 px-4">{{ ticket.saleStartAt }} ~ {{ ticket.saleEndAt }}</td>
              <td class="py-2 px-4 text-right">NT$ {{ ticket.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Nav from '../../components/Nav.vue'
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import utilities from '@/utilities.js'
import * as api from '@/api.js'
import Footer from '../../components/footer.vue'

const router = useRouter()
const activityList = ref([])
const category = ''

//取得活動資訊
async function getActivityInformation() {
  try {
    const res = await api.activitysAPI()
    activityList.value = res.data.data
    activityList.value.forEach((item) => {
      item.startAt = utilities.toFormatDate(item.startAt)
    })
    console.log(activityList.value)
  } catch (err) {
    console.log(err)
  }
}
//搜索分類
const goToSearch = () => {
  router.push(`/search/${category}`)
}

onMounted(() => {
  getActivityInformation()
})
</script>

<template>
  <!-- <main> -->
  <Nav />
  <div class="container mx-auto px-16 mt-10 flex flex-col justify-center items-center w-full">
    <div class="w-full relative">
      <img
        src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/f671144d-612c-4038-ac6f-a72c230777f4.png"
        class="w-full"
      />
      <div class="absolute top-0 left-0 p-5 bg-primary">
        <p>2023.04.15 & 2023.04.27</p>
        <h3 class="font-bold text-2xl">告五人第一次世界巡迴演唱會</h3>
      </div>
      <div class="absolute bottom-5 right-5">
        <a href="#" class="bg-primary px-5 py-3 rounded-full">前往購票</a>
      </div>
    </div>
    <div class="bg-gray50 text-left w-full py-3 px-3">
      <p class="text-white">
        系統公告 : 因為系統維護升級，將於 2022/03/15 20:30:00~2023/03/05 23:00
        暫停購票服務，如有造成不便，敬請見諒。
      </p>
    </div>
    <div class="my-16 grid grid-cols-3 gap-3 w-full">
      <div class="relative">
        <router-link :to="`/search?categoryid=1`" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/f9e1bbfd-a2b8-4aa8-b13c-9e3d83dc62c3.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            音樂
          </p>
        </router-link>
      </div>
      <div class="relative">
        <router-link :to="`/search?categoryid=2`" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/fe7e284c-a4e6-47df-9050-c204790bf710.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            運動
          </p>
        </router-link>
      </div>
      <div class="relative">
        <router-link :to="`/search?categoryid=3`" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/013a754d-9a82-49d2-809c-adf797070c0d.png"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            戲劇
          </p>
        </router-link>
      </div>
      <div class="relative">
        <router-link :to="`/search?categoryid=4`" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/46382182-03cd-4da6-8af8-30017cfeb746.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            藝文
          </p>
        </router-link>
      </div>
      <div class="relative">
        <router-link :to="`/search?categoryid=5`" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/310d89a2-9d3f-42c5-b3ff-1e637310dd2b.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            展覽
          </p>
        </router-link>
      </div>
      <div class="relative">
        <router-link :to="`/search?categoryid=6`" class="w-full h-full">
          <img
            src="https://taichung-ticktock.s3.ap-northeast-1.amazonaws.com/303dea84-4814-41d6-97df-907349c6df26.jpeg"
            class="w-full h-44 object-cover"
          />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white"
          >
            其他
          </p>
        </router-link>
      </div>
    </div>
  </div>
  <div class="bg-primary/10 my-10 py-10">
    <div class="container px-16 m-auto">
      <h3 class="font-bold text-2xl text-center py-3">最新活動</h3>
      <div class="grid grid-cols-3 gap-3">
        <div v-for="activityItem in activityList" :key="activityItem.id">
          <a :href="`./activity/${activityItem.id}`" class="hover:text-gray50">
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
  </div>
  <div>
    <div class="text-center my-10">
      <a href="/search" class="bg-primary w-full px-5 py-3 rounded-full">前往購票</a>
    </div>

    <div class="my-10 w-full">
      <h3 class="font-bold text-2xl text-center py-3">合作夥伴</h3>
      <div class="grid grid-cols-6 gap-3 text-center">
        <a href="https://courses.hexschool.com/">
          <p class="font-bold hover:text-gray50">六角俱樂部</p>
        </a>
        <a href="https://courses.hexschool.com/">
          <p class="font-bold hover:text-gray50">六角餐廳</p>
        </a>
        <a href="https://courses.hexschool.com/">
          <p class="font-bold hover:text-gray50">六角學院</p>
        </a>
        <a href="https://courses.hexschool.com/">
          <p class="font-bold hover:text-gray50">六角音樂</p>
        </a>
        <a href="https://courses.hexschool.com/">
          <p class="font-bold hover:text-gray50">六角藝術特區</p>
        </a>
        <a href="https://courses.hexschool.com/">
          <p class="font-bold hover:text-gray50">六角影音</p>
        </a>
      </div>
    </div>
  </div>
  <Footer />
</template>

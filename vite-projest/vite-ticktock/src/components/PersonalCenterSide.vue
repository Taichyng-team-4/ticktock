<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const currentPage = route.name
</script>

<template>
  <div class="side">
    <div class="user_img p-5 bg-white rounded">
      <img src="https://picsum.photos/100/100" class="w-48 h-48 rounded-full" />
      <h3 class="p-2 font-bold text-center text-2xl">Zoey</h3>
    </div>
    <div class="mt-5 bg-white rounded">
      <ul class="subject_user">
        <li
          id="userOrder"
          :class="{
            'py-2 px-7 text-xl font-bold cursor-pointer text-primary border-l-4':
              currentPage === 'userOrder',
            'py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]':
              currentPage !== 'userOrder'
          }"
        >
          <a href="/personal_center/userOrder" class="block hover:text-primary">訂單管理</a>
        </li>
        <li
          id="profile"
          :class="{
            'py-2 px-7 text-xl font-bold cursor-pointer text-primary border-l-4':
              currentPage === 'profile',
            'py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]':
              currentPage !== 'profile'
          }"
        >
          <a href="/personal_center/profile" class="block hover:text-primary">帳號管理</a>
        </li>
        <li
          id="news"
          :class="{
            'py-2 px-7 text-xl font-bold cursor-pointer text-primary border-l-4':
              currentPage === 'news',
            'py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]':
              currentPage !== 'news'
          }"
        >
          <a href="/personal_center/news" class="block hover:text-primary">訊息管理</a>
        </li>
        <li
          id="orgs"
          :class="{
            'py-2 px-7 text-xl font-bold cursor-pointer text-primary border-l-4':
              currentPage === 'orgs',
            'py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]':
              currentPage !== 'orgs'
          }"
        >
          <a href="/personal_center/orgs" class="block hover:text-primary">組織管理</a>
        </li>
      </ul>
    </div>
  </div>
</template>

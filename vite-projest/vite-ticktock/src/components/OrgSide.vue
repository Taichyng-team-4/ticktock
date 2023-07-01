<script setup>
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps(['orgId'])
console.log('org side orgid', props.orgId)

const route = useRoute()
const currentPage = route.name
</script>

<template>
  <div class="side fixed w-64 bg-background min-h-screen flex flex-col justify-between">
    <div>
      <h1 class="text-center text-primary text-2xl p-5">Ticktock</h1>
      <ul class="subject_personal_center text-center">
        <li
          id="activityList"
          :class="{
            'text-xl text-primary bg-gray30 cursor-pointer': currentPage === 'activityList',
            'text-xl hover:bg-gray30/[35%] cursor-pointer': currentPage !== 'activityList'
          }"
        >
          <a :href="`/org/activityList?orgId=${props.orgId}`" class="block p-5 hover:text-primary"
            >活動列表</a
          >
        </li>
        <li
          id="new_activity"
          :class="{
            'text-xl text-primary bg-gray30 cursor-pointer': currentPage === 'new_activity',
            'text-xl hover:bg-gray30/[35%] cursor-pointer': currentPage !== 'new_activity'
          }"
        >
          <a :href="`/org/new_activity?orgId=${props.orgId}`" class="block p-5 hover:text-primary"
            >活動刊登</a
          >
        </li>
        <li
          id="orders"
          :class="{
            'text-xl text-primary bg-gray30 cursor-pointer': currentPage === 'orders',
            'text-xl hover:bg-gray30/[35%] cursor-pointer': currentPage !== 'orders'
          }"
        >
          <a :href="`/org/orders?orgId=${props.orgId}`" class="block p-5 hover:text-primary"
            >訂單資訊</a
          >
        </li>
        <!-- <li id="sales_status" class="text-xl hover:bg-gray30/[35%] cursor-pointer">
          <a href="/org/sales_status" class="block p-5">活動主控台</a>
        </li>
        <li class="sales_status text-xl text-primary bg-gray30 cursor-pointer hidden">
          <a href="#" class="block p-5">預覽活動</a>
        </li>
        <li class="sales_status text-xl text-primary bg-gray30 cursor-pointer hidden">
          <a href="#" class="block p-5">編輯活動</a>
        </li> -->
      </ul>
    </div>
    <div>
      <p class="text-center text-gray50 bg-primary cursor-pointer">
        <a href="/personal_center/orgs" class="block p-5">離開組織管理</a>
      </p>
    </div>
  </div>
</template>

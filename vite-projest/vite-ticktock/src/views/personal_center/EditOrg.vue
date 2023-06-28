<script setup>
import PersonalCenterSide from '../../components/PersonalCenterSide.vue'

import utilities from '@/utilities.js'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getOrgAPI, editOrgAPI } from '@/api.js'

const route = useRoute()
const router = useRouter()
const orgId = route.params.orgId // 從路由參數中取得 orgId
const orgData = ref(null)

// 取得組織資料
onMounted(async () => {
  try {
    const headers = utilities.getHeaders()
    const response = await getOrgAPI(headers, orgId)
    orgData.value = response.data.data
  } catch (error) {
    console.error('取得組織資料失敗', error)
  }
})

// 提交修改後的組織資料
const saveOrgData = async () => {
  try {
    console.log('ed', JSON.parse(JSON.stringify(orgData.value)))
    const response = await editOrgAPI(JSON.parse(JSON.stringify(orgData.value)), orgId)
    console.log('組織資料已成功更新', response.data)
    router.push({ name: 'orgs' }) // 導航至 Orgs 頁面
  } catch (error) {
    console.error('更新組織資料失敗', error)
  }
}

const cancelEdit = async () => {
  router.push({ name: 'orgs' })
}
</script>

<template>
  <!-- <main> -->
  <div class="main flex items-center justify-center flex-col my-12">
    <div class="user_img p-5 bg-white border border-gray30 rounded">
      <img src="https://picsum.photos/100/100" class="w-48 h-48 rounded-full" />
      <h3 class="p-2 font-bold text-center text-2xl"></h3>
    </div>
    <div v-if="orgData">
      <h3 class="text-center">填寫組織資料</h3>
      <div class="py-3">
        <label for="">主辦單位名稱</label>
        <input type="text" v-model="orgData.name" class="w-full bg-gray30" />
      </div>
      <div class="py-3">
        <label for="">主辦單位信箱</label>
        <input type="text" v-model="orgData.email" class="w-full bg-gray30" />
      </div>
      <div class="py-3">
        <label for="">主辦單位電話號碼</label>
        <input type="text" v-model="orgData.phone" class="w-full bg-gray30" />
      </div>
      <div class="py-3">
        <label for="">主辦單位簡介</label>
        <textarea
          v-model="orgData.description"
          class="w-full bg-gray30 resize rounded-md"
        ></textarea>
      </div>
      <div class="py-3 grid grid-cols-2 gap-2">
        <button
          class="border-2 border-primary px-5 py-2 text-primary w-full hover:bg-primary hover:text-white"
          @click="saveOrgData"
        >
          儲存
        </button>
        <button
          class="border-2 border-secondary px-5 py-2 text-secondary w-full hover:bg-secondary hover:text-white"
          @click="cancelEdit"
        >
          取消
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="main flex items-center justify-center flex-col my-12">
    <div class="user_img p-5 bg-white border border-gray30 rounded">
      <img src="https://picsum.photos/100/100" class="w-48 h-48 rounded-full" />
      <h3 class="p-2 font-bold text-center text-2xl"></h3>
    </div>
    <div>
      <h3 class="text-center">填寫組織資料</h3>
      <div class="py-3">
        <label for="">主辦單位名稱</label>
        <input type="text" name="" id="" class="w-full bg-gray30" />
      </div>
      <div class="py-3">
        <label for="">主辦單位信箱</label>
        <input type="text" name="" id="" class="w-full bg-gray30" />
      </div>
      <div class="py-3">
        <label for="">主辦單位電話號碼</label>
        <input type="text" name="" id="" class="w-full bg-gray30" />
      </div>
      <div class="py-3">
        <label for="">主辦單位簡介</label>
        <textarea class="w-full bg-gray30 resize rounded-md">123</textarea>
      </div>
      <div class="py-3 grid grid-cols-2 gap-2">
        <button
          class="border-2 border-primary px-5 py-2 text-primary w-full hover:bg-primary hover:text-white"
        >
          儲存
        </button>
        <button
          class="border-2 border-secondary px-5 py-2 text-secondary w-full hover:bg-secondary hover:text-white"
        >
          取消
        </button>
      </div>
    </div>
  </div> -->
  <!-- </main> -->
</template>

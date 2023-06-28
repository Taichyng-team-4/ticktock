<script setup>
import PersonalCenterSide from '../../components/PersonalCenterSide.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createOrgAPI } from '@/api.js'

const orgData = ref({
  name: '',
  email: '',
  phone: '',
  description: ''
})

const router = useRouter()

const createOrg = async () => {
  try {
    const response = await createOrgAPI(orgData.value)
    console.log('組織資料已成功新增', response.data)
    // 處理新增成功後的邏輯，例如提示使用者新增成功或進行頁面跳轉等
    router.push({ name: 'orgs' }) // 導航至 Orgs 頁面
  } catch (error) {
    console.error('新增組織資料失敗', error)
    // 處理新增失敗的邏輯，例如提示使用者新增失敗或進行錯誤處理等
  }
}

const cancelCreate = () => {
  router.push({ name: 'orgs' }) // 導航至 Orgs 頁面
}
</script>

<template>
  <!-- <main> -->

  <div class="main flex items-center justify-center flex-col my-12">
    <div class="user_img p-5 bg-white border border-gray30 rounded">
      <img src="https://picsum.photos/100/100" class="w-48 h-48 rounded-full" />
      <h3 class="p-2 font-bold text-center text-2xl"></h3>
    </div>
    <div>
      <h3 class="text-center">填寫組織資料</h3>
      <div class="py-3">
        <label for="">主辦單位名稱</label>
        <input v-model="orgData.name" type="text" name="" id="" class="w-full bg-gray30" />
      </div>
      <div class="py-3">
        <label for="">主辦單位信箱</label>
        <input v-model="orgData.email" type="text" name="" id="" class="w-full bg-gray30" />
      </div>
      <div class="py-3">
        <label for="">主辦單位電話號碼</label>
        <input v-model="orgData.phone" type="text" name="" id="" class="w-full bg-gray30" />
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
          @click="createOrg"
        >
          儲存
        </button>
        <button
          class="border-2 border-secondary px-5 py-2 text-secondary w-full hover:bg-secondary hover:text-white"
          @click="cancelCreate"
        >
          取消
        </button>
      </div>
    </div>
  </div>
  <!-- </main> -->
</template>

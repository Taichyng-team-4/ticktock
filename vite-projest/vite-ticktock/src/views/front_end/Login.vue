<script setup>
import Footer from '../../components/footer.vue'
import Nav from '../../components/Nav.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { loginAPI, userProfileAPI, orgsAPI } from '@/api.js'
import utilities from '@/utilities.js'

const email = ref('')
const password = ref('')

const loginClick = async () => {
  try {
    Swal.fire({
      title: '登入中..',
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })

    const response = await loginAPI(email.value, password.value)
    const token = response.data.token

    // 在每個後續請求的header都添加授權token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const profileResponse = await userProfileAPI(token)
    // 檢查 profileResponse.data.status 是否為 success
    if (profileResponse.data.status !== 'success') {
      throw '取得 User Profile 資料失敗!'
    }
    // 取得 User Profile
    const userProfile = profileResponse.data.data

    // Todo : 取得 組織 資料
    const orgsResponse = await orgsAPI(token)
    console.log('get orgs success !')

    // 當 取得 組織 資料成功
    if (orgsResponse.data.status === 'success') {
      utilities.clearOrgList()
      const tempOrgs = orgsResponse.data.data

      if (orgsResponse.data.count > 0) {
        let myOrgList = []
        tempOrgs.forEach((element) => {
          if (element.ownerId === userProfile.id) {
            myOrgList.push(element)
          }
        })
        // 儲存 Org List
        utilities.setOrgList(myOrgList)
      }
    }

    // 寫入 User Profile
    utilities.setUserProfile(userProfile)

    // 記錄 JWT 進入 local storage
    utilities.setJwtToken(token)

    // 顯示 登入成功 Dialog
    Swal.fire({
      title: '登入成功！',
      // text: '您已登入成功',
      icon: 'success',
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonText: 'OK'
    }).then((result) => {
      // 轉頁面到首頁
      if (result.isConfirmed) {
        window.location.href = '/'
      }
    })

    console.log('Login successful!')
  } catch (error) {
    console.error('Login failed:', error)

    Swal.fire({
      title: 'Error!',
      text: 'Failed to login. Please check your email and password.',
      allowOutsideClick: false,
      icon: 'error'
    })
  } finally {
    Swal.hideLoading()
  }
}
</script>

<template>
  <!-- <main> -->
  <Nav />
  <div class="bg-gray20 flex flex-col items-center justify-center min-h-screen">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="-mx-3 flex justify-center">
        <h3 class="text-lg font-bold pb-3 text-gray50">登入</h3>
      </div>
      <div class="-mx-3 md:flex">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray50 text-sm font-bold mb-2"
            for="email"
          >
            帳號
          </label>
          <input
            class="appearance-none block w-72 text-gray40 border border-primary/60 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            id="email"
            type="text"
            placeholder="Enter your email"
            v-model="email"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray40 text-sm font-bold mb-2"
            for="password"
          >
            密碼
          </label>
          <input
            class="appearance-none block w-72 text-gray50 border border-primary/60 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            id="password"
            type="password"
            placeholder="Enter your password"
            v-model="password"
          />
        </div>
      </div>

      <div class="flex justify-end items-center">
        <a
          class="inline-block align-baseline font-bold text-sm text-gray40/60 hover:text-primary"
          href="#"
          @click.prevent="switchForgetPasswordClick"
        >
          忘記密碼?
        </a>
      </div>
      <button
        class="bg-primary/80 hover:bg-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click.prevent="loginClick"
      >
        登入
      </button>
      <hr class="text-gray40/60 my-4" />
      <button
        class="border border-navbar/70 hover:border-navbar font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click.prevent="switchRegisterClick"
      >
        註冊
      </button>
    </div>
  </div>

  <!-- </main> -->
</template>

<script setup>
import Footer from '../../components/footer.vue'
import Nav from '../../components/Nav.vue'
</script>

<template>
  <!-- <main> -->

  <Nav />
  <div class="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col border-2">
      <div class="-mx-3">
        <p class="text-center mb-3">建立 Ticktock 帳號</p>
      </div>
      <!-- User Name -->
      <div class="-mx-3 md:flex">
        <div class="md:w-full px-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="username"
            type="text"
            placeholder="使用者名稱"
            v-model="userName"
          />
        </div>
      </div>
      <!-- email -->
      <div class="-mx-3 md:flex">
        <div class="md:w-full px-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="userEmail"
            type="text"
            placeholder="Email"
            v-model="email"
          />
        </div>
      </div>
      <!-- 密碼 -->
      <div class="-mx-3 md:flex">
        <div class="md:w-full px-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="password"
            placeholder="密碼"
            v-model="password"
          />
        </div>
      </div>
      <!-- 再次確認密碼 -->
      <div class="-mx-3 md:flex">
        <div class="md:w-full px-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="reconfirmPassword"
            type="password"
            placeholder="再次確認密碼"
            v-model="confirmPassword"
          />
        </div>
      </div>
      <!--出生年月-->
      <div class="-mx-3 md:flex">
        <div class="md:w-full px-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="date"
            placeholder="出生年月日"
            v-model="birthday"
          />
        </div>
      </div>
      <!--性別-->
      <div class="-mx-3 md:flex">
        <div class="md:w-full px-3 mb-3">
          <select
            class="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            name="birth-month"
            id="userSex"
            required
            v-model="gender"
          >
            <option value="" selected disabled hidden>生理性別</option>
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </div>
      </div>
      <button
        class="bg-green400 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click.prevent="registerClick"
      >
        註冊
      </button>
      <div class="flex justify-center items-center mt-4">
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
          @click.prevent="switchForgetPasswordClick"
        >
          忘記密碼?
        </a>
      </div>
      <hr />
      <button
        class="bg-navbar hover:bg-blue-700 mt-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        <a href="#" @click.prevent="switchLoginClick">登入</a>
      </button>
    </div>
  </div>

  <Footer />
  <!-- </main> -->
</template>

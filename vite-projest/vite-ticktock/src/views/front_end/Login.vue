<script setup></script>

<template>
  <!-- <main> -->

  <div class="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col border-2">
      <div class="-mx-3 md:flex">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="userNumber"
          >
            帳號
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="username"
            type="text"
            placeholder="Enter your username"
            v-model="account"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            密碼
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="password"
            placeholder="Enter your password"
            v-model="password"
          />
        </div>
      </div>
      <button
        class="bg-green400 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click.prevent="loginClick"
      >
        登入
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
        @click.prevent="switchRegisterClick"
      >
        註冊
      </button>
    </div>
  </div>
  <!-- </main> -->
</template>

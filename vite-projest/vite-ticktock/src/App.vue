<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <nav class="bg-navbar">
    <div class="container mx-auto px-6 py-2">
      <div class="mx-auto px-4 max-w-7xl flex justify-between items-center">
        <div class="flex items-center">
          <div>
            <a class="text-gray-800 text-xl font-bold hover:text-gray-700" href="/">Ticktock</a>
          </div>
        </div>
        <div class="w-1/2">
          <div class="w-full relative ml-3 flex items-center bg-white/[50%] rounded-full">
            <div class="left-0">
              <button type="submit" class="flex items-center text-black px-2 rounded-full">
                <span class="material-icons"> search </span>
              </button>
            </div>
            <input
              type="text"
              class="py-1 px-2 pl-3 rounded-full bg-white/[0] focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div>
          <div class="hidden md:block">
            <ul class="flex space-x-4 text-nav items-center">
              <li>
                <a href="/login" class="hover:text-gray-200">登入</a>
              </li>
              <li>
                <a href="/register" class="hover:text-gray-200">註冊</a>
              </li>
            </ul>
          </div>

          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <span class="material-icons pr-1 text-gray40 cursor-pointer"> menu </span>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden mobile-menu">
        <ul class="text-nav mx-auto px-4 py-3 max-w-7xl justify-between items-center">
          <li>
            <a href="/login" class="hover:text-gray-200">登入</a>
          </li>
          <li>
            <a href="/register" class="hover:text-gray-200">註冊</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />

  <div class="w-full bg-gray50 text-white py-16 px-16 flex justify-between">
    <div>
      <a href="qa.html">常見問題</a>
      <p>聯絡信箱:service@ticktock.com</p>
    </div>
    <h1 class="menu_logo">Ticktock</h1>
  </div>
</template>

<style scoped></style>

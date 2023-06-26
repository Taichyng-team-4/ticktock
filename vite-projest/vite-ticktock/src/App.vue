<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import utilities from '@/utilities.js'

const isLogin = ref(false)
const token = ref('')
const userProfile = ref(null)
const orgList = ref([])

onMounted(() => {
  checkLogin()
})

// 檢查是否登入
function checkLogin() {
  const jwtToken = utilities.getJwtToken()
  if (jwtToken !== '') {
    isLogin.value = true
    getUserInfo()
  } else {
    isLogin.value = false
  }
  token.value = jwtToken
  console.log(`checkLogin(): token: ${token.value}`)
  console.log(`checkLogin(): isLogin: ${isLogin.value}`)
}

// 獲取用戶訊息
function getUserInfo() {
  userProfile.value = utilities.getUserProfile()
  orgList.value = utilities.getOrgList()
}

// 登出
function logoutClick(token) {
  console.log(`logoutClick(${token})`)
  utilities.processLogout('/')
}
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
    <div class="container mx-auto px-6 py-2" v-if="!isLogin">
      <div class="mx-auto px-4 max-w-7xl flex justify-between items-center">
        <div class="flex items-center">
          <div>
            <a href="/" class="text-gray-800 text-xl font-bold hover:text-gray-700 cursor-pointer"
              >Ticktock</a
            >
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
              :value="searchData"
              @click.prevent="searchClick"
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

    <div class="container mx-auto px-6 py-2" v-if="isLogin">
      <div class="mx-auto px-4 max-w-7xl flex justify-between items-center">
        <div class="flex items-center">
          <div>
            <a href="/" class="text-gray-800 text-xl font-bold hover:text-gray-700 cursor-pointer"
              >Ticktock</a
            >
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
              :value="searchData"
              @click.prevent="searchClick"
            />
          </div>
        </div>
        <div>
          <div class="hidden md:block">
            <ul class="flex space-x-4 text-nav items-center">
              <li>
                <a href="/personal_center/userOrder" class="hover:text-gray-200">訂單查詢</a>
              </li>
              <!-- <li>
                <a href="#" class="hover:text-gray-200" @click.prevent="createActivityClick"
                  >建立活動</a
                >
              </li>
              <div class="dropdown">
                <button class="dropbtn flex items-center justify-between">
                  選擇組織
                  <span class="material-icons"> arrow_drop_down </span>
                </button>
                <div class="dropdown-content">
                  <p class="ml-4">組織列表</p>
                  <ul class="ml-3">
                    <li v-for="item in orgs">
                      <a href="#">{{ item.name }}</a>
                    </li>
                  </ul>
                  <a href="#" @click.prevent="addOrgClick">新增組織</a>
                </div>
              </div> -->
              <div class="dropdown">
                <button class="dropbtn">
                  <span class="material-icons"> account_circle </span>
                </button>
                <div class="dropdown-content">
                  <a href="/personal_center/profile">設定</a>
                  <a href="#" @click.prevent="logoutClick">登出</a>
                </div>
              </div>
            </ul>
          </div>

          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <span class="material-icons pr-1 text-gray40 cursor-pointer"> menu </span>
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="hidden mobile-menu">
        <ul class="text-nav mx-auto px-4 py-3 max-w-7xl justify-between items-center">
          <li>
            <a href="#" class="hover:text-gray-200" @click.prevent="orderQueryClick">訂單查詢</a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-200" @click.prevent="createActivityClick"
              >建立活動</a
            >
          </li>
          <div class="dropdown">
            <button class="dropbtn flex items-center justify-between">
              選擇組織 <span class="material-icons"> arrow_drop_down </span>
            </button>
            <div class="subdropdown-content">
              <p class="ml-4">組織列表</p>
              <ul class="ml-3">
                <li v-for="item in orgs">
                  <a href="#">{{ item.name }}</a>
                </li>
              </ul>
              <hr />
              <a href="#" @click.prevent="addOrgClick">新增組織</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <span class="material-icons"> account_circle </span>
              <span class="material-icons"> arrow_drop_down </span>
            </button>
            <div class="subdropdown-content">
              <a href="#" @click.prevent="switchSettingClick">設定</a>
              <a href="#" @click.prevent="logoutClick">登出</a>
            </div>
          </div>
        </ul>
      </div> -->
    </div>
  </nav>

  <RouterView />
</template>

<style scoped></style>

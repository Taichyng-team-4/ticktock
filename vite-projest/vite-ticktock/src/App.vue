<script setup>
import { RouterLink, RouterView } from 'vue-router';
import utilities from '@/utilities.js';
import NavComponent from './components/NavComponent.vue';
import { ref } from 'vue';

// 定義 isLogin 狀態
const isLogin = ref(false);
let token = '';

// 根據實際情況設定 isLogin 的值
//isLogin.value = true; // 或者 false，根據需要更改
// 檢查是否登入
const checkLogin = () => {
  token = utilities.getJwtToken();
  if (token !== '') {
    isLogin.value = true;
  } else {
    isLogin.value = false;
    getUserProfile();
  }
  console.log(`checkLogin() : token : ${token}`);
  console.log(`checkLogin() : isLogin : ${isLogin}`);
};

// 獲取使用者資料
const getUserProfile = () => {
  // 實現獲取使用者資料的邏輯
};

// 創建時檢查登入狀態
checkLogin();

</script>

<template>
 <div>
  <NavComponent :is-login="isLogin" :token="token" />
 </div>
  <RouterView />
</template>


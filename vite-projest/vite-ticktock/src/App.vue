<script setup>
import { RouterLink, RouterView } from 'vue-router';
import utilities from '@/utilities.js';
import NavComponent from './components/NavComponent.vue';
import { ref } from 'vue';

// 定義 isLogin 狀態
const isLogin = ref(false);

// 根據實際情況設定 isLogin 的值
isLogin.value = true; // 或者 false，根據需要更改
</script>

<template>
 <div>
  <NavComponent :is-login="isLogin" />
 </div>
  <RouterView />
</template>


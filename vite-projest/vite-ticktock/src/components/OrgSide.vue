<script setup></script>

<template>
  <div class="side fixed w-64 bg-background h-[calc(100%-86.4px)] flex flex-col justify-between">
    <div>
      <h1 class="text-center text-primary text-2xl p-5">Ticktock</h1>
      <ul class="subject_personal_center text-center">
        <li id="account" class="text-xl text-primary bg-gray30 cursor-pointer">
          <a href="/org/account" class="block p-5">活動列表</a>
        </li>
        <li id="new_activity" class="text-xl hover:bg-gray30/[35%] cursor-pointer">
          <a href="/org/new_activity" class="block p-5">活動刊登</a>
        </li>
        <li id="orders" class="text-xl hover:bg-gray30/[35%] cursor-pointer">
          <a href="/org/orders" class="block p-5">訂單資訊</a>
        </li>
        <li id="sales_status" class="text-xl hover:bg-gray30/[35%] cursor-pointer">
          <a href="/org/sales_status" class="block p-5">活動主控台</a>
        </li>
        <li class="sales_status text-xl text-primary bg-gray30 cursor-pointer hidden">
          <a href="#" class="block p-5">預覽活動</a>
        </li>
        <li class="sales_status text-xl text-primary bg-gray30 cursor-pointer hidden">
          <a href="#" class="block p-5">編輯活動</a>
        </li>
      </ul>
    </div>
    <div>
      <p class="text-center text-white bg-primary cursor-pointer">
        <a href="../personal_center/user" class="block p-5">離開組織管理</a>
      </p>
    </div>
  </div>
</template>

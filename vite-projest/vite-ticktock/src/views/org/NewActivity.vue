<script setup></script>

<template>
  <!-- <main> -->

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
  <div class="main flex items-center justify-center flex-col my-12">
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
        <!-- <textarea type="text" name="" id="" class="w-full bg-gray30"> -->
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
  </div>
  <!-- </main> -->
</template>

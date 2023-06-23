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

  <div class="main ml-64 p-5">
    <div class="flex items-center justify-between">
      <h3 class="text-xl font-bold">活動列表</h3>
      <select name="" id="" class="w-32 bg-gray30 px-5 py-1">
        <option value="">進行中</option>
        <option value="">已結束</option>
        <option value="">未發布</option>
      </select>
    </div>
    <div class="pt-6">
      <table class="table-auto w-full border-x border-b border-gray30">
        <thead>
          <tr class="bg-gray30">
            <th>活動日期</th>
            <th>活動標題</th>
            <th>報名人數</th>
            <th>上線人數</th>
            <th>購票狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-gray30 text-center">
            <td>2023/5/30</td>
            <td>世界巡迴《破蛋者》BALLBRE</td>
            <td>10</td>
            <td>10</td>
            <td>進行中</td>
            <td class="flex items-center justify-center">
              <a href="account.html">
                <span class="material-icons pr-1 text-gray40 cursor-pointer"> edit </span>
              </a>
            </td>
          </tr>
          <tr class="border-t border-gray30 text-center">
            <td>2023/5/30</td>
            <td>世界巡迴《破蛋者》BALLBRE</td>
            <td>10</td>
            <td>10</td>
            <td>進行中</td>
            <td class="flex items-center justify-center">
              <a href="#">
                <span class="material-icons pr-1 text-gray40 cursor-pointer"> edit </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- </main> -->
</template>

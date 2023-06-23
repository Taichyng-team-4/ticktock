<script setup></script>

<template>
  <!-- <main> -->

  <div class="px-10 mt-10 flex flex-nowrap">
    <div class="side">
      <div class="user_img p-5 bg-white rounded">
        <img src="https://picsum.photos/100/100" class="w-48 h-48 rounded-full" />
        <h3 class="p-2 font-bold text-center text-2xl">Zoey</h3>
      </div>
      <div class="mt-5 bg-white rounded">
        <ul class="subject_user">
          <li
            id="user"
            class="py-2 px-7 text-xl font-bold cursor-pointer text-primary border-l-4 hover:bg-primary/[15%]"
          >
            <a href="/personal_center/user" class="block">訂單管理</a>
          </li>
          <li
            id="profile"
            class="py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]"
          >
            <a href="/personal_center/profile" class="block">帳號管理</a>
          </li>
          <li id="news" class="py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]">
            <a href="/personal_center/news" class="block">訊息管理</a>
          </li>
          <li id="orgs" class="py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]">
            <a href="/personal_center/orgs" class="block">組織管理</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="main ml-5 mb-5 w-5/6 bg-white">
      <h3 class="p-6 text-2xl font-bold">訊息管理</h3>
      <div class="p-6">
        <table class="table-auto w-full border-x border-b border-gray30">
          <thead>
            <tr class="bg-gray30">
              <th>日期</th>
              <th>商品名稱</th>
              <th>訊息內容</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray30 text-center">
              <td>2023/05/01</td>
              <td>世界巡迴《破蛋者》BALLBRE</td>
              <td>我跟新內容囉！</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- </main> -->
</template>

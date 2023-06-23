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
      <h3 class="p-6 text-2xl font-bold">帳號管理</h3>
      <div class="grid grid-cols-2 p-3">
        <div class="flex flex-col p-3">
          <label for="name" class="py-2">姓名</label>
          <input type="text" name="name" id="name" class="bg-gray30 w-3/5" />
        </div>
        <div class="flex flex-col p-3">
          <label for="gender" class="py-2">性別</label>
          <div>
            <input type="radio" name="gender" value="男" class="px-2" />男
            <input type="radio" name="gender" value="女" class="px-2" />女
          </div>
        </div>
        <div class="flex flex-col p-3">
          <label for="born" class="py-2">出生年月日</label>
          <input type="text" name="born" id="born" class="bg-gray30 w-3/5" />
        </div>
        <div class="flex flex-col p-3">
          <label for="area" class="py-2">國家/地區</label>
          <input type="text" name="area" id="area" class="bg-gray30 w-3/5" />
        </div>
        <div class="flex flex-col p-3">
          <label for="phone" class="py-2">電話號碼</label>
          <input type="text" name="phone" id="phone" class="bg-gray30 w-3/5" />
        </div>
        <div class="flex flex-col p-3">
          <label for="email" class="py-2">信箱</label>
          <input type="text" name="email" id="email" class="bg-gray30 w-3/5" />
        </div>
      </div>
      <div class="p-6 flex justify-between">
        <button class="change_password bg-secondary px-5 py-3 text-white">變更密碼</button>
        <button class="store bg-primary px-5 py-3 text-white">儲存</button>
      </div>
    </div>
  </div>
  <div class="change_password_block absolute top-0 left-0 w-full h-full bg-gray30/[30%] hidden">
    <div class="w-96 bg-white p-5 rounded absolute top-28 left-0 right-0 m-auto">
      <div class="flex justify-between items-center">
        <h3 class="text-2xl">變更密碼</h3>
        <span class="change_password_clear material-icons cursor-pointer"> clear </span>
      </div>

      <div class="flex flex-col py-3">
        <label for="old_password">舊密碼</label>
        <input type="text" name="old_password" id="old_password" class="bg-gray30" />
      </div>

      <div class="flex flex-col py-3">
        <label for="new_password">新密碼</label>
        <input type="text" name="new_password" id="new_password" class="bg-gray30" />
      </div>

      <div class="flex flex-col py-3">
        <label for="confirm_password">確認新密碼</label>
        <input type="text" name="nconfirm_password" id="nconfirm_password" class="bg-gray30" />
      </div>
      <div class="text-right py-3">
        <button class="border-2 border-secondary px-5 py-2 text-secondary">儲存</button>
      </div>
    </div>
  </div>
  <!-- </main> -->
</template>

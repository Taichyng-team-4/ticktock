<script setup>
import PersonalCenterSide from '../../components/PersonalCenterSide.vue'
</script>

<template>
  <!-- <main> -->

  <div class="px-10 mt-10 flex flex-nowrap">
    <PersonalCenterSide />

    <div class="main ml-5 mb-5 w-5/6 bg-white">
      <div class="p-6">
        <h3 class="text-2xl font-bold">組織管理</h3>
      </div>
      <div class="orgs p-6">
        <div class="flex justify-end pb-6">
          <button class="new_org px-5 py-1 border border-primary text-primary">新建組資</button>
        </div>
        <table class="table-auto w-full border-x border-b border-gray30">
          <thead>
            <tr class="bg-gray30">
              <th>組織名稱</th>
              <th>信箱</th>
              <th>電話</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray30 text-center">
              <td>組織一</td>
              <td>test@gmail.com</td>
              <td>0566993877</td>
              <td class="flex items-center justify-center">
                <span class="material-icons pr-1 text-gray40 cursor-pointer"> delete </span>
                <a href="../personal_center/account.html">
                  <span class="material-icons pr-1 text-gray40 cursor-pointer"> edit </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="new_org_block flex items-center justify-center flex-col my-12 hidden">
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
              class="cancel_org border-2 border-secondary px-5 py-2 text-secondary w-full hover:bg-secondary hover:text-white"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </main> -->
</template>

<script setup>
import PersonalCenterSide from '../../components/PersonalCenterSide.vue'
</script>

<template>
  <!-- <main> -->

  <div class="px-10 mt-10 flex flex-nowrap">
    <PersonalCenterSide />

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

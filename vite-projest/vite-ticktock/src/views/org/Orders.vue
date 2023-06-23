<script setup>
import OrgSide from '../../components/OrgSide.vue'
</script>

<template>
  <!-- <main> -->
  <OrgSide />

  <div class="main ml-64 p-5">
    <h3 class="text-xl font-bold">訂單資訊</h3>
    <div class="flex items-end justify-between py-3">
      <p>匯出訂單</p>
      <select name="" id="" class="w-32 bg-gray30 px-5 py-1">
        <option value="">活動名稱</option>
        <option value="">活動名稱</option>
        <option value="">活動名稱</option>
      </select>
    </div>
    <div class="pt-6">
      <table class="table-auto w-full border-x border-b border-gray30">
        <thead>
          <tr class="bg-gray30">
            <th>訂單逼號</th>
            <th>姓名</th>
            <th>信箱</th>
            <th>繳費方式</th>
            <th>票數</th>
            <th>金額</th>
            <th>手續費</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-gray30 text-center">
            <td>123465</td>
            <td>龍龍</td>
            <td>aa@gmail.com</td>
            <td>ATM</td>
            <td>1</td>
            <td>NT1000</td>
            <td>NT100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- </main> -->
</template>

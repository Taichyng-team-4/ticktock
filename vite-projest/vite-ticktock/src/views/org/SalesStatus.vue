<script setup>
import OrgSide from '../../components/OrgSide.vue'
import { ref, defineProps } from 'vue'

const props = defineProps(['orgId'])
console.log('orgId', props.orgId)
</script>

<template>
  <!-- <main> -->
  <OrgSide :orgId="orgId" />

  <div class="main ml-64 p-5">
    <h3 class="text-xl font-bold">活動主控台</h3>

    <div class="flex justify-between items-center py-3">
      <ul class="flex flex-nowrap items-center">
        <li
          class="p-5 font-bold text-primary border-b-4 cursor-pointer hover:bg-primary/[15%]"
          id="sales_status"
        >
          銷售狀況
        </li>
        <li
          class="p-5 font-bold text-gray40 cursor-pointer hover:bg-primary/[15%]"
          id="data_analysis"
        >
          數據分析
        </li>
      </ul>
      <select name="" id="" class="w-32 bg-gray30 px-5 py-1">
        <option value="">活動名稱</option>
        <option value="">活動名稱</option>
        <option value="">活動名稱</option>
      </select>
    </div>
    <div class="" id="sales_status_body">
      <div class="py-3">
        <h4 class="text-lg py-3">票種銷售狀況</h4>
        <table class="table-auto w-full border-b border-gray30">
          <thead>
            <tr>
              <th>票號</th>
              <th>販售時間</th>
              <th>狀態</th>
              <th>價格</th>
              <th>數量</th>
              <th>已出售</th>
              <th>退票量</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray30 text-center">
              <td>早鳥票</td>
              <td>2022/12/30~2023/01/30</td>
              <td>已結束</td>
              <td>NT100</td>
              <td>100</td>
              <td>50</td>
              <td>3</td>
            </tr>
            <tr class="border-t border-gray30 text-center">
              <td>早鳥票</td>
              <td>2022/12/30~2023/01/30</td>
              <td>已結束</td>
              <td>NT100</td>
              <td>100</td>
              <td>50</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="py-3">
        <h4 class="text-lg py-3">售出方式統計</h4>
        <table class="table-auto w-full border-b border-gray30">
          <thead>
            <tr>
              <th>票種</th>
              <th>販售時間</th>
              <th>區域</th>
              <th>售出量</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray30 text-center">
              <td>早鳥票</td>
              <td>2022/12/30~2023/01/30</td>
              <td>A區</td>
              <td>10</td>
            </tr>
            <tr class="border-t border-gray30 text-center">
              <td>早鳥票</td>
              <td>2022/12/30~2023/01/30</td>
              <td>A區</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="py-3">
        <h4 class="text-lg py-3">購買年紀區間</h4>
        <table class="table-auto w-full border-b border-gray30">
          <thead>
            <tr>
              <th>年紀區間</th>
              <th>性別</th>
              <th>銷售額</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray30 text-center">
              <td rowspan="2">18-25</td>
              <td>男</td>
              <td>10</td>
            </tr>
            <tr class="border-t border-gray30 text-center">
              <td>女</td>
              <td>10</td>
            </tr>
            <tr class="border-t border-gray30 text-center">
              <td rowspan="2">18-25</td>
              <td>男</td>
              <td>10</td>
            </tr>
            <tr class="border-t border-gray30 text-center">
              <td>女</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="py-3">
        <h4 class="text-lg py-3">每日銷售狀況</h4>
        <table class="table-auto w-full border-b border-gray30">
          <thead>
            <tr>
              <th>日期</th>
              <th>銷售張數</th>
              <th>銷售額</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray30 text-center">
              <td>2023/01/02</td>
              <td>10</td>
              <td>10000</td>
            </tr>
            <tr class="border-t border-gray30 text-center">
              <td>2023/01/02</td>
              <td>10</td>
              <td>10000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="hidden" id="data_analysis_body">
      <div class="flex flex-row">
        <p>時間</p>
        <input type="date" name="start_data" id="start_data" />
        <input type="date" name="end_data" id="end_data" />
      </div>
      <div class="flex flex-row">
        <canvas class="calculated_daily !w-5/6 !h-64"></canvas>
        <div class="flex flex-col justify-center items-center w-1/6">
          <p class="py-5">
            <span class="text-primary">10990</span><br />
            銷售額
          </p>
          <p class="py-5">
            <span class="text-primary">50</span><br />
            銷售量
          </p>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-1/2 flex flex-nowrap">
          <canvas class="buy_member !w-1/2 !h-64"></canvas>
          <canvas class="buy_quantity !w-1/2 !h-64"></canvas>
        </div>
        <div class="w-1/2 flex justify-center items-center">
          <table>
            <tbody>
              <tr>
                <td class="px-5 text-center">購票年紀區間</td>
                <td class="px-5 text-center">數量</td>
              </tr>
              <tr>
                <td class="px-5 text-center">18-25</td>
                <td class="px-5 text-center">10</td>
              </tr>
              <tr>
                <td class="px-5 text-center">18-25</td>
                <td class="px-5 text-center">10</td>
              </tr>
              <tr>
                <td class="px-5 text-center">18-25</td>
                <td class="px-5 text-center">10</td>
              </tr>
              <tr>
                <td class="px-5 text-center">18-25</td>
                <td class="px-5 text-center">10</td>
              </tr>
              <tr>
                <td class="px-5 text-center">18-25</td>
                <td class="px-5 text-center">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="py-5">
        <table class="table-auto w-full border-b border-gray30">
          <thead>
            <tr>
              <th>活動名稱</th>
              <th>Action</th>
              <th>Register</th>
              <th>R.rate</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray30 text-center">
              <td>世界巡迴《破蛋者》BALLBRE</td>
              <td>200</td>
              <td>90</td>
              <td>0.45</td>
            </tr>
            <tr class="border-t border-gray30 text-center">
              <td>世界巡迴《破蛋者》BALLBRE</td>
              <td>200</td>
              <td>90</td>
              <td>0.45</td>
            </tr>
          </tbody>
        </table>
        <div class="text-right p-5">
          <p>Action: 進入頁面人數</p>
          <p>Register: 完成訂購人數</p>
          <p>R.Rate: 完成報名比率R/A</p>
        </div>
      </div>
    </div>
  </div>
  <!-- </main> -->
</template>

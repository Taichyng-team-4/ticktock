<script setup>
import { ref, onMounted, reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import utilities from '@/utilities.js';
import * as api from '@/api.js';

import PersonalCenterSide from '../../components/PersonalCenterSide.vue'
import Nav from '../../components/Nav.vue'
const userId = ref();
const status = ref('1');

const orderInformation = ref([]);
const statusOrderInformation = ref([]);
const state = reactive({
  temp: {},
  orderStatus: {},
});

onMounted(async () => {
  await getOrderInformation();
  handleStatusClick(status);
});

//下拉選單控制
function handleArrowClick(item) {
  if (item.arrow === '0') {
    item.arrow = '1';
  } else {
    item.arrow = '0';
  }
};

//取得訂單
const getOrderInformation = async () => {
  try {
    const headers = utilities.getHeaders()
    const userProfile = await utilities.getUserProfile();
    if (userProfile) {
      userId.value = userProfile.id;
    }
    const res = await api.ordersAPI(headers, userId.value);
    orderInformation.value = res.data.data;
    orderInformation.value.forEach(item => {
      item.orderStatus = 0;
      item.detail.forEach(detailItem => {
        detailItem.activityId.startAt = utilities.toFormatDate(detailItem.activityId.startAt);
        detailItem.activityId.endAt = utilities.toFormatDate(detailItem.activityId.endAt);
        detailItem.ticketIds.forEach(ticketItem => {
          ticketItem.startAt = utilities.toFormatDate(ticketItem.startAt);
          ticketItem.expiredAt = utilities.toFormatDate(ticketItem.expiredAt);
          ticketItem.ticketstatus = getStatusBasedOnOrderItem(ticketItem);
        });
      });
    });
    console.log(orderInformation.value);
  }
  catch (err) {
    console.log(err);
  }
};

//訂單狀態: '1': '已報名','3': '已取消','3': '已退票','4': '已結束'
function getStatusBasedOnOrderItem(ticketItem) {
  let ticketStatus;
  if (ticketItem.isRefunded === true) {
    ticketStatus = '3'
  }
  else if (ticketItem.isExpired === true) {
    ticketStatus = '4'
  } else {
    ticketStatus = '1'
  }
  return ticketStatus;
};

//取得狀態訂單
function shouldDisplayOrder(orderId) {
  return state.orderStatus.some(order => order.order === orderId);
}

function checkTicketId(ticketId) {
  return state.orderStatus.some(order => order.ticketid === ticketId);
}
function handleStatusClick(status) {
  try {
    statusOrderInformation.value = orderInformation.value;
    state.temp = [];
    state.orderStatus = [],

      console.log(statusOrderInformation.value);
    statusOrderInformation.value.forEach(item => {
      let i = 0;
      item.detail.forEach(detailItem => {
        i++;
        detailItem.ticketIds.forEach((ticketItem) => {
          state.temp.push({
            order: item.id,
            ticketid: ticketItem.id,
            ticketstatus: ticketItem.ticketstatus,
          });
        });
      });
    });
    console.log(state.temp);
    const orders = state.temp;
    state.orderStatus = orders.filter(orders => orders.ticketstatus === '1');
    console.log(JSON.stringify(state.orderStatus, null, 2));
    console.log(state.orderStatus);

  }
  catch (err) {
    console.log(err);
  }
}
//退票訊息
const refund = async (item) => {
  console.log(item);
  const headers = utilities.getHeaders();
  const requestBody = {
    "ticketIds": [item]
  }
  console.log(requestBody);

  console.log(headers);

  Swal.fire({
    title: '退票管理',
    text: '親愛的顧客您好，退票須收取手續費10%，請先問是否退票?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '確認',
    cancelButtonText: '取消',
  }).then(async (result) => {
    if (result.isConfirmed && headers) {
      const res = await api.delTicketAPI({ headers }, item)
        .then((response) => {
          // 成功
          console.log(response);
          Swal.fire({
            title: '成功',
            text: '退票成功!',
            icon: 'success',
          })
        }).then(() => {
          window.location.reload(); // 重新整理頁面
        })
        .catch((err) => {
          console.log(err);

          // 失敗
          Swal.fire({
            title: '錯誤',
            text: '退票失敗!',
            icon: 'error',
          })
        });
    }
  });


}
</script>

<template>
  <!-- <main> -->

  <Nav />
  <div class="px-10 pt-10 bg-gray20 flex flex-nowrap min-h-[calc(100vh-48px)]">
    <PersonalCenterSide />
    <div class="main ml-5 mb-5 w-5/6 bg-white">
      <ul class="flex flex-nowrap items-center">
        <li class="p-5 font-bold text-primary border-b-4 cursor-pointer hover:bg-primary/[15%]"
          :class="{ 'text-primary': status === '1' }" @click="handleStatusClick(status)">
          已報名</li>
        <li class="p-5 font-bold text-gray40 cursor-pointer hover:bg-primary/[15%]">已取消</li>
        <li class="p-5 font-bold text-gray40 cursor-pointer hover:bg-primary/[15%]">退票紀錄</li>
        <li class="p-5 font-bold text-gray40 cursor-pointer hover:bg-primary/[15%]">已結束</li>
      </ul>
      <div class="text-right p-5">
        <!-- <input type="date" name="" id="" class="bg-gray30 px-5 rounded"> -->
      </div>
      <div v-for="(orderItem) in orderInformation" :key="orderItem.id">
        <div class="activity p-5" v-if="shouldDisplayOrder(orderItem.id)">
          <div class="bg-gray30 rounded flex flex-nowrap">
            <div class="w-56 h-56 p-3">
              <img src="https://picsum.photos/200/200" class="w-full">
            </div>
            <div class="p-3 flex flex-col justify-between">
              <div>
                <h4 class="text-2xl py-3">{{ orderItem.detail[0].activityId.name }}</h4>
                <p class=" py-3">
                  {{ orderItem.detail[0].activityId.startAt }}-{{ orderItem.detail[0].activityId.endAt }}
                </p>
              </div>
              <p>訂單編號 <span class="font-bold">{{ orderItem.id }}</span></p>
            </div>
            <div class="ml-auto my-8 mx-3 justify-self-end flex items-center">
              <div class="p-3 border border-gray40 px-20 py-12 font-bold">
                NT {{ orderItem.amount }}
              </div>
              <div class="p-3 flex items-center">
                <span class="arrow material-icons" :data-arrow="orderItem.arrow" @click="handleArrowClick(orderItem)">
                  {{ orderItem.arrow === '0' ? 'arrow_drop_down' : 'arrow_drop_up' }}
                </span>
              </div>
            </div>
          </div>
          <div class="ticket" :class="{ hidden: orderItem.arrow === '0' }">
            <table class="table-auto w-full border-x border-b border-gray30">
              <thead>
                <tr>
                  <th>票號</th>
                  <th>區域</th>
                  <th>票種</th>
                  <th>座位</th>
                  <th>有效期限</th>
                  <th>狀態</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-gray30 text-center" v-for="detailItem in orderItem.detail"
                  :key="detailItem.id">
                  <!-- v-if="detailItem.ticketIds && detailItem.ticketIds.length > 0 && detailItem.ticketIds[0].ticketStatus === 1"> -->
                  <template v-for="ticketId in detailItem.ticketIds">
                    <template v-if="checkTicketId(ticketId.id)">
                      <td>{{ ticketId.id }}</td>
                      <td>{{ ticketId.zone }}</td>
                      <td>{{ orderItem.detail[0].ticketTypeId.name }}</td>
                      <td>{{ ticketId.seatNo }}</td>
                      <td>{{ ticketId.startAt }}~{{ ticketId.expiredAt }}</td>
                      <td>{{ ticketId.isStart === 'false' ? '舉行' : '未舉行' }}</td>
                      <td class="flex items-center justify-center">
                        <span class="delete px-1 material-icons text-gray40 cursor-pointer" @click="refund(ticketId.id)">
                          delete
                        </span>
                        <span class="check_in px-1 material-icons text-gray40 cursor-pointer"
                          @click="checkInClick(ticketId.id)">
                          confirmation_number
                        </span>
                      </td>
                    </template>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- <div class="ticket_management_block fixed transform -translate-x-1/2 -translate-y-3 w-1/2 bg-gray-30/[30%] hidden"
        style="left:30%;top:20%;"> v-bind:class="{ hidden: isHidden }"
        <div class=" bg-white p-5 rounded top-28 left-0 right-0 m-auto w-1/2">
          <div class="flex justify-between items-center">
            <h3 class="text-2xl mb-5" v-if="ticketData && ticketData.activity && ticketData.activity.name">
              {{ ticketData.activity.name }}</h3>
            <span class="ticket_management_clear material-icons cursor-pointer" @click="hideTicketBlock">
              clear
            </span>
          </div>
          <div class="bg-white gap-4 mb-5 ">
            <div class="p-5 flex border w-full relative">
              <div>
                <h3 class="font-bold text-2xl mb-5">取票</h3>
                <p class="flex items-center">
                  <img src="../../static/img/QRcode_image.png" alt="QRcode_image" class="rounded-lg mb-4 ">
                </p>
                <p class="flex items-center">
                  <vue-qrcode value="ttt" class="w-full rounded-lg mb-4"></vue-qrcode>
                </p>
                <div class="bottom-0 p-5 text-center w-full">
                  <span class="mr-1">
                    QRCODE
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> -->
    </div>
  </div>
  <!-- </main> -->
</template>

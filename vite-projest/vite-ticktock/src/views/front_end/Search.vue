<script setup>
import { ref, onMounted, reactive, watch } from 'vue';
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router';
import { startOfMonth, endOfMonth, addMonths, startOfYear, endOfYear, format } from 'date-fns';

import utilities from '@/utilities.js';
import * as api from '@/api.js';
import Footer from '../../components/footer.vue'

const date = new Date();
const today = format(new Date(), 'yyyy/MM/dd');
const thisMonthStart = format(startOfMonth(date), 'yyyy/MM/dd');
const thisMonthEnd = format(endOfMonth(date), 'yyyy/MM/dd');
const lastMonthStart = format(startOfMonth(addMonths(date, 1)), 'yyyy/MM/dd');
const lastMonthEnd = format(endOfMonth(addMonths(date, 1)), 'yyyy/MM/dd');
const thisYearStart = format(startOfYear(date), 'yyyy/MM/dd');
const thisYearEnd = format(endOfYear(date), 'yyyy/MM/dd');

const activityList = ref([]);
const route = useRoute();
const state = reactive({
  categoryId: '',
  categoryName: '',
});
const selectedRange = ref([
  {
    label: 'Today', range: [today, today]
  }
]);
const presetRanges = ref([
  {
    label: 'Today', range: [today, today]
  }
]);
const startDate = ref('');
const endDate = ref('');

watch(selectedRange, (newVal) => {
  updatePresetRanges(newVal);
});
onMounted(() => {
  state.categoryId = route.query.categoryid || '';
  console.log('onMounted:' + state.categoryId);
  fetchData();
});
const conversionClassification = (categoryId) => {
  // 音樂 :'1', 運動:'2', 戲劇 :'3', 藝文 :'4', 展覽 :'5', 其他 :'6'
  let category = categoryId;
  switch (category) {
    case '1': category = 'music', state.categoryName = '音樂'; break;
    case '2': category = 'sport', state.categoryName = '運動'; break;
    case '3': category = 'drama', state.categoryName = '戲劇'; break;
    case '4': category = 'art', state.categoryName = '藝文'; break;
    case '5': category = 'exhibition', state.categoryName = '展覽'; break;
    case '6': category = 'other', state.categoryName = '展覽'; break;
  }
  return category;

};
const fetchData = async () => {
  try {
    const category = conversionClassification(state.categoryId);
    const res = await api.activityClassificationAPI(category);
    activityList.value = res.data.data;
    activityList.value.forEach(item => {
      item.startAt = utilities.toFormatDate(item.startAt);
    });
    console.log(activityList.value);
  }
  catch (err) {
    console.log(err);
  }
};
const formatDate = (date) => {
  console.log(date)
  console.log(date._value[0])
  const startDate = format(new Date(date._value[0]), 'yyyy/MM/dd');
  const endDate = format(new Date(date._value[1]), 'yyyy/MM/dd');
  console.log(date, startDate)
  return `${startDate} - ${endDate}`;
};
const updatePresetRanges = (range) => {
  switch (range) {
    case 'today':
      presetRanges.value = [{ label: 'Today', range: [today, today] }];
      break;
    case 'month':
      presetRanges.value = [{ label: 'This month', range: [thisMonthStart, thisMonthEnd] }];
      break;
    case 'lastMonth':
      presetRanges.value = [{ label: 'Last 2 months', range: [lastMonthStart, lastMonthEnd] }];
      break;
    case 'year':
      presetRanges.value = [{ label: 'More than 2 months ago', range: [thisYearStart, thisYearEnd] }];
      break;
    default:
      presetRanges.value = [];
  }
  const daterange = presetRanges.value[0].range;
  startDate.value = daterange[0];
  endDate.value = daterange[1];
  console.log('日期區間:', startDate.value, endDate.value);
};
</script>

<template>
  <!-- <main> -->

  <div class="mx-auto px-16 mt-10 flex flex-col justify-center items-center w-full">
    <div class="w-full relative">
      <img src="https://picsum.photos/1200/250" class="w-full" />
      <div class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-5 bg-primary">
        <h3 class="font-bold text-2xl">探索人生 發現人生無限可能</h3>
      </div>
    </div>
    <div class="w-full flex justify-end">
      <div class="text-right py-3 w-1/2 flex justify-end">
        <!-- <input type="text" name="search" id="search" class="border border-primary w-2/5 rounded-full p-1 px-10"
        placeholder="搜尋活動" /> -->
        <!-- <select name="" id="" class="w-32 border border-primary px-5 py-1 mx-3 w-1/5">
        <option value="">全部費用</option>
        <option value="">免費</option>
        <option value="">$1~$1,000</option>
        <option value="">$1000~$2,000</option>
        <option value="">$2000~$3,000</option>
        <option value="">$3,000以上</option>
      </select> -->
        <div v-if="presetRanges && presetRanges.value && presetRanges.value[0].range">
          日期區間: {{ startDate.value }}-{{ endDate.value }}
        </div>
        <select v-model="selectedRange" class="w-32 border border-primary px-5 py-1 mx-3 w-1/5">
          <option value="">全部時間</option>
          <option value="today">今天</option>
          <option value="month">一個月內</option>
          <option value="lastMonth">下個月</option>
          <option value="year">一年內</option>
        </select>
        <!-- <VueDatePicker v-model="date" :range="true" :preset-ranges="presetRanges" :format-date="formatDate"
            class="px-5 py-1 mx-3">
            <template #yearly="{ label, range, presetDateRange }">
              <span @click="presetDateRange(range)">{{ label }}</span>
            </template>
          </VueDatePicker> -->
        <!-- <button class="bg-primary w-1/5">搜尋</button> -->
      </div>
    </div>
    <div class="my-10 grid grid-cols-3 gap-3 w-full">
      <div class="relative border-4 border-gra50">
        <a href="#" class="w-full h-full">
          <img src="https://picsum.photos/300/150" class="w-full" />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white">
            音樂
          </p>
        </a>
      </div>
      <div class="relative">
        <a href="#" class="w-full h-full">
          <img src="https://picsum.photos/300/150" class="w-full" />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white">
            運動
          </p>
        </a>
      </div>
      <div class="relative">
        <a href="#" class="w-full h-full">
          <img src="https://picsum.photos/300/150" class="w-full" />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white">
            戲劇
          </p>
        </a>
      </div>
      <div class="relative">
        <a href="#" class="w-full h-full">
          <img src="https://picsum.photos/300/150" class="w-full" />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white">
            藝文
          </p>
        </a>
      </div>
      <div class="relative">
        <a href="#" class="w-full h-full">
          <img src="https://picsum.photos/300/150" class="w-full" />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white">
            展覽
          </p>
        </a>
      </div>
      <div class="relative">
        <a href="#" class="w-full h-full">
          <img src="https://picsum.photos/300/150" class="w-full" />
          <p
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold border-b border-white">
            其他
          </p>
        </a>
      </div>
    </div>
    <div class="my-10 py-10 w-full">
      <h3 class="font-bold text-2xl text-center py-3">{{ state.categoryName }} 相關活動</h3>
      <div class="grid grid-cols-3 gap-3">
        <div class="py-2" v-for="(activityItem) in activityList" :key="activityItem.id">
          <a href="#">
            <img src="https://picsum.photos/300/300" class="w-full" />
            <div class="flex flex-row py-3">
              <p class="pr-2">{{ activityItem.startAt }}</p>
              <p class="pl-2">{{ activityItem.venue.name }}</p>
            </div>
            <h4 class="font-bold text-xl">{{ activityItem.name }}</h4>
          </a>
        </div>

      </div>
    </div>

    <div class="text-center my-10 flex flex-row">
      <a href="#" class="bg-primary w-full px-5 py-3">上一頁</a>
      <ul class="flex flex-row mx-1">
        <li class="border border-primary w-full px-5 py-3 mx-1">1</li>
        <li class="bg-primary w-full px-5 py-3 mx-1">2</li>
        <li class="bg-primary w-full px-5 py-3 mx-1">3</li>
      </ul>
      <a href="#" class="bg-primary w-full px-5 py-3">下一頁</a>
    </div>
  </div>

  <Footer />
  <!-- </main> -->
</template>
<style scoped>
.hidden-dp {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
</style>
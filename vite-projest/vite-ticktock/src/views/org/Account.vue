<script setup>
import OrgSide from '../../components/OrgSide.vue'
import { activitiesAPI } from '@/api.js'
import { ref, computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const data = ref([])
const selectedStatus = ref('')
const router = useRouter()

const props = defineProps(['orgId'])
console.log('orgId', props.orgId)

try {
  const response = await activitiesAPI('?pop=ticketTypeIds')
  console.log('activityAPI data', response.data.data)
  data.value = response.data.data
} catch (error) {
  console.log('navigate to activity page fail')
  console.log(error)
}
const convertDateFormat = (date) => {
  const dateObject = new Date(date)
  const year = dateObject.getFullYear()
  const month = dateObject.getMonth() + 1
  const day = dateObject.getDate()
  return `${year}/${month}/${day}`
}

const activeState = (activityId) => {
  let state = ''
  let active = data.value.find((activity) => activity.id === activityId)
  let startDate = new Date(active.startAt)
  let endDate = new Date(active.endAt)
  let currentDate = new Date()
  if (currentDate >= startDate && currentDate <= endDate) {
    state = '進行中'
  } else if (currentDate < startDate) {
    state = '未開始'
  } else {
    state = '已結束'
  }
  return state
}

const filteredData = computed(() => {
  if (selectedStatus.value === '進行中') {
    return data.value.filter((item) => activeState(item.id) === '進行中')
  } else if (selectedStatus.value === '已結束') {
    return data.value.filter((item) => activeState(item.id) === '已結束')
  } else if (selectedStatus.value === '未開始') {
    return data.value.filter((item) => activeState(item.id) === '未開始')
  } else {
    return data.value
  }
})

// 修改活動
const editActivity = async (ActivityId) => {
  try {
    // 轉跳到 editOrg 頁面並傳遞組織ID
    router.push({ name: 'editActivity', params: { ActivityId } })
  } catch (error) {
    console.error('修改活動失敗', error)
  }
}
</script>

<template>
  <!-- <main> -->
  <OrgSide />

  <div class="main ml-64 p-5">
    <div class="flex items-center justify-between">
      <h3 class="text-xl font-bold">活動列表</h3>
      <select v-model="selectedStatus" class="w-32 bg-gray30 px-5 py-1">
        <option value="">全部</option>
        <option value="進行中">進行中</option>
        <option value="已結束">已結束</option>
        <option value="未開始">未開始</option>
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
        <tbody v-for="item in filteredData">
          <tr class="border-t border-gray30 text-center">
            <td>{{ convertDateFormat(item.startAt) }}~{{ convertDateFormat(item.endAt) }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.total - item.remain }}</td>
            <td>{{ item.total }}</td>
            <td>{{ activeState(item.id) }}</td>
            <td class="flex items-center justify-center">
              <span
                class="material-icons pr-1 text-gray40 cursor-pointer"
                @click="editActivity(item.id)"
              >
                edit
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- </main> -->
</template>

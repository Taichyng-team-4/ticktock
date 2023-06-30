import axios from 'axios'

const API_URL = 'https://ticktock.onrender.com/api/v1'
// const API_URL = 'http://localhost:5000/api/v1'

// 登入請求
export function loginAPI(email, password) {
  console.log(API_URL + '/auths/login');
  return axios.post(`${API_URL}/auths/login`, { email: email, password: password });
}

// 取得登入者資訊
export function userProfileAPI(token) {
  console.log('userProfile...');
  return axios.get(`${API_URL}/profile`);
}

// 取得所有組織資訊
export function orgsAPI(token) {
  console.log('orgsAPI...');
  return axios.get(`${API_URL}/orgs`);
}

//取得活動資訊
export function activitysAPI() {
  const activityListAPI = `${API_URL}/activities?limit=3&pop=venueId`;
  console.log(activityListAPI);
  return axios.get(activityListAPI);
}

//取得活動分類資訊
export function activityClassificationAPI(category) {
  console.log(category);
  const activityListAPI = `${API_URL}/activities?category=${category}&pop=venueId`;
  console.log(activityListAPI);
  return axios.get(activityListAPI);
}

//取得活動單一資訊
export function activityAPI(activityId) {
  const activityAPI = `${API_URL}/activities/${activityId}?pop=ticketTypeIds,venueId`;
  console.log(activityAPI);
  return axios.get(activityAPI);
}

// 取得使用者所有組織資訊
export function orgsMeAPI(headers) {
  console.log('orgsAPI...')
  return axios.get(`${API_URL}/orgs/me`, { headers })
}

// 取得單個組織
export function getOrgAPI(headers, orgId) {
  console.log('getOrgAPI...')
  return axios.get(`${API_URL}/orgs/${orgId}`, { headers })
}
// 刪除組織
export function delOrgAPI(headers, orgId) {
  console.log('delOrgAPI...')
  return axios.delete(`${API_URL}/orgs/${orgId}`, { headers })
}
// 修改組織
export function editOrgAPI(orgData, orgId) {
  console.log('editOrgAPI...')
  return axios.patch(`${API_URL}/orgs/${orgId}`, orgData)
}
// 新增組織
export function createOrgAPI(orgData) {
  console.log('createOrgAPI...')
  return axios.post(`${API_URL}/orgs/`, orgData)
}

// 取得活動
export function activitiesAPI(QueryString) {
  console.log('activitiesAPI...')
  return axios.get(`${API_URL}/activities/${QueryString}`)
}

// 取得單個活動
export function getActivitiesAPI(headers, activityId) {
  console.log('getactivitiesAPI...')
  return axios.get(`${API_URL}/activities/${activityId}`, { headers })
}

// 修改活動
export function editActivitiesAPI(activityData, activityId) {
  console.log('editActivitiesAPI...')
  return axios.patch(`${API_URL}/activities/${activityId}`, activityData)
}

// 新增活動
export function createActivitiesAPI(activitiesData) {
  console.log('createActivitiesAPI...')
  return axios.post(`${API_URL}/activities/`, activitiesData)
}

// 取得使用者創的組織
export function ordersMeAPI(headers) {
  console.log('ordersMeAPI...')
  // return axios.get(`${API_URL}/orders/me`, { headers })
  return axios.get(`${API_URL}/orders/me`, { headers })
}

// 取得使用者資訊
export function usersAPI(QueryString) {
  console.log('usersAPI...')
  return axios.get(`${API_URL}/users/${QueryString}`)
}


// 新增訂單
export function createOrderAPI(headers,orderData) {
  console.log(orderData)

  return axios.post(`${API_URL}/orders`,orderData, { headers })

// 上傳圖片
export function uploadImgAPI(data) {
  console.log('uploadImgAPI...')
  return axios.post(`${API_URL}/img/`, data)
}

// 取得場地
export function getVenuesAPI() {
  console.log('getVenuesAPI...')
  return axios.get(`${API_URL}/venues/`)

}

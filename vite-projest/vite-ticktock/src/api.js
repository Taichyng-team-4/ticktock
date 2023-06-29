import axios from 'axios'

const API_URL = 'https://ticktock.onrender.com/api/v1'

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

// 取得組織資訊
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

// 基本 API Host Path, 直接替換 apiHostPath 位置，切換 開發環境 or 正式環境 
const isProduction = true;
const localHostPath = 'http://127.0.0.1:5000';
const productionHostPath = 'https://ticktock.onrender.com';
const apiVersion = '/api/v1';
const apiHostPath = (isProduction) ? `${productionHostPath}${apiVersion}` : `${localHostPath}${apiVersion}`;

// 功能 API 完整路徑
const loginAPI = `${apiHostPath}/auths/login`;
const registerAPI = `${apiHostPath}/auths/signup`;
const forgetPasswordAPI = `${apiHostPath}/auths/password/forgot`;
const activityAPI = `${apiHostPath}/activities/`;
// 取得 以及 更新 User Profile 
const userProfileAPI = `${apiHostPath}/profile`;
// 新增組織
const orgsAPI = `${apiHostPath}/orgs`;
const activityNoticeAPI = `${apiHostPath}/notices/activity`;


// 預設 Avatar
const defaultAvatar = 'https://picsum.photos/100/100';

const config = {
  apiHostPath,
  loginAPI,
  registerAPI,
  forgetPasswordAPI,
  activityAPI,
  userProfileAPI,
  orgsAPI,
  defaultAvatar,
  activityNoticeAPI
};

export default config;

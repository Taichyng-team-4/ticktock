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


const config = {
  apiHostPath,
  loginAPI,
  registerAPI,
  forgetPasswordAPI
};

export default config;

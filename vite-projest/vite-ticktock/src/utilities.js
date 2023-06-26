/**
 *  共用 Functions
 *
 */

// 設定 ItemKey
const ItemKey = {
  'jwtToken' : 'jwtToken',
  'userProfile' : 'userProfile',
  'orgList': 'orgList'
};

// 取得 localStorage 中 jwtToken 設定值
function getJwtToken() {
  let jwtToken = this.getItemStringValue(ItemKey.jwtToken);
  return jwtToken;
}

// 設定 localStorage 中 jwtToken 值
function setJwtToken(jwtToken) {
  this.setItemKeyValue(ItemKey.jwtToken, jwtToken);
}

// 清除 localStorage 中 jwtToken 項目
function clearJwtToken() {
  clearItem(ItemKey.jwtToken);
}

// 切換成中文日期
function toChFormatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const chineseMonths = [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二",
  ];

  if (!date) return null;
  const formatter = new Intl.DateTimeFormat("zh-CN", options);
  const parts = formatter.formatToParts(new Date(date));

  const dateObj = parts.reduce(
    (acc, curr) => ({ ...acc, [curr.type]: curr.value }),
    {}
  );
  return `${dateObj.weekday}, ${chineseMonths[dateObj.month - 1]}月 ${dateObj.day
    }, ${dateObj.year}`;
}

// 切換成應文日期
function toEnFormatDate(date) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return new Date(date).toLocaleString("en-US", options);
}
// 切換成年月日期
function toFormatDate(date) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return new Date(date).toLocaleDateString("zh-TW", options);
}
// 執行登出
function processLogout(homeUrl) {
  // 移除 JwtToken
  clearJwtToken();
  clearUserProfile();
  window.location.replace(homeUrl);
}

// 取得 Post Request Headers
function getHeaders() {
  let token = this.getJwtToken();
  if (token.indexOf('Bearer ') == -1) {
    token = `Bearer ${token}`;
  }
  const headers = {
    'authorization': token,
  }
  return headers;
}

// 儲存 userProfile
function setUserProfile(userProfile) {
  this.setItemKeyValue(ItemKey.userProfile, JSON.stringify(userProfile));
}

// 取得 userProfile
function getUserProfile() {
  let userProfile = undefined;
  const temp = this.getItemStringValue(ItemKey.userProfile);
  if (typeof temp == 'string') {
    if (temp.length > 0) {
      userProfile = JSON.parse(temp);
    }
  }
  return userProfile;
}

// 清除 userProfile
function clearUserProfile() {
  clearItem(ItemKey.userProfile);
}

// Set Item Key / Value
function setItemKeyValue(itemKey, itemValue) {
  localStorage.setItem(itemKey, itemValue);
}

// Get Item String Value
function getItemStringValue(itemKey) {
  let itemValue = '';
  if (localStorage.getItem(itemKey)) {
    itemValue = localStorage.getItem(itemKey) || '';
  }
  return itemValue;
}

// Clear Item Key / Value
function clearItem(itemKey) {
  localStorage.removeItem(itemKey);
}

function setOrgList(orgList) {
  this.setItemKeyValue(ItemKey.orgList, JSON.stringify(orgList));
}

function getOrgList() {
  let orgList = [];
  let temp = this.getItemStringValue(ItemKey.orgList);
  if (temp) {
    orgList = JSON.parse(temp);
  }
  return orgList;
}

function clearOrgList() {
  clearItem(ItemKey.orgList);
}


const utilities = {
  // 各種 ItemKey
  ItemKey,
  // 取得 localStorage 中 jwtToken 設定值
  getJwtToken,
  // 設定 localStorage 中 jwtToken 值
  setJwtToken,
  // 清除 localStorage 中 jwtToken 項目
  clearJwtToken,
  toChFormatDate,
  toEnFormatDate,
  toFormatDate,
  // 執行登出
  processLogout,
  // 取得 Post Request Headers
  getHeaders,
  setUserProfile,
  getUserProfile,
  clearUserProfile,
  setItemKeyValue,
  getItemStringValue,
  clearItem,
  setOrgList,
  getOrgList,
  clearOrgList,
};

export default utilities;

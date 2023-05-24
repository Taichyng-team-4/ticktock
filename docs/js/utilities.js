/**
 *  共用 Functions
 *
 */

// // 取得 localStorage 中 jwtToken 設定值
// function getJwtToken() {
//   let jwtToken;
//   if (localStorage.getItem('jwtToken')) {
//     jwtToken = localStorage.getItem('jwtToken') || '';
//   } else {
//     jwtToken = '';
//   }
//   return jwtToken;
// }

// // 設定 localStorage 中 jwtToken 值
// function setJwtToken(jwtToken) {
//   localStorage.setItem('jwtToken', jwtToken);
// }

// // 清除 localStorage 中 jwtToken 項目
// function clearJwtToken() {
//   localStorage.removeItem('jwtToken');
// }

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
  return `${dateObj.weekday}, ${chineseMonths[dateObj.month - 1]}月 ${
    dateObj.day
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

let jwtToken;

const utilities = {
  // 取得 localStorage 中 jwtToken 設定值
  getJwtToken() {
    if (localStorage.getItem("jwtToken")) {
      jwtToken = localStorage.getItem("jwtToken") || "";
    } else {
      jwtToken = "";
    }
    return jwtToken;
  },
  // 設定 localStorage 中 jwtToken 值
  setJwtToken(jwtToken) {
    localStorage.setItem("jwtToken", jwtToken);
  },
  // 清除 localStorage 中 jwtToken 項目
  clearJwtToken() {
    localStorage.removeItem("jwtToken");
  },
  toChFormatDate,
  toEnFormatDate,
};

export default utilities;

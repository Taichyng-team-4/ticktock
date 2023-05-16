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

let jwtToken;

const utilities = {
  // 取得 localStorage 中 jwtToken 設定值
  getJwtToken() {    
    if (localStorage.getItem('jwtToken')) {
      jwtToken = localStorage.getItem('jwtToken') || '';
    } else {
      jwtToken = '';
    }
    return jwtToken;
  },
  // 設定 localStorage 中 jwtToken 值
  setJwtToken(jwtToken) {
    localStorage.setItem('jwtToken', jwtToken);
  },
  // 清除 localStorage 中 jwtToken 項目
  clearJwtToken() {
    localStorage.removeItem('jwtToken');
  }
};

export default utilities;

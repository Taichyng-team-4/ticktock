//  Vue 起手式
// // API Config
// import config from '../../static/js/config.js'
$(document).ready(()=>{
    
const { createApp } = Vue
const app = createApp({
    data() {
        return {}
    },
    methods: {
        // 點擊 Ticktock 回首頁 功能
        homeClick() {
            console.log('homeClick() ...');
            window.location.replace('home.html');
        },
        // 點擊 搜尋按鈕
        searchClick() {
            console.log('searchClick() ...');
            // todo: 搜尋功能 ...
        },
        // 切換到 登入頁面
        switchLoginClick() {
            console.log('switchLoginClick() ...');
            window.location.replace('../account/login.html');
        },
        // 切換到 註冊頁面
        switchRegisterClick() {
            console.log('switchRegisterClick() ...');
            window.location.replace('../account/register.html');
        },
        // 切換到 忘記密碼頁面
        switchForgetPasswordClick() {
            console.log('switchForgetPasswordClick() ...');
            window.location.replace('../account/password.html');
        },
    },
    mounted() {

    }
});
// 綁定 VeeValidate 進入 全域物件
app.component('VForm', VeeValidate.Form);
app.component('VField', VeeValidate.Field);
app.component('ErrorMessage', VeeValidate.ErrorMessage);
// 將 Vue 綁定到 <div id="app"> 上面
app.mount('#app');

})

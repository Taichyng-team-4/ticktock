/** Nav Component **/
export default {
  // template: `
  // <nav class="bg-navbar ">
  //   <div class="container mx-auto px-6 py-3">
  //       <div class="mx-auto px-4 py-3 max-w-7xl flex justify-between items-center">
  //           <div class="flex items-center">
  //               <div>
  //                 <a class="text-gray-800 text-xl font-bold hover:text-gray-700"
  //                 href="#" @click.prevent="homeClick">Ticktock</a>                        
  //               </div>
  //               <div class="relative ml-3 flex items-center bg-white rounded-lg">
  //                   <div class=" left-0">
  //                       <button type="submit" class="text-black py-1 px-2 rounded-lg ">
  //                           <span class="material-icons">
  //                               search
  //                           </span>
  //                       </button>
  //                   </div>
  //                   <input type="text" class=" py-1 px-2 pl-3 rounded-lg  focus:outline-none"
  //                       placeholder="  Search"
  //                       :value="searchData"
  //                       @click.prevent="searchClick"
  //                       >
  //               </div>
  //           </div>
  //           <div>
  //           </div>
  //           <div>
  //               <!-- 未登入 -->
  //               <div class="hidden md:block" v-if="!isLogin">
  //                   <ul class="flex space-x-4 text-nav  items-center">
  //                       <li><a href="#" class=" hover:text-gray-200" @click.prevent="switchLoginClick" >登入</a>
  //                       </li>
  //                       <li><a href="#" class=" hover:text-gray-200" @click.prevent="switchRegisterClick" >註冊</a>
  //                       </li>
  //                   </ul>
  //               </div>

  //               <!-- 已登入 -->
  //               <div class="hidden md:block" v-if="isLogin">                
  //               <ul class="flex space-x-4 text-nav  items-center">
  //                   <li><a href="#" class=" hover:text-gray-200" @click.prevent="orderQueryClick" >訂單查詢</a></li>
  //                   <li><a href="#" class=" hover:text-gray-200" @click.prevent="createActivityClick" >建立活動</a></li>
  //                   <div class="dropdown">
  //                       <button class="dropbtn flex items-center justify-between">選擇組織
  //                           <span class="material-icons">
  //                               arrow_drop_down
  //                           </span> 
  //                       </button>
  //                       <div class="dropdown-content">
  //                           <p class="ml-4">組織列表</p>
  //                           <ul class="ml-3">
  //                               <li v-for="item in orgs"><a href="#">{{ item.name }}</a></li>
  //                           </ul>
  //                           <a href="#" @click.prevent="addOrgClick">新增組織</a>
  //                       </div>
  //                   </div>
  //                   <div class="dropdown">
  //                       <button class="dropbtn">
  //                           <span class="material-icons">
  //                               account_circle
  //                           </span> </button>
  //                       <div class="dropdown-content">
  //                           <a href="#" @click.prevent="switchSettingClick">設定</a>
  //                           <a href="#" @click.prevent="logoutClick">登出</a>
  //                       </div>
  //                   </div>
  //               </ul>
  //               </div>

  //               <div class="md:hidden flex items-center">
  //                   <button class="outline-none mobile-menu-button">
  //                       <span class="material-icons pr-1 text-gray40 cursor-pointer">
  //                           menu
  //                       </span>
  //                   </button>
  //               </div>
  //           </div>
  //       </div>
  //       <div class="hidden mobile-menu">
  //           <ul class=" text-nav mx-auto px-4 py-3 max-w-7xl  justify-between items-center">
  //               <li><a href="#" class=" hover:text-gray-200" @click.prevent="switchLoginClick" >登入</a></li>
  //               <li><a href="#" class=" hover:text-gray-200" @click.prevent="switchRegisterClick" >註冊</a></li>
  //           </ul>
  //       </div>
  //   </div>
  // </nav>    
  // `,
  template:`
<nav class="bg-navbar ">
<div class="container mx-auto px-6 py-2" v-if="!isLogin">
    <div class="mx-auto px-4 max-w-7xl flex justify-between items-center">
        <div class="flex items-center">
            <div>
                <a class="text-gray-800 text-xl font-bold hover:text-gray-700 cursor-pointer"  @click.prevent="homeClick">Ticktock</a>
            </div>
        </div>
        <div class="w-1/2">
            <div class="w-full relative ml-3 flex items-center bg-white/[50%] rounded-full">
                <div class=" left-0">
                    <button type="submit" class="flex items-center text-black px-2 rounded-full ">
                        <span class="material-icons">
                            search
                        </span>
                    </button>
                </div>
                <input type="text" class=" py-1 px-2 pl-3 rounded-full bg-white/[0] focus:outline-none"
                    placeholder="Search"
                    :value="searchData"
                    @click.prevent="searchClick">
            </div>
        </div>
        <div>
            <div class="hidden md:block">
                <ul class="flex space-x-4 text-nav  items-center">
                    <li><a href="#" class=" hover:text-gray-200" @click.prevent="switchLoginClick" >登入</a>
                    </li>
                    <li><a href="#" class=" hover:text-gray-200" @click.prevent="switchRegisterClick" >註冊</a>
                    </li>
                </ul>
            </div>

            <div class="md:hidden flex items-center">
                <button class="outline-none mobile-menu-button">
                    <span class="material-icons pr-1 text-gray40 cursor-pointer">
                        menu
                    </span>
                </button>
            </div>
        </div>
    </div>
    <div class="hidden mobile-menu">
        <ul class=" text-nav mx-auto px-4 py-3 max-w-7xl  justify-between items-center">
            <li><a href="#" class=" hover:text-gray-200" @click.prevent="switchLoginClick" >登入</a></li>
            <li><a href="#" class=" hover:text-gray-200" @click.prevent="switchRegisterClick" >註冊</a></li>
        </ul>
    </div>
</div>


<div class="container mx-auto px-6 py-2" v-if="isLogin">
            <div class="mx-auto px-4 max-w-7xl flex justify-between items-center">
                <div class="flex items-center">
                    <div>
                        <a class="text-gray-800 text-xl font-bold hover:text-gray-700 cursor-pointer"  @click.prevent="homeClick">Ticktock</a>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="w-full relative ml-3 flex items-center bg-white/[50%] rounded-full">
                        <div class=" left-0">
                            <button type="submit" class="flex items-center text-black px-2 rounded-full ">
                                <span class="material-icons">
                                    search
                                </span>
                            </button>
                        </div>
                        <input type="text" class=" py-1 px-2 pl-3 rounded-full bg-white/[0] focus:outline-none"
                            placeholder="Search"
                            :value="searchData"
                            @click.prevent="searchClick">
                    </div>
                </div>
                <div>
                    <div class="hidden md:block">
                        <ul class="flex space-x-4 text-nav  items-center">
                            <li><a href="#" class=" hover:text-gray-200" @click.prevent="orderQueryClick">訂單查詢</a></li>
                            <li><a href="#" class=" hover:text-gray-200" @click.prevent="createActivityClick">建立活動</a></li>
                            <div class="dropdown">
                                <button class="dropbtn flex items-center justify-between">選擇組織
                                    <span class="material-icons">
                                        arrow_drop_down
                                    </span> 
                                </button>
                                <div class="dropdown-content">
                                    <p class="ml-4">組織列表</p>
                                    <ul class="ml-3">
                                        <li v-for="item in orgs"><a href="#">{{ item.name }}</a></li>
                                    </ul>
                                    <a href="#" @click.prevent="addOrgClick">新增組織</a>
                                </div>
                            </div>
                            <div class="dropdown">
                                <button class="dropbtn">
                                    <span class="material-icons">
                                        account_circle
                                    </span> </button>
                                <div class="dropdown-content">
                                    <a href="#" @click.prevent="switchSettingClick">設定</a>
                                    <a href="#" @click.prevent="logoutClick">登出</a>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div class="md:hidden flex items-center">
                        <button class="outline-none mobile-menu-button">
                            <span class="material-icons pr-1 text-gray40 cursor-pointer">
                                menu
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="hidden mobile-menu">
                <ul class=" text-nav mx-auto px-4 py-3 max-w-7xl  justify-between items-center">
                    <li><a href="#" class=" hover:text-gray-200" @click.prevent="orderQueryClick">訂單查詢</a></li>
                    <li><a href="#" class=" hover:text-gray-200" @click.prevent="createActivityClick">建立活動</a></li>
                    <div class="dropdown">
                        <button class="dropbtn flex items-center justify-between">選擇組織
                            <span class="material-icons">
                                arrow_drop_down
                            </span> </button>
                        <div class="subdropdown-content">
                            <p class="ml-4">組織列表</p>
                            <ul class="ml-3">
                                <li v-for="item in orgs"><a href="#">{{ item.name }}</a></li>
                            </ul>
                            <hr>
                            <a href="#" @click.prevent="addOrgClick">新增組織</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">
                            <span class="material-icons">
                                account_circle
                            </span>
                            <span class="material-icons">
                                arrow_drop_down
                            </span> </button>
                        <div class="subdropdown-content">
                            <a href="#" @click.prevent="switchSettingClick">設定</a>
                            <a href="#" @click.prevent="logoutClick">登出</a>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
</nav>

  `,
  data() {
    return {
      searchData: '',
    }
  },
  props: {
    isLogin: false,
    token: '',
    orgs : [],
  },
  methods: {
    // 定義內層的 $emit 觸發方法
    // 回首頁
    homeClick() {
      this.$emit('emit-home');
    },
    // 搜尋
    searchClick() {
      this.$emit('emit-search', this.searchData);
    },
    // 回登入頁面
    switchLoginClick() {
      this.$emit('emit-login');
    },
    // 回註冊頁面
    switchRegisterClick() {
      this.$emit('emit-register');
    },
    // 訂單查詢
    orderQueryClick() {
      console.log(`orderQueryClick : emit-order-query : ${this.token}`);
      this.$emit('emit-order-query', this.token);
    },
    // 建立活動
    createActivityClick() {
      console.log(`createActivityClick : emit-create-activity : ${this.token}`);
      this.$emit('emit-create-activity', this.token);
    },
    // 新增 組織
    addOrgClick() {
      console.log(`addOrgClick : emit-add-org : ${this.token}`);
      this.$emit('emit-add-org', this.token);
    },
    // 點擊 登出
    logoutClick() {
      console.log(`logoutClick : emit-logout : ${this.token}`);
      this.$emit('emit-logout', this.token);
    },
    // 設定
    switchSettingClick() {
      console.log(`switchSettingClick : emit-setting : ${this.token}`);
      this.$emit('emit-setting', this.token);
    }
  },

}

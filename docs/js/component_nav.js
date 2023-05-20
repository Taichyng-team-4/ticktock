/** Nav Component **/
export default {
  data() {
    return {

    }
  },
  methods: {    
    // 定義內層的 $emit 觸發方法
    homeClick() {
      this.$emit('emit-home');
    },
    switchLoginClick() {
      this.$emit('emit-login');
    },
    switchRegisterClick() {
      this.$emit('emit-register');
    }
  },
  template : `
  <nav class="bg-navbar ">
    <div class="container mx-auto px-6 py-3">
        <div class="mx-auto px-4 py-3 max-w-7xl flex justify-between items-center">
            <div class="flex items-center">
                <div>
                  <a class="text-gray-800 text-xl font-bold hover:text-gray-700"
                  href="#" @click.prevent="homeClick">Ticktock</a>                        
                </div>
                <div class="relative ml-3 flex items-center bg-white rounded-lg">
                    <div class=" left-0">
                        <button type="submit" class="text-black py-1 px-2 rounded-lg ">
                            <span class="material-icons">
                                search
                            </span>
                        </button>
                    </div>
                    <input type="text" class=" py-1 px-2 pl-3 rounded-lg  focus:outline-none"
                        placeholder="  Search">
                </div>
            </div>
            <div>
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
  </nav>    
  `

}
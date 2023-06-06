/** User Side Bar **/

export default {
  template : `
      <div class="side">
      <div class="user_img p-5 bg-white rounded">
          <img :src="imgUrl" 
          class="w-48 h-48 rounded-full">
          <h3 class="p-2 font-bold text-center text-2xl">{{userName}}</h3>
      </div>
      <div class="mt-5 bg-white rounded">
          <ul class="subject_user">
              <li id="user" 
                  class="py-2 px-7 text-xl font-bold cursor-pointer text-primary border-l-4 hover:bg-primary/[15%]">
                  <a href="#.html" class="block" @click.prevent="switchOrderManageClick" >訂單管理</a>
              </li>
              <li id="profile" 
                  class="py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]">
                  <a href="profile.html" class="block" @click.prevent="switchProfileManageClick" >帳號管理</a>
              </li>
              <li id="news" 
                  class="py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]">
                  <a href="news.html" class="block" @click.prevent="switchNewsManageClick" >訊息管理</a>
              </li>
              <li id="orgs" 
                  class="py-2 px-7 text-xl font-bold cursor-pointer hover:bg-primary/[15%]">
                  <a href="orgs.html" class="block" @click.prevent="switchOrgMangeClick" >組織管理</a>
              </li>
          </ul>
      </div>
    </div>  
  `,
  data() {
    return {

    }
  },
  props: {
    token: '',
    imgUrl: '',
    userName: ''
  },
  methods : {
    // 訂單管理
    switchOrderManageClick() {
      console.log('User Side Bar switchOrderManageClick()');
      this.$emit('emit-order',this.token);
    },
    // 帳號管理
    switchProfileManageClick() {
      console.log('User Side Bar switchProfileManageClick()');
      this.$emit('emit-profile',this.token);
    },
    // 訊息管理
    switchNewsManageClick() {
      console.log('User Side Bar switchNewsManageClick()');
      this.$emit('emit-news',this.token);
    },
    // 組織管理
    switchOrgMangeClick() {
      console.log('User Side Bar switchOrgMangeClick()');
      this.$emit('emit-orgs',this.token);
    }
  }
}


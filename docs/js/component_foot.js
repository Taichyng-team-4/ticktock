/** Foot Component **/
export default {
  template : `
    <div class="w-full bg-gray50 text-white py-16 px-16 flex justify-between">
    <div>
        <a href="#" @click.prevent="faqClick">常見問題</a>
        <p>聯絡信箱: <a href="#" @click.prevent="emailClick">service@ticktock.com</a></p>
    </div>
    <a href="#" @click.prevent="homeClick">
      <h1 class="menu_logo">Ticktock</h1>
    </a>
  </div>  
  `,
  data() {
    return {}
  },
  props : {

  },
  methods: {
    // 定義內層的 $emit 觸發方法
    // 回首頁
    homeClick() {
      this.$emit('emit-home');
    },
    // 跳轉 FAQ
    faqClick() {
      this.$emit('emit-faq');
    },
    // Mail to Customer Service
    emailClick() {
      this.$emit('emit-email');
    }
  }
}
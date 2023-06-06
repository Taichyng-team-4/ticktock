/** Nav Component **/
export default {
  template: `      <div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
    <!-- Main Content -->
    <main class="p-4 sm:p-6">
      <div class="mb-3">
        <a href="../index.html" class="link-secondary">首頁</a>/
        <a href="./activity.html" class="link-secondary">演唱會</a>/
        <a href="./activity.html" class="link-secondary"
          >POP! POP! POP! 流行音樂互動展</a
        >
      </div>
      <!-- Event Image -->
      <div class="w-full relative">
        <img
          :src="activity.themeImg"
          alt="Event Image"
          class="w-full rounded-lg mb-4"
        />
        <div class="absolute bottom-0 left-0 p-5 bg-primary">
          <h3 class="font-bold text-2xl">{{activity.name}}</h3>
          <p class="flex items-center">
            <span class="material-icons mr-3"> access_time_filled </span
            >{{activity.startAtCh}}
          </p>
          <p class="flex items-center">
            <span class="material-icons mr-3"> place </span
            >{{venue.address}}
          </p>
        </div>
      </div>
      <div class="container mx-auto max-w-screen-sm px-6">
        <!-- Event Description -->
        <h1 class="text-3xl mb-2 font-bold py-10">{{activity.summary}}</h1>
        <p>
          <span class="material-icons"> diversity_3 </span
          >活動主辦方:{{org.name}}
        </p>
        <p class="mt-10 text-gray-700 leading-relaxed mb-6">
          {{activity.description}}
        </p>

        <!-- Event Location and Time -->
        <h1 class="text-2xl mb-6 font-bold mt-10">聯絡主辦方:</h1>
        <p class="flex items-center mb-5">
          <span class="material-icons mr-3"> local_phone </span
          >{{org.phone}}
        </p>
        <p class="flex items-center">
          <span class="material-icons mr-3"> local_post_office </span
          >{{org.email}}
        </p>
      </div>
      <h1 class="text-2xl mb-1 font-bold mt-10">活動場地</h1>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.955485801612!2d120.28389129678956!3d22.6181374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e037fc2013e71%3A0xc61249aec47e0cd1!2z6auY6ZuE5rWB6KGM6Z-z5qiC5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1683081781562!5m2!1szh-TW!2stw"
          width="1200"
          height="560"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="w-full p-4">
        <h2 class="text-2xl font-bold">{{venue.name}}</h2>
        <div class="flex items-center">
          <span class="material-icons"> place </span>{{venue.address}}
        </div>
      </div>
      <div class="flex justify-between mb-10">
        <h1 class="text-2xl mb-1 font-bold mt-10">活動票券</h1>
        <button
          class="bg-navbar hover:bg-blue-700 mt-4 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center"
          type="button"
          @click="toBuyTicketClick"
        >
          前往購票
          <span class="material-icons"> arrow_forward </span>
        </button>
      </div>
      <div class="flex flex-col md:flex-row gap-8 mt-3">
        <table class="table-auto w-full text-left">
          <thead>
            <tr class="text-gray40">
              <th class="py-2 px-4">票種</th>
              <th class="py-2 px-4">販售時間</th>
              <th class="py-2 px-4 text-right">售價</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray30">
              <td class="py-2 px-4">成人票</td>
              <td class="py-2 px-4">即日起 ~ 2023/03/30 20:00(+0800)</td>
              <td class="py-2 px-4 text-right">NT$ 400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>`,
  data() {
    return {};
  },
  props: {
    activity: {},
    org: {},
    venue: {},
  },
  methods: {
    toBuyTicketClick() {
      this.$emit("emit-buy-ticket");
    },
  },
};

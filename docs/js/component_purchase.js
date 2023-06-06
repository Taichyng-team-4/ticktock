export default {
  template: `<div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
  <!-- Main Content -->
  <main class="p-4 sm:p-6">
    <div class="mb-3">
      <a href="../index.html" class="link-secondary">首頁</a>/
      <a href="./activity.html" class="link-secondary">演唱會</a>/
      <a href="./activity.html" class="link-secondary">POP! POP! POP! 流行音樂互動展</a>
    </div>
    <!-- Event Image -->
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-2 gap-4 mb-5"
    >
      <div class="p-4 sm:p-6">
        <div class="w-full relative">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt="Event Image"
            class="w-full mb-4"
          />
        </div>
      </div>
      <div class="p-5 flex">
        <div class="self-center">
          <h3 class="font-bold text-2xl mb-10">
          {{activity.name}}
          </h3>
          <p class="flex items-center">
            <span class="material-icons mr-3"> access_time_filled </span
            >{{activity.startAtCh}}
          </p>
          <p class="flex items-center">
            <span class="material-icons mr-3"> place </span
            >{{venue.address}}
          </p>
          <p class="flex items-center">
            <span class="material-icons mr-3"> warning </span>注意資訊:
            活動場館內禁止飲食,禁止寵物入場
          </p>
        </div>
      </div>
    </div>
    <div
      class="border text-white bg-gray50 flex items-center p-4 justify-between mb-3"
    >
      <div class="flex items-center">
        <span class="material-icons mr-3"> warning_amber </span>
        <span
          >重要資訊:因為連日大雨導致地震使得場地受損，須待場地人員確認安全後才可使用，活動退票或擇期(根本不會)等資訊會再擇日公布。
        </span>
      </div>
      <span class="material-icons"> expand_more </span>
    </div>

    <img
      src="../../static/img/2023台北小巨蛋票價圖_0419.jpg"
      alt="Event Image"
      class="w-full rounded-lg mb-4"
    />
    <div class="flex flex-col md:flex-row gap-8 mt-3">
      <table
        class="table-auto w-full text-left border border-gray30 rounded-l-lg"
      >
        <thead>
          <tr class="text-gray40">
            <th class="px-4 py-2">票種</th>
            <th class="px-4 py-2">狀態</th>
            <th class="px-4 py-2 text-right">售價</th>
            <th class="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-gray30">
            <td class="px-4 py-2">成人票A區</td>
            <td class="px-4 py-2">電腦劃位</td>
            <td class="px-4 py-2 text-right">
              NT$<span class="price">300</span>
            </td>
            <td class="px-4 py-2 w-1/4">
              <div class="flex items-center justify-center">
                <button
                  class="border border-gray-500 px-2 py-1 bg-gray-200"
                  data-action="decrement"
                >
                  -
                </button>
                <input
                  type="number"
                  class="quantity border border-gray-500 text-center w-16 py-1 price"
                  min="0"
                  value="0"
                />
                <button
                  class="border border-gray-500 px-2 py-1 bg-gray-200"
                  data-action="increment"
                >
                  +
                </button>
              </div>
            </td>
          </tr>
          <tr class="border-t border-gray30">
            <td class="px-4 py-2">成人票B區</td>
            <td class="px-4 py-2">電腦劃位</td>
            <td class="px-4 py-2 text-right">
              NT$<span class="price">300</span>
            </td>
            <td class="px-4 py-2 w-1/4">
              <div class="flex items-center justify-center">
                <button
                  class="border border-gray-500 px-2 py-1 bg-gray-200"
                  data-action="decrement"
                >
                  -
                </button>
                <input
                  type="number"
                  class="quantity border border-gray-500 text-center w-16 py-1 price"
                  min="0"
                  value="0"
                />
                <button
                  class="border border-gray-500 px-2 py-1 bg-gray-200"
                  data-action="increment"
                >
                  +
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right py-2">總計：</td>
            <td class="py-2">
              <span id="total">0</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="flex justify-end">
      <div class="flex items-center mt-4 mr-2">
        <input
          id="terms"
          type="checkbox"
          class="form-checkbox h-5 w-5 text-gray-600"
        />
        <label for="terms" class="ml-2 block text-gray-900 text-sm">
          我已閱讀並同意
          <a
            href="../activity/terms.html"
            class="link-secondary text-red400"
            >購票須知</a
          >
        </label>
      </div>

      <button
        class="bg-navbar hover:bg-blue-700 mt-4 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center"
        type="button"
        @click="toPayTicket"
      >
        前往付款
        <span class="material-icons"> arrow_forward </span>
      </button>
    </div>
  </main>
</div>`,
  data() {
    return {};
  },
  props: { activity: {}, org: {}, venue: {}, startAt: null },
  methods: {
    homeClick() {
      this.$emit("emit-home");
    },
    toPayTicket() {
      this.$emit("emit-pay");
    },
  },
};

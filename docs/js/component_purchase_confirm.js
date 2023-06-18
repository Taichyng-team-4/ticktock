export default {
  template: `<div class="max-w-screen-lg mx-auto py-4 px-4 sm:px-6 lg:px-8">
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Main Content -->
      <main class="p-4 sm:p-6">
          <div class="bg-red600 text-white text-xl text-center mb-3">
              <p>
                  <span>請在 N 秒內 完成取票繳費步驟，若逾期未繳款，則系統會取消您的訂單
                  </span>
              </p>
          </div>
          <!-- Event Description -->
          <h1 class="text-3xl mb-2 font-bold text-center">POP! POP! POP! 流行音樂互動展 ＠ 高雄流行音樂中心</h1>
          <div class="text-xl text-left">
              <p><span>活動時間:{{activity.startAtEn}} ~ {{activity.endAtEn}}</span></p>
              <p><span>活動地點:{{venue.address}}</span></p>
              <p><span>主辦單位:{{org.name}}</span></p>
              <p><span>票卷種類:電子票卷</span></p>
              <p><span>付款方式 ATM虛擬帳戶，信用卡，全家 FamiPort代碼繳費</span></p>

              <div class="flex flex-col md:flex-row gap-8 mt-3">
                  <table class="table-auto w-full border-x border-b border-gray30">
                      <thead>
                          <tr class="bg-gray30">
                              <th class="px-4 py-2" colspan="4">訂單編號:124567</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="border-t border-gray30 text-center">
                              <td class="px-4 py-2 text-left" colspan="2">票卷</td>
                              <td class="px-4 py-2 text-left">A區 16排 28號</td>
                              <td class="px-4 py-2">$ 99,999 NTD</td>
                          </tr>
                          <tr class=" text-center">
                              <td class="px-4 py-2 text-left" colspan="2"></td>
                              <td class="px-4 py-2 text-left">A區 16排 28號</td>
                              <td class="px-4 py-2">$ 99,999 NTD</td>
                          </tr>
                          <tr class="border-t border-gray30 text-center">
                              <td class="px-4 py-2 text-left" colspan="2">
                                  <label class="text-red600">*</label>取票方式
                              </td>
                              <td>
                                  <div class="flex items-center">
                                      <input type="radio" name="collect_tickets_data" id="option1" checked>
                                      <label>電子票券</label>
                                  </div>
                              </td>
                          </tr>
                          <tr class=" text-center">
                              <td class="px-4 py-2 text-left" colspan="2">
                              </td>
                              <td>
                                  <div class="flex items-center">
                                      <input type="radio" name="collect_tickets_data" id="option2">
                                      <label>全家 FamiPort 取票</label>
                                  </div>
                              </td>
                          </tr>
                          <tr class="border-t border-gray30 text-center">
                              <td class="px-4 py-2 text-left" colspan="2">
                                  <label class="text-red600">*</label>付款方式
                              </td>
                              <td>
                                  <div class="flex items-center">
                                      <input type="radio" name="Payment_data" id="option1" checked>
                                      <label>信用卡</label>
                                  </div>
                              </td>
                          </tr>
                          <tr class=" text-center">
                              <td class="px-4 py-2 text-left" colspan="2">
                              </td>
                              <td>
                                  <div class="flex items-center">
                                      <input type="radio" name="Payment_data" id="option2">
                                      <label>ATM 虛擬帳號(僅適用台灣)</label>
                                  </div>
                              </td>
                          </tr>
                          <tr class="border-t border-gray30 text-center">
                              <td class="px-4 py-2 text-left" colspan="3">
                                  取票手續費
                              </td>
                              <td class="px-4 py-2 text-right">
                                  $0
                              </td>
                          </tr>
                      </tbody>
                      <tfoot>
                          <tr class="bg-secondary text-center">
                              <td class="px-4 py-2 text-left" colspan="3">
                                  總金額
                              </td>
                              <td class="px-4 py-2 text-right">
                                  $ 199,998 NTD
                              </td>
                          </tr>
                      </tfoot>
                  </table>
              </div>

              <div class="flex justify-between items-center">
                  <button
                      class="bg-red400 hover:bg-blue-700 mt-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button">
                      取消購票
                  </button>
                  <button
                      class="bg-navbar hover:bg-blue-700 mt-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      @click="homeClick">
                      <span class="material-icons">
                          check_circle
                      </span>
                      確認訂單並繳費 $199,998 NTD
                  </button>
              </div>
            </div>
      </main>
  </div>
</div>`,
  data() {
    return {};
  },
  props: { activity: {}, org: {}, venue: {}, startAt: null },
  methods: {
    homeClick() {
      this.$emit("emit-home");
    },

  },
};

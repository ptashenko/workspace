import Vue from "vue";
import App from "./App.vue";
import VueConfetti from "vue-confetti";
import metrics from "./directives/metric-event";
const VueInputMask = require("vue-inputmask").default;
Vue.use(VueConfetti);
Vue.use(VueInputMask);

Vue.use(metrics);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

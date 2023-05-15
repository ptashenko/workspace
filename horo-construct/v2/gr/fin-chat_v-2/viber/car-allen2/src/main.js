import Vue from "vue";
import App from "./App.vue";
import metrics from "./directives/metric-event";

Vue.config.productionTip = false;

Vue.use(metrics);
new Vue({
  render: (h) => h(App),
}).$mount("#app");

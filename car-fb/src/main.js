import Vue from 'vue'
import App from './App.vue'
import metrics from './directives/metric-event'
Vue.use(metrics)

Vue.config.productionTip = false
const VueInputMask = require('vue-inputmask').default;

Vue.use(VueInputMask);
new Vue({
  render: h => h(App),
}).$mount('#app')

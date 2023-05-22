import Vue from 'vue'
import App from './App.vue'
import metrics from './directives/metric-event';
Vue.use(metrics);
const VueInputMask = require('vue-inputmask').default;
Vue.use(VueInputMask);

const vueMoment = require('vue-moment');
Vue.use(vueMoment);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
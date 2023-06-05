import Vue from 'vue'
import App from './App.vue'
import localization from './filters/localization'

Vue.filter('l', localization);

Vue.config.productionTip = false;
const VueInputMask = require('vue-inputmask').default;

Vue.use(VueInputMask);
new Vue({
    render: h => h(App),
}).$mount('#app');

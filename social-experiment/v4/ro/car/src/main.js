import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

axios.defaults.baseURL = window.location.origin + window.location.pathname;

Vue.config.productionTip = false;
const VueInputMask = require('vue-inputmask').default;
Vue.directive("footer", function(el, binding, vnode) {
  if (vnode) {
    setHeight();
    window.onresize = function () {
      setHeight();
    }
  }
  function setHeight() {
    var ROLES_VIEW = 40;
    var outHeight = 550;
    var windowHeight = window.innerHeight;


    if (windowHeight > outHeight) {
      vnode.elm.style.top = (windowHeight - ROLES_VIEW) + 'px';
      vnode.elm.style.marginTop = 0;
      vnode.elm.style.position = 'absolute';

    }
    else {
      ROLES_VIEW = 0;
      vnode.elm.style.top = 'auto';
      vnode.elm.style.marginTop = '15px';
      vnode.elm.style.position = 'relative';
    }
  }
});
Vue.use(require('vue-moment'));
Vue.use(VueInputMask);
new Vue({
  render: h => h(App),
}).$mount('#app')

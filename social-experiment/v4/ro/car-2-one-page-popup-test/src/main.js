import Vue from 'vue'
import App from './App.vue'
import metrics from './directives/metric-event'
Vue.use(metrics)

const vueMoment = require('vue-moment');
Vue.use(vueMoment);

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


Vue.config.productionTip = false;


new Vue({
    render: h => h(App),
    mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
import Vue from "vue";

const metrics = Vue.directive("metrics", {
  bind: function (el) {
    el.onclick = function () {
      if (window.fbq) {
        window.fbq("track", "Lead");
      }
      if (window.gtag_report_conversion) {
        window.gtag_report_conversion();
      }
    };
  },
});

export default metrics;

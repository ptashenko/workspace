<template>
  <div id="app">
    <Chat :person="person" :footerObj="footerObj" :footerGeo="footerGeo" />
  </div>
</template>

<script>
import "normalize.css";
import Chat from "./screens/Chat";

export default {
  name: "app",
  data() {
    return {
      person: "Οικονομική υποστηριξή",
      footerObj: null,
      footerGeo: null,
    };
  },
  components: {
    Chat,
  },
  methods: {
    getFooter() {
      if (window.mbp) {
        window.mbp.pixel.send("footer").then((resp) => {
          if (resp.data) {
            this.footerObj = resp.data;
            this.footerGeo = Object.keys(this.footerObj.main_footer)[0];
          }
        });
      }
    },
  },
  mounted() {
    window.addEventListener("load", () => {
      if (window.mbp) {
        window.mbp.pixel.send("click").then(() => {
          this.getFooter();
        });
      }
    });
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  font-family: "Roboto", sans-serif;
  min-width: 320px;
  height: 100%;
  background: #e5e5e5;
}
html.noaff span.noaff {
  display: none;
}
#app {
  height: 100%;
}
</style>

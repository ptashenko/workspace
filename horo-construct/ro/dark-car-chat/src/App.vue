<template>
  <div id="app">
    <Chat v-if="couner === 0" @next="next" @sendZodiak="getZodiak" :person="person" />
    <Footer v-if="footerObj" :view="view" :footerObj="footerObj" :footerGeo="footerGeo" />
  </div>
</template>

<script>
import "normalize.css";
import Chat from "./screens/Chat";
import Footer from "./components/Footer";

export default {
  name: "app",
  data: function () {
    return {
      person: "Horoscop personal",
      zodiak: null,
      couner: 0,
      footerObj: null,
      footerGeo: null,
      view: false
    }
  },
  components: {
    Chat,
    Footer
  },
  methods: {
    getZodiak(zodiak) {
      this.zodiak = zodiak;
    },
    next(data) {
      this.couner += data;
    },
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
  background: #0c1117;
}

#app {
  background: #ede6dd;
  height: 100%;
  background: #0c1117;
  padding-bottom: 37px;
}
</style>

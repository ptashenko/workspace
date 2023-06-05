<template>
  <div id="app">
    <Chat v-if="couner === 0" @next="next" :clickID="click_id" @sendZodiak="getZodiak" :person="person" @view="changeView"/>
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
      click_id: null,
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
    changeView(value) {
      this.view = value;
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
    window.addEventListener('load', () => {
      if (window.mbp) {
        window.mbp.pixel.send('click').then(response => {
          this.click_id = response;
          this.getFooter();
        })
      }
    })
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
  padding-bottom: 50px;
}
</style>

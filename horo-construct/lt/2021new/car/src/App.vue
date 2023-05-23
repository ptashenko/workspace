<template>
  <div id="app">
    <div class="container">
      <Chat :person="person" />
    </div>
    <Footer :footerObj="footerObj" :footerGeo="footerGeo" />
  </div>
</template>

<script>
import "normalize.css";
import Chat from "./screens/Chat";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  data() {
    return {
      person: "Asmeninis horoskopas",
      footerObj: null,
      footerGeo: null,
    };
  },
  components: {
    Chat,
    Footer
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
  background: #ccc9d2;
}

#app {
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  height: 100%;
}

html {
  &.noaff {
    span {
      &.noaff {
        display: none;
      }
    }
  }
}

.container {
  overflow: scroll;
  height: 100%;
  flex-shrink: 0;
}
</style>

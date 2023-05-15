<template>
  <div id="app">
    <Chat :person="person" :footer="footerObj" :footerGeo="footerGeo"/>
  </div>
</template>

<script>
import "normalize.css";
import Chat from "./screens/Chat";

export default {
  name: "app",
  data() {
    return {
      person: "Οικονομική υποστήριξη",
      footerObj: null,
      footerGeo: null
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
            // тут мы обрабатываем то, что получили в resp.data
            this.footerObj = resp.data;

            //первое гео футера
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
          this.getFooter()
        })
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
  background: #e5e5e5;
  height: 100%;
}
html.noaff span.noaff {
  display: none;
}
#app {
  height: 100%;
}
</style>

<template>
  <div id="app">
    <Chat :person="persons[getRandomPersonIndex]" :personIndex="getRandomPersonIndex" :footer="footerObj" :footerGeo="footerGeo" />
  </div>
</template>

<script>
import "normalize.css";
import Chat from "./screens/Chat";
import persons from "@/mixins/persons";

export default {
  name: "app",
  data() {
    return {
      footerObj: null,
      footerGeo: null,
    };
  },
  mixins: [persons],
  components: {
    Chat,
  },
  computed: {
    getRandomPersonIndex() {
      const personIndex = Math.floor(Math.random() * (this.persons.length));
      return personIndex;
    }
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
        window.mbp.pixel
          .send("click", {
            v: window.mbp.f,
            link: window.location.search,
          })
          .then(() => {
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
}
#app {
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
</style>

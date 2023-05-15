<template>
  <div id="app">
    <Chat @view="changeView" :person="person" />
    <Footer :view="view"></Footer>
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
      person: "Sorina Petrescu",
      zodiak: null,
      view: false
    }
  },
  components: {
    Chat,
    Footer
  },
  methods: {
    changeView(value) {
      this.view = value;
    }
  },
  mounted() {
    window.addEventListener('load', function () {
      if ( window.mbp ) {
        window.mbp.pixel.send('click', {
            v:window.mbp.f, 
            link: window.location.search,
        })
      }
    })
  }
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
  padding: 0 0 35px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

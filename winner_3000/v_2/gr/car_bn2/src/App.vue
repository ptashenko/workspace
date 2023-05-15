<template>
  <div
    id="app"
    :style="{
      paddingBottom:
        screen === 'preview' || screen === 'result' ? '25px' : null,
    }"
  >
    <div class="container">
      <div class="top"><HeaderComponent v-if="header" /></div>
      <Preview
        @switchScreen="screenSwitcher"
        v-if="!screen || screen === 'preview'"
      />
      <Review
        @switchScreen="screenSwitcher"
        v-if="!screen || screen === 'review'"
        :currentCity="currentCity"
      />
      <transition name="fade">
        <Quiz @switchScreen="screenSwitcher" v-if="screen === 'quiz'" />
      </transition>
      <transition name="fade">
        <Loading @switchScreen="screenSwitcher" v-if="screen === 'loading'" />
      </transition>
      <transition name="fade">
        <Result v-if="screen === 'result'" />
      </transition>
    </div>
    <Footer
      v-if="footerObj && (screen === 'preview' || screen === 'result')"
      :screen="screen"
      :footerObj="footerObj"
      :footerGeo="footerGeo"
    />
  </div>
</template>

<script>
import { getCity } from "@/services/api";
import HeaderComponent from "./components/Header";
import Preview from "./screens/Preview";
import Review from "./screens/Review";
import Loading from "./screens/Loading";
import Result from "./screens/Result";
import Quiz from "./screens/Quiz";
import Footer from "./components/Footer";
import "normalize.css";
export default {
  name: "app",
  components: {
    HeaderComponent,
    Preview,
    Quiz,
    Loading,
    Result,
    Review,
    Footer,
  },
  data() {
    return {
      screen: "preview",
      header: true,
      currentCity: "",
      footerObj: null,
      footerGeo: null,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      if (window.mbp) {
        window.mbp.pixel.send("click").then(() => {
          this.getFooter();
        });
      }
    });
    setTimeout(() => {
      this.$confetti.start();
      setTimeout(() => this.$confetti.stop(), 2000);
    }, 1000);

    getCity().then((response) => {
      this.currentCity = response.data.city;
    });
  },

  methods: {
    screenSwitcher(screen) {
      this.screen = screen;
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
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  font-family: "Roboto", sans-serif;
  height: 100%;
}
html {
  background: #e5e5e5;
  .noaff span.noaff {
    display: none;
  }
}
#app {
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
}
.container {
  height: 100%;
  min-height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.top {
  padding-top: 68px;
}
</style>

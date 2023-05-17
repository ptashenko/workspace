<template>
  <div :class="getAppClassName">
    <div class="container" :class="{ start: currentPage === 0 }">
      <component
        :is="pages[currentPage]"
        @next-page="onNextPage"
        :checkDevice="checkDevice"
        :isItIphone="checkDevice === 'iOS'"
      ></component>
      <Transition name="tiktok">
        <TikTokBtns v-if="currentPage === 0"></TikTokBtns>
      </Transition>
    </div>
    <Footer
      v-if="currentPage === 0 || currentPage === 3"
      :currentPage="currentPage"
      :footerObj="footerObj"
      :footerGeo="footerGeo"
    >
    </Footer>
  </div>
</template>

<script>
import Start from "@/pages/Start";
import Test from "@/pages/Test";
import Calculate from "@/pages/Calculate";
import Result from "@/pages/Result";
import TikTokBtns from "@/components/TikTokBtns.vue";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Start, Test, Calculate, Result, TikTokBtns, Footer },
  data() {
    return {
      currentPage: 0, //0-3
      pages: [Start, Test, Calculate, Result],
      click_id: null,
      footerObj: null,
      footerGeo: null,
    };
  },
  computed: {
    getAppClassName() {
      return (
        (this.currentPage === 0 && "app app--start") ||
        (this.currentPage === 3 && "app app--results") ||
        "app"
      );
    },
    checkDevice() {
      let MobileUserAgent =
        navigator.userAgent || navigator.vendor || window.opera;

      if (
        MobileUserAgent.match(/iPhone/i) ||
        MobileUserAgent.match(/iPod/i) ||
        MobileUserAgent.match(/iPad/i)
      ) {
        return "iOS";
      } else if (MobileUserAgent.match(/Android/i)) {
        return "Android";
      } else {
        return "Desktop";
      }
    },
  },
  methods: {
    onNextPage() {
      this.currentPage++;
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
        window.mbp.pixel.send("click").then((response) => {
          this.click_id = response;
          this.getFooter();
        });
      }
    });
  },
};
</script>

<style lang="scss">
@import "../src/assets/styles/index.scss";
@import "../src/assets/styles/functions.scss";

* {
  flex-shrink: 0;
}

html {
  font-family: "Futura PT", sans-serif;
  height: 100%;
}

body {
  position: relative;
  background-color: #121212;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
}

.app {
  height: 100%;
}

.app--start {
  padding: 0 0 vh(32px);
}

.app--results {
  padding: 0 0 vh(30px);
}

.container {
  display: flex;
  flex-direction: column;
  max-width: vh(550px);
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: vh(50px) vh(20px) 0;
  margin: 0 auto;
  overflow-y: scroll;

  &.start {
    padding: vh(50px) 0 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 450px) {
    padding: vh(15px) vh(25px) 0;
  }
  @media (max-width: 320px) {
    padding: vh(15px) vh(15px) 0;
  }
}

.no-padding {
  padding: 0;
}

@keyframes scale-btn {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

.tiktok-leave-active {
  transition: 0.3s all ease;
}
.tiktok-leave-to {
  opacity: 0;
}
</style>

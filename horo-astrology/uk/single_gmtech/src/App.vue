<template>
  <div id="app">
    <div class="content" ref="content" :class="checkDevice">
      <Start v-if="page === 'start'" v-on:nextPageTest="nextPageTest"></Start>
      <Test v-if="page === 'test'" v-on:nextPageCalc="nextPageCalc"></Test>
      <Calculate
        v-if="page === 'calculate'"
        v-on:nextPageResults="nextPageResults"
      ></Calculate>
      <Results
        v-if="page === 'results'"
        v-on:nextPageStart="nextPageStart"
        :device="checkDevice"
        :zodiak="zodiak"
        :clickID="click_id"
        :key_id="key"
      ></Results>
    </div>
    <Copyright v-if="page === 'start' || page === 'test'"></Copyright>
    <Footer v-if="page === 'results'"></Footer>
  </div>
</template>

<script>
import Start from "@/pages/Start";
import Test from "@/pages/Test";
import Calculate from "@/pages/Calculate";
import Results from "@/pages/Results";
import Copyright from "@/text/Copyright";
import Footer from "@/text/Footer";
import { postSubs } from "@/services/landAPI";

export default {
  name: "App",
  components: {
    Start,
    Test,
    Calculate,
    Results,
    Copyright,
    Footer,
  },
  data() {
    return {
      page: "start",
      click_id: null,
      QUERY: this.getQuery(window.location.search) || null,
      key: null,
      zodiak: {},
    };
  },
  computed: {
    checkDevice() {
      let device = null;
      let MobileUserAgent =
        navigator.userAgent || navigator.vendor || window.opera;

      let isTablet =
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
          MobileUserAgent.toLowerCase()
        );

      if (
        MobileUserAgent.match(/iPhone/i) ||
        (MobileUserAgent.match(/iPod/i) && !isTablet)
      ) {
        device = "iOS";
      } else if (MobileUserAgent.match(/Android/i) && !isTablet) {
        device = "Android";
      } else if (MobileUserAgent.match(/iPad/i) || isTablet) {
        device = "Tablet";
      } else {
        device = "Desctop";
      }
      return device;
    },
  },
  methods: {
    nextPageTest() {
      this.page = "test";
    },
    nextPageCalc(e) {
      this.zodiak = e;
      this.page = "calculate";
    },
    nextPageResults() {
      this.page = "results";
    },
    nextPageStart() {
      this.page = "start";
    },
    keyGenerate(length) {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    getQuery(string) {
      return string
        ? string
            .slice(1)
            .split("&")
            .map((queryParam) => {
              let kvp = queryParam.split("=");
              return { key: kvp[0], value: kvp[1] };
            })
            .reduce((query, kvp) => {
              query[kvp.key] = kvp.value;
              return query;
            }, {})
        : {};
    },
    // getHeight() {
    //   let content = this.$refs.content;
    //   let contentHeight = content.scrollHeight;
    //   let contentChildren = this.$refs.content.children[0].scrollHeight + 54;
    //   if (this.page === "results") {
    //     content.classList.add("unset");
    //     content.style.height = "auto";
    //   }
    //   if (contentHeight < contentChildren && this.page !== "results") {
    //     content.style.minHeight = contentChildren + "px";
    //   } else if (contentHeight > contentChildren) {
    //     content.style.minHeight = "unset";
    //   }
    // },
  },
  mounted() {
    // window.onresize = () => {
    //   this.getHeight();
    // };
    // setTimeout(() => this.getHeight(), 100);

    if (!this.QUERY.click_id) {
      let data = JSON.stringify(this.QUERY);
      this.key = this.keyGenerate(12);
      postSubs(data, this.key).then((response) => {
        this.click_id = response.data;
      });
    } else {
      this.click_id = this.QUERY.click_id;
    }
  },
  // updated() {
  //   this.getHeight();
  // },
};
</script>

<style lang="scss">
::placeholder {
  color: #666;
}

* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}

html {
  -webkit-text-size-adjust: 100%;
}

html,
#app {
  height: 100%;
}

#app {
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
}

body {
  font-size: 16px;
  line-height: 1.3;
  min-width: 320px;
  position: relative;
  overflow-x: hidden;
  color: #000000;
  margin: 0;
  background-color: #000000;
  height: 100%;
  background-image: url("assets/static/1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 500px) {
    background-size: 500px auto;
  }
  input,
  textarea {
    border: #666 1px solid;
    outline: none;
  }
}

p {
  margin: 0;
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

b,
strong {
  font-weight: bold;
}

a {
  text-decoration: none;
}

h1,
h2 {
  margin: 0;
  font-weight: 400;
}

.content {
  flex-shrink: 0;
  max-width: 375px;
  margin: 0 auto;
  height: 100%;
  padding-bottom: 54px;
  overflow: scroll;
  /* &.unset {
    min-height: 700px !important;
    @media (max-height: 700px) {
      min-height: 540px !important;
    }
  } */
}
.content:not(.Desctop) {
  .wrapper.btnStart {
    justify-content: flex-start;
  }
}

.img {
  display: block;
  img {
    display: block;
    width: 100%;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 16px;
}

.input {
  display: flex;
  flex-direction: column;
  width: 341px;
  max-width: 100%;
  &--title {
    margin-bottom: 2px;
    padding-left: 10px;
    font-size: 12px;
    line-height: 14px;
    color: #b4b8cd;
  }
  &--input {
    border: 2px solid #b4b8cd;
    border-radius: 10px;
    background-color: transparent;
    height: 47px;
    padding: 0 10px;
    font-size: 18px;
    transition: all 0.2s;
    &.error {
      border-color: red;
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>

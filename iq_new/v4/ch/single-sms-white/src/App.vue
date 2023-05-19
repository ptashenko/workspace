<template>
  <div id="app">
    <div class="container">
      <Start v-if="page === 'start'" v-on:nextPageTest="nextPageTest"></Start>
      <Test
        v-if="page === 'test'"
        v-on:nextPageCalc="nextPageCalc"
        @getPoint="setSumPoint"
      ></Test>
      <Calculate
        v-if="page === 'calculate'"
        v-on:nextPageResults="nextPageResults"
      ></Calculate>
      <Results
        v-if="page === 'results'"
        v-on:nextPageStart="nextPageStart"
        :device="checkDevice"
        :clickID="click_id"
        :sumCode="sumCode"
      ></Results>
    </div>
    <Footer v-if="page === 'start' || page === 'results'" />
  </div>
</template>

<script>
import Start from "@/components/Start";
import Test from "@/components/Test";
import Calculate from "@/components/Calculate";
import Results from "@/components/Results";
import Footer from '@/text/Footer';

export default {
  name: "App",
  components: {
    Start,
    Test,
    Calculate,
    Results,
    Footer
  },
  data() {
    return {
      page: "start",
      click_id: null,
      sumCode: null,
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
    setSumPoint(sumPoint) {
      if (sumPoint <= 15) {
        this.sumCode = "Q01";
      } else if (sumPoint >= 16 && sumPoint <= 25) {
        this.sumCode = "Q02";
      } else if (sumPoint >= 26 && sumPoint <= 35) {
        this.sumCode = "Q03";
      } else if (sumPoint >= 36 && sumPoint <= 50) {
        this.sumCode = "Q04";
      } else if (sumPoint >= 51 && sumPoint <= 65) {
        this.sumCode = "Q05";
      } else if (sumPoint >= 66 && sumPoint <= 75) {
        this.sumCode = "Q06";
      } else if (sumPoint >= 76 && sumPoint <= 85) {
        this.sumCode = "Q07";
      } else if (sumPoint >= 86 && sumPoint <= 90) {
        this.sumCode = "Q08";
      }
    },
    nextPageTest() {
      this.page = "test";
    },
    nextPageCalc() {
      this.page = "calculate";
    },
    nextPageResults() {
      this.page = "results";
    },
    nextPageStart() {
      this.page = "start";
    },
  },
  mounted() {
    window.addEventListener('load', () => {
  if ( window.mbp ) {
    window.mbp.pixel.send('click').then(response => {
      this.click_id = response;
    })
  }
})
  },
};
</script>

<style lang="scss">
::placeholder {
  color: #666;
}

* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

html,
body {
  height: 100%;
}

body {
  font-size: 16px;
  min-width: 320px;
  position: relative;
  line-height: unset;
  overflow-x: hidden;
  color: #000000;
  background-color: #ffffff;
  margin: 0;
  input,
  textarea {
    border: #666 1px solid;
    outline: none;
  }
}

#app {
  display: flex;
  flex-direction: column;
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

.container {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  height: 100%;
  background-position: calc(50% + 49px) calc(50% + 4px);
  .content {
    flex: 1 0 auto;
    position: relative;
    &--top {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      @media (max-width: 320px) {
        & > span {
          display: block;
        }
      }
    }
  }
}
.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 280px;
  max-width: 355px;
  margin: 0 auto;
  padding: 15px 20px 15px;
  @media (max-height: 600px) and (max-width: 360px) {
    max-width: 100%;
  }
  @media (max-width: 320px) {
    & > span {
      display: block;
    }
  }
  & > span {
    max-width: 100%;
  }
}

.img {
  display: flex;
  width: 161px;
  img {
    width: 100%;
  }
}

.btn {
  align-self: center;
  max-width: 100%;
  width: 203px;
  padding: 12px 0;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  outline: none;
  cursor: pointer;
  border: 0;
  box-shadow: 0px 0px 10px 5px rgba(250, 152, 37, 0.2);
  transition: color, background-color 0.2s;
  background-color: #ffffff;
  border-radius: 15px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  &.active,
  &:active {
    color: #ffffff;
    background-color: #fa9825;
  }
  &--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 27px;
    .btn {
      margin-bottom: 21px;
      @media (max-height: 568px) and (max-width: 320px) {
        font-size: 16px;
        line-height: 20px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    &.error {
      .btn {
        box-shadow: 0px 0px 10px 5px rgba(195, 35, 35, 0.3);
      }
    }
    &.big {
      .btn {
        width: 315px;
        font-size: 20px;
        line-height: 23px;
        @media (max-height: 568px) and (max-width: 320px) {
          font-size: 16px;
          line-height: 20px;
        }
      }
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

html.noaff span.noaff {
  display: none;
}
</style>

<template>
  <div id="app">
    <div class="container">
      <Start v-if="page === 'start'" v-on:nextPageTest="nextPageTest"></Start>
      <Test
        v-if="page === 'test'"
        @getPoint="setSumPoint"
        v-on:nextPageCalc="nextPageCalc"
      ></Test>
      <Calculate
        v-if="page === 'calculate'"
        v-on:nextPageResults="nextPageResults"
      ></Calculate>
      <Results
        v-if="page === 'results'"
        :sumCode="sumCode"
        v-on:nextPageStart="nextPageStart"
        :textId="textId"
        :phoneNumber="phoneNumber"
      ></Results>
    </div>
    <Copyright v-if="page === 'start' || page === 'test'"></Copyright>
    <Footer v-if="page === 'results'"></Footer>
  </div>
</template>

<script>
import Start from "@/components/Start";
import Test from "@/components/Test";
import Calculate from "@/components/Calculate";
import Results from "@/components/Results";
import Footer from "@/text/Footer";
import Copyright from "@/text/Copyright";

export default {
  name: "App",
  components: {
    Start,
    Test,
    Calculate,
    Results,
    Copyright,
    Footer
  },
  data() {
    return {
      page: "start",
      sumCode: null,
      textId: null,
        phoneNumber: null,

    };
  },
  methods: {
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
    setSumPoint(sumPoint) {
      this.setTextId(sumPoint);
      if (sumPoint <= 15) {
        this.sumCode = "Q01";
        this.phoneNumber='+449010343147';
      } else if (sumPoint >= 16 && sumPoint <= 25) {
        this.sumCode = "Q02";
          this.phoneNumber='+449010343144';
      } else if (sumPoint >= 26 && sumPoint <= 35) {
        this.sumCode = "Q03";
          this.phoneNumber='+449010343020';
      } else if (sumPoint >= 36 && sumPoint <= 50) {
        this.sumCode = "Q04";
          this.phoneNumber='+449010343140';
      } else if (sumPoint >= 51 && sumPoint <= 65) {
        this.sumCode = "Q05";
          this.phoneNumber='+449010343171';
      } else if (sumPoint >= 66 && sumPoint <= 75) {
        this.sumCode = "Q06";
          this.phoneNumber='+449010343133';
      } else if (sumPoint >= 76 && sumPoint <= 85) {
        this.sumCode = "Q07";
          this.phoneNumber='+449010343185';
      } else if (sumPoint >= 86 && sumPoint <= 90) {
        this.sumCode = "Q08";
          this.phoneNumber='+449010343003';
      }
    },
    setTextId(sumPoint) {
      const scopes = Math.round((sumPoint / 90) * 100);
      console.log(scopes);
      if (scopes < 5) {
        this.textId = 0;
      } else if (scopes >= 5 && scopes <= 25) {
        this.textId = 1;
      } else if (scopes >= 26 && scopes <= 45) {
        this.textId = 2;
      } else if (scopes >= 46 && scopes <= 65) {
        this.textId = 3;
      } else if (scopes >= 66 && scopes <= 85) {
        this.textId = 4;
      } else if (scopes >= 86 && scopes <= 95) {
        this.textId = 5;
      } else if (scopes >= 96 && scopes <= 99) {
        this.textId = 6;
      } else {
        this.textId = 7;
      }
    },
  },
  mounted() {
    window.addEventListener("load", () => {
      if (window.mbp) {
        window.mbp.pixel.send("click");
      }
    });
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

html {
  -webkit-text-size-adjust: 100%;
}

html,
#app {
  height: 100%;
}

#app {
  padding-bottom: 37px;
  display: flex;
  flex-direction: column;
}

body {
  height: 100%;
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

.price {
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-shrink: 0;
  background-position: calc(50% + 49px) calc(50% + 4px);
  overflow: scroll;

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

.container::-webkit-scrollbar {
  display: none;
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
  padding: 0 20px 15px;
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
  padding: 12px 5px;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  outline: none;
  cursor: pointer;
  border: 0;
  box-shadow: 0px 0px 10px 5px rgba(54, 190, 87, 0.2);
  transition: all 0.2s;
  background-color: #ffffff;
  border-radius: 15px;
  &.active,
  &:active {
    color: #ffffff;
    background-color: #36be57;
  }
  &--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 27px;
    .btn {
      margin-bottom: 21px;
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
</style>

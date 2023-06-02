<template>
  <div id="app">
    <div class="container">
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
        :clickID="click_id"
        :skey="key"
      ></Results>
    </div>
    <Footer v-if="page === 'results'" />
  </div>
</template>

<script>
import Start from '@/components/Start';
import Test from '@/components/Test';
import Calculate from '@/components/Calculate';
import Results from '@/components/Results';
import Footer from '@/text/Footer';
import { postSubs } from '@/services/landAPI';

export default {
  name: 'App',
  components: {
    Start,
    Test,
    Calculate,
    Results,
    Footer,
  },
  data() {
    return {
      page: 'start',
      click_id: null,
      QUERY: this.getQuery(window.location.search) || null,
      key: null,
    };
  },
  computed: {
    checkDevice() {
      let device = null;
      let MobileUserAgent =
        navigator.userAgent || navigator.vendor || window.opera;

      let isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        MobileUserAgent.toLowerCase()
      );

      if (
        MobileUserAgent.match(/iPhone/i) ||
        (MobileUserAgent.match(/iPod/i) && !isTablet)
      ) {
        device = 'iOS';
      } else if (MobileUserAgent.match(/Android/i) && !isTablet) {
        device = 'Android';
      } else if (MobileUserAgent.match(/iPad/i) || isTablet) {
        device = 'Tablet';
      } else {
        device = 'Desctop';
      }
      return device;
    },
  },
  methods: {
    nextPageTest() {
      this.page = 'test';
    },
    nextPageCalc() {
      this.page = 'calculate';
    },
    nextPageResults() {
      this.page = 'results';
    },
    nextPageStart() {
      this.page = 'start';
    },
    keyGenerate(length) {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    },
    getQuery(string) {
      return string
        .slice(1)
        .split('&')
        .map((queryParam) => {
          let kvp = queryParam.split('=');
          return { key: kvp[0], value: kvp[1] };
        })
        .reduce((query, kvp) => {
          query[kvp.key] = kvp.value;
          return query;
        }, {});
    },
  },
  mounted() {
    if (!this.QUERY.click_id) {
      let data = JSON.stringify(this.QUERY);
      let key = this.keyGenerate(12);
      this.key = key;
      postSubs(data, key).then((response) => {
        this.click_id = response.data;
      })
    } else {
      this.click_id = this.QUERY.click_id;
    }
  },
};
</script>

<style lang="scss">
::placeholder {
  color: #666;
}

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  min-height: 100vh;
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

.container {
  display: flex;
  flex-direction: column;
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
  padding: 0 20px 10px;
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
  @media (max-height: 700px) and (max-width: 380px) {
    font-size: 17px;
    line-height: 20px;
  }
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
    @media (max-height: 700px) and (max-width: 380px) {
      margin-bottom: 20px;
    }
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
        @media (max-height: 700px) and (max-width: 380px) {
          font-size: 17px;
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
</style>

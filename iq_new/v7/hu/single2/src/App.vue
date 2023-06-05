<template>
  <div id="app">
    <div class="container">
      <Start v-if="page === 'start'" v-on:nextPageTest="nextPageTest"></Start>
      <Test v-if="page === 'test'" v-on:nextPageCalc="nextPageCalc"></Test>
      <Calculate v-if="page === 'calculate'" v-on:nextPageResults="nextPageResults"></Calculate>
      <Results v-if="page === 'results'" :clickID="click_id" v-on:nextPageStart="nextPageStart" :device="checkDevice"></Results>
    </div>
    <Copyright v-if="page === 'start' && footerObj" :footerObj="footerObj" :footerGeo="footerGeo" />

    <Footer v-if="page === 'results' && footerObj" :footerObj="footerObj" :footerGeo="footerGeo" />
  </div>
</template>

<script>
import Start from '@/components/Start';
import Test from '@/components/Test';
import Calculate from '@/components/Calculate';
import Results from '@/components/Results';
import Copyright from '@/text/Copyright';
import Footer from '@/text/Footer';

export default {
  name: 'App',
  components: {
    Start,
    Test,
    Calculate,
    Results,
    Footer,
    Copyright
  },
  data() {
    return {
      page: 'start',
      click_id: null,
      footerObj: null,
      footerGeo: null,
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
    window.addEventListener('load', () => {
      if (window.mbp) {
        window.mbp.pixel.send('click').then(response => {
          this.click_id = response;
          this.getFooter();
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
  font-family: 'Roboto', sans-serif;
}

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 38px;
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
  height: 100%;
  overflow: scroll;
  flex-shrink: 0;
  
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
        &>span {
          display: block;
        }
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
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
  padding: 0 20px 15px;

  @media (max-height: 600px) and (max-width: 360px) {
    max-width: 100%;
  }

  @media (max-width: 320px) {
    &>span {
      display: block;
    }
  }

  &>span {
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
    width: 200px;
    padding: 10px 5px;
    font-size: 18px;
    line-height: 23px;
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
      margin-bottom: 13px;
    }

    .btn {
      margin-bottom: 21px;

      @media (max-height: 700px) and (max-width: 380px) {
        margin-bottom: 15px;
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
        font-size: 18px;
        line-height: 23px;

        @media (max-height: 700px) and (max-width: 380px) {
          width: 290px;
          margin-bottom: 15px;
          font-size: 18px;
        }

        &:last-child {
          margin-bottom: 0;
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

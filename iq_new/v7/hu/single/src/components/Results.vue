<template>
  <div
    class="results content"
    :class="{ android: device === 'Android', ios: device === 'iOS' }"
  >
    <div class="wrapper">
      <span class="img">
        <img :src="require('../assets/static/' + text.img)" alt="" />
      </span>
      <span class="results__title">{{ text.title }}</span>
      <span class="results__underline">{{ text.underline }}</span>
      <span class="results__frame">{{ text.frame }}</span>
      <span class="results__timer">{{ text.timer }} {{ time }}</span>
      <a class="btn active callBtn" v-metrics href="tel:12345678" @click="sendClick()">
        {{ text.button }}
      </a>
    </div>
  </div>
</template>

<script>
import { results } from '@/text/results';
import { sendCLick } from '@/services/landAPI';

export default {
  name: 'Results.vue',
  props: ['device', 'clickID', 'skey'],
  data() {
    return {
      text: results,
      time: '',
    };
  },
  methods: {
    fmtMSS(s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
    },
    timeExpire() {
      let time = 240;
      this.time = this.fmtMSS(time);
      let timeCalc = setInterval(() => {
        if (time === 0) {
          clearInterval(timeCalc);
          this.nextPageStart();
        } else {
          this.time = this.fmtMSS(time);
          time--;
        }
      }, 1000);
    },
    nextPageStart() {
      this.$emit('nextPageStart');
    },
    sendClick() {
      sendCLick(this.clickID, this.skey);
    },
  },
  mounted() {
    this.timeExpire();
  }
};
</script>

<style lang="scss">
.results {
  padding-top: 0;
  @media (max-height: 736px) and (max-width: 414px) {
    padding-top: 5px;
  }
  @media (max-width: 320px) {
    padding-top: 5px;
  }

  .img {
    margin-bottom: 19px;
    width: 205px;
    height: 112px;
    @media (max-height: 736px) and (max-width: 414px) {
      margin-bottom: 10px;
      width: 128px;
      height: 71px;
    }
  }
  .wrapper {
    padding-top: 30px;
    @media (max-height: 736px) and (max-width: 414px) {
      padding-top: 10px;
    }
  }
  &__title {
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 17px;
    line-height: 19px;
    text-align: center;
    @media (max-height: 736px) and (max-width: 414px) {
      font-size: 15px;
      line-height: 17px;
      margin-bottom: 8px;
    }
    @media (max-width: 320px) {
      font-size: 11px;
      line-height: 13px;
      margin-bottom: 8px;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    background-position: 50px center;
    text-align: center;
    padding: 24px 10px;
    animation: pulse 1.5s infinite;
    @media (max-height: 736px) and (max-width: 414px) {
      font-size: 20px;
      line-height: 22px;
      padding: 10px 10px;
      width: 280px;
    }
    @media (max-width: 320px) {
      font-size: 20px;
      line-height: 22px;
      padding: 5px 10px;
    }
    &:before {
      content: '';
      display: block;
      margin-right: 10px;
      width: 60px;
      height: 39px;
      background-image: url('../assets/static/calls.svg');
      background-repeat: no-repeat;
      background-size: contain;
    }
    &.active {
      background-color: #36be57;
    }
  }
  &__underline {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #36be57;
    @media (max-height: 736px) and (max-width: 414px) {
      font-size: 13px;
      line-height: 15px;
      margin-bottom: 8px;
    }
    @media (max-width: 320px) {
      font-size: 10px;
      line-height: 13px;
      margin-bottom: 8px;
    }
  }
  &__frame {
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    border: 1px solid #000000;
    padding: 10px;
    @media (max-height: 736px) and (max-width: 414px) {
      font-size: 13px;
      line-height: 15px;
      margin-bottom: 10px;
    }
    @media (max-width: 320px) {
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 10px;
    }
  }
  &__timer {
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    color: #36be57;
    @media (max-height: 736px) and (max-width: 414px) {
      margin-bottom: 10px;
    }
    @media (max-width: 320px) {
      margin-bottom: 10px;
    }
  }
}
</style>

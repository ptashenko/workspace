<template>
  <div
    class="results content"
    :class="{ android: device == 'Android', ios: device == 'iOS' }"
  >
    <div class="wrapper">
      <span class="img">
        <img :src="require('../assets/static/' + text.img)" alt="" />
      </span>
      <span class="title">{{ text.title }}</span>
      <span class="results__special">{{ text.special }}</span>
      <span class="results__info">{{ text.suddenly }}</span>
      <p class="results__code">
        KODEN FÖR DITT RESULTAT ÄR {{sumCode}}
      </p>
      <span class="results__hurry">{{ text.hurry }}</span>
      <span class="results__info">{{ text.info }}</span>
      <a class="btn active callBtn" v-metrics :href="buttonLink" @click="sendClick()">
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
  props: ['device', 'clickID','sumCode'],
  data() {
    return {
      text: results,
      time: '',
      messageText: this.checkId(),
      buttonLink: null,
      smsFlow: null,
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
        if (time == 0) {
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
    checkId() {
      let smsText = '';
      if (this.clickID) {
        smsText =
          'IQT ' +
          this.clickID +
          ' Ich mochte mehr Informationen!';
      } else {
        smsText =
          'IQT Ich mochte mehr Informationen!';
      }
      return smsText;
    },
    buttonCreator(type, href) {
      this.buttonLink = href;
    },
    checkOperator() {
      this.buttonCreator('sms', this.smsBuilder());
    },
    smsBuilder() {
      var smsTemplate;
      switch (this.device) {
        case 'iOS':
          smsTemplate = 'sms:595&body=' + encodeURI(this.messageText);
          break;
        case 'Android':
          smsTemplate = 'sms:595?body=' + encodeURI(this.messageText);
          break;
        default:
          smsTemplate = '#';
          break;
      }
      return smsTemplate;
    },
    sendClick() {
      sendCLick(this.clickID);
    },
  },
  mounted() {
    this.timeExpire();
  },
  created() {
    this.checkOperator();
  },
};
</script>

<style lang="scss">
.results {
  padding-top: 0;
  &.android {
    .wrapper {
      min-height: auto;
    }
  }
  &.ios {
    .wrapper {
      min-height: auto;
    }
  }
  .img {
    margin-bottom: 19px;
    width: 110px;
    height: 112px;
    @media (max-height: 736px), (max-width: 414px) {
      margin-bottom: 15px;
      width: 90px;
      height: 91px;
    }
  }
  .wrapper {
    padding-top: 30px;
    padding-bottom: 40px;
    min-height: 100vh;
    @media (max-height: 736px), (max-width: 414px) {
      padding-top: 15px;
    }
  }
  .title {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    @media (max-height: 736px), (max-width: 414px) {
      margin-bottom: 15px;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    background-position: 50px center;
    text-align: right;
    padding: 24px 10px;
    animation: pulse 1.5s infinite;
    @media (max-height: 736px), (max-width: 414px) {
      padding: 16px 10px;
      width: 280px;
    }
    &:before {
      content: '';
      display: block;
      margin-right: 10px;
      width: 39px;
      height: 39px;
      background-image: url('../assets/static/email.svg');
      background-repeat: no-repeat;
    }
    &.active {
      background-color: #36be57;
    }
  }
  &__special {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 33px;
    line-height: 39px;
    text-align: center;
    text-decoration-line: underline;
    color: #fa9825;
    @media (max-height: 736px), (max-width: 414px) {
      margin-bottom: 15px;
      font-size: 24px;
      line-height: 30px;
    }
    @media(max-height: 568px) and (max-width: 320px) {
      font-size: 20px;
      line-height: 26px;
    }
  }
  &__info {
    margin-bottom: 21px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    @media (max-height: 736px), (max-width: 414px) {
      margin-bottom: 15px;
      font-size: 14px;
      line-height: 17px;
    }
  }
  &__code {
    @media (max-height: 736px), (max-width: 414px) {
      font-size: 15px;
      line-height: 19px;
    }
  }
  &__hurry {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    color: red;
    @media (max-height: 736px), (max-width: 414px) {
      margin-bottom: 15px;
      font-size: 20px;
      line-height: 24px;
    }
    @media(max-height: 568px) and (max-width: 320px) {
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 20px;
    }
  }
  &__wait {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #fa9825;
    @media (max-height: 736px), (max-width: 414px) {
      margin-bottom: 15px;
    }
    @media(max-height: 568px) and (max-width: 320px) {
      font-size: 15px;
      line-height: 19px;
    }
  }
}
</style>

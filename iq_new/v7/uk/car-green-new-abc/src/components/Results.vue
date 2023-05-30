<template>
  <div class="results content">
    <div class="wrapper">
      <span class="img">
        <img :src="require('../assets/static/' + text.img)" alt="" />
      </span>
      <!--      <span class="results__points">{{ text.calculate}} {{ this.sumCode }}</span>-->
      <span class="results__info"
        ><strong>{{ text.suddenly[textId] }}</strong></span
      >
      <span class="results__info">{{ text.info[textId] }}</span>
      <span class="results__frame">{{ resultText }}</span>
      <!--      <span class="results__wait">{{ text.wait }} {{ time }}</span>-->

      <div class="call-info-wrap">
        <div class="call-info" v-html="text.callInfo"></div>
      </div>

      <a
        class="btn active callBtn"
        v-metrics
        @click="sendClick"
        :href="'tel:' + phoneNumber"
      >
        {{ text.button }}
      </a>
    </div>
  </div>
</template>

<script>
import Footer from "@/text/Footer";
import { results } from "@/text/results";
import { sendCLick } from "@/services/landAPI";

export default {
  name: "Results.vue",
  components: { Footer },
  props: ["sumCode", "textId","phoneNumber"],
  data() {
    return {
      text: results,
      time: "",
      // defaultPhoneNumber: `+449010343197`,
    };
  },
  computed: {
    resultText() {
      return this.text.frame[this.textId];
    },
  },
  methods: {
    fmtMSS(s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
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
      this.$emit("nextPageStart");
    },
    sendClick() {
      if (window.mbp) {
        window.mbp.pixel.send("cta");
      }
    },
    // createLink(tel) {
    //   let a = document.createElement("a");
    //   a.href = `tel:${tel}`;
    //   a.style.display = "none";
    //   document.body.appendChild(a);
    //   a.click();
    // },
    // getPhoneNumber() {
    //   if (window.mbp) {
    //     window.mbp.pixel
    //       .send("phone")
    //       .then((response) => {
    //         this.phoneNumber = "+" + response;
    //         this.createLink(this.phoneNumber);
    //       })
    //       .catch(() => {
    //         this.phoneNumber = this.defaultPhoneNumber;
    //         this.createLink(this.phoneNumber);
    //       });
    //   } else {
    //     this.phoneNumber = this.defaultPhoneNumber;
    //     this.createLink(this.phoneNumber);
    //   }
    // },
  },
  mounted() {
    this.timeExpire();
  },
};
</script>

<style lang="scss">
.results {
  padding-top: 0;
  .img {
    margin-bottom: 19px;
    width: 205px;
    height: 112px;
    @media (max-height: 700px), (max-width: 400px) {
      width: 170px;
      height: 91px;
      margin-bottom: 15px;
    }
  }
  .wrapper {
    padding-top: 30px;
    padding-bottom: 0;
    @media (max-height: 700px), (max-width: 400px) {
      padding-top: 15px;
    }
  }
  .title {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    background-position: 50px center;
    text-align: center;
    padding: 24px 4px;
    @media (max-height: 736px), (max-width: 414px) {
      font-size: 20px;
      padding: 10px 0;
      width: 310px;
    }
    @media (max-height: 320px), (max-width: 568px) {
      font-size: 18px;
    }
    &:before {
      content: "";
      display: block;
      margin-right: 10px;
      width: 39px;
      height: 39px;
      background-image: url("../assets/static/call.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
    &.active {
      background-color: #36be57;
      margin-bottom: 20px;
    }
  }
  &__info {
    margin-bottom: 21px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    @media (max-height: 700px), (max-width: 400px) {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 10px;
    }
  }
  &__hurry {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    color: red;
    @media (max-height: 700px), (max-width: 400px) {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 15px;
    }
  }
  &__frame {
    margin-bottom: 21px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    border: 2px solid #36be57;
    padding: 5px;
    @media (max-height: 700px), (max-width: 400px) {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 10px;
      padding: 3px;
    }
  }
  &__wait {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: red;
    @media (max-height: 700px), (max-width: 400px) {
      margin-bottom: 15px;
    }
  }
  &__points {
    color: #f88c8a;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .call-info-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    margin-bottom: 15px;
    @media (max-height: 700px), (max-width: 400px) {
      height: 80px;
      margin-bottom: 10px;
    }
  }

  .call-info {
    display: block;
    width: 100%;
    padding: 10px;
    border: 4px solid #36be57;

    color: #000;
    font-size: 15px;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;
    box-sizing: border-box;

    span {
      font-weight: bold;
      color: #36be57;
    }
  }
}
</style>

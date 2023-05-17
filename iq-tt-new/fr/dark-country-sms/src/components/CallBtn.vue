<template>
  <div class="btnWrapper">
    <a v-if="checkDevice !== 'Desktop'" :href="smsBuilder" class="callBtn btn" @click="sendClick" v-metrics>
      <img width="28" height="28" :src="require('../assets/img/message.svg')" />
      {{ getButtonText }}
    </a>
    <div v-if="checkDevice === 'Desktop'" class="callBtn btn" style="cursor: default">
      <img width="28" height="28" :src="require('../assets/img/message.svg')" />
      {{ getButtonText }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["checkDevice", "click_id", "iqCode"],
  methods: {
    sendClick() {
      if (window.mbp) {
        window.mbp.pixel.send("cta");
      }
    }
  },
  computed: {
    getButtonText() {
      if (this.checkDevice === "Desktop") {
        return `Envoyer un SMS "IQ ${this.iqCode} ${this.click_id}" au ${this.smsTo}`;
      } else {
        return `${this.result.btn}`;
      }
    },
    smsBuilder() {
      var smsTemplate;
      switch (this.checkDevice) {
        case "iOS":
          smsTemplate = `sms:${this.smsTo}&body=` + encodeURI(this.checkId);
          break;
        case "Android":
          smsTemplate = `sms:${this.smsTo}?body=` + encodeURI(this.checkId);
          break;
        default:
          smsTemplate = "#";
          break;
      }
      return smsTemplate;
    },
    smsTo() {
      const number = ['81183', '81181', '83767'];
      return number[Math.floor(Math.random() * 3)];
    },
    checkId() {
      let smsText = "";
      if (this.click_id) {
        smsText = `IQ ${this.iqCode} ${this.click_id}\nJe veux des informations détaillées!`;
      } else {
        smsText = `IQ ${this.iqCode}\nJe veux des informations détaillées!`;
      }
      return smsText;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";

.btnWrapper {
  width: 100%;
  margin-top: vh(25px);
}
.btn {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #fff;
}

.callBtn {
  display: flex;
  padding: 15px 30px;
  width: 100%;
  margin: 0 auto vh(8px);
  gap: 10px;

  font-weight: 700;
  font-size: vh(20px);
  line-height: vh(24px);
  color: white;
  text-align: center;

  border-radius: vh(10px);
  background: #f43f6c;

  animation: scale-btn 1s infinite alternate;
}
</style>

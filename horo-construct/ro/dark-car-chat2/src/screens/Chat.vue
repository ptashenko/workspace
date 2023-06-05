<template>
  <section class="chat" ref="chat">
    <div class="header">
      <div class="header-wrap">
        <div class="header-avatar">
          <img class="header__avatar avatar__img" src="../assets/img/person-goroskop.png" alt />
        </div>
        <div class="header-text">
          <div class="header-text__name">{{ person }}</div>
          <div class="header-text__who">Astrolog Certificat</div>
          <div class="header-text__answers">Răspunsuri: 9,342 - Exactitatea prognozei: 97%</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="blow" ref="blow">
        <div class="message" v-for="(message, index) in delivered" :key="index"
          :class="{ 'message--user': message.user }">
          <span class="message__text" v-html="message.text"></span>
          <div class="container-button" v-show="message.type === 'question' && index === idx - 1">
            <button class="container__button" v-for="(answer, id) in message.answers" :key="id"
              :class="{ 'message--user': message.user }" @click="next(answer, message)" v-html="answer.answer"></button>
          </div>
          <div class="date" @change="checkBirth" v-if="message.type === 'date'">
            <select class="date__item" :class="{ 'date__item--active': pickedDay }" v-model.trim="pickedDay">
              <option value>Zi</option>
              <option v-for="day in days" :value="day">{{ day < 10 ? '0' + day : day }}</option>
            </select>
            <select class="date__item" :class="{ 'date__item--active': pickedMonth }" v-model="pickedMonth">
              <option value>Lună</option>
              <option v-for="month in months" :value="month">{{ month < 10 ? '0' + month : month }} </option>
            </select>
            <select class="date__item" :class="{ 'date__item--active': pickedYear }" v-model="pickedYear">
              <option value>An</option>
              <option v-for="year in years" :value="year">{{ year < 10 ? '0' + year : year }}</option>
            </select>
          </div>
          <span class="message-time">
            <div class="message-time__text">{{ message.time }}</div>
            <span class="message-delivered" v-if="message.user">
              <img src="../assets/img/delivered.svg" alt />
            </span>
          </span>
        </div>
        <div class="callButton animated pulse infinite" v-if="midx === messages.length">
          <a :href="smsBuilder" class="firstButton" @click="sendClick()">
            <img class="firstButton__img" src="../assets/img/starter-arr.svg" alt />
            <span class="firstButton__text ">Trimite SMS</span>
          </a>
        </div>
        <div v-if="midx === messages.length">
          <Comments />
        </div>
        <div class="typing" v-if="typing">
          {{ person }} tastează
          <span class="dot" v-for="(dot, index) in 3" :key="index"></span>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "../assets/animations.css";

.avatar__img {
  border-radius: 50%;
}

.chat {
  padding-top: 71px;
  background: #0c1117;
  position: relative;
  height: 100%;
}

.header {
  background: #11111F;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08);
  height: 71px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  &-wrap {
    padding: 0 15px;
    display: flex;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    height: inherit;
  }

  &-avatar {
    margin-right: 11px;
    width: 58px;
    height: 58px;
    position: relative;

    &:after {
      content: "";
      width: 9px;
      height: 9px;
      border: 1px solid #fff;
      background: #3dba2e;
      position: absolute;
      bottom: 6px;
      right: 3px;
      border-radius: 50%;
    }
  }

  &__avatar {
    max-width: 100%;
  }

  &-text {
    color: #94BF4C;

    &__name {
      font-size: 14px;
      font-weight: bold;
      line-height: 16px;
    }

    &__who {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 16px;
    }

    &__answers {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}

.main {
  padding: 25px 15px 0 15px;
  max-width: 400px;
  margin: 0 auto;
  height: 100%;

  &-content {
    &-timer {
      width: 100%;
      text-align: center;
      color: #d90000;
      font-size: 12px;
      line-height: 14px;
    }
  }
}

.blow {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0px;
  }
}

.callButton {
  text-align: center;
  margin: 16px auto;
  width: 90%;
}

.button {
  margin: 0 auto;
  display: flex;
  outline: none;
  border: none;
  background: linear-gradient(180deg, #2fc800 0%, #239500 100%);
  border-radius: 50px;
  width: 100%;
  height: 54px;
  text-decoration: none;
  justify-content: center;
  align-items: center;

  &__icon {
    position: absolute;
    top: 9px;
    left: 15px;
    margin-right: 20px;
    animation: tada 1.5s infinite;
  }

  &__text {
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    font-size: 7vw;

    @media (min-width: 400px) {
      font-size: 28px;
    }
  }
}

.message {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 7px 7px 7px;
  padding: 10px 15px;
  position: relative;
  margin-bottom: 11px;
  width: 100%;
  box-shadow: 0px 0px 1px #a39f98, 0px 1px 1px rgba(164, 152, 135, 0.321416);
  flex-direction: column;

  .container-button {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 15px;

    .container__button {
      border-radius: 25px;
      border: 1px solid black;
      padding: 8px 0;
      color: black;
      font-weight: 500;
      font-size: 14px;
      outline: none;
      width: 35%;
      margin: 5px 0;
      background-color: #ede6dd;
    }
  }

  &__text {
    color: #fff;
    font-size: 16px;
    line-height: 18px;
    font-weight: normal;
  }

  &-time {
    margin: 5px 0 0 5px;
    align-self: flex-end;
    display: flex;
    align-items: center;

    &__text {
      width: 100%;
      text-align: right;
      color: rgba(255, 255, 255, 0.5);
      font-size: 11px;
    }
  }

  &-delivered {
    width: 19px;
    height: 15px;
    margin-left: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--user {
    width: auto;
    border-radius: 7px 0 7px 7px;
    background: hsla(0, 0%, 100%, .1);
    color: #fff;
    min-width: 181px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.typing {
  width: 100%;
  text-align: left;
  color: gray;
  font-size: 12px;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

.date {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 13px;

  &__item {
    margin-bottom: 5px;
    border-radius: 25px;
    border: none;
    padding: 8px 24px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    appearance: none;
    outline: none;
    min-width: 91px;
    text-align: center;
    text-align-last: center;
    position: relative;
    background: url("../assets/img/tringl_sel.svg") no-repeat 90% 50%, linear-gradient(0deg, #4BB34F 0.01%, #9AC04C 100%);

    & option {
      background: #9AC04C;
    }

    &--active {
      background: url("../assets/img/tringl_sel-active.svg") no-repeat 90% 50%,
        linear-gradient(0deg, #4BB34F 0.01%, #9AC04C 100%);
      color: #fff;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &:not(:last-child) {
      margin-right: 5.5px;
    }
  }
}

.chatInput {
  /*position: fixed;*/
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  /*padding: 10px 18px;*/
  display: flex;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  background: #ede6de;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.03);

  &__input {
    width: 90%;
    margin-right: 6px;
    background: #f8f8f8;
    border: 1px solid #ececec;
    border-radius: 16px;
    height: 38px;
    padding: 8px 21px;
    color: #040303;
    font-weight: 300;
    font-size: 14px;
    outline: none;

    &::placeholder {
      color: #040303;
    }

    &:hover {
      &::placeholder {
        color: transparent;
      }
    }
  }

  &__button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    img {
      width: 32px;
      height: 32px;
    }
  }
}

.firstButton {
  text-decoration: none;
  font-family: "Prager";
  background: linear-gradient(0deg, #4bb34f 0.01%, #9ac04c 100%);
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 13px 45px 13px 25px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 297px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &__img {
    position: absolute;
    top: calc(50% + 4px);
    right: 25px;
    transform: translate(0, -50%);
  }

  &__text {
    color: #fff;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    font-size: 35px;
  }
}

.dot {
  display: inline-block;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  margin-left: 3px;
  background: #1A1A1B;
  animation: vawe 1.3s linear infinite;

  &:nth-child(2) {
    animation-delay: -1.1s;
  }

  &:nth-child(3) {
    animation-delay: -0.9s;
  }
}

@keyframes horoRotate {
  0% {
    transform: rotateZ(0deg)
  }

  100% {
    transform: rotateZ(100deg)
  }

  50% {
    transform: rotateZ(-100deg)
  }

  0% {
    transform: rotateZ(0deg)
  }
}

@keyframes vawe {

  0%,
  60%,
  100% {
    transform: initial;
  }

  30% {
    transform: translateY(-7px);
  }
}
</style>

<script>
import Timer from "../components/Timer";
import Comments from "../components/Comments";
import messages from "../mixins/messages";

export default {
  data() {
    return {
      midx: 0,
      idx: 0,
      typing: true,
      days: null,
      months: null,
      years: null,
      userBirthDay: null,
      pickedDay: "",
      pickedMonth: "",
      pickedYear: "",
      userMessage: "",
      chatForm: false,
      city: null,
      delivered: [],
      innerHeight: window.innerHeight,
      messageText: this.checkId(),
    };
  },
  components: { Timer, Comments },
  props: ['person', "view", "clickID"],
  mixins: [messages],
  methods: {
    scroll() {
      let blow = this.$refs.blow;
      let height = this.$refs.blow.scrollHeight;
      setTimeout(() => {
        blow.scrollTo({
          top: height,
          behavior: "smooth"
        });
      });
    },
    next(answer) {
      this.typing = true;
      this.delivered.push({
        text: `${answer.answer}`,
        type: 'answer',
        user: true,
        time: this.sendedTime()
      });
      this.idx++;
      this.scroll();
      this.chat();
    },
    chat() {
      window.scrollTo(0, 0);
      this.typing = true;
      this.chatForm = false;
      let l = setInterval(() => {
        if (this.messages[this.midx].type !== 'question') {
          this.typing = true;
          this.messages[this.midx].time = this.sendedTime();
          this.delivered.push(this.messages[this.midx]);
          this.midx++;
          this.idx++;
          this.scroll();
          if (this.midx === this.messages.length) {
            this.$emit('view', true);
          }
          else {
            this.$emit('views', this.view);
          }
          if (
            this.midx === this.messages.length ||
            this.messages[this.midx - 1].stop
          )
            clearInterval(l), (this.chatForm = true), (this.typing = false);
          if (this.messages[this.midx + 1] && this.messages[this.midx + 1].city) {
            this.dynamicText('city', 1);
          }
        }
        else if (this.messages[this.midx].type == 'question') {
          this.messages[this.midx].time = this.sendedTime();
          this.delivered.push(this.messages[this.midx]);
          this.midx++;
          this.idx++;
          this.scroll();
          clearInterval(l), (this.chatForm = true), (this.typing = false);
        }
      }, 7000);
    },
    sec() {
      this.$emit("apa");
    },
    genBirthDay(min, max) {
      let array = [];
      for (let i = min; i <= max; i++) {
        array.push(i);
      }
      return array;
    },
    sendMessage(message) {
      this.delivered.push({
        text: message,
        user: true,
        time: this.sendedTime()
      });
      this.idx++;
      this.scroll();
      this.chat();
      this.userMessage = "";
    },
    checkBirth() {
      if (this.pickedDay && this.pickedMonth && this.pickedYear) {
        this.userBirthDay = `${this.pickedDay < 10 ? "0" + this.pickedDay : this.pickedDay
          }.${this.pickedMonth < 10 ? "0" + this.pickedMonth : this.pickedMonth
          }.${this.pickedYear}`;
        this.sendMessage(this.userBirthDay);
      }
    },
    sendedTime() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes
        }`;
    },
    checkId() {
      let smsText = "";
      if (this.clickID) {
        smsText = "IQT " + this.clickID + " Reszletes informaciot szeretnek!";
      } else {
        smsText = "IQT Reszletes informaciot szeretnek!";
      }
      return smsText;
    },
    sendClick() {
      if (window.mbp) {
        window.mbp.pixel.send("cta");
      }
    },
  },
  computed: {
    smsBuilder() {
      var smsTemplate;
      switch (this.device) {
        case "iOS":
          smsTemplate = "sms:595&body=" + encodeURI(this.messageText);
          break;
        case "Android":
          smsTemplate = "sms:595?body=" + encodeURI(this.messageText);
          break;
        default:
          smsTemplate = "#";
          break;
      }
      return smsTemplate;
    },
  },
  mounted() {
    let ths = this;
    this.chat();
    this.days = this.genBirthDay(1, 31);
    this.months = this.genBirthDay(1, 12);
    this.years = this.genBirthDay(
      1940,
      new Date().getFullYear() - 18
    ).reverse();
    window.onresize = () => (this.innerHeight = window.innerHeight);
  }
};
</script>

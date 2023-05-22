<template>
  <div class="void">
    <section class="chat" ref="chat">
      <div class="header">
        <div class="header-wrap">
          <div class="header-avatar">
            <img
              class="header__avatar avatar__img"
              src="../assets/img/person-goroskop.png"
              alt
            />
          </div>
          <div class="header-text">
            <div class="header-text__name">{{ person }}</div>
            <div class="header-text__who">Asmeninis horoskopas</div>
            <div class="header-text__who">Sertifikuota astrologė</div>
            <div class="header-text__answers">
              Atsakymai: 9,342 - Prognozių tikslumas: 97%
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="blow" ref="blow">
          <div
            class="message"
            v-for="(message, index) in delivered"
            :key="index"
            :class="{ 'message--user': message.user }"
          >
            <span class="message__text" v-html="message.text"></span>
            <div
              class="container-button"
              v-show="message.type === 'question' && index === idx - 1"
            >
              <button
                class="container__button"
                v-for="(answer, id) in message.answers"
                :key="id"
                :class="{ 'message--user': message.user }"
                @click="next(answer, message)"
                v-html="answer.answer"
              ></button>
            </div>
            <div
              class="date"
              @change="checkBirth"
              v-if="message.type === 'date'"
            >
              <select
                class="date__item"
                :class="{ 'date__item--active': pickedDay }"
                v-model.trim="pickedDay"
                :disabled="isBlock"
              >
                <option value>Diena</option>
                <option v-for="day in days" :value="day">
                  {{ day < 10 ? "0" + day : day }}
                </option>
              </select>
              <select
                class="date__item"
                :class="{ 'date__item--active': pickedMonth }"
                v-model="pickedMonth"
                :disabled="isBlock"
              >
                <option value>Mėnuo</option>
                <option v-for="month in months" :value="month">
                  {{ month < 10 ? "0" + month : month }}
                </option>
              </select>
              <select
                class="date__item"
                :class="{ 'date__item--active': pickedYear }"
                v-model="pickedYear"
                :disabled="isBlock"
              >
                <option value>Metai</option>
                <option v-for="year in years" :value="year">
                  {{ year < 10 ? "0" + year : year }}
                </option>
              </select>
            </div>

            <span class="message-time">
              <div class="message-time__text">{{ message.time }}</div>
              <span class="message-delivered" v-if="message.user">
                <img src="../assets/img/delivered.svg" alt />
              </span>
            </span>
          </div>

          <div class="message" v-if="midx === messages.length">
            <span class="message__text"
              >Dėl didelio lankytojų skaičiaus šis įrašas bus ištrintas po
              <b> {{ time }} </b></span
            >
          </div>

          <div v-if="midx === messages.length">
            <CallButton
              :sendClick="sendClick"
              :getPhoneNumber="getPhoneNumber"
              :phoneNumber="phoneNumber"
            />
            <Comments
              :sendClick="sendClick"
              :getPhoneNumber="getPhoneNumber"
              :phoneNumber="phoneNumber"
            />
            <CallButton
              :sendClick="sendClick"
              :getPhoneNumber="getPhoneNumber"
              :phoneNumber="phoneNumber"
            />
          </div>

          <div class="typing" v-if="typing">
            {{ person }} rašo
            <span class="dot" v-for="(dot, index) in 3" :key="index"></span>
          </div>
          <div class="typing rec" v-if="recs">
            <p>{{ person }} įrašo garso pranešimą</p>
            <div class="pr_bt"></div>
            <div class="pr_bt"></div>
            <div class="pr_bt"></div>
          </div>
        </div>
      </div>
    </section>
    <Footer
      :view="midx === messages.length"
      v-if="footerObj"
      :footerObj="footerObj"
      :footerGeo="footerGeo"
    />
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/animations.css";

.avatar__img {
  border-radius: 50%;
}

.void {
  position: relative;
  height: 100%;
}

.chat {
  padding-top: 71px;
  position: relative;
  height: 100%;
}

.header {
  background-image: url(../assets/img/fon.jpg);
  background-size: cover;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
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
    color: #ffffff;

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
  max-width: 400px;
  margin: 0 auto;
  height: 100%;
  padding-bottom: 35px;

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
  padding: 25px 15px 0 15px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0px;
  }
}

.message {
  background: #fff;
  border-radius: 7px;
  padding: 10px 15px;
  position: relative;
  margin-bottom: 11px;
  width: 100%;
  box-shadow: 0 0 1px #a39f98, 0 1px 1px rgba(164, 152, 135, 0.321416);
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
      color: #7a7a7a;
      font-weight: 500;
      font-size: 14px;
      outline: none;
      width: 35%;
      margin: 5px 0;
      background-color: #ede6dd;
    }
  }

  &__text {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 18px;
    font-weight: normal;
  }

  &:before {
    content: "";
    border: 11px solid transparent;
    border-top: 11px solid #fff;
    border-right: 11px solid #fff;
    position: absolute;
    top: 0;
    left: -10px;
  }

  &-time {
    margin: 5px 0 0 5px;
    align-self: flex-end;
    display: flex;
    align-items: center;

    &__text {
      width: 100%;
      text-align: right;
      color: rgba(0, 0, 0, 0.54);
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
    background: #e1ffc7;
    color: #fff;
    min-width: 181px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:before {
      content: "";
      border: 11px solid transparent;
      border-left: 11px solid #e1ffc7;
      border-top: 11px solid #e1ffc7;
      position: absolute;
      top: 0;
      right: -10px;
      left: auto;
    }
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
    background: url("../assets/img/tringl_sel.svg") no-repeat 90% 50%, #483177;

    &--active {
      background: url("../assets/img/tringl_sel-active.svg") no-repeat 90% 50%,
        #583c92;
      color: #fff;
      box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
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
  background: linear-gradient(180deg, #0b9d6b 0%, #00796b 100%);
  border-radius: 60px;
  border: none;
  outline: none;
  padding: 19px 50px 18px 70px;
  position: relative;
  text-decoration: none;

  &__img {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 3px;
    left: 3px;
    animation: horoRotate 5s linear infinite;
  }

  &__text {
    text-transform: uppercase;
    color: #ffe7a9;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1.3px;
  }
}

.dot {
  display: inline-block;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  margin-left: 3px;
  background: #1a1a1b;
  animation: vawe 1.3s linear infinite;

  &:nth-child(2) {
    animation-delay: -1.1s;
  }

  &:nth-child(3) {
    animation-delay: -0.9s;
  }
}

.rec {
  min-height: 34px;
  width: 100%;
  display: flex;
  align-items: center;
  opacity: 1;
  line-height: inherit;

  p {
    margin-right: 15px;
  }

  .pr_bt:last-child {
    margin-right: 0;
  }

  .pr_bt {
    margin-right: 3px;
    background: #a9abad;
    animation: 1.1s linear 0s infinite activity__recording-audio;
    will-change: transform, opacity;
    height: 12px;
    width: 3px;
    border-radius: 1.5px;
    transform: scaleY(0.45);
  }

  .pr_bt:nth-child(2) {
    animation-delay: 0.25s;
  }

  .pr_bt:nth-child(3) {
    animation-delay: 0.5s;
  }

  @keyframes activity__recording-audio {
    0%,
    to {
      opacity: 0.2;
      transform: scaleY(0.45);
    }
    30% {
      opacity: 1;
      transform: scaleY(1);
    }
  }
}

@keyframes horoRotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(100deg);
  }
  50% {
    transform: rotateZ(-100deg);
  }
  0% {
    transform: rotateZ(0deg);
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
import Footer from "../components/Footer.vue";
import Comments from "../components/Comments.vue";
import CallButton from "../components/CallButton.vue";

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
      delivered: [],
      innerHeight: window.innerHeight,
      isBlock: false,
      recs: false,
      defaultPhoneNumber: "+37090097008",
      phoneNumber: null,
      currentTime: 90,
      timer: null,
      time: "1:30",
    };
  },
  components: { CallButton, Comments, Footer },
  props: ["person", "footerObj", "footerGeo"],
  mixins: [messages],
  methods: {
    scroll() {
      let blow = this.$refs.blow;
      let height = this.$refs.blow.scrollHeight;
      setTimeout(() => {
        blow.scrollTo({
          top: height,
          behavior: "smooth",
        });
      });
    },
    next(answer) {
      this.typing = true;
      this.delivered.push({
        text: `${answer.answer}`,
        type: "answer",
        user: true,
        time: this.sendedTime(),
      });
      this.idx++;
      this.scroll();
      if (this.messages[this.midx - 1].next == "recs") {
        this.typing = false;
        this.recs = true;
        setTimeout(() => {
          this.recs = false;
        }, 10000);
        setTimeout(() => {
          this.chat();
        }, 13000);
      } else {
        this.chat();
      }
    },
    chat() {
      this.typing = true;
      this.chatForm = false;
      this.recs = false;
      let l = setInterval(() => {
        if (this.messages[this.midx].type !== "question") {
          this.typing = true;
          this.messages[this.midx].time = this.sendedTime();
          this.delivered.push(this.messages[this.midx]);
          this.midx++;
          this.idx++;
          this.scroll();

          if (
            this.midx === this.messages.length ||
            this.messages[this.midx - 1].stop
          )
            clearInterval(l), (this.chatForm = true), (this.typing = false);
            if (this.midx === this.messages.length) {
            this.startTimer();
          }
        } else if (this.messages[this.midx].type == "question") {
          this.messages[this.midx].time = this.sendedTime();
          this.delivered.push(this.messages[this.midx]);
          this.midx++;
          this.idx++;
          this.scroll();
          clearInterval(l), (this.chatForm = true), (this.typing = false);
        }
      }, 7000);
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
    str_pad_left(string, pad, length) {
      return (new Array(length + 1).join(pad) + string).slice(-length);
    },
    setTime() {
      let minutes = Math.floor(this.currentTime / 60);
      let seconds = this.currentTime - minutes * 60;
      return (
        this.str_pad_left(minutes, "0", 2) +
        ":" +
        this.str_pad_left(seconds, "0", 2)
      );
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
        time: this.sendedTime(),
      });
      this.idx++;
      this.scroll();
      this.chat();
      this.userMessage = "";
    },
    checkBirth() {
      if (this.pickedDay && this.pickedMonth && this.pickedYear) {
        this.userBirthDay = `${
          this.pickedDay < 10 ? "0" + this.pickedDay : this.pickedDay
        }.${
          this.pickedMonth < 10 ? "0" + this.pickedMonth : this.pickedMonth
        }.${this.pickedYear}`;
        this.isBlock = true;
        this.sendMessage(this.userBirthDay);
      }
    },
    sendedTime() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      return `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }`;
    },
    createLink(tel) {
      let a = document.createElement("a");
      a.href = `tel:${tel}`;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
    },
    sendClick() {
      if (window.mbp) {
        window.mbp.pixel.send("cta");
      }
    },
    getPhoneNumber() {
      this.sendClick();

      if (window.mbp) {
        window.mbp.pixel
          .send("phone")
          .then((response) => {
            this.phoneNumber = "+" + response;
            this.createLink(this.phoneNumber);
          })
          .catch(() => {
            this.phoneNumber = this.defaultPhoneNumber;
            this.createLink(this.phoneNumber);
          });
      } else {
        this.phoneNumber = this.defaultPhoneNumber;
        this.createLink(this.phoneNumber);
      }
    },
  },
  watch: {
    currentTime(time) {
      this.time = this.setTime();
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
  mounted() {
    this.chat();
    this.days = this.genBirthDay(1, 31);
    this.months = this.genBirthDay(1, 12);
    this.years = this.genBirthDay(
      1900,
      new Date().getFullYear() - 18
    ).reverse();
    window.onresize = () => (this.innerHeight = window.innerHeight);
  },
};
</script>

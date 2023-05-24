<template>
  <div
    class="void"
    ref="chat"
    :style="
      messages[midx - 1]
        ? messages[midx - 1].type === 'date'
          ? 'overflow : hidden'
          : ''
        : ''
    "
  >
    <div class="chat">
      <div class="header">
        <div class="header-wrap">
          <div class="header-info">
            <div class="header__back">
              <img class="header__back-icon" :src="require('../assets/img/header/angle-left.png')" alt=""/>
            </div>
            <div class="header-avatar">
              <img
                class="header-avatar avatar__img"
                :src="require('../assets/img/persons/' + person.avatar)"
                alt
              />
            </div>
              <span class="header__name">{{ person.name }}</span>
          </div>
          <div class="header__icons">
            <img :src="require('../assets/img/header/phone.svg')"/>
            <img :src="require('../assets/img/header/camera.svg')"/>
          </div>
        </div>
      </div>

      <div class="main">

        <div class="blow" ref="blow">

          <div class="facebook">
            <div class="facebook__avatar">
              <img
                class="facebook__avatar"
                :src="require('../assets/img/persons/' + person.avatar)"
                alt
              />
            </div>
            <div class="facebook__name">{{ person.name }}</div>
            <div class="facebook__info">
              <div
                v-for="personDescription in person.descriptions"
                :key="personDescription"
                class="facebook__description"
              >
                {{ personDescription }}
              </div>
            </div>
            <span class="facebook__time">{{  getCurrentDay }}</span>
          </div>


          <div
            class="message"
            v-for="(message, index) in delivered"
            :key="index"
            :class="{
              'message--user': message.user,
              'last': message.user,
              'message--video': message.type === 'video',
            }"
          >
          <Reactions v-if="message.user" />
            <img v-if="!message.user"
                class="message__avatar"
                :src="require('../assets/img/persons/' + person.avatar)"
                alt
              />
            <div class="message__container">
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
                v-if="message.type === 'video'"
                class="video-wrap"
                id="message-video-wrapper"
              >
                <video
                  @click="openVideo"
                  class="video-wrap__video"
                  id="message-video"
                  preload="auto"
                  playsinline
                  muted
                  autoplay
                  :poster="require('../assets/img/persons/' + person.avatar)"
                >
                  <source
                    :src="
                      require('../assets/video/' +
                        message.videos[personIndex].videoName)
                    "
                    type='video/mp4'
                  />
                </video>
                <div v-if="!videoOpen" class="video-wrap__forward">
                  <img src="../assets/img/forward.svg" alt />
                </div>
              </div>
              <div
                class="date"
                @change="checkBirth(message)"
                v-if="message.type === 'date'"
              >
                <select
                  class="date__item"
                  :class="{ 'date__item--active': pickedYear }"
                  v-model="pickedYear"
                  :disabled="isBlock"
                >
                  <option value>Év</option>
                  <option v-for="year in years" :value="year" :key="year">
                    {{ year < 10 ? "0" + year : year }}
                  </option>
                </select>

                <select
                  class="date__item"
                  :class="{ 'date__item--active': pickedMonth }"
                  v-model="pickedMonth"
                  :disabled="isBlock"
                >
                  <option value>Hónap</option>
                  <option v-for="month in months" :value="month" :key="month">
                    {{ month < 10 ? "0" + month : month }}
                  </option>
                </select>

                <select
                  class="date__item"
                  :class="{ 'date__item--active': pickedDay }"
                  v-model.trim="pickedDay"
                  :disabled="isBlock"
                >
                  <option value>Nap</option>
                  <option v-for="day in days" :value="day" :key="day">
                    {{ day < 10 ? "0" + day : day }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="message" v-if="midx === messages.length">
            <div class="message__img-container">
              <img 
                  class="message__avatar"
                  :src="require('../assets/img/persons/' + person.avatar)"
                  alt
                />
            </div>
            <div class="message__container">
              <span class="message__text"
              >Az érdeklődők magas száma miatt a felvételt ennyi idő múlva
              töröljük: <b> {{ time }}.</b></span
            >
            </div>
          </div>

          <div v-if="midx === messages.length">
            <CallButton
              :sendClick="sendClick"
              :getPhoneNumber="getPhoneNumber"
              :phoneNumber="phoneNumber"
              :callNumber="'call1'"
            />
            <Comments
              :sendClick="sendClick"
              :getPhoneNumber="getPhoneNumber"
              :phoneNumber="phoneNumber"
              :callNumber="'call2'"
            />
            <CallButton
              :sendClick="sendClick"
              :getPhoneNumber="getPhoneNumber"
              :phoneNumber="phoneNumber"
              :callNumber="'call3'"
            />
          </div>

          <div class="typing" v-if="typing">
            <div class="typing__img-container">
              <img
                class="typing__avatar"
                :src="require('../assets/img/persons/' + person.avatar)"
                alt
              />
            </div>
              <div class="typing__dot-container">
                <span class="dot" v-for="(dot, index) in 3" :key="index"></span>
              </div>
          </div>

        </div>
      </div>
    </div>

    <Footer
      :view="midx === messages.length"
      v-if="footer"
      :footer="footer"
      :footer-geo="footerGeo"
    />
  </div>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/hu";

import Reactions from "../components/Reactions";
import StatusBar from "../components/StatusBar"
import CallButton from "../components/CallButton";
import Comments from "../components/Comments";
import Footer from "../components/Footer.vue";
import messages from "../mixins/messages";

export default {
  data() {
    return {
      midx: 0,
      idx: 0,
      typing: true,
      typingMessage: 'éppen ír',
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
      defaultPhoneNumber: "0690982679",
      phoneNumber: null,
      phoneNumberDone: false,
      currentTime: 90,
      timer: null,
      time: "1:30",
      videoPlaying: true,
      videoOpen: false,
    };
  },
  components: { Footer, Comments, CallButton, StatusBar, Reactions },
  props: ["person", "footer", "footerGeo", "personIndex"],
  mixins: [messages],
  methods: {
    scroll() {
      let blow = this.$refs.blow;
      let height = this.$refs.blow.scrollHeight - 250;
      setTimeout(() => {
        blow.scrollTo({
          top: height,
          behavior: "smooth",
        });
      });
    },
    getLastUserMessage(){
      const element = document.querySelector('.last')
      if(element){
        element.classList.remove('last')
      }
    },
    next(answer, message) {
      this.getLastUserMessage()
      this.typing = true;
      this.delivered.push({
        text: `${answer.answer}`,
        type: "answer",
        user: true,
        time: this.sendedTime(),
      });
      this.idx++;
      this.scroll();
      this.chat();
      dataLayer.push({ 'event': 'comment', 'value': message.text });
    },
    chat() {
      this.typing = true;
      this.chatForm = false;
      let l = setInterval(() => {
        if (this.messages[this.midx].type !== "question") {
          if (this.midx === 11) {
            this.typingMessage = 'videóüzenet rögzítése';
          } else {
            this.typingMessage = 'éppen ír';
          }
          this.typing = true;
          this.messages[this.midx].time = this.sendedTime();
          this.delivered.push(this.messages[this.midx]);
          this.midx++;
          this.idx++;
          this.scroll();
          if (this.midx === this.messages.length) {
            this.$emit("views", !this.view);
          } else {
            this.$emit("views", this.view);
          }
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
      }, 7000); //7000
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
    sendMessage(userBirthDay, message) {
      this.getLastUserMessage()
      this.delivered.push({
        text: userBirthDay,
        user: true,
        time: this.sendedTime(),
      });
      this.idx++;
      this.scroll();
      this.chat();
      this.userMessage = "";
      dataLayer.push({ 'event': 'comment', 'value': message.text });
    },
    checkBirth(message) {
      if (this.pickedDay && this.pickedMonth && this.pickedYear) {
        this.userBirthDay = `${this.pickedYear}.${
          this.pickedMonth < 10 ? "0" + this.pickedMonth : this.pickedMonth
        }.${this.pickedDay < 10 ? "0" + this.pickedDay : this.pickedDay}.`;
        this.isBlock = true;
        this.sendMessage(this.userBirthDay, message);
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
      if (!this.phoneNumberDone) {
        this.phoneNumberDone = true;
        this.sendClick();

        if (window.mbp) {
          window.mbp.pixel
            .send("phone")
            .then((response) => {
              this.phoneNumber = response.replace("3", "0");
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
      }
    },
    openVideo() {
      const messageVideoContainer = document.querySelector(".message--video");
      const messageVideoWrapper = document.getElementById(
        "message-video-wrapper"
      );
      const messageVideo = document.getElementById("message-video");
      if (this.videoOpen === false) {
        messageVideoContainer.style.minHeight = "241px";
        messageVideoWrapper.classList.add("video-grow");
        messageVideo.play();
        messageVideo.muted = false;       
        this.videoOpen = true;
      } else if (this.videoOpen === true) {
        if (this.videoPlaying === false) {
          messageVideo.play();
          
          this.videoPlaying = true;
        } else if (this.videoPlaying === true) {
          messageVideo.pause();
          this.videoPlaying = false;
        }
      }
    },
  },
  computed: {
    getCurrentDay(){
      dayjs.locale("hu");
      return dayjs().format("ddd, HH:mm");
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
    this.years = this.genBirthDay(1900, new Date().getFullYear()).reverse();
    window.onresize = () => (this.innerHeight = window.innerHeight);
    dataLayer.push({ 'event': 'comment', 'value': this.person.name });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/animations.css";

.facebook {
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 12px;
  text-align: center;

  &__avatar {
    margin: 0 auto;
    margin-bottom: 12px;
    position: relative;
    width: 60px;
    height: 60px;

    & > img {
      border-radius: 50%;
      margin-bottom: 12px;
    }

    &:after {
      content: "";
      width: 14px;
      height: 14px;
      border: 2px solid #fff;
      background: #31a24c;
      position: absolute;
      bottom: 3px;
      right: 1px;
      border-radius: 50%;
    }

    @media screen and (max-width:376px) {

      &:after {
        width: 12px;
        height: 12px;
        bottom: 0px;
        right: 1px;
      }
    }
  }

  &__name {
    font-size: 17px;
    font-weight: 600;
    padding-bottom:12px;
  }

  &__info{
    margin-bottom: 15px;
  }

  &__description {
    color: #65676b;
    font-size: 13px;
    line-height: 22px;
    width: 290px;
    margin:0 auto;
  
    @media screen and (max-width:330px) {
      width: 270px;
    }
  }

  &__time {
    color: #65676B;
    font-weight: 500;
    font-size: 12px;
    margin: 10px 0;
  }
}
.avatar__img {
  border-radius: 50%;
}

.void {
  position: relative;
  height: 100%;
}

.chat {
  padding-top: 25px;
  position: relative;
  height: 100%;
}

.header {
  background: #f2f3f5;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  padding: 6px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  &-wrap {
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 400px;
    margin: 0 auto;
    height: inherit;
  }

  &-info {
    display: flex;
    margin-right: 30px;
  }

  &__back {
    display: grid;
    place-items: center;

    &__back-icon {
      height: 28px;
      margin-right: 5px;
    }
  } 


  &-avatar {
    margin-right: 6px;
    width: 64px;
    height: 64px;
    position: relative;

    &:after {
      content: "";
      width: 16px;
      height: 16px;
      border: 1px solid #fff;
      background: #31a24c;
      position: absolute;
      bottom: 3px;
      right: 1px;
      border-radius: 50%;
    }

    @media screen and (max-width:376px) {
      width: 44px;
      height: 44px;

      &:after {
        width: 12px;
        height: 12px;
        bottom: 0px;
        right: 1px;
      }
    }

    @media screen and (max-width:320px) {
      width: 32px;
      height: 32px;

      &:after {
        width: 9px;
        height: 9px;
      }
    }
  }

  &__avatar {
    max-width: 100%;
  }
  
  &__name {
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;

    @media screen and (max-width:376px) {
      font-size: 15px;
    }
  }

  

  &__icons {
    display: flex;
    align-items: center;

    & > img {
      width: 48px;
      height: 48px;

    @media screen and (max-width:376px) {
      width: 38px;
      height: 38px;
    }
  }
}

}

.main {
  max-width: 400px;
  margin: 0 auto;
  height: 100%;
  padding-bottom: 75px;

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
  position: relative;
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
  & > .message--user {
    border-radius: 18px;
    border-bottom-right-radius: 4px;
  }
  & > .message--user ~ .message--user {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }

}
.last {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 18px !important;
}

.message {
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  &__avatar {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  
  &__container {
    background: #E4E6EB;;
    border-radius: 18px;
    padding: 10px 15px;
    width: calc(100% - 36px);
    margin-left: 36px;
  }
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
      /*background-color: #ede6dd;*/
    }
  }

  &__text {
    font-size: 16px;
    line-height: 18px;
    font-weight: normal;
  }

  &--user {
    width: auto;
    background: #3578e5;
    color: #fff;
    min-width: 181px;
    border-radius: 10px 0 10px 10px;

    .message__container {
      background: #3578e5;
      margin: 0;
      width: 100%;
    }
  }
}

.message--video {
  background: none;

  .message__container {
    background: inherit;
    padding: 0;
    padding-left: 15px;
  }
}

.video-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 7px;
  width: 160px;
  height: 200px;
  transition-property: width;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px;
  }
  &.video-grow {
    width: 70%;
  }
}
.typing {
  position: relative;
  width: 100%;
  padding: 10px 15px;
  padding-left: 0;
  margin-bottom: 11px;
  font-size: 12px;

  &__dot-container{
    width: 60px;
    margin-left: 36px;
    border-radius: 18px;
    background: #E4E6EB;
    text-align: center;
    line-height: 35px;
  }
  &__img-container{
    &:after{
      content: '';
      position: absolute;
      top: 34px;
      left: 17px;
      background: #31a24c;
      width: 10px;
      height: 10px;
      border: 2px solid #fff;
      border-radius: 50%;
    }
  }
  &__avatar {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
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
  margin-top: 13px;

  &__item {
    margin-bottom: 5px;
    border-radius: 25px;
    border: 2px solid #4166b1;
    padding: 8px 22px;
    color: #4166b1;
    font-weight: 500;
    font-size: 14px;
    appearance: none;
    outline: none;
    min-width: 91px;
    text-align: center;
    text-align-last: center;
    position: relative;
    background: url("../assets/img/tringl_sel.svg") no-repeat 90% 50%, #f2f3f5;

    &--active {
      background: url("../assets/img/tringl_sel-active.svg") no-repeat 90% 50%,
        #4166b1;
      color: #fff;
      box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    &:not(:last-child) {
      margin-right: 5.5px;
    }
  }
}

.dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-left: 3px;
  background: #737373;
  animation: vawe 1.3s linear infinite;
  &:nth-child(1) {
    margin-left: 0;
  }
  &:nth-child(2) {
    animation-delay: -1.1s;
  }

  &:nth-child(3) {
    animation-delay: -0.9s;
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
    background:#252525;
    transform: translateY(-7px);
  }
}

@keyframes next {
  0% {
    opacity: 0;
    left: 17px;
  }
  15% {
    opacity: 1;
    left: 21px;
  }
  100% {
    opacity: 0;
    left: 37px;
  }
}

@media (min-width: 384px) {
  .chat {
    padding-top: 64px;
  }
}
</style>
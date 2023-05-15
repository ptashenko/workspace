<template>
  <section class="chat" ref="chat">
    <div class="header">
      <div class="header-wrap">
        <div class="header-avatar">
          <img class="header__avatar avatar__img" src="../assets/img/avatar.jpg" alt />
        </div>
        <div class="header-text">
          <div class="header-text__name">{{person}}</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="blow" ref="blow">
        <div
          v-for="(message,index) in delivered"
          :key="index"
          :class="{message: message.type !== 'answer', messages: message.type == 'answer'}"
        >
          <span class="message__text" v-html="message.text">{{message.text}}</span>
          <span class="message__answer" v-html="message.answer">{{message.answer}}</span>
          <div v-if="message.type === 'question' && index === idx - 1" class="button-container">
              <button 
                  class="message__button"
                  v-for="(answer, id) in message.answers" 
                  :key="id" 
                  v-text="answer.answer"
                  @click="next(answer)"
              >
              </button>
          </div>
          <span class="message-time">
            <div class="message-time__text">{{message.time}}</div>
            <span class="message-delivered" v-if="message.user">
              <img src="../assets/img/delivered.svg" alt />
            </span>
          </span>
        </div>
        <transition name="fade">
          <div class="typing" v-if="typing">
            {{person}} πληκτρολογεί
            <span class="dot" v-for="(dot,index) in 3" :key="index"></span>
          </div>
        </transition>
        <transition name="fade">
          <div class="callButton animated pulse infinite" v-if="midx === messages.length">
            <button class="firstButton callBtn" @click.prevent="getPhoneNumber"
                    v-metrics
                    v-show="!phoneNumber" >
            <img class="firstButton__img" src="../assets/img/icon_button_call.svg" alt/>
              <span class="firstButton__text">Καλέστε και ακούστε</span>
            </button>

            <a class="firstButton callBtn" v-show="phoneNumber"
               @click="sendClick();return true"
               :href="'tel:'+ phoneNumber" >
            <img class="firstButton__img" src="../assets/img/icon_button_call.svg" alt/>
              <span class="firstButton__text">Καλέστε και ακούστε</span>
            </a>
          </div>
        </transition>
      </div>
    </div>

    <Footer v-if="footer" :view="midx === messages.length" :footer="footer" :footerGeo="footerGeo"/>
  </section>
</template>


<style lang="scss" scoped>
    @import "../assets/animations.css";

    .avatar__img {
        border-radius: 50%;
    }

    .chat {
        position: relative;
        height: 100%;
        padding-top: 71px;
    }

    .button-container {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;

        .message__button {
            width: 30%;
            min-width: 87px;
            padding: 5px;
            background-color: #fff;
            color: black;
            font-size: 16px;
            font-weight: normal;
            line-height: 16px;
            border: 2px solid black;
            border-radius: 10px;
            outline: none;
            cursor: pointer;
        }
    }

    .header {
        background: #62677b;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
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
            color: #fff;

            &__name {
                font-size: 16px;
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
        height: 100%;
        background-size: contain;
        padding-bottom: 35px;
        max-width: 400px;
        margin: 0 auto;

        &-send {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;

            &__input {
                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
                text-align: center;
                background: #ffffff;
                border: 1px solid #f0f0f0;
                border-radius: 5px;
                height: 40px;
                padding: 13px;
                width: 100%;
                outline: none;
                color: #1a1a1b;
                font-weight: 300;
                font-size: 22px;

                &::placeholder {
                    color: #1a1a1b;
                }
            }

            &__button {
                margin-left: 20px;
                width: 30%;
                min-width: 87px;
                height: 30px;
                padding: 0;

                font-size: 16px;
                font-weight: normal;
                line-height: 16px;
                border: 2px solid black;
                border-radius: 10px;
                outline: none;
                cursor: pointer;

            }

            .active {
                border: 2px solid green;
                background-color: green;
                color: black;
            }
        }
    }

    .blow {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        height: 100%;
        padding: 25px 15px 0 15px;
        overflow-y: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar{
            width: 0px;
        }
    }

    .callButton {
        text-align: center;
        margin: 20px auto;
    }

    .message {
        background: #ffffff;
        border-radius: 0px 10px 10px 10px;
        padding: 10px 15px;
        position: relative;
        margin-bottom: 11px;
        width: 100%;

        @media (max-width: 360px) {
            padding: 10px 10px;
        }

        &__text {
            color: #000000;
            font-size: 16px;
            line-height: 18px;
            font-weight: normal;
        }

        &__answer {
            color: black;
            font-size: 16px;
            line-height: 18px;
            font-weight: normal;
            text-align: left;
        }

        &-time {
            margin: 5px 0 0 5px;
            align-self: flex-end;
            display: flex;
            align-items: center;

            &__text {
                color: rgba(0, 0, 0, 0.54);
                font-size: 11px;
                width: 100%;
                text-align: right;
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
            display: inline-flex;
            width: auto;
            background: #B2E2F6;
            color: #000;
            min-width: 181px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            border-radius: 10px 0px 10px 10px;
        }
    }

    .messages {
        background: #ffffff;
        border-radius: 10px 0 10px 10px;
        padding: 10px 15px;
        position: relative;
        margin-bottom: 11px;
        max-width: 40%;

        @media (max-width: 360px) {
            padding: 10px 10px;
        }

        &__text {
            color: #000000;
            font-size: 16px;
            line-height: 18px;
            font-weight: normal;
        }

        &__answer {
            color: black;
            font-size: 16px;
            line-height: 18px;
            font-weight: normal;
            text-align: left;
        }

        &-time {
            margin: 5px 0 0 5px;
            align-self: flex-end;
            display: flex;
            align-items: center;

            &__text {
                color: rgba(0, 0, 0, 0.54);
                font-size: 11px;
                width: 100%;
                text-align: right;
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
            display: inline-flex;
            width: auto;
            background: #B2E2F6;
            color: #000;
            min-width: 181px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            border-radius: 10px 0px 10px 10px;
        }
    }

    .typing {
        color: #000000;
        font-size: 12px;
        width: 100%;
        text-align: left;
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
            background: url("../assets/img/tringl_sel.svg") no-repeat 90% 50%, #94bf4c;

            &--active {
                background: url("../assets/img/tringl_sel-active.svg") no-repeat 90% 50%,
                #94bf4c;
                color: #fff;
                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            }

            &:not(:last-child) {
                margin-right: 5.5px;
            }
        }
    }

    .chatInput {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 10px 18px;
        display: flex;
        align-items: center;
        max-width: 400px;
        margin: 0 auto;
        border-top: 1px solid #DADADA;

        &__input {
            width: 90%;
            margin-right: 6px;
            background: #f8f8f8;
            border: 1px solid #ececec;
            border-radius: 16px;
            height: 38px;
            padding: 8px 21px;
            color: #040303;
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
        padding: 13px 15px 13px 55px;
        position: relative;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: block;
        width: 297px;
        margin: 0 auto;

        &__img {
            position: absolute;
            top: 5px;
            left: 10px;
            animation: horoRotate 0.8s linear infinite;
        }

        &__text {
            color: #fff;
            text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
            font-size: 23px;
        }
    }

    .dot {
        display: inline-block;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        margin-left: 3px;
        background: #000000;
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
            -webkit-transform: scaleX(1);
            transform: scaleX(1)
        }
        50% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1);
            transform: scale3d(1.1, 1.1, 1.1)
        }
        to {
            -webkit-transform: scaleX(1);
            transform: scaleX(1)
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

export default {
  data() {
    return {
      midx: 0,
      idx: 0,
      typing: true,
      userBirthDay: null,
      userMessage: "",
      chatForm: false,
      city: null,
      messages: [
          {
              text: 'Συγχαρητήρια! Είμαστε στην ευχάριστη θέση να ανακοινώσουμε ότι έχετε επιλεγεί να συμμετάσχετε στο οικονομικό πείραμα στην Ελλάδα!',
              type: 'text'
          },
          {
              text: `Μπορείτε να αποκτήσετε πρόσβαση σε ιδιωτικές πληροφορίες που θα είναι διαθέσιμες μόνο για 50 τυχερά και τυχαία επιλεγμένα άτομα.`,
              type: 'text'
          },
          {
              text: `Τα πρώτα 1.000 € σας περιμένουν! Στο τέλος αυτής της συνομιλίας, θα μάθετε πώς να κερδίζετε και να λαμβάνετε αυτό το χρηματικό ποσό.`,
              type: 'text'
          },
          {
              text: `Πρώτον, απαντήστε σε αυτές τις 3 απλές ερωτήσεις:`,
              type: 'text'
          },
          {
              text: 'Θα θέλατε να λάβετε χρήματα σε μετρητά ή στην τραπεζική σας κάρτα;',
              answers: [
                  {
                      id: 0,
                      answer: 'Μετρητά'
                  }, {
                      id: 1,
                      answer: 'Τραπεζική κάρτα'
                  }
              ],
              type: 'question'
          },
          {
              text: 'Εάν βγάζατε 4.000-5.000 € μηνιαίως, θα αρχίζατε να δίνετε χρήματα σε φιλανθρωπικά ιδρύματα;',
              answers: [
                  {
                      id: 2,
                      answer: 'Ναι'
                  }, {
                      id: 3,
                      answer: 'Όχι'
                  }, {
                      id: 4,
                      answer: 'Δεν ξέρω'
                  }
              ],
              type: 'question'
          },
          {
              text: 'Θα θέλατε να λαμβάνετε εβδομαδιαία μπόνους στο κινητό σας τηλέφωνο;',
              answers: [
                  {
                      id: 5,
                      answer: 'Ναι'
                  }, {
                      id: 6,
                      answer: 'Όχι'
                  }
              ],
              type: 'question'
          },
          {
              text: 'Σας ευχαριστούμε για τις απαντήσεις σας!',
              type: 'text'
          },
          {
              text: 'Σας έχει χορηγηθεί πρόσβαση σε ιδιωτικές πληροφορίες! ',
              type: 'text'
          }, {
              text: 'Καλέστε από το κινητό σας τηλέφωνο και ακούστε λεπτομερείς οδηγίες.',
              type: 'text'
          }
      ],
      delivered: [],
      innerHeight: window.innerHeight,

      defaultPhoneNumber: '+309019015949',
      phoneNumber: null
    };
  },
  props: ['person', 'footer', 'footerGeo'],
  components: {Footer},
  methods: {
    scroll() {
      let height = this.$refs.blow;
      setTimeout(() => {
          height.scrollTop = height.scrollHeight;
      },500);
    },
    chat() {
      let l = setInterval(() => {

        if (this.messages[this.midx].type !== 'question') {
          this.typing = true;
          this.delivered.push(this.messages[this.midx]);
          this.scroll();
          this.midx++;
          this.idx++;

          if (
                  this.midx === this.messages.length ||
                  this.messages[this.midx - 1].stop
          ) {
            this.chatForm = true;
            this.typing = false;
            clearInterval(l);
          } 
        }else if (this.messages[this.midx].type == 'question') {
            this.delivered.push(this.messages[this.midx]);
            this.midx++;
            this.idx++;
            this.scroll();
            this.chatForm = true;
            this.typing = false;
            clearInterval(l);
          }
      }, 7000);
    },
    next(answer) {
        this.typing = true;
        this.delivered.push({
            answer: `${answer.answer}`,
            type: 'answer'
        });
        this.idx++;
        this.scroll();
        this.chat();
    },
    sendMessage(message) {
      this.delivered.push({
        text: message,
        user: true,
        time: this.sendedTime()
      });
      this.scroll();
      this.chat();
      this.userMessage = "";
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
      let a = document.createElement('a');
      a.href = `tel:${tel}`;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
    },
    sendClick() {
      if ( window.mbp ) {
        window.mbp.pixel.send('cta')
      }
    },
    getPhoneNumber() {
      this.sendClick()
      if ( window.mbp ) {
        window.mbp.pixel.send('phone').then( response => {
          this.phoneNumber = response;
          this.createLink(this.phoneNumber)
        })
            .catch(() => {
              this.phoneNumber = this.defaultPhoneNumber
              this.createLink(this.phoneNumber)
            })
      } else {
        this.phoneNumber = this.defaultPhoneNumber;
        this.createLink(this.phoneNumber)
      }
    }
  },
  mounted() {
    this.chat();
    window.onresize = () => (this.innerHeight = window.innerHeight);
  }
};
</script>
<template>
  <section class="chat" ref="chat">
    <div class="header">
      <div class="header-wrap">
        <div class="header-avatar">
          <img
            class="header__avatar avatar__img"
            src="../assets/img/avatar.jpg"
            alt
          />
        </div>
        <div class="header-text">
          <div class="header-text__name">{{ person }}</div>
        </div>
      </div>
    </div>
    <div class="main" ref="blow">
      <div class="blow">
        <div
          v-for="(message, index) in delivered"
          :key="index"
          :class="{
            message: message.type !== 'answer',
            messages: message.type == 'answer',
          }"
        >
          <span class="message__text" v-html="message.text">{{
            message.text
          }}</span>
          <span class="message__answer" v-html="message.answer">{{
            message.answer
          }}</span>
          <div
            v-if="message.type === 'question' && index === idx - 1"
            class="button-container"
          >
            <button
              class="message__button"
              v-for="(answer, id) in message.answers"
              :key="id"
              v-text="answer.answer"
              @click="next(answer)"
            ></button>
          </div>
          <span class="message-time">
            <span class="message-time__text">{{ message.time }}</span>
          </span>
        </div>
        <transition name="fade">
          <div class="typing" v-if="typing">
            Η {{ person }} πληκτρολογεί
            <span class="dot" v-for="(dot, index) in 3" :key="index"></span>
          </div>
        </transition>

        <template v-if="midx === messages.length">
          <div class="callButton animated pulse infinite">
            <CallButton
              :phoneNumber="phoneNumber"
              @sendClick="sendClick"
              @getPhoneNumber="getPhoneNumber"
            />
          </div>

          <template v-for="(comment, i) in comments">
            <Comment
              :key="i + 'comment'"
              :name="comment.name"
              :avatar="comment.avatar"
              :text="comment.text"
              :date="comment.date"
            />
          </template>

          <div class="callButton animated pulse infinite">
            <CallButton
              :phoneNumber="phoneNumber"
              @sendClick="sendClick"
              @getPhoneNumber="getPhoneNumber"
            />
          </div>
        </template>
      </div>
    </div>

    <Footer
      :view="midx === messages.length"
      v-if="footerObj"
      :footerObj="footerObj"
      :footerGeo="footerGeo"
    />
  </section>
</template>

<script>
import dayjs from "dayjs";
import Footer from "../components/Footer.vue";
import CallButton from "../components/CallButton.vue";
import Comment from "../components/Comment.vue";

export default {
  data() {
    return {
      confirm: false,
      midx: 0,
      idx: 0,
      typing: true,
      userBirthDay: null,
      userMessage: "",
      chatForm: false,
      city: null,
      messages: [
        {
          text: "Συγχαρητήρια!",
          type: "text",
        },
        {
          text: `Μετά από λαϊκή ζήτηση από τους πολίτες του διεθνούς προγραμματός μας,
                    αποφασίστηκε η διοργάνωση ενός δεύτερου Οικονομικού Πειράματος - "1000 - 3000 ΕΥΡΩ ΚΑΘΕ ΕΒΔΟΜΑΔΑ!"`,
          type: "text",
        },
        {
          text: `Παρακαλώ σημειώστε ότι μπορείτε να λάβετε λεπτομερείς οδηγίες σε 3 λεπτά.`,
          type: "text",
        },
        {
          text: `Αυτές οι πληροφορίες θα είναι διαθέσιμες μόνο για 50 τυχερούς, οι οποίοι επιλέγονται τυχαία. Για να
                    ξεκινήσουμε, απαντήστε 3 απλές ερωτήσεις:`,
          type: "text",
        },
        {
          text: "Είναι πιο βολικό για εσάς να λαμβάνετε την πληρωμή σε μετρητά ή με μεταφορά στην τραπεζική σας κάρτα;",
          answers: [
            {
              id: 0,
              answer: "Μετρητά",
            },
            {
              id: 1,
              answer: "Τραπεζική κάρτα",
            },
          ],
          type: "question",
        },
        {
          text: "Εάν βγάζετε €9000-€10000 τον μήνα, θα ήσασταν σε θέση να δωρίσετε μέρος του ποσού αυτού σε φιλανθρωπίες;",
          answers: [
            {
              id: 2,
              answer: "Ναι",
            },
            {
              id: 3,
              answer: "Όχι",
            },
            {
              id: 4,
              answer: "Δεν ξέρω",
            },
          ],
          type: "question",
        },
        {
          text: "Έχετε πάρει μέρος στο Πρώτο Οικονομικό Πείραμα;",
          answers: [
            {
              id: 5,
              answer: "Ναι",
            },
            {
              id: 6,
              answer: "Όχι",
            },
            {
              id: 7,
              answer: "Δεν μπορούσα να συμμετάσχω",
            },
          ],
          type: "question",
        },
        {
          text: "Ευχαριστώ για τις απαντήσεις σας!",
          type: "text",
        },
        {
          text: "Έχετε πρόσβαση στις λεπτομερείς οδηγίες!",
          type: "text",
        },
        {
          text:
            "Καλώντας από το κινητό σας τηλέφωνο, θα " +
            "ακούσετε ένα ηχογραφημένο μήνυμα με οδηγίες " +
            "για το πως να βγάλετε επιπλέον εισόδημα.",
          type: "text",
        },
        {
          text:
            "Πατήστε στο κουμπί παρακάτω και καλέστε. " +
            "Μην χάσετε την ευκαιρία σας!",
          type: "text",
        },
      ],
      comments: [
        {
          avatar: "1ava.jpg",
          name: "Γιώργος Μητρόπουλος",
          text:
            "Χρησιμοποίησα τα χρήματα για να ανοίξω το δικό μου\n" +
            "ζαχαροπλαστείο, γιατί το εισόδημα είναι εισόδημα,\n" +
            "και μια επιχείρηση πρέπει να υπάρχει!",
          date: this.setCommentDate(0),
        },
        {
          avatar: "2ava.jpg",
          name: "Δήμητρα Κωνσταντοπούλου",
          text:
            "Δεν καταλαβαίνω γιατί οι άνθρωποι δεν μπορούν απλώς\n" +
            "να πάρουν τα χρήματα. Χρειάζεστε λίγα λεπτά για να\n" +
            "ακούσετε τις οδηγίες στο τηλέφωνο και είναι πιο χρήσιμες\n" +
            "από όλα τα βιβλία για την αύξηση των κερδών σας μαζί!",
          date: this.setCommentDate(1),
        },
        {
          avatar: "3ava.jpg",
          name: "Δημήτρης Αλεξόπουλος",
          text:
            "Μόλις πήρα τα κέρδη μου... Μην είστε ανόητοι,\n" +
            "εγγραφείτε. Χάστε την ευκαιρία, και τότε θα\n" +
            "μετανιώσετε όλη σας τη ζωή",
          date: this.setCommentDate(2),
        },
        {
          avatar: "4ava.jpg",
          name: "Μαρία Καταραχιά",
          text: "Το είδα στις ειδήσεις",
          date: this.setCommentDate(3),
        },
        {
          avatar: "5ava.jpg",
          name: "Άννα Παπαδάκη",
          text:
            "Τώρα έχω την ευκαιρία να πάω διακοπές φέτος :)\n" +
            "Και το καλύτερο είναι ότι θα ξεκουράζομαι και το\n" +
            "σύστημα θα κερδίζει χρήματα μέρα νύχτα.\n" +
            "Είναι απλά ένα παραμύθι, όχι ζωή.",
          date: this.setCommentDate(4),
        },
      ],
      delivered: [],
      innerHeight: window.innerHeight,

      defaultPhoneNumber: "+309019015880",
      phoneNumber: null,
    };
  },
  props: ["person", "footerObj", "footerGeo"],
  components: { Footer, CallButton, Comment },
  methods: {
    setCommentDate(day) {
      return dayjs().add(-day, "day").format("YYYY.MM.DD.");
    },

    scroll() {
      let height = this.$refs.blow;
      setTimeout(() => {
        height.scrollTop = height.scrollHeight;
      }, 500);
    },
    chat() {
      let l = setInterval(() => {
        if (this.messages[this.midx].type !== "question") {
          this.chatForm = false;
          this.messages[this.midx].time = this.sendedTime();
          this.delivered.push(this.messages[this.midx]);
          this.midx++;
          this.idx++;
          this.scroll();
          if (this.midx === this.messages.length) {
            clearInterval(l), (this.chatForm = true), (this.typing = false);
          }
        } else if (this.messages[this.midx].type === "question") {
          this.chatForm = false;
          this.messages[this.midx].time = this.sendedTime();
          this.delivered.push(this.messages[this.midx]);
          this.midx++;
          this.idx++;
          this.scroll();
          this.typing = false;
          clearInterval(l), (this.chatForm = true), (this.typing = false);
        }
      }, 6000);
    },
    next(answer) {
      this.typing = true;
      this.messages[this.midx].time = this.sendedTime();
      this.delivered.push({
        answer: `${answer.answer}`,
        time: this.messages[this.midx].time,
        type: "answer",
      });
      this.idx++;
      this.scroll();
      this.chat();
    },
    genBirthDay(min, max) {
      let array = [];
      for (let i = min; i <= max; i++) {
        array.push(i);
      }
      return array;
    },
    sendMessage(message) {
      this.messages[this.midx].time = this.sendedTime();
      this.delivered.push({
        text: message,
        user: true,
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

    sendClick() {
      if (window.mbp) {
        window.mbp.pixel.send("cta");
      }
    },
    createLink(tel) {
      let a = document.createElement("a");
      a.href = `tel:${tel}`;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
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
  mounted() {
    this.chat();
    window.onresize = () => (this.innerHeight = window.innerHeight);
  },
};
</script>

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
    min-width: 30%;
    max-width: 35%;
    padding: 10px;
    background-color: #fff;
    color: black;
    font-size: 16px;
    font-weight: normal;
    line-height: 16px;
    border: 2px solid black;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 12px;
      padding: 8px;
    }
  }
}

.header {
  background: #655bac;
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
  height: 100%;
  background: #e5e5e5;
  background-size: contain;
  padding-bottom: 35px;
  max-width: 400px;
  margin: 0 auto;
  overflow-y: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
  }

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
      max-width: 200px;
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
  padding: 25px 15px 0 15px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0px;
  }
}

.callButton {
  margin: 15px 0;
  width: 100%;
}

.message {
  background: #fff;
  border-radius: 0px 10px 10px 10px;
  padding: 10px 15px;
  position: relative;
  margin-bottom: 11px;
  width: 100%;
  box-shadow: 0px 0px 1px #a39f98, 0px 1px 1px rgba(164, 152, 135, 0.321416);
  display: flex;
  flex-direction: column;

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
    text-align: right;
  }

  &-time {
    margin: 5px 0 0 5px;
    align-self: flex-end;
    display: flex;
    align-items: center;

    &__text {
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
    display: inline-flex;
    width: auto;
    background: #b2e2f6;
    color: #000000;
    min-width: 181px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px 0px 10px 10px;
  }
}

.messages {
  background: #fff;
  border-radius: 10px 0 10px 10px;
  padding: 10px 15px;
  position: relative;
  margin-bottom: 11px;
  box-shadow: 0px 0px 1px #a39f98, 0px 1px 1px rgba(164, 152, 135, 0.321416);
  display: flex;
  flex-direction: column;

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
    text-align: right;
  }

  &-time {
    margin: 5px 0 0 5px;
    align-self: flex-end;
    display: flex;
    align-items: center;

    &__text {
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
    display: inline-flex;
    width: auto;
    background: #b2e2f6;
    color: #000000;
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
    background: url("../assets/img/tringl_sel.svg") no-repeat 90% 50%, #655bac;

    &--active {
      background: url("../assets/img/tringl_sel-active.svg") no-repeat 90% 50%,
        #655bac;
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
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.03);
  border-top: 1px solid #dadada;

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

@keyframes horoRotate {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  50% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
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

@-webkit-keyframes next {
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
</style>

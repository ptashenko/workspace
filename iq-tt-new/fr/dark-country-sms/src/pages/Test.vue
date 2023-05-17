<template>
  <div class="testWrapper">
    <div class="test-page__wrapper" ref="test-wrapper">
      <div
        class="test-page__progress"
        :style="`grid-template-columns: repeat(${questionsLength} , 1fr`"
      >
        <div
          v-for="i in questionsLength"
          :class="
            currQuestionIndex + 1 >= i
              ? 'test-page__item active'
              : 'test-page__item'
          "
        ></div>
      </div>

      <p class="test-page__quest">{{ currQuestionData.question }}</p>

      <div class="test-page__img-wrapper">
        <img
          class="test-page__img"
          :src="require(`@/assets/img/quiz/${currQuestionIndex + 1}.png`)"
        />
      </div>

      <div class="test-page__column-list list">
        <button
          v-for="(answer, i) in currQuestionData.answers"
          @click="nextQuestOrNextPage"
          class="test-page__column-answer-btn btn"
          :disabled="buttonBlock"
        >
          {{ answer }}
        </button>
      </div>
    </div>
    <div class="users">
      <p class="label">{{ test.users }}</p>
      <p class="counter">{{ users }}</p>
    </div>
  </div>
</template>

<script>
import { animate, makeToZero, qubic } from "@/utilites/animate.js";

export default {
  data() {
    return {
      currQuestionIndex: 0,
      delayOfChangeQuest: 300,
      buttonBlock: false,
      users: 610,
      stopIntervals: false,
    };
  },
  methods: {
    nextQuestOrNextPage(event) {
      window.dataLayer.push({
        event: `${this.currQuestionIndex + 1} page`,
        question: this.currQuestionData.question,
        answer: event.target.textContent,
      });

      this.buttonBlock = true;
      event.target.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
      this.playAnim(event);
    },
    playAnim(event) {
      let testWrapper = this.$refs["test-wrapper"];

      // slide currQuestionData on left
      const animationChangeTest = () => {
        return animate({
          duration: 300,
          timing: qubic,
          draw: (progress) => {
            testWrapper.style.transform = `translateY(-${300 * progress}%)`;
          },
        });
      };

      setTimeout(() => {
        animationChangeTest().then(() => {
          this.currQuestionIndex++;
          this.currQuestionIndex > this.questionsLength - 1 &&
            this.$emit("next-page");

          animate({
            duration: 300,
            timing: makeToZero(qubic),
            draw: (progress) => {
              testWrapper.style.transform = `translateY(${progress * 300}%)`;
              event.target.classList.remove("active");
            },
          }).then(() => {
            testWrapper.style.transform = "";
            this.buttonBlock = false;
          });
        });
      }, this.delayOfChangeQuest);
    },
  },
  computed: {
    questionsLength() {
      return this.test.questions.length;
    },
    currQuestionData() {
      return this.test.questions[this.currQuestionIndex];
    },
  },
  mounted() {
    const interval = setInterval(() => {
      this.stopIntervals && clearInterval(interval);
      this.users = Math.round(Math.random() * (670 - 610) + 610);
    }, 3000);
  },
  destroyed() {
    this.stopIntervals = true;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.testWrapper {
  display: flex;
  height: calc(100% - vh(96px));
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
.test-page__wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.test-page__progress {
  display: grid;
  justify-items: stretch;
  grid-template-rows: vh(5px);

  width: 100%;
  padding: vh(10px) vh(10px);

  margin-bottom: vh(25px);
  background: #292929;
  box-shadow: vh(0px) vh(4px) vh(4px) rgba(0, 0, 0, 0.25);
  border-radius: vh(10px);

  .test-page__item {
    margin: 0 vh(1px);
    border-radius: vh(5px);
    background: #565656;

    &.active {
      background: #7a6dde;
    }
  }
}

.test-page__quest {
  margin-bottom: vh(10px);
  font-weight: 500;
  font-size: vh(28px);
  line-height: vh(32px);
  color: #ccd2dd;
  text-align: center;
}

.test-page__content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: vh(38px);
  width: vh(270px);
  height: vh(270px);
  margin-bottom: vh(35px);
}

.test-page__img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: vh(150px);
  height: vh(150px);
  margin-bottom: vh(12px);
  padding: vh(26px);

  border-radius: 50%;
  background-color: #f2f0ff;
  box-shadow: vh(0px) vh(4px) vh(4px) rgba(177, 183, 188, 0.25);

  .test-page__img {
    height: 100%;
    width: 100%;
    object-fit: scale-down;
  }
}

.test-page__column-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  max-height: vh(550px);
  width: 100%;
}

.test-page__column-answer-btn {
  flex: 1;
  flex-shrink: 0;
  margin-bottom: vh(10px);
  position: relative;
  width: 100%;
  padding: vh(5px) vh(10px);

  font-family: "Futura PT";

  font-style: normal;
  font-weight: 500;
  font-size: vh(22px);
  line-height: 1.2;
  color: #ccd2dd;

  background: #292929;
  box-shadow: vh(0px) vh(4px) vh(4px) rgba(0, 0, 0, 0.25);
  border-radius: vh(10px);

  &.active {
    background: #7a6dde !important;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.users {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: vh(20px);
  right: 50%;
  transform: translateX(50%);
  width: vh(300px);
  padding: vh(12px) vh(30px) vh(12px) vh(40px);

  background: #76f58a;
  box-shadow: inset vh(0px) vh(4px) vh(4px) rgba(0, 0, 0, 0.25);
  border-radius: vh(20px);

  .label {
    font-size: vh(24px);
    line-height: vh(32px);
    color: #ffffff;
  }

  .counter {
    display: block;
    width: vh(122px);
    background-color: #fff;
    border-radius: vh(20px);
    padding: vh(4px) 0;
    text-align: center;

    font-size: vh(24px);
    line-height: 1;
    color: #000;
    font-weight: 600;
  }
}
</style>

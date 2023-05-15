<template>
  <section>
    <transition name="fade">
      <div class="done">
        <div
          class="line"
          :class="[
            {
              ac: j > 0,
              ab: j > 1,
              aa: j > 2,
              cc: c > 0,
              bc: c > 1,
              cp: c > 2,
              end: !done,
            },
            lineColor,
          ]"
        >
          <div
            class="quiz"
            v-for="(q, index) in questions"
            :key="index"
            v-if="index === qidx && !done"
          >
            <Counter
              :qidx="qidx"
              :index="index"
              :questionsLength="questions.length"
            />
            <div class="event">
              <div class="title">{{ q.title }}</div>
              <div class="answers">
                <button
                  class="answer"
                  :class="{ 'answer--active': currentAnswer === index }"
                  v-for="(a, index) in q.answers"
                  @click="next(index)"
                  :disabled="!disabledBtn"
                >
                  <span
                    class="answer__text"
                    :class="{ 'answer__text--active': currentAnswer === index }"
                    >{{ a.text }}</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.line {
  width: 105px;
  background: #43a047;
  min-height: 2px;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    width: 0%;
    background: #43a047;
    height: 2px;
    top: 0;
  }
}
.cc {
  &::before {
    animation: cc 0.6s linear;
  }
}
.end {
  width: 100%;
  height: 100%;
}
.bc {
  animation: bc 0.6s linear;
}
.cp {
  animation: cp 0.6s linear;
}
.aa {
  &::before {
    animation: aa 0.6s linear;
  }
}
.ab {
  animation: ab 0.6s linear;
}
.ac {
  animation: ac 0.6s linear;
}
@keyframes aa {
  0% {
    width: 107px;
  }
  50%,
  100% {
    width: 0;
  }
}
@keyframes ab {
  0% {
    width: 100%;
  }
  50%,
  100% {
    width: 107px;
  }
}
@keyframes ac {
  0% {
    width: 100%;
  }
  50%,
  100% {
    height: 2px;
  }
}
@keyframes cc {
  50%,
  100% {
    width: 100%;
  }
}
@keyframes bc {
  30% {
    width: 100%;
  }
  50%,
  100% {
    width: 100%;
  }
}
@keyframes cp {
  0%,
  100% {
    width: 100%;
  }
  0% {
    height: 2px;
  }
  50%,
  100% {
    height: 100%;
  }
}
.done {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.quiz {
  max-width: 375px;
  margin: 0 auto;
}
.title {
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
}
.event {
  margin-top: 52px;
  padding: 0 31px;
}
.answers {
  margin-top: 49px;
  width: 100%;
}
.answer {
  background: transparent;
  border-radius: 6px;
  padding: 17px 19px;
  min-height: 23px;
  text-align: center;
  width: 100%;
  border: 2px solid #ffffff;
  outline: none;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  &__text {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    &--active {
      color: #fff;
    }
  }
  &--active {
    background: #0983df;
    border-color: #0983df;
  }
}

.greenOrange {
  background: #43a091;
  &::before {
    background: #ff8e8f;
  }
}
.orangeRed {
  background: #ff8e8f;
  &::before {
    background: #e53ada;
  }
}
.redReverse {
  background: #e53ada;
  &::before {
    background: #ff8f00;
  }
}
.redGrey {
  background: #8d8d8d;
  &::before {
    background: #e53935;
  }
}
</style>

<script>
import Counter from "../components/Counter";
import Done from "../components/Done";
import questions from "../assets/questions";
import slideAnimation from "../mixins/unbelivableMegaAnimationSlide";
export default {
  data: () => ({
    questions,
    qidx: 0,
    currentAnswer: null,
    done: true,
    disabledBtn: false,
    html: document.getElementById("html"),
  }),
  mixins: [slideAnimation],
  components: { Counter, Done },
  methods: {
    next(index) {
      this.disabledBtn = false;
      this.currentAnswer = index;
      setTimeout(() => {
        this.backgroundChanger("#E5E5E5");
        this.currentAnswer = null;
        this.flow(false);
      }, 200);
    },
    backgroundChanger(color) {
      this.html.style.background = color;
    },
  },
  mounted() {
    this.backgroundChanger("#E5E5E5");
    this.flow(true);
  },
};
</script>

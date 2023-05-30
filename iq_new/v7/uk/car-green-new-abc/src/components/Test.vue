<template>
  <div class="test content">
    <div class="wrapper">
      <span class="img">
        <img :src="require('../assets/static/' + currentTestPage.img)" alt="" />
      </span>
      <span class="title">{{ title }}</span>
      <span class="text">{{ currentTestPage.question }}</span>
      <div
        class="btn--container"
        :class="{
          error: !isSelected,
          big: questionNumber == 3 || questionNumber == 7,
        }"
      >
        <button
          type="button"
          class="btn"
          v-for="(button, ind) in this.currentTestPage.buttons"
          :key="button.text"
          :class="{ active: ind === activeButton }"
          @click="nextTest(button.point)"
        >
          {{ button.text }}
        </button>
      </div>
      <span class="of">{{ testNumber }}</span>
    </div>
  </div>
</template>

<script>
import Copyright from "@/text/Copyright";
import { test } from "../text/test";
export default {
  name: "Test.vue",
  components: {
    Copyright,
  },
  data() {
    return {
      defaultText: test[0],
      questionNumber: 1,
      activeButton: null,
      isSelected: true,
      sumPoint: 0,
    };
  },
  computed: {
    currentTestPage() {
      return test[this.questionNumber];
    },
    questionQuantity() {
      return test.length - 1;
    },
    title() {
      return this.defaultText.title + " " + this.questionNumber;
    },
    testNumber() {
      return (
        this.defaultText.title +
        " " +
        this.questionNumber +
        " " +
        this.defaultText.of +
        " " +
        this.questionQuantity
      );
    },
  },
  methods: {
    makeActive(ind) {
      this.activeButton = ind;
    },
    nextTest(point) {
      this.sumPoint += point;
      if (this.questionQuantity === this.questionNumber) {
        this.$emit("getPoint", this.sumPoint);
        this.$emit("nextPageCalc");
      } else {
        this.questionNumber += 1;
      }
    },
  },
  watch: {
    questionNumber() {
      window.scrollTo(0, 0);
    },
  }
};
</script>

<style lang="scss">
.test {
  padding-top: 45px;
  @media (max-height: 700px) and (max-width: 380px) {
    padding-top: 30px;
  }
  .img {
    margin-bottom: 41px;
    width: 150px;
    height: 81px;
    @media (max-height: 700px) and (max-width: 380px) {
      margin-bottom: 15px;
    }
  }
  .title {
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.5);
    @media (max-height: 700px) and (max-width: 380px) {
      margin-bottom: 5px;
    }
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    height: 105px;
    text-align: center;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    @media (max-height: 700px) and (max-width: 380px) {
      height: fit-content;
      margin-top: 15px;
      margin-bottom: 25px;
      font-size: 20px;
      line-height: 25px;
    }
  }
  .next {
    position: relative;
    margin-bottom: 35px;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      top: calc(100% - 4px);
      display: block;
      width: 100%;
      height: 1px;
      background-color: #000000;
    }
  }
  .of {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: rgba(146, 151, 171, 0.5);
  }
}
</style>

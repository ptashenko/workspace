<template>
  <div class="test" :class="screen">
    <div class="wrapper" :class="{ btnStart }">
      <div class="test__top" v-if="screen != 'birth'">
        <span class="test__title">{{ text[questionNumber].title }}</span>
        <span class="test__text" v-if="text[questionNumber].text">{{
          text[questionNumber].text
        }}</span>
      </div>
      <BirthChoose
        :questionNumber="questionNumber"
        :error="error"
        :text="text[1]"
        @sendCity="sendCity"
        @btnUp="btnUp"
        v-if="screen === 'birth'"
      ></BirthChoose>
      <Person
        :questionNumber="questionNumber"
        :text="text[questionNumber]"
        :error="error"
        @checkChoose="checkChoose"
        @sendCity="sendCity"
        @btnUp="btnUp"
        v-if="screen === 'person'"
      ></Person>
      <Information
        :questionNumber="questionNumber"
        :text="text[questionNumber]"
        :error="error"
        @checkChoose="checkChoose"
        @nextPageCalculate="nextPageCalculate"
        v-if="screen === 'information'"
      ></Information>
      <Button
        :text="text[0]"
        :questionNumber="questionNumber"
        v-on:nextPage="nextTest()"
      ></Button>
    </div>
  </div>
</template>

<script>
import { test } from '../text/test';

import BirthChoose from '@/screens/BirthChoose';
import Person from '@/screens/Person';
import Information from '@/screens/Information';
import Button from '@/components/Button';
export default {
  name: 'Test.vue',
  components: {
    BirthChoose,
    Person,
    Button,
    Information,
  },
  data() {
    return {
      text: test,
      questionNumber: 1,
      error: false,
      isComplete: false,
      currentZodiak: '',
      screen: 'birth',
      btnStart: false,
    };
  },
  methods: {
    makeActive(ind) {
      this.activeButton = ind;
    },
    nextTest() {
      if (this.isComplete) {
        if (this.questionNumber === 2 && this.screen == 'birth') {
          this.screen = 'person';
          this.isComplete = false;
          return;
        }
        if (this.questionNumber === 3 && this.screen == 'person') {
          this.screen = 'information';
          this.questionNumber += 1;
          this.isComplete = false;
          return;
        }
        if (this.questionNumber === 7) {
          this.$emit('nextPageCalc', this.currentZodiak);
          return;
        }
        this.questionNumber += 1;
        this.isComplete = false;
        return;
      }
      this.error = true;
    },
    sendCity(e) {
      this.error = false;
      if (!e[0].length) {
        this.isComplete = false;
        return;
      }
      this.isComplete = true;
      if (this.screen === 'birth') {
        this.currentZodiak = e[1];
      }
    },
    checkChoose(e) {
      if (this.questionNumber === 5 && e === 0) {
        this.isComplete = false;
        return;
      }
      this.error = false;
      this.isComplete = true;
    },
    nextPageCalculate() {
      this.$emit('nextPageCalc', this.currentZodiak);
    },
    btnUp() {
      setTimeout(() => (this.btnStart = !this.btnStart), 100);
    },
  },
  mounted() {
    if (this.screen === 'birth') {
      this.isComplete = true;
    }
  },
  watch: {
    questionNumber() {
      window.scrollTo(0, 0);
    },
    screen() {
      window.scrollTo(0, 0);
    },
  }
};
</script>

<style lang="scss">
.test {
  height: 100%;
  padding-top: 45px;
  min-height: 550px;
  @media (max-height: 700px) {
    padding-top: 30px;
  }

  &__title {
    display: block;
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    margin-bottom: 34px;
    @media (max-height: 700px) {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    @media (min-width: 1200px) {
      padding-top: 0;
      margin-bottom: 10px;
    }
  }
  &__text {
    display: block;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
  &__top {
    margin-bottom: 20px;
  }
}
.birth {
  .dot:nth-child(2) {
    background-color: white;
  }
}
.person {
  .dot:nth-child(3) {
    background-color: white;
  }
}
.information {
  .dot:nth-child(4) {
    background-color: white;
  }
}
</style>

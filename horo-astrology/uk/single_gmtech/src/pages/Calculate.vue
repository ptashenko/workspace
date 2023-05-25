<template>
  <div class="calculate">
    <div class="wrapper">
      <span class="title">{{ text.title }}</span>
      <div class="calculate__progress">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          class="checkmark"
        >
          <circle
            cx="26"
            cy="26"
            r="23"
            stroke-linecap="round"
            stroke-dashoffset="0"
            class="checkmark__circle"
          />
        </svg>
        <span>{{ progress }}%</span>
      </div>
      <div
        v-for="(step, ind) of steps"
        :key="step"
        class="step"
        :class="{ show: stepCount >= ind, complete: stepCount >= ind + 1 }"
      >
        <div class="step--complete">
          <img src="../assets/static/done.svg" alt="" />
        </div>
        <div class="step--container">
          <span class="step__text"
            >{{ step }} <span class="step__dots">...</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { calculate } from '../text/calculate';
export default {
  name: 'Calculate',
  data() {
    return {
      text: calculate,
      progress: 0,
      stepCount: 0,
    };
  },
  computed: {
    steps() {
      return this.text.steps;
    },
  },
  methods: {
    startLoading() {
      let can = document.getElementsByClassName('checkmark__circle')[0],
        r = document
          .getElementsByClassName('checkmark__circle')[0]
          .getAttribute('r'),
        c = Math.PI * (2 * r);

      can.setAttribute('stroke-dasharray', c);
      can.setAttribute('stroke-dashoffset', c);

      if (this.progress === 0) {
        this.progress = 1;
        let width = 1,
          id = setInterval(() => {
            if (width >= 100) {
              clearInterval(id);
              this.progress = 100;

              setTimeout(() => {
                this.nextPageResults();
              }, 1000);
            } else {
              this.progress++;
              width++;
              this.stepShow(width);
              can.setAttribute(
                'stroke-dashoffset',
                Math.floor(((100 - this.progress) / 100) * c)
              );
            }
          }, 100);
      }
    },
    stepShow(width) {
      let steps = [0, 16, 32, 48, 64, 80, 100];
      if (steps.includes(width)) {
        this.stepCount++;
      }
    },
    nextPageResults() {
      this.$emit('nextPageResults');
    },
  },
  mounted() {
    this.startLoading();
  },
};
</script>

<style lang="scss">
.calculate {
  padding-top: 45px;
  @media (max-height: 700px) {
    padding-top: 30px;
  }
  .wrapper {
    justify-content: flex-start;
  }
  .title {
    margin-bottom: 77px;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    @media (max-height: 700px) {
      margin-bottom: 40px;
    }
  }
  .checkmark {
    width: 155px;
  }
  .checkmark__circle {
    stroke-width: 6;
    stroke-miterlimit: 10;
    stroke: #eaaf5c;
    fill: transparent;
  }
  .step {
    display: none;
    width: 271px;
    margin-bottom: 11px;
    &:last-child {
      margin-bottom: 0;
    }
    &.show {
      display: flex;
    }
    &.complete {
      .step--complete {
        img {
          display: block;
        }
      }
      .step__dots {
        display: none;
      }
    }
    &__text {
      font-size: 14px;
      line-height: 16px;
    }
    &--complete {
      margin-right: 16px;
      min-width: 25px;
      img {
        display: none;
      }
    }
    &--container {
      padding-top: 3px;
    }
  }
  &__progress {
    position: relative;
    margin-bottom: 90px;
    @media (max-height: 700px) {
      margin-bottom: 30px;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-weight: bold;
      font-size: 35px;
      line-height: 41px;
      color: #ffffff;
    }
  }
}
</style>

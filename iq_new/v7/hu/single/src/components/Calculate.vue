<template>
  <div class="calculate content">
    <div class="wrapper">
      <span class="img">
        <img :src="require('../assets/static/' + text.img)" alt="" />
      </span>
      <span class="title">{{ text.title }}</span>
      <span class="text">{{ text.text }}</span>
      <div
        v-for="(step, ind) of steps"
        :key="step"
        class="step"
        :class="{ show: progress >= ind, complete: progress >= ind + 1 }"
      >
        <div class="step--complete">
          <img src="../assets/static/complete.svg" alt="" />
        </div>
        <div class="step--container">
          <span class="step__text">{{ step }}</span>
          <span class="step__loading"></span>
          <span class="step__text">{{ text.complete }}</span>
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
    };
  },
  computed: {
    steps() {
      return this.text.steps;
    },
  },
  methods: {
    startLoading() {
      if (this.progress === 0) {
        let id = setInterval(() => {
          if (this.progress >= 3) {
            clearInterval(id);
            this.nextPageResults();
          } else {
            this.progress++;
          }
        }, 3000);
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
  @media (max-height: 700px) and (max-width: 380px) {
    padding-top: 20px;
  }
  .img {
    margin-bottom: 19px;
    width: 140px;
    height: 78px;
    @media (max-height: 700px) and (max-width: 380px) {
      width: 128px;
      height: 71px;
      margin-bottom: 15px;
    }
  }
  .title {
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    @media (max-height: 700px) and (max-width: 380px) {
      font-size: 27px;
      line-height: 29px;
    }
  }
  .text {
    margin-bottom: 52px;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #36be57;
    @media (max-height: 700px) and (max-width: 380px) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 15px;
    }
  }
  .step {
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-bottom: 33px;
    opacity: 0;
    @media (max-height: 700px) and (max-width: 380px) {
      margin-bottom: 15px;
    }
    &.show {
      opacity: 1;
      .step__loading {
        &:after {
          animation: loading 3s linear;
        }
      }
    }
    &.complete {
      .step--complete {
        opacity: 1;
      }
      .step__loading {
        display: none;
      }
      .step__text {
        display: block;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    &__text {
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: left;
      &:last-child {
        display: none;
        margin-bottom: 0;
      }
      @media (max-height: 700px) and (max-width: 380px) {
        font-size: 14px;
        line-height: 15px;
        margin-bottom: 10px;
        min-width: calc(100% - 80px);
      }
    }
    &__loading {
      position: relative;
      padding: 5px 6px;
      width: 100%;
      height: 26px;
      background-color: #36be57;
      box-shadow: 0px 0px 10px 5px rgba(54, 190, 87, 0.2);
      border-radius: 15px;
      &:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 6px;
        display: block;
        width: 0;
        height: calc(100% - 10px);
        background: #ffffff;
        border-radius: 15px;
      }
    }
    &--container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: calc(100% - 99px);
      @media (max-height: 700px) and (max-width: 400px) {
        min-width: calc(100% - 80px);
      }
    }
    &--complete {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 99px;
      opacity: 0;
      transition: all 0.2s;
      @media (max-height: 700px) and (max-width: 400px) {
        min-width: 80px;
        width: 80px;
      }
      img {
        width: 100%;
      }
      .step__text {
        margin-bottom: 0;
      }
    }
  }
}
@keyframes loading {
  from {
    width: 0;
  }
  to {
    width: calc(100% - 12px);
  }
}
</style>

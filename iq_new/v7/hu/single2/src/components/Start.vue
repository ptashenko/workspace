<template>
  <div class="start content">
    <div class="wrapper">
      <div class="content--top">
        <span class="img">
          <img :src="require('../assets/static/' + text.img)" alt="" />
        </span>
        <span class="title">{{ text.title }}</span>
        <span class="start__question">{{ text.question }}</span>
        <span class="start__text">{{ text.text }}</span>
        <button type="button" class="btn active" @click="nextPageTest">
          {{ text.button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { start } from '../text/start';

export default {
  name: 'Start',
  data() {
    return {
      text: start,
    };
  },
  methods: {
    nextPageTest() {
      this.$emit('nextPageTest');
    },
  },
};
</script>

<style lang="scss">
.start {
  display: flex;
  flex-direction: column;
  padding-top: 45px;
  @media (max-height: 700px), (max-width: 400px) {
    padding-top: 20px;
  }
  .wrapper {
    flex-grow: 1;
    height: 100%;
    justify-content: space-between;
  }
  .title {
    margin-bottom: 35px;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    @media (max-height: 700px), (max-width: 400px) {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 15px;
    }
  }
  .img {
    margin-bottom: 35px;
    width: 130px;
    height: 91px;
    @media (max-height: 700px) and (max-width: 380px) {
      width: 130px;
      margin-bottom: 10px;
    }
  }
  .btn {
    width: 320px;
    padding: 24px 10px;
    animation: pulse 1.5s infinite;
    @media (max-height: 600px), (max-width: 360px) {
      width: 280px;
      padding: 15px 10px;
    }

    &:disabled {
      opacity: 0.7;
      cursor: default;
    }
  }
  &__question {
    margin-bottom: 42px;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    color: #36be57;
    max-width: 305px;
    @media (max-height: 700px), (max-width: 420px) {
      font-size: 22px;
      line-height: 27px;
      margin-bottom: 20px;
    }
  }
  &__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-bottom: 82px;
    @media (max-height: 700px), (max-width: 400px) {
      margin-bottom: 45px;
    }
  }
}
</style>

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
import Copyright from '@/text/Copyright';
import { start } from '../text/start';

export default {
  name: 'Start',
  components: {
    Copyright,
  },
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
  .copyright {
    margin-top: 90px;
    font-size: 11px;
    text-align: center;
    color: grey;
    .email-link {
      color: #1155cc;
      text-decoration: underline;
    }
    a {
      text-decoration: none;
    }
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
    @media (max-height: 700px) and (max-width: 400px) {
      font-size: 30px;
      line-height: 37px;
      margin-bottom: 15px;
    }
    @media(max-height: 568px) and (max-width: 320px) {
      font-size: 26px;
      line-height: 33px;
    }
  }
  .img {
    margin-bottom: 35px;
    width: 110px;
    height: 91px;
    @media (max-height: 700px), (max-width: 400px) {
      width: 90px;
      margin-bottom: 15px;
    }
  }
  .btn {
    width: 320px;
    padding: 24px 10px;
    animation: pulse 1.5s infinite;
    @media (max-height: 600px), (max-width: 360px) {
      width: 280px;
      padding: 20px 10px;
    }
  }
  &__question {
    margin-bottom: 42px;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    color: #fa9825;
    max-width: 305px;
    @media (max-height: 700px), (max-width: 400px) {
      font-size: 22px;
      line-height: 27px;
      margin-bottom: 20px;
    }
    @media(max-height: 568px) and (max-width: 320px) {
      font-size: 20px;
      line-height: 25px;
    }
  }
  &__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-bottom: 82px;
    @media (max-height: 700px), (max-width: 400px) {
      margin-bottom: 50px;
    }
  }
}
</style>

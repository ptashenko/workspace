<template>
  <div class="button-wrapper">
    <div class="callButton animated pulse infinite">
      <button
        class="button callBtn"
        v-show="!phoneNumber"
        @click.prevent="dataLayer(), getPhoneNumber()"
        v-metrics>
        <img
          class="button__icon"
          src="../assets/img/calls.svg"
          alt />
        <span class="button__text"> HÍVÁS MOST </span>
      </button>
      <a
        class="button callBtn"
        @click="
          dataLayer(), sendClick();
          return true;
        "
        v-show="phoneNumber"
        :href="'tel:' + phoneNumber">
        <img
          class="button__icon"
          src="../assets/img/calls.svg"
          alt />
        <span class="button__text"> HÍVÁS MOST </span>
      </a>
    </div>
    <div class="circle">24/7</div>
  </div>
</template>

<script>
  export default {
    props: ["sendClick", "getPhoneNumber", "phoneNumber", "callNumber"],
    methods: {
      dataLayer() {
        dataLayer.push({'event': this.callNumber});
      }
    }
  };
</script>

<style lang="scss" scoped>
  .callButton {
    text-align: center;
    margin: 16px auto;
    width: 80%;
  }

  .button-wrapper{
    display: flex;
    align-items: center;
  }

  .button {
    display: flex;
    outline: none;
    border: none;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    background: linear-gradient(180deg, #3578e5, #4166b1);
    border-radius: 50px;
    width: 100%;
    height: 54px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    &__icon {
      position: absolute;
      left: 35px;
      width: 20px;
      margin-right: 20px;
      animation: tada 1.5s infinite;
    }
    &__text {
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      font-weight: bold;
      font-size: 18px;
    }
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 900;
    color: #3578e5;
    background: #fff;
    border: 1px solid #3578e5;
    width: 50px;
    height: 50px;
  }
</style>

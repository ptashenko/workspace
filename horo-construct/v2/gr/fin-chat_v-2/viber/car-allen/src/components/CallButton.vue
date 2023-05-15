<template>
  <div>
    <button
      v-if="!phoneNumber"
      v-metrics
      class="firstButton callBtn"
      @click="emitGetPhoneNumber"
    >
      <img
        class="firstButton__img"
        src="../assets/img/button-call.png"
        alt=""
      />
      <span class="firstButton__text">Καλέστε και ακούστε!</span>
    </button>
    <a
      v-if="phoneNumber"
      :href="'tel:' + phoneNumber"
      class="firstButton"
      @click="emitSendClick"
    >
      <img
        class="firstButton__img"
        src="../assets/img/button-call.png"
        alt=""
      />
      <span class="firstButton__text">Καλέστε και ακούστε!</span>
    </a>
  </div>
</template>
<script>
export default {
  name: "CallButton",
  props: ["phoneNumber"],
  methods: {
    emitGetPhoneNumber() {
      this.$emit("getPhoneNumber");
    },
    emitSendClick() {
      this.$emit("sendClick");
    },
  },
};
</script>

<style lang="scss">
.firstButton {
  display: block;
  margin: 0 auto;
  text-decoration: none;
  background: linear-gradient(90.19deg, #a532e5 2.74%, #cb4f85 103.17%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  border: none;
  outline: none;
  padding: 19px 50px 18px 70px;
  position: relative;
  width: 90%;
  text-align: center;
  &__img {
    position: absolute;
    width: 23px;
    top: 13px;
    left: 17px;
    animation: horoRotate 0.8s linear infinite;
  }
  &__text {
    white-space: nowrap;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1px;
  }
}
</style>

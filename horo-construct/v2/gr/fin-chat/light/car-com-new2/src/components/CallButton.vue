<template>
  <div class="callButton">
    <button
      class="button callBtn animated pulse infinite"
      v-if="!phoneNumber"
      @click="emitGetPhoneNumber()"
      v-metrics
    >
      <img class="button__icon" src="../assets/img/icon_button_call.svg" alt />
      <span class="button__text">Καλέστε και ακούστε</span>
    </button>
    <a
      class="button animated pulse infinite"
      :href="'tel:' + phoneNumber"
      v-else
      @click="emitSendClick()"
    >
      <img class="button__icon" src="../assets/img/icon_button_call.svg" alt />
      <span class="button__text">Καλέστε και ακούστε</span>
    </a>

    <div class="circle">24/7</div>
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
.circle {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 900;
  color: #6cb34b;
  background: #fff;
  border: 1px solid #6cb34b;
  width: 50px;
  height: 50px;

  @media (max-width: 375px) {
    width: 45px;
    height: 45px;
  }
}

.callButton {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin: 16px auto;
  width: 100%;
  min-height: 54px;
}

.button {
  display: flex;
  outline: none;
  border: none;
  background: linear-gradient(0deg, #4bb34f 0.01%, #9ac04c 100%);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 300px;
  width: 100%;
  height: 54px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  @media (max-width: 375px) {
    max-width: 270px;
  }

  &__icon {
    position: absolute;
    top: 5px;
    left: 10px;
    animation: horoRotate 0.8s linear infinite;
    
    @media (max-width: 375px) {
      top: 12px;
      width: 30px;
    }
  }

  &__text {
    margin-left: 40px;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;

    @media (max-width: 375px) {
      font-size: 17px;
    }
  }
}
</style>

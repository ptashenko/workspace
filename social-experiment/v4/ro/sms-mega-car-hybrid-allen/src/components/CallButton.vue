<template>
  <div>
    <div class="button" v-if="!phoneNumber">
      <img src="../assets/img/icon-call.svg" class="icon-call swing" alt />
      <button class="button__inner callBtn" @click="emitGetPhoneNumber()" v-metrics>
        Sunați chiar acum
      </button>
    </div>
    <div class="button" v-if="phoneNumber">
      <img src="../assets/img/icon-call.svg" class="icon-call swing" alt />
      <a
        class="button__inner"
        @click="emitSendClick()"
        :href="'tel:' + phoneNumber"
        >Sunați chiar acum</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CallButton",
  props: ["phoneNumber"],
  methods: {
    emitGetPhoneNumber() {
      this.$emit("sendNumber");
    },
    emitSendClick() {
      this.$emit("sendClick");
    },
  },
};
</script>

<style lang="scss">
.button {
  margin: 10px 0;
  position: relative;
}
.button__inner {
  width: 100%;
  background: #2f9e31;
  box-sizing: border-box;
  position: relative;
  text-decoration: none;
  border-radius: 3px;
  padding: 17px 0 17px 40px;
  text-align: center;
  display: block;
  font-size: 14.5px;
  border: none;
  color: #fff;
  letter-spacing: 0.1em;
  font-weight: 900;

  &.no-img {
    padding: 17px 0;
  }
}
.button__inner:disabled {
  background: grey;
}
.icon-call {
  z-index: 9999;
  position: absolute;
  left: 45px;
  top: 0;
  bottom: 0;
  right: auto;
  margin: auto;
  transform: translateY(-1%);
  animation: 1.2s ease 0s normal none 1 running swing;
  animation-iteration-count: infinite;
  -webkit-animation: 1.2s ease 0s normal none 1 running swing;
  -webkit-animation-iteration-count: infinite;
}
</style>

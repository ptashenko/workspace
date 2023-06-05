<template>
  <div class="input">
    <div class="alert" ref="alert" v-html="text.alert" />
    <input v-model="comment" type="text" :placeholder="text.placeholder" />
    <button v-if="comment" class="send-btn" @click="sendMessage">
      <img :src="require('../assets/static/send.svg')" alt="Send button" />
    </button>
  </div>
</template>

<script>
import text from "../text/comments";
export default {
  name: "CommentInput",
  data() {
    return {
      text,
      comment: "",
      alertOpened: false,
      alertDuration: 2000,
    };
  },
  methods: {
    sendMessage() {
      if (!this.alertOpened) {
        const alert = this.$refs.alert;
        alert.style.top = "20px";
        this.alertOpened = true;
        setTimeout(() => {
          alert.style.top = "-200px";
          this.alertOpened = false;
        }, this.alertDuration);
        this.comment = "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  display: flex;
  align-items: center;

  .alert {
    position: fixed;
    max-width: 478px;
    margin: 0 auto;
    background-color: #e3e3d9;
    border-radius: 15px;
    top: -200px;
    left: 20px;
    right: 20px;
    min-height: 60px;
    padding: 22px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    transition: top 0.5s;
  }
}
input {
  font-size: 16px;
  background-color: #e3e3d9;
  border-radius: 6px;
  padding: 4px 12px;
  border: none;
  width: 100%;
  min-height: 30px;
  outline: none;
}

.send-btn {
  background-color: transparent;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
  }
  &:hover {
    opacity: 0.7;
  }
}
</style>

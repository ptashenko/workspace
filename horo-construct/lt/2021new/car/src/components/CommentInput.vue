<template>
  <div class="input" :class="{ isComment: comment }">
    <div class="alert" ref="alert" v-html="validationMessage" />
    <input v-model="comment" type="text" :placeholder="addComment" />
    <button v-if="comment" class="send-btn" @click="sendMessage">
      <img
          :src="require('../assets/img/send.svg')"
          alt="Send button"
      />
    </button>
  </div>
</template>

<script>
import comments from "@/mixins/comments";
export default {
  name: "CommentInput",
  mixins: [comments],
  data() {
    return {
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
  justify-content: space-between;
  padding: 5px 20px;
  background-color: white;
  width: 100%;
  .alert {
    position: fixed;
    max-width: 478px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 15px;
    top: -200px;
    left: 20px;
    right: 20px;
    min-height: 60px;
    padding: 22px;
    z-index: 10000;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    transition: top 0.5s;
  }
}
.isComment {
  padding-right: 10px;
  input {
    width: calc(100% - 50px);
  }
}
input {
  font-size: 16px;
  background-color: #f1f1f1;
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
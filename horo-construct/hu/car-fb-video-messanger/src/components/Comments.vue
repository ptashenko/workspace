<template>
  <div class="comments-wrapper">
    <div class="comments-header">
      <div class="comments-counter">
        {{ comments.length }} {{ commentTitle }}
      </div>
    </div>

    <div class="comments-content">
      <div v-for="(comment, i) of comments" :key="i">
        <div class="comment">
          <div class="avatar">
            <img
              :src="require('../assets/img/avatars/' + comment.avatar)"
              alt="Avatar"
            />
          </div>
          <div class="content">
            <div class="content-body">
              <div class="login">
                {{ comment.name }}
              </div>
              <div class="text">
                <span>{{ comment.text }}</span>
                <like-btn :likes="comment.likes" />
              </div>
            </div>
          </div>
        </div>
        <CallButton
          v-if="i === 4"
          :sendClick="sendClick"
          :getPhoneNumber="getPhoneNumber"
          :phoneNumber="phoneNumber"
          :callNumber="callNumber"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LikeBtn from "@/components/LikeBtn";
import comments from "@/mixins/comments";
import CallButton from "@/components/CallButton";
export default {
  name: "Comments",
  props: ["sendClick", "getPhoneNumber", "phoneNumber", "callNumber"],
  mixins: [comments],
  components: { CallButton, LikeBtn},
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

<style scoped lang="scss">
.comments-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
  width: 100%;
  flex-shrink: 0;
  background-color: #f5f5f3;
  border-radius: 15px 15px 0 0;
  color: #000000;
  bottom: 0;
  .comments-header {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    .comments-counter {
      font-weight: bold;
    }
  }
  .comments-content {
    padding: 0 20px;
    background-color: #f5f5f3;
    .comment {
      display: flex;
      align-items: flex-start;
      margin-top: 20px;
      margin-bottom: 20px;

      .avatar {
        min-width: 60px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          object-fit: cover;
          @media (max-width: 320px) {
            width: 40px;
            height: 40px;
          }
        }
      }
      .content {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .content-body {
          width: 100%;
          .login {
            color: #909092;
          }
        }
      }
    }
  }
  .comments-footer {
    text-align: center;
    position: sticky;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 -20px;
    padding: 10px 20px;
  }
}
.text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    width: 80%;
  }
}
</style>

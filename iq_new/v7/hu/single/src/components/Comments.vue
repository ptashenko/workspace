<template>
  <div class="comments-wrapper">
    <div class="comments-header">
      <div class="comments-counter">
        {{ text.comments.length }} {{ text.commentsCounterText }}
      </div>
    </div>

    <div class="comments-content">
      <div v-for="(comment, i) of text.comments" :key="i" class="comment">
        <div class="avatar">
          <img
            :src="require('../assets/static/avatars/' + comment.avatar)"
            alt="Avatar"
          />
        </div>
        <div class="content">
          <div class="content-body">
            <div class="login">
              {{ comment.login }}
            </div>
            <div class="text">
              {{ comment.text }}
            </div>
          </div>
          <like-btn :likes="comment.likes" />
        </div>
      </div>
      <CommentInput />
    </div>
  </div>
</template>

<script>
import CommentInput from '@/components/CommentInput';
import LikeBtn from '@/components/LikeBtn';
import text from '../text/comments';
export default {
  name: 'Comments',
  components: { LikeBtn, CommentInput },
  data() {
    return {
      text,
    };
  },
};
</script>

<style scoped lang="scss">
.comments-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 10px;
  position: relative;
  width: 100%;
  max-width: 355px;
  margin-top: 10px;
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
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 100px;
        @media (orientation: landscape) {
          margin-bottom: 60px;
        }
      }

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
        width: min-content;

        .content-body {
          width: calc(100% - 30px);

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
</style>

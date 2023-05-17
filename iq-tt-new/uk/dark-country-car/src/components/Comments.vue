<template>
  <div class="comments-window">
    <div class="comments-wrapper">
      <div class="comments-header">
        <div class="comments-counter">
          {{ commentsBlock.commentsCounterText[0] }}
          {{ commentsBlock.comments.length }}
          {{ commentsBlock.commentsCounterText[1] }}
        </div>
      </div>

      <div class="comments-content">
        <div
          v-for="(comment, i) of commentsBlock.comments"
          :key="i"
          class="comment"
        >
          <div class="avatar">
            <img
              :src="require('@/assets/img/avatars/' + (i + 1) + '.jpg')"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../assets/styles/functions.scss";
.comments-window {
  width: 100%;
  border-radius: vh(15px);
  padding: vh(0px) vh(20px) vh(15px);
  background-color: #f5f5f3;
  border-radius: vh(15px);
}

.comments-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  color: #000000;
  bottom: 0;

  .comments-header {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: vh(40px);

    .comments-counter {
      font-weight: bold;
      font-size: vh(20px);
    }
  }

  .comments-content {
    overflow-y: scroll;
    height: vh(280px);
    background-color: #f5f5f3;

    &::-webkit-scrollbar {
      width: vh(5px);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #6658d9;
      border-radius: vh(6px);
    }

    .comment {
      display: flex;
      align-items: flex-start;
      width: calc(100% - vh(60px));

      &:not(&:last-child) {
        margin-bottom: vh(20px);
      }

      .avatar {
        width: vh(60px);

        img {
          width: vh(45px);
          height: vh(55px);
          object-fit: cover;
        }
      }

      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        font-size: vh(15px);
        line-height: 1.2;
        font-weight: 500;
        color: #000102;

        .content-body {
          width: calc(100% - vh(30px));

          .login {
            font-size: vh(12px);
          }
        }
      }
    }
  }
}
</style>

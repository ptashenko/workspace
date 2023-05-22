<template>
  <div class="comment">
    <div class="comment__avatar">
      <img
        :src="require(`../assets/static/img/avatars/${avatar}`)"
        alt="Avatar"
      />
    </div>
    <div class="comment__body">
      <div class="comment__body-person">{{ name }}</div>
      <div class="comment__body-date">{{ date }}</div>
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: ["avatar", "name", "text", "date"],
};
</script>

<style lang="scss" scoped>
.comment {
  flex-shrink: 0;
  display: flex;
  display: -webkit-box;
  flex-direction: row;
  border-radius: 7px;
  padding: 10px 15px;
  position: relative;
  margin-bottom: 11px;
  width: 100%;
  &__avatar {
    max-width: 25%;
    margin-right: 15px;
    img {
      width: 54px;
      height: 54px;
      border-radius: 100%;
    }
  }
  &__body {
    max-width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      color: #000;
      text-align: left;
    }
    &-person {
      font-weight: 900;
      margin-bottom: 5px;
      color: #8e9cb9;
    }
    &-date {
      color: #444;
      font-size: 13px;
      margin-bottom: 10px;
      
    }
  }
}
</style>

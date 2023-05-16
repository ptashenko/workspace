<template>
  <div class="comment">
    <div class="comment__avatar">
      <img
        :src="require(`../assets/img/avatars/${avatar}`)"
        alt="Avatar"
      />
    </div>
    <div class="comment__body">
      <div class="comment__body-person">{{ name }}</div>
      <div class="comment__body-date">{{ date }}</div>
      {{ text }}
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
  display: flex;
  display: -webkit-box;
  flex-direction: row;
  background: #f5f5f5;
  border-radius: 7px;
  padding: 10px 15px;
  position: relative;
  margin-bottom: 11px;
  &__avatar {
    max-width: 25%;
    margin-right: 15px;
    img {
      width: 54px;
      height: 54px;
      border-radius: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  &__body {
    max-width: 75%;
    display: flex;
    flex-direction: column;
    &-person {
      font-weight: 700;
      margin-bottom: 5px;
      color: #62677b;
    }
    &-date {
      color: rgba(0, 0, 0, 0.54);
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
}
</style>

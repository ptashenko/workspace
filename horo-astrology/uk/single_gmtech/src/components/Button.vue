<template>
  <div class="btn--container">
    <div v-if="questionNumber === 7" class="btn--small" id="skip">
      <button type="button" class="btn btn--outline" @click="nextPage">
        {{ text.smallButtons[0] }}
      </button>
      <button type="button" class="btn" @click="loadPicture">
        {{ text.smallButtons[1] }}
      </button>
    </div>
    <button type="button" class="btn" @click="nextPage" v-else>
      {{ text.button }}
    </button>
    <ul class="dots" v-if="questionNumber">
      <li class="dot" v-for="dot in screenCount" :key="dot"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'questionNumber'],
  data() {
    return {
      screenCount: 5,
    };
  },
  methods: {
    nextPage() {
      this.$emit('nextPage');
    },
    loadPicture() {
      document.querySelector('#fileInput').click();
    },
  },
};
</script>

<style lang="scss">
.btn {
  border-radius: 70px;
  background-color: #7b2be0;
  display: block;
  vertical-align: middle;
  color: #fff !important;
  text-decoration: none;
  font-size: 17px;
  line-height: 20px;
  font-weight: 600;
  padding: 17px;
  transition: all 0.1s ease-out;
  border: 0;
  cursor: pointer;
  width: 100%;
  max-width: 223px;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  @media (max-height: 700px) {
    padding: 15px;
    max-width: 210px;
    font-size: 16px;
  }
  &:disabled {
    &:hover {
      transform: none;
    }
  }
  &:hover {
    transform: scale(1.05);
  }
  &--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 96px;
    width: 100%;
    @media (max-height: 700px) {
      min-height: 65px;
    }
  }
  &--small {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    width: 339px;
    .btn {
      max-width: 161px;
    }
  }
  &--outline {
    background-color: transparent;
    border: 2px solid #7b2be0;
  }
}
.dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .dot {
    width: 9px;
    height: 9px;
    margin-right: 16px;
    border-radius: 50%;
    background-color: rgba(196, 196, 196, 0.1);
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>

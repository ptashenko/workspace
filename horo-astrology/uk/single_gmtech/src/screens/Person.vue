<template>
  <div class="person__page">
    <ul class="gender__list" v-if="questionNumber == 2">
      <li
        v-for="(gender, index) in text.genders"
        :key="index"
        class="gender__item"
        @click="chooseGender(index)"
      >
        <span class="img" :class="{ choosen: genderIndex === index }">
          <img :src="require('../assets/static/' + gender[0])" alt="" />
        </span>
        <span class="gender__text" :class="{ error }">{{ gender[1] }}</span>
      </li>
    </ul>
    <div class="person__name" v-if="questionNumber == 3">
      <span class="img" v-if="genderIndex < 2">
        <img
          :src="require('../assets/static/' + text.img[genderIndex])"
          alt=""
        />
      </span>
      <label class="input">
        <span class="input--title">{{ text.title }}</span>
        <input
          class="input--input"
          type="text"
          v-model.trim="name"
          @input="sendName"
          @focusin="btnUp()"
          @focusout="btnUp()"
          :class="{ error }"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: ['text', 'error', 'questionNumber'],
  data() {
    return {
      genderIndex: -1,
      name: '',
    };
  },
  methods: {
    chooseGender(index) {
      this.genderIndex = index;
      this.$emit('checkChoose');
    },
    sendName() {
      this.$emit('sendCity', [this.name]);
    },
    btnUp() {
      this.$emit('btnUp');
    },
  },
};
</script>

<style lang="scss">
.person {
  &__page {
    max-width: 100%;
  }
  .gender {
    &__list {
      display: flex;
      justify-content: space-between;
      max-width: 100%;
      width: 309px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      cursor: pointer;

      .img {
        margin-bottom: 47px;
        transition: all 0.2s;
        &.choosen {
          transform: scale(1.5);
        }
        img {
          height: 60px;
        }
      }
    }
    &__text {
      font-size: 15px;
      line-height: 18px;
      transition: all 0.2s;
      &.error {
        color: red;
      }
    }
  }
  &__name {
    .img {
      width: 83px;
      margin: 0 auto 65px;
      @media (max-height: 700px) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>

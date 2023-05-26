<template>
  <div class="birth__page">
    <span class="test__title" v-if="questionNumber === 1">{{
      text.title
    }}</span>
    <span class="test__title" v-if="questionNumber === 2">{{
      text.titleTwo
    }}</span>
    <span class="img">
      <img
        :src="require('../assets/static/' + text.img)"
        alt=""
        class="img__round"
        :style="{
          transform: 'rotate(-' + (30 * currentZodiak.id - 15) + 'deg)',
        }"
      />
      <img
        :src="require('../assets/static/' + text.imgLight)"
        alt=""
        class="img__light"
      />
    </span>
    <span class="test__text text" v-if="questionNumber === 1">{{
      text.text
    }}</span>
    <birthDate @chooseDate="chooseDate" v-if="questionNumber === 1"></birthDate>
    <label class="birth__city input" v-if="questionNumber === 2">
      <span class="input--title">{{ text.button }}</span>
      <input
        type="text"
        class="input--input"
        v-model.trim="birthCity"
        @input="sendCity"
        @focusin="btnUp()"
        @focusout="btnUp()"
        :class="{ error }"
      />
    </label>
  </div>
</template>

<script>
import birthDate from '@/components/birthDate';
import zodiaks from '@/mixins/zodiaks';
export default {
  name: 'BirthChoose.vue',
  props: ['text', 'questionNumber', 'error'],
  components: {
    birthDate,
  },
  mixins: [zodiaks],
  data() {
    return {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      date: null,
      birthCity: '',
    };
  },
  methods: {
    chooseDate(date) {
      this.date = date;
      this.calculateZodiak(this.date);
    },
    sendCity() {
      this.$emit('sendCity', [this.birthCity, this.currentZodiak]);
    },
    btnUp() {
      this.$emit('btnUp');
    },
  },
  mounted() {
    this.calculateZodiak(this.month * 100 + this.day);
  },
};
</script>

<style lang="scss">
.birth {
  &__page {
    max-width: 100%;
  }
  .img {
    position: relative;
    height: 160px;
    overflow: hidden;
    margin-bottom: 37px;
    @media (max-height: 700px) {
      margin-bottom: 15px;
      height: 105px;
    }
    &__round {
      transition: all 1s;
      @media (max-height: 700px) {
        margin: 0 auto;
        width: 230px;
      }
    }
    &__light {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 78px;
      @media (max-height: 700px) {
        width: 58px;
      }
    }
  }
  .text {
    margin-bottom: 31px;
    @media (max-height: 700px) {
      margin-bottom: 20px;
    }

  }
  &__city {
    margin: 104px auto 0;
    @media (max-height: 700px) {
      margin-top: 50px;
    }
  }
}
</style>

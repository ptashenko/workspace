<template>
  <div class="information__page">
    <ul class="relation__list" v-if="questionNumber === 4">
      <li
        v-for="(relation, index) in text.relations"
        :key="index"
        class="relation__item"
      >
        <div class="relation__item--wrapper" @click="chooseRelation(index)">
          <span class="img" :class="{ choosen: relationIndex === index }">
            <img :src="require('../assets/static/' + relation[0])" alt="" />
          </span>
          <span class="relation__text" :class="{ error }">{{
            relation[1]
          }}</span>
        </div>
      </li>
    </ul>
    <ul class="interest__list" v-if="questionNumber === 5" :class="{ error }">
      <li
        class="interest__item"
        v-for="(interest, index) in text.interests"
        :key="index"
        @click="activeBtn($event, interest)"
      >
        {{ interest }}
      </li>
    </ul>
    <DifferentZodiac
      v-on:checkChoose="chooseRelation"
      v-if="questionNumber === 6"
    ></DifferentZodiac>
    <AnalyzePicture
      v-if="questionNumber === 7"
      v-on:nextPageCalculate="nextPageCalculate"
    ></AnalyzePicture>
  </div>
</template>

<script>
import DifferentZodiac from '@/components/DifferentZodiac';
import AnalyzePicture from '@/components/AnalyzePicture';

export default {
  name: 'Information',
  props: ['text', 'error', 'questionNumber'],
  components: {
    DifferentZodiac,
    AnalyzePicture,
  },
  data() {
    return {
      relationIndex: -1,
      interests: [],
    };
  },
  methods: {
    chooseRelation(index = 0) {
      this.relationIndex = index;
      this.$emit('checkChoose');
    },
    activeBtn($event, interest) {
      $event.target.classList.toggle('active');
      if (!this.interests.includes(interest)) {
        this.interests.push(interest);
      } else {
        let index = this.interests.indexOf(interest);
        this.interests.splice(index, 1);
      }
      this.$emit('checkChoose', this.interests.length);
    },
    nextPageCalculate() {
      this.$emit('nextPageCalculate');
    },
  },
  updated() {
    if (this.questionNumber === 7) {
      this.$emit('checkChoose');
    }
  },
};
</script>

<style lang="scss">
.information {
  &__page {
    max-width: 100%;
  }
  .relation {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 100%;
      width: 309px;
    }
    &__item {
      width: 50%;
      margin-bottom: 40px;
      @media (max-height: 700px) {
        margin-bottom: 20px;
      }
      &:nth-last-child(-n + 2) {
        margin-bottom: 0;
      }
      .img {
        margin-bottom: 35px;
        transition: all 0.2s;
        @media (max-height: 700px) {
          margin-bottom: 15px;
        }
        &.choosen {
          transform: scale(1.5);
          @media (max-height: 700px) {
            transform: scale(1.2);
          }
        }
        img {
          height: 60px;
        }
      }
      &--wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
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
  .interest {
    &__list {
      /* display: flex;
      flex-wrap: wrap;
      justify-content: center; */
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-columns: 1fr 1fr 1fr;
      column-gap: 6px;
      row-gap: 2px;
      max-width: 100%;
      width: 325px;
      &.error {
        li {
          border-color: red;
        }
      }
    }
    &__item {
      margin: 6px 0;
      display: block;
      padding: 6px 13px;
      font-size: 17px;
      line-height: 20px;
      color: #717788;
      border-radius: 50px;
      border: 2px solid #717788;
      cursor: pointer;
      transition: background, color, border-color 0.2s;
      text-align: center;
      &.active {
        background: linear-gradient(96.28deg, #7b2be0 2.55%, #d9c9ff 98.53%);
        color: #ffffff;
        border: 0;
        padding: 8px 15px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &__item:first-child {
      margin: 6px 0;
    }
  }
}
</style>

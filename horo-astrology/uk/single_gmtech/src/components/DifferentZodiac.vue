<template>
  <div class="date-selector">
    <div class="month" id="zodiac"></div>
  </div>
</template>

<script>
import { test } from '@/text/test';
import IosSelector from '@/mixins/IosSelector';

export default {
  name: 'DifferentZodiac',
  methods: {
    getMonths() {
      let months = [];
      let monthList = test[6];
      for (let i = 1; i <= 12; i++) {
        months.push({
          value: i,
          text: monthList.zodiacs[i - 1].name,
          img: monthList.zodiacs[i - 1].img,
        });
      }
      let removed = months.splice(0, 9);
      let newMonth = months.concat(removed);
      newMonth.unshift({
        value: 0,
        text: monthList.not,
      });
      newMonth.forEach((item, index) => {
        return (item.value = index + 1);
      });
      return newMonth;
    },
  },
  mounted() {
    let vm = this;
    /*eslint-disable */
    let monthSelector = new IosSelector({
      el: '#zodiac',
      type: 'infinite',
      source: vm.getMonths(),
      count: 20,
    });
    /*eslint-enable */
    this.$emit('checkChoose');
  },
};
</script>

<style lang="scss">
.select-wrap {
  position: relative;
  height: 195px;
  text-align: center;
  overflow: hidden;
  font-size: 20px;
  color: #ddd;
  letter-spacing: 0.7px;
  cursor: pointer;
  &:before,
  &:after {
    position: absolute;
    z-index: 1;
    display: block;
    content: '';
    width: 100%;
    height: 50%;
  }

  .select-options {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
    transform-style: preserve-3d;
    margin: 0 auto;
    display: block;
    transform: translateZ(-150px) rotateX(0deg);
    -webkit-font-smoothing: subpixel-antialiased;
    color: #666;
    .select-option {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      color: rgba(255, 255, 255, 0.5);
      opacity: 0.8;
      -webkit-font-smoothing: subpixel-antialiased;
      @for $i from 1 through 100 {
        &:nth-child(#{$i}) {
          transform: rotateX(-18deg * ($i - 1)) translateZ(150px);
        }
      }
      img {
        position: relative;
        top: 1px;
        left: 7px;
        height: 15px;
      }
    }
  }
}

.day .highlight {
  border-radius: 5px 0 0 5px;
}
.year .highlight {
  border-radius: 0 5px 5px 0;
}

.highlight {
  position: absolute;
  top: 49.9%;
  transform: translate(0, -50%);
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  font-size: 24px;
  overflow: hidden;
  &-item {
    height: 31px;
    padding-top: 0.2%;
    img {
      position: relative;
      top: 1px;
      left: 7px;
      margin-left: -6px;
      height: 15px;
    }
  }
}
.highlight-list {
  position: absolute;
  width: 100%;
}

/* date */
.date-selector {
  perspective: 2000px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  max-width: 100%;
  width: 341px;
  height: 195px;
  margin: 0 auto;
  > div {
    flex: 1;
  }

  .select-wrap {
    font-size: 23px;
    letter-spacing: 0.7px;
    line-height: 28px;
  }
  .highlight {
    font-size: 23px;
    letter-spacing: 0.7px;
    line-height: 28px;
  }
}
</style>

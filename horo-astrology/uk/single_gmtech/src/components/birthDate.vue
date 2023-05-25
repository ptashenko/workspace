<template>
  <div class="date-selector first-goro">
    <div class="day" id="day1"></div>
    <div class="month" id="month1"></div>
    <div class="year" id="year1"></div>
  </div>
</template>

<script>
import { monthNames } from '@/text/month';
import IosSelector from '@/mixins/IosSelector';

export default {
  name: 'birthDate',
  data() {
    return {
      year: null,
      month: null,
      day: null,
    };
  },
  methods: {
    getYears() {
      let currentYear = new Date().getFullYear();
      let years = [];

      for (let i = currentYear - 100; i < currentYear + 1; i++) {
        years.push({
          value: i,
          text: i,
        });
      }
      let lastYear = years[years.length - 1];
      years.unshift(lastYear);
      years.pop();
      return years;
    },
    getMonths() {
      let currentMonth = new Date().getMonth();
      let months = [];
      let monthList = monthNames;
      for (let i = 1; i <= 12; i++) {
        months.push({
          value: i,
          text: monthList[i - 1],
        });
      }
      let removed = months.splice(0, currentMonth);
      let newMonth = months.concat(removed);
      return newMonth;
    },
    getDays(year, month) {
      let dayCount = new Date(year, month, 0).getDate();
      let currentDay = new Date().getDate() - 1;
      let days = [];

      for (let i = 1; i <= dayCount; i++) {
        days.push({
          value: i,
          text: i,
        });
      }
      let removed = days.splice(0, currentDay);
      let newMonth = days.concat(removed);
      return newMonth;
    },
  },
  mounted() {
    let vm = this;
    let yearSelector = new IosSelector({
      el: '#year1',
      type: 'infinite',
      source: vm.getYears(),
      count: 20,
      onChange: (selected) => {
        let currentYear = selected.value;
        let daySource = vm.getDays(currentYear, 1);
        daySelector.updateSource(daySource);
        this.year = yearSelector.value;
        let date = this.month * 100 + this.day;
        this.$emit('chooseDate', date);
      },
    });

    let monthSelector = new IosSelector({
      el: '#month1',
      type: 'infinite',
      source: vm.getMonths(),
      count: 20,
      onChange: (selected) => {
        let currentMonth = selected.value;

        let daySource = vm.getDays(new Date().getFullYear(), currentMonth);
        daySelector.updateSource(daySource);
        this.month = monthSelector.value;
        let date = this.month * 100 + this.day;
        this.$emit('chooseDate', date);
      },
    });

    let daySelector = new IosSelector({
      el: '#day1',
      type: 'infinite',
      source: [],
      count: 20,
      onChange: () => {
        this.day = daySelector.value;
        let date = this.month * 100 + this.day;
        this.$emit('chooseDate', date);
      },
    });
  },
};
</script>

<style lang="scss">
/* date */
.date-selector.first-goro {
  perspective: 2000px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  max-width: 100%;
  width: 341px;
  height: 195px;
  margin: 0 auto;
  max-width: 100%;
  > div {
    flex: 1;
  }
  @media (max-height: 700px) {
    height: 150px;
  }

  .select-wrap {
    position: relative;
    height: 195px;
    text-align: center;
    overflow: hidden;
    font-size: 20px;
    color: #ddd;
    letter-spacing: 0.7px;
    cursor: pointer;
    @media (max-height: 700px) {
      height: 150px;
    }
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
  }
  .highlight-list {
    position: absolute;
    width: 100%;
  }

  .select-wrap {
    font-size: 20px;
  }
  .highlight {
    font-size: 20px;
  }
}
</style>

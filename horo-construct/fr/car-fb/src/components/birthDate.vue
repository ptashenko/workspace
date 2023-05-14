<template>
  <div class="brth" @change="checkBirth">
    <select class="select" v-model="pickedDay" :class="{activeSelect: pickedDay}">
      <option value>{{this.questionData.day}}</option>
      <option v-for="day in days" :value="day">{{day < 10 ? '0' + day : day}}</option>
    </select>
    <select class="select" v-model="pickedMonth" :class="{activeSelect: pickedMonth}">
      <option value>{{this.questionData.month}}</option>
      <option v-for="month in months" :value="month">{{month < 10 ? '0' + month : month}}</option>
    </select>
    <select class="select" v-model="pickedYear" :class="{activeSelect: pickedYear}">
      <option value>{{this.questionData.year}}</option>
      <option v-for="year in years" :value="year">{{year < 10 ? '0' + year : year}}</option>
    </select>
  </div>
</template>

<script>
import zodiaks from "../assets/zodiaks";
export default {
  props: {
    questionData: {
      type: Object
    }
  },
  data: () => ({
    zodiaks,
    days: null,
    months: null,
    years: null,
    pickedDay: "",
    pickedMonth: "",
    pickedYear: ""
  }),
  mounted() {
    this.days = this.genBirthDay(1, 31);
    this.months = this.genBirthDay(1, 12);
    this.years = this.genBirthDay(
      1940,
      new Date().getFullYear()
    ).reverse();
  },
  methods: {
    genBirthDay(min, max) {
      let array = [];
      for (let i = min; i <= max; i++) {
        array.push(i);
      }
      return array;
    },
    checkBirth() {
      let items = this.pickedYear && this.pickedDay && this.pickedMonth;
      if (items) {
        let check = () => (items ? true : false);
        this.$emit("birthDate", check(), this.getZodiak());
      }
    },
    getZodiak() {
      var zodiak;
      switch (this.pickedMonth) {
        case 1:
          if (this.pickedDay < 20) {
            zodiak = 10;
          } else {
            zodiak = 11;
          }
          break;
        case 2:
          if (this.pickedDay < 19) {
            zodiak = 11;
          } else {
            zodiak = 12;
          }
          break;
        case 3:
          if (this.pickedDay < 21) {
            zodiak = 12;
          } else {
            zodiak = 1;
          }
          break;
        case 4:
          if (this.pickedDay < 20) {
            zodiak = 1;
          } else {
            zodiak = 2;
          }
          break;
        case 5:
          if (this.pickedDay < 21) {
            zodiak = 2;
          } else {
            zodiak = 3;
          }
          break;
        case 6:
          if (this.pickedDay < 21) {
            zodiak = 3;
          } else {
            zodiak = 4;
          }
          break;
        case 7:
          if (this.pickedDay < 23) {
            zodiak = 4;
          } else {
            zodiak = 5;
          }
          break;
        case 8:
          if (this.pickedDay < 23) {
            zodiak = 5;
          } else {
            zodiak = 6;
          }
          break;
        case 9:
          if (this.pickedDay < 23) {
            zodiak = 6;
          } else {
            zodiak = 7;
          }
          break;
        case 10:
          if (this.pickedDay < 23) {
            zodiak = 7;
          } else {
            zodiak = 8;
          }
          break;
        case 11:
          if (this.pickedDay < 22) {
            zodiak = 8;
          } else {
            zodiak = 9;
          }
          break;
        case 12:
          if (this.pickedDay < 22) {
            zodiak = 9;
          } else {
            zodiak = 10;
          }
          break;
      }
      return this.zodiaks[zodiak - 1];
    }
  }
};
</script>

<style lang="scss" scoped>
.brth {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.select {
  border: 2px solid #4166b1;
  border-radius: 30px;
  appearance: none;
  width: 298px;
  margin-bottom: 20px;
  padding: 15px 20px;
  color: #4166b1;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  font-family: "Coming Soon", sans-serif;
  text-align-last: center;
  text-align: center;
  background: url("../assets/img/appearance.svg") no-repeat 95% 50%, transparent;
}
.activeSelect {
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  background: url("../assets/img/appearance-active.svg") no-repeat 95% 50%,
    #4166b1;
}
</style>
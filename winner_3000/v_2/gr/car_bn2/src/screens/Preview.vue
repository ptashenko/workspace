<template>
  <section class="preview">
    <div class="content" ref="content">
      <div class="label">
        <div class="label-text">
          Ημερομηνία: από {{ startDate }} μέχρι
          <span class="label-text--end">{{ endDate }}</span>
        </div>
      </div>
      <div class="main">
        <div class="main-about">
          <div class="main-high animated infinite pulse">Προσοχή!</div>
          <div class="main-text">
            Ύστερα από δημοφιλή απαίτηση από τους πολίτες του διεθνούς
            προγράμματος, αποφασίστηκε η διεξαγωγή του Δεύτερου Οικονομικού
            Πειράματος!
          </div>
          <div class="main-medium">"1000 - 3000 ΕΥΡΩ ΚΑΘΕ ΕΒΔΟΜΑΔΑ!"</div>
        </div>
      </div>
    </div>
    <div class="main-info" ref="info" :style="{ minHeight: infoHeight + 'px' }">
      <div class="main-info-item">
        <img class="main-info-item__img" src="../assets/img/warning.svg" />
        <div class="main-info-item__text">
          <div class="main-info-item__text--attence">Παρακαλώ σημειώστε:</div>
          Μπορείτε να λάβετε λεπτομερείς οδηγίες σε 3 λεπτά.
        </div>
      </div>
      <div class="main-info-item">
        <img class="main-info-item__img" src="../assets/img/wallet.svg" />
        <div class="main-info-item__text">
          Το πρώτο Οικονομικό πείραμα απέδειξε ότι όποιος θέλει μπορεί να λάβει
          επιπλέον εισόδημα κάθε εβδομάδα.
        </div>
      </div>
      <div class="main-button">
        <button class="button" type="button" @click="next">
          <span class="button__text">Λάβετε μέρος</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url("../assets/animation.scss");
.preview {
  .content {
    padding-top: 26px;
  }
}
.label {
  text-align: center;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 375px;
  margin: 0 auto 0 auto;
  &-text {
    color: #000000;
    font-size: 12px;
    &--end {
      color: #bb0b0b;
      font-weight: bold;
    }
  }
}
.main {
  max-width: 375px;
  margin: 0 auto;
  text-align: center;
  &-about {
    padding: 31px 29px 0 29px;
    @media (min-height: 812px) {
      padding-top: 89px;
    }
  }
  &-high {
    color: #bb0b0b;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
  }
  &-text {
    color: #000000;
    font-size: 16px;
    line-height: 19px;
    margin: 16px 0;
    @media (min-height: 812px) {
      margin: 52px 0 33px 0;
    }
  }
  &-medium {
    font-weight: bold;
    font-size: 23px;
    text-transform: uppercase;
    line-height: 28px;
    color: #000000;
  }
  &-info {
    max-width: 375px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 20px 20px 0px 0px;
    padding: 0px 10px;
    @media (min-height: 812px) {
      margin-top: 87px;
    }
    &-item {
      text-align: left;
      background: #f7f4e3;
      border: 1px solid #f8d259;
      border-radius: 10px;
      padding: 6px 7px;
      display: flex;
      min-height: 68px;
      &:not(:first-child) {
        margin-top: 9px;
      }
      &__img {
        align-self: flex-start;
        margin-right: 7px;
      }
      &__text {
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        &--attence {
          font-weight: 500;
        }
      }
    }
  }
  &-button {
    margin-top: 24px;
  }
}
.button {
  outline: none;
  background: #c34f5c;
  border-radius: 6px;
  border: 1px solid #c34f5c;
  width: 100%;
  max-width: 320px;
  height: 60px;
  padding-top: 2px;
  position: relative;
  padding: 0 15px;
  &__text {
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
  }
  &:after {
    content: url("../assets/img/button-arrow.svg");
    position: absolute;
    right: 14.75px;
    top: calc(50% + 3px);
    transform: translate(0, -50%);
  }
}
.copy {
  position: absolute;
  text-align: center;
  color: #787878;
  font-size: 11px;
  left: 50%;
  width: 95%;
  margin: 0 auto;
  max-width: 400px;
  flex-shrink: 1;
  transform: translate(-50%, 0);
  padding: 10px 0;
  p {
    margin: 0;
  }
  a {
    color: inherit;
  }
}
</style>

<script>
import moment from "moment";
export default {
  data() {
    return {
      html: document.getElementById("html"),
      innerHeight: window.innerHeight,
      infoHeight: null,
      endDate: moment().format("DD.MM.YYYY"),
      startDate: moment().subtract(5, "days").format("DD.MM.YYYY"),
    };
  },
  methods: {
    next() {
      this.$emit("switchScreen", "review");
    },
    footerHeight() {
      this.innerHeight = window.innerHeight;
      let outHeight;
      if (this.innerHeight >= 812) {
        outHeight = 155;
      } else {
        outHeight = 96;
      }
      this.infoHeight =
        this.innerHeight - this.$refs.content.clientHeight - outHeight;
    },
  },
  props: ["app", "year"],
  mounted() {
    window.onresize = () => this.footerHeight();
    this.footerHeight();
  },
};
</script>

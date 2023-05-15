
<template>
  <div class="main-analys" ref="analys">
    <div class="main-analys__text">{{text}}</div>
    <div class="main-analys__text main-analys__text--dots" ref="analysElement">
      <span class="dots" v-for="(dot,index) in dots" v-text="'.'" :key="index"></span>
      <span class="done" :class="{'main-analys__text--hidden': hidden}">Завершено!</span>
    </div>
  </div>
</template>
<script>
export default {
    props:['text'],
  data() {
    return {
      hidden: true,
      dots: 1,
      analysWidth: () => this.$refs.analys.clientWidth,
      analysElementWidth: () => this.$refs.analysElement.clientWidth
    };
  },
  methods: {
    dotsController() {
      let l = setInterval(() => {
        this.dots++;
        if (this.analysWidth() <= this.analysElementWidth()) {
          clearInterval(l);
          this.hidden = false;
          this.$emit('done')
        }
      }, 50);
    }
  },
  mounted() {
    this.dotsController();
  }
};
</script>

<style lang="scss">
.main {
  &-analys {
    text-align: left;
    &__text {
      color: #1A1A1B;
      font-size: 14px;
      line-height: 23px;
      &--dots {
        display: inline-block;
      }
      &--hidden {
        opacity: 0;
      }
    }
  }
}
.done {
  color: #006C60;
  font-size: 14px;
}
</style>
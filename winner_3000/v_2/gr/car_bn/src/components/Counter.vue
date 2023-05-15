<template>
    <div class="counter" :style="{width: (shellWidth + 2) + 'px'}">
      <div
        class="counter-num"
        v-for="(q,index) in questionsLength"
        :key="index"
        :class="{'counter-num--active': qidx >= index}"
      >
        {{index + 1}}
        <div
          class="counter-line"
          :style="{width: `calc(${shellWidth}px / ${questionsLength - 1} - 100%)`}"
          v-if="index < questionsLength - 1"
          :class="{'counter-line--active': qidx > index}"
        ></div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.counter {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  &-line {
    position: absolute;
    height: 4px;
    background: #cecece;
    top: 50%;
    transform: translate(0, -50%);
    left: calc(100% + 1px);
    &--active {
      background: #0981df;
    }
  }
  &-num {
    position: relative;
    background: linear-gradient(
      180deg,
      #0d9bea 0%,
      #e2e2e2 0.01%,
      #bdbdbd 100%
    );
    border: 1px solid #cacaca;
    border-radius: 50%;
    padding: 4px 8px;
    color: #fff;
    &--active {
      background: linear-gradient(180deg, #0d9bea 0%, #0568d4 100%);
      border-color: #1c639b;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      shellWidth: 278
    };
  },
  props:['questionsLength','index','qidx']
};
</script>
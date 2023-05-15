<template>
  <div
    class="loading"
    :style="{ height: innerHeight - 68 + 'px' }"
  >
    <img src="../assets/img/loading.gif" v-if="loading" alt />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 163px;
    height: 163px;
  }
}
</style>

<script>
export default {
  data: () => ({
    innerHeight: window.innerHeight,
    loading: false,
  }),
  mounted() {
    window.onresize = () => (this.innerHeight = window.innerHeight);

    this.loading = true;
    setTimeout(() => {
      this.$emit("switchScreen", "result");
    }, 3500);
  },
};
</script>

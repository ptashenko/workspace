<script>
export default {
  name: "loadingComponent"
};
</script>
<template>
  <div class="loading active">
    <div class="loading-container">
      <div class="loading-content">
        <img src="../../assets/img/loading.gif" alt />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.loading {
  display: none;
  &.active {
    position: absolute;
    top: 0;
    left: 0;
    display: table;
    height: 100%;
    width: 100%;
  }
  &-container {
    display: table-cell;
    vertical-align: middle;
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
<template>
  <footer
    class="footer"
    v-html="
      !view
        ? footerObj.main_footer[footerGeo]
        : footerObj.second_footer[footerGeo]
    "
  ></footer>
</template>

<style lang="scss">
.footer {
  position: relative;
  top: -25px;
  width: 100%;
  background: #e5e5e5;

  p {
    font-size: 11px;
    text-align: center;
    color: #49423d;
    max-width: 400px;
    padding: 0 15px;
    margin: 0 auto;
  }
  a {
    color: #49423d;
  }
}
</style>

<script>
export default {
  props: ["view", "footerObj", "footerGeo"],
};
</script>

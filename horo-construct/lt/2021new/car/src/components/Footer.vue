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

  p {
    font-size: 11px;
    text-align: center;
    padding: 0 15px;
    color: #7b8b9e;
    max-width: 400px;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    color: #7b8b9e;
  }
}
</style>

<script>
export default {
  props: ["view", "footerObj", "footerGeo"],
};
</script>

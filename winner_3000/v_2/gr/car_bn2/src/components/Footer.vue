<template>
  <div
    class="footer"
    v-html="
      screen === 'preview'
        ? footerObj.main_footer[footerGeo]
        : footerObj.second_footer[footerGeo]
    "
  ></div>
</template>

<script>
export default {
  name: "ResultFooter",
  props: ["screen", "footerObj", "footerGeo"],
};
</script>

<style lang="scss">
.footer {
  max-width: 450px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  a {
    color: grey;
    text-decoration: none;
  }
  p {
    max-width: 600px;
    font-size: 11px;
    margin: 0 auto;
    padding: 0 5px;
    text-align: center;
    color: grey;
  }
  @media (max-width: 340px) {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>

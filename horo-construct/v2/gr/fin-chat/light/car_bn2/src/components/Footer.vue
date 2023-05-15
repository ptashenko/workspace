<template>
  <footer
    class="footer"
    v-html="
      !view ? footer.main_footer[footerGeo] : footer.second_footer[footerGeo]
    "
  ></footer>
</template>

<style lang="scss">
.footer {
  position: relative;
  top: -25px;
  width: 100%;
  background: #e5e5e5;
  background-size: contain;

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
  props: ["view", "footer", "footerGeo"],
  computed: {
    call() {
      return this.view;
    },
    currentYear() {
      let year = new Date();

      return year.getFullYear();
    },
  },
};
</script>
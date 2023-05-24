<template>
  <div class="footer__container">
  <StatusBar/>
  <footer
    class="footer"
    ref="footer"
    v-html="
      !view ? footer.main_footer[footerGeo] : footer.second_footer[footerGeo]
    "
  ></footer>
  </div>
</template>

<style lang="scss">
.footer__container {
  max-width: 400px;
  margin: 0 auto;
  height: 50px;
  display: grid;
  place-items: center;
}
.footer {
  position: relative;
  top: -60px;
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
import StatusBar from './StatusBar';
export default {
  props: ["view", "footer", "footerGeo"],
  components: {
    StatusBar
  }
};
</script>

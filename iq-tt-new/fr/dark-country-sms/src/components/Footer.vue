<template>
  <footer class="footer">
    <slot></slot>
    <div
      v-if="footerObj"
      v-html="
        currentPage === 0
          ? footerObj.main_footer[footerGeo]
          : footerObj.second_footer[footerGeo]
      "
    ></div>
  </footer>
</template>

<script>
export default {
  props: ["currentPage", "footerObj", "footerGeo"],
};
</script>

<style lang="scss">
@import "../assets/styles/functions.scss";
.footer {
  max-width: vh(550px);
  padding: vh(5px) vh(20px) 0;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 5;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 500;
  font-size: vh(11px);
  line-height: vh(13px);
  color: gray;

  p {
    margin: 0;
  }
  a {
    color: gray;
  }
}

.result-page__sms {
  margin: 0 auto;
  margin-top: vh(7px);
}
</style>

<template>
  <p class="copyright" ref="copyright">
    © {{ new Date().getFullYear() }}. <span class="noaff">ABCMobile OÜ</span>
    <br />
    Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia <br />
    Bővebb tájékoztatásért lásd a
    <a href="./terms.php" target="_blank">Felhasználási feltételeket</a> és az
    <a href="./privacy.php" target="_blank">Adatvédelmi irányelveinket</a>.
    <br />
    <a href="https://www.vodafone.hu/" target="_blank"
      >https://www.vodafone.hu/</a
    >
    <br />
    <span class="noaff">Affiliate: mobstra.com</span>
  </p>
</template>

<script>
export default {
  name: 'Copyright',
  methods: {
    footerPosition() {
      const MAGIK_NUMBER = 26;
      let $footer = this.$refs.copyright,
        footerPrevElem = $footer.previousElementSibling,
        windowHeight = window.innerHeight;
      if (windowHeight > footerPrevElem.offsetHeight + MAGIK_NUMBER) {
        $footer.style.position = 'absolute';
        $footer.style.top = `${windowHeight - MAGIK_NUMBER}px`;
        $footer.style.marginTop = '0px';
      } else {
        $footer.style.position = 'absolute';
        $footer.style.marginTop = '20px';
        $footer.style.top = 'auto';
      }
    },
  },
  mounted() {
    setTimeout(() => this.footerPosition(), 150);
    window.onresize = () => this.footerPosition();
  },
};
</script>

<style lang="scss">
.copyright {
  margin-top: 20px;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: grey;
  a {
    color: grey;
    text-decoration: none;
  }
}
</style>

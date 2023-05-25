<template>
  <div class="footer" ref="footer">
    <span style="font-size: 13px">
      Calls cost <b>£3 per call, plus £3 per minute</b>,
      <br>plus <b>£3</b> connection fee, service is for entertainment only 18+.
    </span>
    <br />
      <br />

    Customer care
    <a href="mailto:support@gmtechmedia.com">support@gmtechmedia.com</a>
    <br />
    © {{ new Date().getFullYear() }}. <span class="noaff">GMTech Media OÜ</span>
    <br />
    Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415, Estonia. <br />
    See our <a href="./terms.php" target="_blank">Terms and conditions</a> and
    <a href="./privacy.php" target="_blank">Privacy policy</a>
    <br />
    <span class="noaff">Affiliate: mobstra.com</span>
    <br />
  </div>
</template>

<script>
export default {
  name: 'Footer.vue',
  // methods: {
  //   footerPosition() {
  //     const MAGIK_NUMBER = 100;
  //     let $footer = this.$refs.footer,
  //       footerPrevElem = $footer.previousElementSibling,
  //       windowHeight = window.innerHeight;
  //     if (windowHeight > footerPrevElem.offsetHeight + MAGIK_NUMBER) {
  //       $footer.style.position = 'absolute';
  //       $footer.style.top = `${windowHeight - MAGIK_NUMBER}px`;
  //       $footer.style.paddingTop = '0px';
  //     } else {
  //       $footer.style.position = 'absolute';
  //       $footer.style.paddingTop = '20px';
  //       $footer.style.top = 'auto';
  //     }
  //   },
  // },
  // mounted() {
  //   setTimeout(() => this.footerPosition(), 100);
  //   window.onresize = () => {
  //     this.footerPosition();
  //   };
  // },
};
</script>

<style lang="scss">
.footer {
  font-size: 13px;
  text-align: center;
  color: #ffffff;
  left: 0;
  right: 0;
  span,
  a {
    color: #cacaca;
  }
  b{
    font-size: 15px;
  }
}
</style>

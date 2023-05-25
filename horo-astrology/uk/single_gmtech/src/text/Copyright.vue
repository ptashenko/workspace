<template>
  <p class="copyright" ref="copyright">
    <span style="font-size: 13px">
        Calls cost <b>£3/call + £3/min</b>, plus a one off connection charge of
    <b>£3</b>, service is for entertainment only 18+.
    </span>

    <br />
    Customer care
    <a href="mailto:support@gmtechmedia.com">support@gmtechmedia.com</a>
    <br />
    © {{ new Date().getFullYear() }}. <span class="noaff">GMTech Media OÜ</span>
    <br />
    Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415, Estonia.
    <br />
    See our <a href="./terms.php" target="_blank">Terms and conditions</a> and
    <a href="./privacy.php" target="_blank">Privacy policy</a>
    <br />
    <span class="noaff">Affiliate: mobstra.com</span>
    <br />
  </p>
</template>

<script>
export default {
  name: "Copyright",
  methods: {
    copyrightPosition() {
      const MAGIK_NUMBER = 30;
      let $footer = this.$refs.copyright,
        footerPrevElem = $footer.previousElementSibling,
        windowHeight = window.innerHeight;
      if (windowHeight > footerPrevElem.offsetHeight + MAGIK_NUMBER) {
        $footer.style.position = "absolute";
        $footer.style.top = `${windowHeight - MAGIK_NUMBER}px`;
        $footer.style.paddingTop = "0px";
      } else {
        $footer.style.position = "absolute";
        $footer.style.paddingTop = "20px";
        $footer.style.top = "auto";
      }
    },
  },
  mounted() {
    setTimeout(() => this.copyrightPosition(), 100);
    window.onresize = () => {
      this.copyrightPosition();
    };
  },
};
</script>

<style lang="scss">
.copyright {
  position: absolute;
  margin-top: -50px;
  font-size: 11px;
  text-align: center;
  color: #ffffff;
  left: 0;
  right: 0;
  span,
  a {
    color: #cacaca;
  }
  b {
    font-size: 15px;
  }
}
</style>

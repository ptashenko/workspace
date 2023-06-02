<template>
  <div class="footer" ref="footer">
    További információ: ez egy szórakoztató szolgáltatás, melynek ára: <strong>2500 ft/hívás</strong>.
    <br>
    A szolgáltatás minden hálózatról elérhető. A szolgáltatási oldalon található gombra kattintva egy emelt díjas
    telefonszámra kerül átirányításra. A szolgáltatás használatával megerősíti, hogy elfogadja az általános szerződési
    feltételeinket, hogy elmúlt 18 éves, és hogy a kártyatulajdonos beleegyezésével történt a szolgáltatás
    igénybevétele. A szolgáltatás kizárólag a szórakozás célját szolgálja. A szolgáltatást biztosítja: abcmobile oü,
    helyi cím: Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia.
    <br>
    A magyarországi ügyfélszolgálatunk a +36 14554695 telefonszámon érhető el. e-mail üzeneteket az
    <a href="mailto:abcmobile.hu@silverlines.info">abcmobile.hu@silverlines.info</a> címen várunk. Ügyfélszolgálat nyitvatartása: hétfő - péntek, 09:00 - 17:00.
    <br>
    Bővebb tájékoztatásért lásd a
    <a href="./terms.php" target="_blank">Felhasználási feltételeket</a> és az
    <a href="./privacy.php" target="_blank">Adatvédelmi irányelveinket</a>.
    <br/>
    <a href="https://www.vodafone.hu/" target="_blank"
    >https://www.vodafone.hu/</a
    >
    <br/>
    <span class="noaff">Affiliate: mobstra.com</span>
  </div>
</template>

<script>
export default {
  name: 'Footer.vue',
  methods: {
    footerPosition() {
      const MAGIK_NUMBER = 30;
      let $footer = this.$refs.footer,
        footerPrevElem = $footer.previousElementSibling,
        windowHeight = window.innerHeight;
      if (windowHeight > footerPrevElem.offsetHeight + MAGIK_NUMBER) {
        $footer.style.position = 'absolute';
        $footer.style.top = `${windowHeight - MAGIK_NUMBER}px`;
      } else {
        $footer.style.position = 'absolute';
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
.footer {
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  color: grey;
  left: 0;
  right: 0;

  a {
    color: grey;
    text-decoration: none;
  }
}
</style>

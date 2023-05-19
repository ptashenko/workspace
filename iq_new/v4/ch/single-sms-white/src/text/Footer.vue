<template>
  <div class="footer">
      Dies ist ein einmaliger IQ-Service. Mit dem Informations-SMS-Dienst können Benutzer verschiedene Fragen beantworten, um das IQ-Niveau zu definieren und Empfehlungen für die intellektuelle Entwicklung zu erhalten. Senden Sie das Wort IQ an 595.
      <br>
      Die Kosten für den Service betragen 9,9 CHF / SMS, inklusive Mehrwertsteuer. <br>
      © {{new Date().getFullYear()}}. ABC Mobile <br>
      Harju maakond, Tallinn, Lasnamäe linnaosa, Peterburi tee 71-318, 11415, Estonia. <br>
      Kundenservice: <a href="mailto:abcmobile.ch@silverlines.info">abcmobile.ch@silverlines.info</a>, +46812162637 <br>
      Beachten Sie unsere <a href="./terms.php" target="_blank">Teilnahmebedingungen</a> und <a href="./privacy.php" target="_blank">Datenschutzbestimmungen</a>
      <br>
      Affiliate: mobstra.com
  </div>
</template>

<script>
export default {
  name: 'Footer.vue',
};
</script>

<style lang="scss">
.footer {
  margin-top: -30px;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  color: grey;
  left: 0;
  right: 0;
  padding: 0 8px;

  a {
    color: grey;
    text-decoration: none;
  }
}
</style>

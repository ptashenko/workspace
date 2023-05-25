<template>
  <div class="footer" >
    <p>
        <span style="font-size: 13px">
      Calls cost <span class="price">£6/call</span> plus your phone company’s access charge,plus a one off connection charge of <span class="price">£3</span> service is for entertainment only 18+.
        </span>
      <br>
      <br>
      Customer care <a href="mailto:support@gmtechmedia.com">support@gmtechmedia.com</a>
      <br>
      © {{ new Date().getFullYear() }}. <span class="noaff">GMTech Media OÜ</span>
      <br />
      Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415, Estonia.
      <br />
      Email: <a href="mailto:support@gmtechmedia.com">support@gmtechmedia.com</a>
      <br />
      See our
      <a href="./terms.php" target="_blank">Terms and conditions</a> and
      <a href="./privacy.php" target="_blank">Privacy policy</a>
      <br />
      <span class="noaff">Affiliate: mobstra.com</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer.vue',
};
</script>

<style lang="scss">

.footer {
  margin-top: 10px;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: #282828;
  left: 0;
  right: 0;
  a {
    text-decoration: none;
  }
  .price{
    font-size: 17px;
  }
}
</style>

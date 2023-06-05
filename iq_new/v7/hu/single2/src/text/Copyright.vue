<template>
  <p class="copyright" v-html="footerObj.main_footer[footerGeo]">
  </p>
</template>

<script>
export default {
  name: 'Copyright',
  props: {
    footerObj: {
      type: Object
    },
    footerGeo: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.copyright {
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
  color: grey;
  a {
    color: grey;
    text-decoration: none;
  }
}
</style>

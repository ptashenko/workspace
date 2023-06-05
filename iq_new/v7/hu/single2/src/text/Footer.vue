<template>
  <footer v-html="footerObj.second_footer[footerGeo]" class="footer" />
</template>

<script>
export default {
  props: {
    footerObj: {
      type: Object
    },
    footerGeo: {
      type: Object
    }
  },
}
</script>

<style lang="scss">
.footer {
  font-size: 13px;
  line-height: 1.35;
  text-align: center;
  color: grey;

  a {
    color: grey;
    text-decoration: none;
  }
}
</style>

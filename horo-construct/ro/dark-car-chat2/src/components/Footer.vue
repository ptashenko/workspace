<template>
  <footer :class="['footer', {'footer-height': view}]"
          v-html="!view ? footerObj.main_footer[footerGeo] : footerObj.second_footer[footerGeo]">
  </footer>
</template>


<script>
export default {
  props: ["footerObj", "footerGeo", "view"],
  computed: {
            call() {
                return this.view
            }
    }
}
</script>

<style lang="scss" scoped>
.footer {
  font-size: 11px;
  text-align: center;
  width: 100%;
  padding: 0 15px;
  background-color: #0c1117;
  color: #7b8b9e;
  line-height: 0.4;
  
  @media (max-width: 320px) {
    min-width: 283px;
  }
}
  p {
    max-width: 400px;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #7b8b9e;
  }

.footer-height {
  @media (max-width: 722px) {
    line-height: 1.2;
  }
}

</style>

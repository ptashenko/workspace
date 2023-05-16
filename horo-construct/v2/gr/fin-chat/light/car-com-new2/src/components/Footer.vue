<template>
  <footer
    class="footer"
    v-html="
      !view ? limitParagraphs(footer.main_footer[footerGeo], 2) : footer.second_footer[footerGeo]
    "
  ></footer>
</template>

<style lang="scss">
.footer {
  position: relative;
  top: -25px;
  width: 100%;
  padding: 0 15px;
  background: #e5e5e5;

  p {
    font-size: 11px;
    text-align: center;
    color: gray;
    max-width: 400px;
    margin: 0 auto;
    background: #e5e5e5;
  }

  a {
    color: gray;
    text-decoration: none;
  }
}
</style>

<script>
export default {
  props: ["view", "footer", "footerGeo"],
  methods: {
    limitParagraphs(value) {
      const paragraphs = value.split("</p>").slice(0, 2).join("</p>");
      return paragraphs;
    },
  },
};
</script>

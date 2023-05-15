<template>
  <header class="header">
    <div class="header-container">
      <div class="header-wrap">
        <div class="logo">
          <img src="../assets/img/logo.svg" class="logo__img" alt />
        </div>
        <div class="text">
          Ένα επαναστατικό πρόγραμμα σχεδιασμένο από τον
          <span class="text--bold"
            >Διεθνή Οργανισμό Χορηγών και Επενδυτών. &nbsp;</span
          >
          <span class="text--country"
            >Ελλάδα <img src="../assets/img/flag_of_Greece.png" class="flag" alt=""
          /></span>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #818286;
  height: 68px;
  padding: 15px 8px;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999999;
  &-container {
    max-width: 375px;
    margin: 0 auto;
  }
  &-wrap {
    max-width: 320px;
    height: inherit;
    display: flex;
    justify-content: center;
  }
}
.text {
  color: #ffffff;
  font-size: 11px;
  line-height: 14px;
  &--bold {
    font-weight: bold;
  }
  &--country {
    font-weight: bold;
    color: #e7b96c;
    display: inline-flex;
    align-items: center;
  }
}
.logo {
  margin-right: 10px;
}
.flag {
  width: 16px;
  height: 11px;
  margin-left: 7px;
}
</style>

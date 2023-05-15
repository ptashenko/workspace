<template>
  <section class="preview">
    <div class="main-info" ref="info" :style="{ minHeight: infoHeight + 'px' }">
      <div class="main-info-item">
        <img class="main-info-item__img" src="../assets/img/260.jpg" />
        <div class="main-info-item__text">
          <div class="main-info-item__text--attence">Κώστας</div>
          <div class="main-info-item__text--city">
            {{ currentCity }}. 32 χρονών.
          </div>
          Θα ήθελα να εκφράσω την ευγνωμοσύνη μου για την βοήθεια και την
          στήριξη από το διεθνές οικονομικό πρόγραμμα. Μετά τη συμμετοχή μου στο
          πρώτο οικονομικό πείραμα το εισόδημά μου αυξάνεται κάθε εβδομάδα. Σας
          ευχαριστώ πολύ!
        </div>
      </div>
      <div class="main-info-item">
        <img class="main-info-item__img" src="../assets/img/3.jpg" />
        <div class="main-info-item__text">
          <div class="main-info-item__text--attence">Διονύσης</div>
          <div class="main-info-item__text--city">Κέρκυρα. 28 χρονών.</div>
          Ήθελα να ευχαριστήσω την γυναίκα μου στην επετειό μας με ένα ταξίδι
          κάνοντας τον γύρο του κόσμου. Αλλά πριν την προγραμματισμένη
          ημερομηνία τα χρήματα δεν μπορούσαν να συγκεντρωθούν. Χάρη στο διεθνές
          οικονομικό πείραμα, μέσα σε μια εβδομάδα, έλαβα το ποσό που
          υπολειπόταν και ευχαρίστησα την γυναίκα μου.
        </div>
      </div>
      <div class="main-info-item">
        <img class="main-info-item__img" src="../assets/img/264.jpg" />
        <div class="main-info-item__text">
          <div class="main-info-item__text--attence">Αντώνης</div>
          <div class="main-info-item__text--city">Ορεστιάδα. 24 χρονών.</div>
          Χρειαζόμασταν επειγόντως χρήματα για την ανάπτυξη μιας startup
          επιχείρησης. Ο κύριος επενδυτής έλειπε. Ήμουν τυχερός να συμμετέχω στο
          πρώτο οικονομικό πείραμα! Μέσα σε 3 εβδομάδες έλαβα το απαιτούμενο
          ποσό και τώρα έχω την δική μου επιχείρηση.
        </div>
      </div>
      <div class="main-button">
        <button class="button" type="button" @click="next">
          <span class="button__text">Συνέχεια</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.label {
  text-align: center;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 375px;
  margin: 26px auto 0 auto;
  &-text {
    color: #000000;
    font-size: 12px;
    &--end {
      color: #bb0b0b;
      font-weight: bold;
    }
  }
}
.main {
  max-width: 375px;
  margin: 0 auto;
  text-align: center;
  &-high {
    color: #bb0b0b;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
  }
  &-text {
    color: #000000;
    font-size: 16px;
    line-height: 19px;
    margin: 16px 0;
    @media (min-height: 812px) {
      margin: 52px 0 33px 0;
    }
  }
  &-info {
    max-width: 375px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 20px 20px 0px 0px;
    padding: 0px 10px 10px;
    @media (min-height: 812px) {
      margin-top: 87px;
    }
    &-item {
      text-align: left;
      background: #f7f4e3;
      border: 1px solid #f8d259;
      border-radius: 10px;
      padding: 6px 7px;
      display: flex;
      min-height: 68px;
      &:not(:first-child) {
        margin-top: 9px;
      }
      &__img {
        align-self: flex-start;
        margin-right: 7px;
        width: 30px;
        border-radius: 50%;
      }
      &__text {
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        &--attence {
          font-weight: 600;
          margin-bottom: 2px;
        }
        &--city {
          margin-bottom: 5px;
        }
      }
    }
  }
  &-button {
    margin-top: 20px;
  }
}
.button {
  outline: none;
  background: #c34f5c;
  border-radius: 6px;
  border: #c34f5c;
  width: 100%;
  max-width: 320px;
  height: 60px;
  padding-top: 2px;
  position: relative;
  padding: 0 15px;
  &__text {
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
  }
  &:after {
    content: url("../assets/img/button-arrow.svg");
    position: absolute;
    right: 14.75px;
    top: calc(50% + 3px);
    transform: translate(0, -50%);
  }
}
</style>

<script>
export default {
  props: ["currentCity"],
  methods: {
    next() {
      this.$emit("switchScreen", "quiz");
    },
  },
};
</script>

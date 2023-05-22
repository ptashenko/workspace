<template>
  <section class="result">
    <div>
      <div class="header">
        <div class="img">
          <img :src="require('../assets/img/leo.svg')" alt="">
        </div>
      </div>
      <div class="info">
        <div class="info-header">
          <div class="info-header__text">Horoscopul tău personal</div>
        </div>
        <div class="info-content" :class="[{infoClosed: true},{barInactive: true}]"
             :style="{paddingBottom: more ? footerHeight + 'px' : contentPadding + 'px'}">
          <div class="info-data">
            <div class="info-title-text">Horoscop săptămânal Leu – {{ titleDate }}</div>
            <br>
            <div class="info-content-text">
              Între {{ textDate }}, dimineața, moderație în tendința de a cheltui, chibzuială a veniturilor și a economiilor, efort de a diversifica sursele de venit prin valorificarea capacității profesionale și a disponibilității nativilor de a desfășura activități alternative. Între {{ twoDay }}, după ora 10:55, și {{ fourDay }}, la prânz, perioadă mai puțin semnificativă pentru comunicare, învățare, circulație a știrilor și dialog interuman.
              <br><br>
              Între {{ fourDay }}, după ora 13:56, și {{ sixDay }}, la prânz, conflictele mai vechi dintre un Leu și una sau mai multe rude se pot actualiza, argumentele se pot relua, făcând dialogul dificil prin repetarea acelorași dorințe, neputințe, refuzuri și prin abordarea acelorași atitudini lipsite de înțelegere a nevoilor celuilalt și spirit de cooperare, dar și nemulțumiri mai noi.
              <br><br>
              Acestea sunt născute din felul în care nativul poate – sau nu poate – să facă față exigențelor profesionale, atribuțiilor de serviciu, funcțiilor și responsabilităților care nu țin cont de un program fix și care îl „blochează” de-a lungul zilei, nemulțumindu-i pe cei din familie care îi reproșează că nu-i susțin, îi uită, îi neglijează. Complicații născute din resentimentele și interesele divergente ale socrilor cu ginerii și nurorile.
              <br><br>
              Din {{ sixDay }}, după ora 14:13, și până pe {{ sevenDay }}, univers afectiv trăit intens, cu entuziasm, cu implicare, cu speranță. Dialoguri care pot schimba datele unei relații, astfel că, din prietenie, se poate „aluneca” spre o relație sentimentală ori dialog explicativ care poate pune capăt unor nemulțumiri, bănuieli, bârfe și speculații, eliberând astfel o poveste de dragoste de spectrul despărțirii și al reproșurilor neîntemeiate.
              <br><br>
              O oportunitate care readuce în prim-planul interesului Leilor un proiect mai vechi, care s-a blocat ori pe care l-au abandonat pentru că li s-a părut, la un moment dat, a nu fi de actualitate; speranță renăscută.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" ref="footer">
      Furnizor serviciu: ABCMobile OÜ; Reg № 14710834;
      <br>
      adresa: Harju maakond, Tallinn, Peterburi tee 71-318, 11415,
      Estonia.
      <br>
      <a href="mailto:support@abcmobile.com">support@abcmobile.com</a>. Info serviciu: 0318260010, luni-vineri,
      9:00-18:00.
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  left: 0;
  right: 0;
  font-size: 11px;
  color: #a1a1a1;
  text-align: center;

  a {
    color: #a1a1a1;
  }
}

a {
  text-decoration: none;
}

.close {
  display: flex;
  justify-content: flex-end;

  &-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0px 10px 25px rgba(74, 144, 226, 0.3);
    background: #fff;
    width: 41px;
    height: 41px;
    cursor: pointer;

  }
}

.button {
  background: linear-gradient(88.84deg, #01B016 1.45%, #3FCF34 99.8%);
  border: 1px solid #3CCE32;
  border-radius: 30px;
  width: 267px;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  z-index: 9999;

  &-wrap {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    position: relative;
  }
}

.copy {
  width: 100%;
  padding: 0 15px;
  font-size: 11px;
  margin-top: 10px;
  text-align: center;
}

.last {
  width: 70%;
}

.gifts {
  position: absolute;
  bottom: -20px;
  right: -10px;
  z-index: 0;

  img {
    max-width: 136px;
    max-height: 94px;
  }
}

.call {
  margin-right: 10px;
  animation: infinite tada 1.2s;
}

.bar {
  height: 100%;
  padding-bottom: 250px;
}

.header {
  display: flex;
  justify-content: center;
  background: url("../assets/img/bg.jpg") 20% 0% no-repeat;
  backdrop-filter: blur(4px);
  background-size: 200%;
  padding: 15px;
  @media(min-width: 375px) and (min-height: 685px) {
    padding: 20px 15px 20px 15px;
  }

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 5px solid #6f0cdb;
    border-radius: 50%;
    @media (max-height: 700px) {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }

    img {
      width: 60px;
      height: 60px;
      @media (max-height: 700px) {
        width: 50px;
        height: 50px;
      }
    }
  }
}

.toggle {
  height: 100%;
  display: flex;
  align-items: center;
}

.info {
  max-width: 360px;
  margin: 0 auto;

  &-header {
    background: linear-gradient(180deg, #DEDDDD 0%, #F9F9F9 100%);
    height: 41px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px 8px 0 0;
    padding: 0 15px;

    &__text {
      text-transform: uppercase;
      font-size: 0.875rem;
      font-weight: bold;
      color: #4988D1;
    }
  }

  &-title {
    &-text {
      font-size: 16px;
      font-weight: 500;
    }
  }

  &-content {
    background: #FFFFFF;
    padding: 20px 15px;

    &-text {
      font-weight: 300;
      font-size: 0.75rem;
      line-height: 0.875rem;

      &--more {
        margin-top: 10px;
      }

      &--link {
        cursor: pointer;
        color: #4988D1;
        font-style: normal;
      }
    }
  }
}

.player {
  margin-bottom: 20px;
}

.gratz {
  text-align: center;
  font-size: 1.563rem;
  line-height: 1.813rem;
  margin-bottom: 0.375rem;
}

.text {
  font-weight: 300;
  color: #fff;
  font-size: 0.875rem;
  line-height: 1rem;

  &--bold {
    font-weight: bold;
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.toggleOpened {
  transform: rotate(180deg);
}

.infoClosed {
  border-radius: 0 0 8px 8px;
}

.infoMainClosed {
  margin-bottom: 20px;
}

.barInactive {
  padding-bottom: 10px !important;
}
</style>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/ro';

export default {
  computed: {
    titleDate() {
      const startDay = dayjs().locale('ro').format('D MMMM');
      const endDay = dayjs().locale('ro').add(6, 'day').format('D MMMM');
      return `${startDay} - ${endDay}`.toLowerCase();
    },
    textDate() {
      const startDay = dayjs().locale('ro').format('D MMMM');
      const endDay = dayjs().locale('ro').add(2, 'day').format('D MMMM');
      return `${startDay} - ${endDay}`.toLowerCase();
    },
    twoDay() {
      return dayjs().locale('ro').add(2, 'day').format('D MMMM').toLowerCase();
    },
    fourDay() {
      return dayjs().locale('ro').add(4, 'day').format('D MMMM').toLowerCase();
    },
    sixDay() {
      return dayjs().locale('ro').add(6, 'day').format('D MMMM').toLowerCase();
    },
    sevenDay() {
      return dayjs().locale('ro').add(7, 'day').format('D MMMM').toLowerCase();
    }
  },
  methods: {
    footerPosition() {
      const MAGIK_NUMBER = 24;
      let $footer = this.$refs.footer,
          footerPrevElem = $footer.previousElementSibling,
          windowHeight = window.innerHeight;
      if (windowHeight > footerPrevElem.offsetHeight + MAGIK_NUMBER) {
        $footer.style.position = 'absolute';
        $footer.style.top = `${windowHeight - MAGIK_NUMBER}px`;
        $footer.style.marginTop = '0px';
      } else {
        $footer.style.position = 'absolute';
        $footer.style.marginTop = '20px';
        $footer.style.top = 'auto';
      }
    },
  },
  mounted() {
    this.footerPosition();
    window.onresize = () => this.footerPosition();
  }
}
</script>

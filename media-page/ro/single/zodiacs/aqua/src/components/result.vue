<template>
  <section class="result">
    <div>
      <div class="header">
        <div class="img">
          <img :src="require('../assets/img/aquarius.svg')" alt="">
        </div>
      </div>
      <div class="info">
        <div class="info-header">
          <div class="info-header__text">Horoscopul tău personal</div>
        </div>
        <div class="info-content" :class="[{infoClosed: true},{barInactive: true}]">
          <div class="info-data">
            <div class="info-title-text">Horoscop săptămânal Vărsător – {{ titleDate }}</div>
            <br>
            <div class="info-content-text">
              Între {{ textDate }}, dimineața, context astral mai puțin expresiv pentru chestiunile materiale; este
              vorba de o evoluție în nota obișnuită a ultimelor săptămâni, în care nativii își fac planuri și în care
              elementul bani reprezintă atât cheia cât și miza.
              <br><br>
              Între {{ twoDay }}, după ora 10:55, și {{ fourDay }}, la prânz, vacanță a spiritului; Vărsătorii vor simți
              nevoia unui respiro mental: nu vor să se mai frământe, nu vor să mai dezbată nici o idee, nu vor să se mai
              lase târâți în controverse de către prieteni, colegi, cunoscuți sau de străinii cu care, prin forța
              împrejurărilor, trebuie să interacționeze.
              <br><br>
              Nativii se vor izola de factorii de stres, construindu-și un univers exterior și interior alcătuit din
              tihnă, plăcere, delectare spirituală, mentală, culturală sau artistică. O vacanță cu funcții terapeutice
              pentru trup și suflet.
              <br><br>
              Între {{ fourDay }}, după ora 13:56, și {{ sixDay }}, la prânz, ceea ce a fost bun, plăcut și util, adică
              evadarea la care s-au dedat în ultimele zile, s-a risipit iar ei vor fi puși în situația să se
              concentreze, din nou, pe aspectele importante: profesie, carieră, funcție, răspundere, asumare, eficiență,
              dedicare unei teme socio-profesionale.
              <br><br>
              Vor reuși, poate nu cu tragere de inimă, dar vor trece și de acest moment intens astral, provocator și nu
              lipsit de riscul unor tensiuni cu colaboratorii. Din {{ sixDay }}, după ora 14:13, și până pe {{ sevenDay }},
              sectorul relațiilor de prietenie se va colora brusc devenind un loc cald, fierbinte, poate, pentru tot
              ceea ce înseamnă relații cu prietenii mai vechi sau cu apropiații care au intrat în sfera lor de interes
              și activități comune mai de curând.
              <br><br>
              Intuim o comunicare asiduă, numeroase dialoguri, poate chiar și deplasări făcute special pentru a se
              întâlni cu una sau mai multe persoane alături de care desfășoară activități de interes social, cultural,
              filantropic, umanitar, pedagogic, formativ.

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

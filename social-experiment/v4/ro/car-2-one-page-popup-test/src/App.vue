<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper-header">
        <div class="header-top">
          <div class="logo">
            <img src="./assets/img/logo.svg" alt="" class="logo__img" />
          </div>
          <div class="header-text">
            <div class="header__text">
              Programul financiar revoluționar, dezvoltat de Organizația
              Internațională Filantropice Îngerii din Afaceri.
              <span>România</span>
              <div class="header-icon">
                <img src="./assets/img/flag.svg" alt="" class="header-icon__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="main-suptitle">
          <div class="main-suptitle__inner">
            Data: de la: <span>{{ currentTimestart }}</span> până la
            <span class="currentTime">{{ currentTime }}</span>
          </div>
        </div>
        <div class="main-title">
          <div class="main-title__inner animated infinite pulse">
            Felicitări!
          </div>
        </div>
        <div class="main-text">
          <div class="main-text__inner">
            Ai fost selectat pentru a participa la un experiment social:
          </div>
        </div>
        <div class="main-text-subtittle">
          <div class="main-text-subtitle__inner">
            "Calea secretă a îmbogățirii într-o săptămână"
          </div>
        </div>
        <div class="main-small">
          <div class="main-small__inner">
            Pentru a ne proteja împotriva tentativelor de copiere, conținutul
            îți va fi furniza sub forma unor mesaje audio, acestea fiind
            disponibile numai prin apelare de pe un telefon mobil.
          </div>
        </div>
        <div class="main-open">
          <div class="main-open__inner">
            Accesul îți va fi permis pentru: 00:{{ minutes }}:{{ seconds }}
            minute
          </div>
        </div>
        <div class="warning">
          <div class="warning__inner">
            Atenție! Nu vei mai beneficia de o a doua șansă!
          </div>
        </div>
        <CallButton />
      </div>
      <div class="section-copyright footer" id="summary-footer">
        <p style="font-size: 9px; opacity: 0.5">
          Termeni și condiții: acesta este un serviciu de divertisment si timp
          liber cu acces cu plata. Cost per minut: 1.7 euro + tva. Prin
          utilizarea acestui serviciu confirmati că ati împlinit vârsta de 16
          ani, aveti acordul titularului cartelei si sunteti de acord cu acesti
          termeni si conditii. Prin apasarea tastei, de ex. “Obtineti
          serviciu/Suna/Asculta/etc”&nbsp; veti fi redirectionat catre casuta de
          apeluri de unde puteti initia serviciul. Prin accesarea serviciului
          sunteti de acord ca puteti primi mesaje de informare de la furnizorul
          serviciului legate de serviciile de divertisment oferite si noutati.
          In cazul utilizarii serviciului datele dvs. – Ex. numarul de telefon,
          vor fi procesate doar in scopurile de mai sus. Furnizor serviciu:
          GMTech Media OÜ; Reg № 16350328; adresa: Harju maakond, Tallinn,
          Lasnamäe linnaosa, Pae tn 21-25, 11415, Estonia.
          support@gmtechmedia.com. Info serviciu voce: 0318260010, luni-vineri,
          9:00-18:00.; <br />
          Affiliate: mobstra.com
        </p>
      </div>
    </div>
    <Footer
      class="section-copyright"
      v-show="view === 2"
      v-if="footerObj"
      v-html="footerObj.second_footer[footerGeo]"
    >
    </Footer>
  </div>
</template>

<script>
import CallButton from "./components/CallButton";
import moment from 'moment';
export default {
  name: "app",
  data: function () {
    return {
      defaultPhoneNumber: "0903120740",
      phoneNumber: null,
      currentTime: null,
      currentTimestart: null,
      currentday: null,
      curentdate: null,
      progress: 20,
      timer: null,
      totalTime: 10 * 60,

      click_id: null,
      key: null,
      footerObj: null,
      footerGeo: null,
    };
  },
  components: {
    CallButton,
  },
  methods: {
    footerPosition() {
      let e = window.innerHeight,
        t = document.getElementsByClassName("footer")[0],
        n = document.getElementsByClassName("header-top")[0],
        m = document.querySelector(".main");
      m.style.minHeight = e - n.offsetHeight - 35 + "px";
    },
    startTimer: function () {
      this.timer = setInterval(() => this.countdown(), 1000);
    },
    padTime: function (time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function () {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
      }
    },

    getFooter() {
      if (window.mbp) {
        window.mbp.pixel.send("footer").then((resp) => {
          if (resp.data) {
            this.footerObj = resp.data;
            this.footerGeo = Object.keys(this.footerObj.main_footer)[0];
          }
        });
      }
    },
  },
  computed: {
    minutes: function () {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function () {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    },
  },
  beforeMount() {
    this.startTimer();
  },
  mounted() {
    this.currentTime = moment().format("DD.MM.YYYY");
    this.currentTimestart = moment().subtract(7, "days").format("DD.MM.YYYY");
    this.footerPosition();
    window.addEventListener("resize", this.footerPosition);
  },
  created() {
    window.addEventListener("load", () => {
      if (window.mbp) {
        window.mbp.pixel.send("click").then(() => {
          this.getFooter();
        });
      }
    });
  },
};
</script>

<style lang="scss">
@import url("./assets/libs.min.css");
@import url("./assets/animate.min.css");

html,
body {
  font-size: 11px;
  font-family: "Roboto", sans-serif;
}
.wrapper {
  margin: 0 auto;
  display: flex;
  height: 73%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &-header {
    background-color: #1a2842;
    width: 100%;
  }
}
.header {
  &-icon {
    display: inline-block;
  }
  &-top {
    height: 67px;
    width: 93%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
  &__text {
    color: #ffffff;
    line-height: 1.16rem;
    font-size: 11px;
    & span {
    color: #2f9e31;
  }
  }
}
.logo {
  margin-right: 10px;
}
.main {
  width: 350px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  &-suptitle {
    &__inner {
      color: #1a2842;
      font-size: 1.08rem;
      line-height: 1.33rem;
    }
    & span {
      font-weight: bold;
    }
  }
  &-title {
    &__inner {
      color: #2f9e31;
      text-transform: uppercase;
      font-weight: 900;
      line-height: 2rem;
      font-size: 2.5rem;
    }
  }
  &-text {
    &-subtitle {
      &__inner {
        text-transform: uppercase;
        font-size: 2.16rem;
        line-height: 2.5rem;
        font-weight: bold;
      }
    }
    &__inner {
      color: #1a2842;
      font-size: 1.66rem;
      line-height: 2.16rem;
    }
  }
  &-small {
    &__inner {
      font-weight: 900;
      color: #ffffff;
      line-height: 1.33rem;
      font-size: 1rem;
      padding: 10px 15px;
      background: #1a2842;
      border: 1px solid #000;
    }
  }
  &-open {
    &__inner {
      color: #1a2842;
      font-size: 1.33rem;
      line-height: 1.66rem;
      font-weight: 600;
    }
  }
}
.button {
  &__inner {
    background: #2f9e31;
    position: relative;
    width: 100%;
    text-decoration: none;
    border-radius: 3px;
    padding: 17px 0;
    text-align: center;
    display: block;
    font-size: 14.5px;
    border: none;
    color: #fff;
    letter-spacing: 0.1em;
    font-weight: 900;
  }
}
.warning {
  &__inner {
    color: #ce1126;
    text-transform: uppercase;
    font-size: 1.23rem;
    line-height: 1.91rem;
  }
}
.icon-call {
  z-index: 9999;
  position: absolute;
  left: 45px;
  top: 0;
  bottom: 0;
  right: auto;
  margin: auto;
  transform: translateY(-1%);
  animation: 1.2s ease 0s normal none 1 running swing;
  animation-iteration-count: infinite;
  -webkit-animation: 1.2s ease 0s normal none 1 running swing;
  -webkit-animation-iteration-count: infinite;
}

#summary-footer {
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  width: 90%;
  color: #bcbcbc;
}

.footer p {
  text-align: center;
  color: #bcbcbc;
}

.currentTime {
  color: red;
}

@media (min-width: 1024px) {
  .header-top {
    max-width: 350px;
  }
}
@media (min-width: 768px) and (orientation: portrait) {
  html,
  body {
    font-size: 15px;
  }
}

@media (orientation: landscape) {
  .warning {
    &__inner {
      margin-bottom: 15px;
    }
  }
  .main {
    height: 100%;
    min-height: 600px;
  }
}

@media (max-width: 320px) {
  .button__inner {
    font-size: 12px;
  }
  .icon-call {
    left: 40px;
  }
}

@media (max-width: 320px) and (max-height: 480px) {
  .warning {
    margin-bottom: 0px;
  }
  html,
  body {
    font-size: 11px;
  }
}

@media (max-width: 374px) and (max-height: 548px) {
  .wrapper {
    height: auto;
  }
}
</style>

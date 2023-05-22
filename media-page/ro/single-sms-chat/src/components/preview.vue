<template>
  <section class="preview">
    <div class="label">
      Nu poți suna chiar acum?
    </div>
    <div class="preview-content">
      <div class="text">
        <span class="text--bold">
          Sau vrei să primești rezultatul sub forma unui text?
        </span>
      </div>
      <div class="text">
        Nici o problemă! Trebuie doar să trimiți un SMS apăsând butonul de mai jos.
      </div>
      <div class="gift">
        <img class="gift__img" src="../assets/img/gift.png" alt="">
      </div>
      <div class="text text--send">
        Trimite SMS:
      </div>
      <div class="button-wrap">
        <img src="../assets/img/email.svg" alt="">
        <a :href="smsBuilder" class="button" @click="sendClick()" v-metrics>Obține rezultatul</a>
      </div>
      <div class="copy">
        <span>
          *Termeni si conditii serviciu PROFIT cu plata unica prin SMS: Descriere – serviciul ofera sfaturi financiare si idei de afaceri sub forma de inregistrare audio sub forma de inregistrare audio si text. Apasand pe butonul din pagina de acces "CONTINUA/etc" veti fi redirectionat catre casuta de mesaje unde veti putea efectua comanda - cost total comanda – 3EUR+TVA – Orange, Vodafone, Telekom, DIGI Mobil (format din 0.05EUR+TVA mesaj trimis la numarul scurt 1442 si 2.95EUR+TVA mesaj de taxare primit de la numarul scurt – taxarea in Vodafone se face de pe numarul 23133 si in Telekom de pe numarul 22442). O comanda ofera acces nelimitat la continut timp de 7 zile. Prin comanda serviciului utilizatorul este de acord neconditionat cu acesti termeni si conditii , inclusiv cu <a href="./conditiileGDPR.php">conditiile GDPR</a> a serviciului si confirma ca are acordul titularului legal al cartelei SIM pentru comandarea acestuia. Relatii clienti-telefon: 0318260010, tarif normal, email: href="mailto: <a href="mailto:clientisva@gmail.com">clientisva@gmail.com</a>, orar luni-vineri 9:00-18:00 – termen solutionare cereri 24 ore lucratoare sau mai mult, in functie de situatie. Furnizor serviciu: GMTech Media OÜ, with headoffice in Estonia, Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415
        </span>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'preview',
  data: function () {
    return {
      smsTemplate: '#',
      clickID: null
    }
  },
  methods: {
    sendClick() {
      if (window.mbp) {
        window.mbp.pixel.send('cta')
      }
    },
  },
  computed: {
    checkDevice: function () {
      let MobileUserAgent = navigator.userAgent || navigator.vendor || window.opera;
      let isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(MobileUserAgent.toLowerCase());
      let device = '';

      if (MobileUserAgent.match(/iPhone/i) || MobileUserAgent.match(/iPod/i) && !isTablet) {
        device = 'iOS';
      } else if (MobileUserAgent.match(/Android/i) && !isTablet) {
        device = 'Android';
      } else if (MobileUserAgent.match(/iPad/i) || isTablet) {
        device = 'Tablet';
      } else {
        device = 'Desctop'
      }
      return device;
    },
    messageText() {
      return 'PROFIT ' + this.clickID + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDoresc să obțin informații detaliate!';
    },
    smsBuilder() {
      let smsTemplate = '';

      if (this.checkDevice === 'iOS') {
        smsTemplate = 'sms:1442&body=' + encodeURI(this.messageText);
      } else if (this.checkDevice === 'Android') {
        smsTemplate = 'sms:1442?body=' + encodeURI(this.messageText);
      } else {
        smsTemplate = '#';
      }

      return smsTemplate;
    },
  },
  mounted() {
    window.addEventListener('load', () => {
      if (window.mbp) {
        window.mbp.pixel.send('click').then(response => {
          this.clickID = response;
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.button {
  background: linear-gradient(88.84deg, #FFAB00 1.45%, #FFD100 99.8%);
  border: 1px solid #FFD934;
  border-bottom: 4px solid #CE8146;
  color: #000000;
  box-sizing: border-box;
  border-radius: 30px;
  font-size: 1.25rem;
  display: inline-block;
  padding: 12px 0;
  width: 100%;
  max-width: 330px;
  text-decoration: none;

  &-wrap {
    text-align: center;
    position: relative;

    img {
      position: absolute;
      left: 40px;
      top: 7px;

      @media (max-width: 350px) {
        left: 25px;
      }
    }
  }
}

.copy {
  color: #9D9D9D;
  font-size: 11px;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 300;
  margin-top: 10px;

  @media(min-height: 590px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 100px;
    bottom: -60px;
  }
}

.label {
  background: linear-gradient(88.85deg, #FFAB00 1.45%, #FFD100 99.8%);
  padding: 20px;
  display: inline-block;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.313rem;
  margin-bottom: 0.875rem;
}

.preview {
  padding: 1.063rem 0;
  text-align: center;

  &-content {
    padding: 0 15px;
  }
}

.text {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.188rem;
  color: #000;
  margin-bottom: 0.875rem;

  &--bold {
    font-weight: 500;
  }

  &--send {
    font-size: 0.75rem;
    line-height: 0.875rem;
  }
}

.gift {
  margin: 10px 0;
  text-align: center;

  &__img {
    width: 65px;
    height: 65px;
  }
}
</style>


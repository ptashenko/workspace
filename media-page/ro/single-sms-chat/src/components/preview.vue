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
        <a :href="smsTemplate" class="button" @click="sendClick()" v-metrics>Obține rezultatul</a>
      </div>
      <div class="copy">
        <p>
          Termeni și condiții: acesta este un serviciu de divertisment si timp liber cu acces cu plata. Cost per minut:
          1.7 euro + tva. Prin utilizarea acestui serviciu confirmati că ati împlinit vârsta de 16 ani, aveti acordul
          titularului cartelei si sunteti de acord cu acesti termeni si conditii. Prin apasarea tastei, de ex. “Obtineti
          serviciu/Suna/Asculta/etc” veti fi redirectionat catre casuta de apeluri de unde puteti initia serviciul. Prin
          accesarea serviciului sunteti de acord ca puteti primi mesaje de informare de la furnizorul serviciului legate
          de serviciile de divertisment oferite si noutati. In cazul utilizarii serviciului datele dvs. – Ex. numarul de
          telefon, vor fi procesate doar in scopurile de mai sus. Furnizor serviciu: GMTech Media OÜ; Reg № 16350328;
          adresa: Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415, Estonia. <a
            href="mailto:support@gmtechmedia.com">support@gmtechmedia.com</a>. Info serviciu voce: 0318260010,
          luni-vineri, 9:00-18:00.
          <br>
          <span class="noaff">Affiliate: mobstra.com</span>
        </p>
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
      QUERY: this.getQuery(window.location.search),
      clickID: ''
    }
  },
  methods: {
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
    sendClick() {
      if (window.mbp) {
        window.mbp.pixel.send('cta')
      }
    },
    getQuery(string) {
      return string.slice(1).split("&")
        .map((queryParam) => {
          let kvp = queryParam.split("=");
          return { key: kvp[0], value: kvp[1] }
        })
        .reduce((query, kvp) => {
          query[kvp.key] = kvp.value;
          return query
        }, {})
    }
  },
  created() {
    if (this.QUERY.click_id) {
      this.clickID = this.QUERY.click_id
    } else {
      this.clickID = '';
    }

    let messageText = 'PROFIT ' + this.clickID + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDoresc să obțin informații detaliate!';
      let userDevice = this.checkDevice();

      if (userDevice === 'iOS') {
        this.smsTemplate = 'sms:1442&body=' + encodeURI(messageText);
      } else if (userDevice === 'Android') {
        this.smsTemplate = 'sms:1442?body=' + encodeURI(messageText);
      } else {
        this.smsTemplate = '#';
      }
  },
  mounted() {
    window.addEventListener('load', () => {
      if (window.mbp) {
        window.mbp.pixel.send('click').then(response => {
          this.click_id = response;
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


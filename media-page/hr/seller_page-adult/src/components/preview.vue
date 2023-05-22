<template>
  <section class="preview">
    <div class="label">
      Možeš li me odmah nazvati?
    </div>
    <div class="preview-content">
      <div class="text">
        <span class="text--bold">
          Želiš vidjeti što ti mogu raditi?
        </span>
      </div>
      <div class="text">
        Nema problema! Pošalji mi SMS i poslat ću ti vezu za moje vrlo vruće
        videozapise;)
      </div>
      <div class="gift">
        <img class="gift__img" src="../assets/img/icon-18-1.png" alt="" />
      </div>
      <div class="text text--send">
        Pošalji SMS:
      </div>
      <div class="button-wrap">
        <img src="../assets/img/email.svg" alt="" />
        <a :href="smsTemplate" class="button" @click="sendClick()" v-metrics
          >Želim videozapise!</a
        >
      </div>
      <div class="copy">
        <p>
          Jednokratna Premium SMS usluga. Pošaljite SMS sa ključnom riječi LIKE
          na 844844. Cijena usluge je 25kn/SMS (PDV uključen). Služba za
          korisnike:
          <a href="mailto:abcmobile.hr@silverlines.info"
            >abcmobile.hr@silverlines.info</a
          >
          , +38516388160. Organizator usluge:
          <span class="noaff">ABCMobile OÜ,</span> Harju maakond, Tallinn,
          Peterburi tee 71-318, 11415, Estonia. Tehnička podrška (davatelj
          usluge): NTH Media d.o.o., Horvaćanska 17a, 10 000 Zagreb, OIB:
          59547672558. Tel: 01 6388 160. Pogledajte naše
          <a href="./terms.php">Uvjete korištenja</a> i
          <a href="./privacy.php">Politiku privatnosti</a> <br /><span
            class="noaff"
            >Affiliate: mobstra.com</span
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { postSubs, sendCLick } from "@/services/landAPI";

export default {
  name: "preview",
  data: function() {
    return {
      smsTemplate: "#",
      click_id: null,
      QUERY: this.getQuery(window.location.search) || null,
    };
  },
  methods: {
    checkDevice: function() {
      let MobileUserAgent =
        navigator.userAgent || navigator.vendor || window.opera;
      let isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        MobileUserAgent.toLowerCase()
      );
      let device = "";

      if (
        MobileUserAgent.match(/iPhone/i) ||
        (MobileUserAgent.match(/iPod/i) && !isTablet)
      ) {
        device = "iOS";
      } else if (MobileUserAgent.match(/Android/i) && !isTablet) {
        device = "Android";
      } else if (MobileUserAgent.match(/iPad/i) || isTablet) {
        device = "Tablet";
      } else {
        device = "Desctop";
      }
      return device;
    },
    getQuery(string) {
      return string
        .slice(1)
        .split("&")
        .map((queryParam) => {
          let kvp = queryParam.split("=");
          return { key: kvp[0], value: kvp[1] };
        })
        .reduce((query, kvp) => {
          query[kvp.key] = kvp.value;
          return query;
        }, {});
    },
    sms() {
      let messageText = "LIKE " + this.click_id;
      let userDevice = this.checkDevice();

      if (userDevice === "iOS") {
        this.smsTemplate = "sms:844844&body=" + encodeURI(messageText);
      } else if (userDevice === "Android") {
        this.smsTemplate = "sms:844844?body=" + encodeURI(messageText);
      } else {
        this.smsTemplate = "#";
      }
    },
    sendClick() {
      sendCLick(this.click_id);
    },
  },
  mounted() {
    let data = JSON.stringify(this.QUERY);
    postSubs(data)
      .then(
        (result) => {
          this.click_id = result.data["click_id"];
          this.sms();
        },
        (err) => {
          console.log(err);
          this.click_id = null;
        }
      )
      .catch((err) => {
        console.log(err);
        this.click_id = null;
      });
  },
};
</script>
<style lang="scss" scoped>
.button {
  background: linear-gradient(88.84deg, #ffab00 1.45%, #ffd100 99.8%);
  border: 1px solid #ffd934;
  border-bottom: 4px solid #ce8146;
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
      @media (max-width: 400px) {
        left: 25px;
      }
      @media (max-width: 340px) {
        left: 10px;
      }
    }
  }
}

.copy {
  color: #9d9d9d;
  font-size: 11px;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 300;
  margin-top: 10px;
  @media (min-height: 320px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 100px;
    bottom: -60px;
  }
}

.label {
  background: linear-gradient(88.85deg, #ffab00 1.45%, #ffd100 99.8%);
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

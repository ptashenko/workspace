<template>
  <section class="result" :style="{ minHeight: innerHeight - 68 + 'px' }">
    <div class="title">Συγχαρητήρια!</div>
    <div class="subtitle animated infinite pulse">
      Έχετε πρόσβαση στις λεπτομερείς οδηγίες!
    </div>
    <div class="text">
      Όταν καλείτε από το κινητό σας τηλέφωνο, θα ακούσετε ένα ηχητικό μήνυμα με
      οδηγίες πως να κερδίσετε επιπλέον εισόδημα:
    </div>
    <div class="weight">"1000 - 3000 ΚΑΘΕ ΕΒΔΟΜΑΔΑ"</div>
    <div class="timer">Η ηχογράφηση θα διαγραφεί μετά: <Timer /></div>
    <div class="info">
      <div class="info-title">
        Ο αριθμός των συμμετεχόντων είναι αυστηρά περιορισμένος.
      </div>
      <div class="info-text">Καλέστε τώρα, μην χάσετε την ευκαιρία σας!</div>
    </div>
    <div class="result-button">
      <button
        class="button animated infinite pulse callBtn"
        @click="getPhoneNumber()"
        v-metrics
        v-show="!phoneNumber"
      >
        <span class="button__text">
          Καλέστε και
          <br />ακούστε
        </span>
      </button>
      <a
        class="button animated infinite pulse"
        v-show="phoneNumber"
        @click="sendClick()"
        :href="'tel:' + phoneNumber"
      >
        <span class="button__text">
          Καλέστε και
          <br />ακούστε
        </span>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url("../assets/animation.scss");
.result {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 300px;
  margin: 0 auto;
  max-height: 850px;
  min-height: 492px;
  padding-bottom: 24px;
  &-button {
    margin-left: 20px;
  }
}

.title {
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  text-transform: uppercase;
  color: #2f9e31;
}
.subtitle {
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #c34f5c;
}
.text {
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}
.weight {
  font-weight: bold;
  font-size: 23px;
  line-height: 28px;
  text-transform: uppercase;
  color: #000000;
}
.timer {
  font-size: 12px;
  line-height: 14px;
  color: #b81b1e;
}
.info {
  background: #fffdf2;
  border: 1px solid #f8d259;
  border-radius: 10px;
  padding: 10px 15px;
  &-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-bottom: 9px;
  }
  &-text {
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
}
.button {
  text-decoration: none;
  background: #c34f5c;
  background: linear-gradient(
    180.83deg,
    #c34f5c 7.87%,
    #b54a5a 60.97%,
    #54242b 97.69%
  );
  border-radius: 10px;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 245px;
  min-height: 71px;
  margin: 0 auto;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-left: 10%;
  border: none;
  cursor: pointer;
  &::before {
    content: url("../assets/img/call.svg");
    animation: infinite tada 2s;
    position: absolute;
    left: -12px;
    background: #c34f5c;
    background: linear-gradient(
      345.42deg,
      #d75969 -28.42%,
      #b04a57 92.44%,
      #54242b 165%
    );
    border-radius: 50%;
    padding: 12.5px;
    z-index: 20;
  }
  &:after {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    left: -25px;
    background: #c34f5c;
    background: linear-gradient(
      180.83deg,
      #e75d6d 7.87%,
      #c34f5c 60.97%,
      #54242b 97.69%
    );
    z-index: 11;
    border-radius: 50%;
  }
  &__text {
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.05em;
  }
}
</style>

<script>
import Timer from "../components/Timer";
export default {
  data() {
    return {
      phoneNumber: null,
      defaultPhoneNumber: "+309019015880",
    };
  },
  components: { Timer },
  methods: {
    createLink(tel) {
      var a = document.createElement("a");
      a.href = `tel:${tel}`;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
    },
    sendClick() {
      if (window.mbp) {
        window.mbp.pixel.send("cta");
      }
    },
    getPhoneNumber() {
      this.sendClick();
      if (window.mbp) {
        window.mbp.pixel
          .send("phone")
          .then((response) => {
            this.phoneNumber = "+" + response;
            this.createLink(this.phoneNumber);
          })
          .catch(() => {
            this.phoneNumber = this.defaultPhoneNumber;
            this.createLink(this.phoneNumber);
          });
      } else {
        this.phoneNumber = this.defaultPhoneNumber;
        this.createLink(this.phoneNumber);
      }
    },
  },
};
</script>

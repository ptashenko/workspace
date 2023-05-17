<template>
  <div class="btnWrapper">
    <button
      v-if="!phoneNumber"
      class="callBtn btn"
      @click="getPhoneNumber"
      v-metrics
    >
      {{ result.btn }}
    </button>
    <a
      v-else
      :href="`tel:${phoneNumber}`"
      class="callBtn btn"
      @click="sendClick"
    >
      {{ result.btn }}
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: null,
      defaultPhoneNumber: "+449010343197",
    };
  },
  methods: {
    sendClick() {
      if (window.mbp) {
        window.mbp.pixel.send("cta");
      }
    },
    createLink(tel) {
      let link = document.createElement("a");
      link.href = `tel:${tel}`;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
    },
    getPhoneNumber() {
      window.dataLayer.push({ event: "call button" });
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

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.btnWrapper {
  width: 100%;
  margin-top: vh(25px);
}

.callBtn {
  display: block;
  padding: vh(18px) 0;
  width: 100%;
  margin: 0 auto vh(8px);

  font-weight: 700;
  font-size: vh(20px);
  line-height: vh(24px);
  color: white;
  text-align: center;

  border-radius: vh(10px);
  background: #f43f6c;

  animation: scale-btn 1s infinite alternate;
}
</style>

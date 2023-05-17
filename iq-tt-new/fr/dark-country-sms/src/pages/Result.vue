<template>
  <div class="result-page__wrapper">
    <div class="result-top">
      <h3 class="result-page__attention">
        {{ result.attention[0] }}
      </h3>

      <p class="text">
        {{ result.text }}
      </p>

      <div class="block-white">
        <p class="block-text result-page__small">
          <span class="bold">
            {{ result.block[0] }}
            <br />
            <b>{{ result.block[1] }}</b>
          </span>
        </p>
      </div>

      <Comments />

      <CallBtn :checkDevice="checkDevice" :click_id="click_id" :iqCode="iqCode" />
      
      <div class="sms">
        <img width="100" :src="require('../assets/img/sms.png')" />
      </div>

      <p v-if="isItIphone" class="crutch">iphone crutch</p>
    </div>

    <Observer class="price" @on-change="onIntersection">
      <span>{{ price }}</span>
    </Observer>
  </div>
</template>

<script>
import Observer from "vue-intersection-observer";
import CallBtn from "@/components/CallBtn.vue";
import Comments from "@/components/Comments.vue";

export default {
  props: ["isItIphone", "checkDevice", "click_id"],
  components: { Observer, Comments, CallBtn },
  methods: {
    onIntersection(entry, unobserve) {
      if (entry.isIntersecting) {
        window.dataLayer.push({ event: "view price end" });
        unobserve();
      }
    },
  },
  mounted() {
    window.dataLayer.push({ event: "last page" });
  },
  computed: {
    iqCode() {
      const iqNumber = ['Q01','Q02', 'Q03', 'Q04', 'Q05', 'Q06', 'Q07', 'Q08'];
      return iqNumber[Math.floor(Math.random() * 3)];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.result-page__wrapper {
  width: 100%;
  height: 100%;
  padding: vh(5px) 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .result-top {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}

.result-page__attention {
  width: 100%;
  margin: 0 auto vh(20px);
  padding: vh(15px) vh(10px);

  font-weight: 700;
  font-size: vh(20px);
  line-height: 1.4;
  text-align: center;

  background: #7a6dde;
  border-radius: vh(43px);

  ::v-deep span {
    color: #6658d9;
    font-size: vh(23px);
    -webkit-text-stroke: 1px #000;
  }
}
.text {
  margin-bottom: vh(10px);
  font-weight: 500;
  font-size: vh(19px);
  line-height: 1.2;
  text-align: center;
  color: #ffffff;
}

.block-white {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: vh(15px);
  margin-bottom: vh(20px);

  width: 100%;

  background: #f2f0ff;
  box-shadow: vh(0px) vh(4px) vh(4px) rgba(177, 183, 188, 0.25);
  border-radius: vh(10px);

  .block-text {
    font-weight: 400;
    font-size: vh(19px);
    line-height: 1.1;
    text-align: center;
    color: #222833;
  }
}

.crutch {
  display: none;
  margin: 0 auto;
  color: #0000;

  @media (max-width: 500px) {
    display: block;
  }
}

.price {
  font-weight: 700;
  line-height: vh(19px);
  color: #fff;
  z-index: 1;
  font-size: vh(13px);
  position: absolute;
  bottom: vh(-70px);
  text-align: center;
  max-width: vh(300px);
}

.sms {
  display: flex;
  justify-content: center;
}
</style>

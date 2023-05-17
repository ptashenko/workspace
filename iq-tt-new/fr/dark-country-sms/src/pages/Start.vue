<template>
  <div class="wrapper" ref="start-wrapper">
    <div class="top-content">
      <div class="top-content__body">
        <div class="cont-top">
          <p class="title">
            {{ start.title[0] }}
            <span> {{ start.title[1] }} </span>
            {{ start.title[2] }}
            <span> {{ start.title[3] }} </span>
            {{ start.title[4] }}
            <span> {{ start.title[5] }} </span>
            {{ start.title[6] }}
          </p>

          <div class="subtitle">{{ start.subtitle }}</div>
        </div>

        <div class="block">
          <div class="interactive">
            <img src="../assets/img/start/strart.jpg" alt="start image" />
          </div>
          <p class="decsriprion">
            {{ start.block[0] }}
            <span class="purple">{{ start.block[1] }}</span>
            {{ start.block[2] }}
            <span class="purple"> {{ start.block[3] }}</span>
            {{ start.block[4] }}
            <span class="purple"> {{ start.block[5] }}</span>
          </p>
        </div>
      </div>

      <button class="button btn" @click="onNextPage">
        {{ start.button }}
      </button>

      <Observer v-if="!hidePrice" @on-change="onIntersection" class="price">
        <span>{{ price }}</span>
      </Observer>
    </div>
  </div>
</template>

<script>
import { animate, qubic } from "@/utilites/animate.js";
import Observer from "vue-intersection-observer";

export default {
  data() {
    return {
      hidePrice: false,
    };
  },
  components: { Observer },
  methods: {
    animationNextPage() {
      let startPage = this.$refs["start-wrapper"];
      return animate({
        duration: 300,
        timing: qubic,
        draw: (progress) => {
          startPage.style.transform = `translateY(${-300 * progress}%)`;
        },
      });
    },
    onNextPage() {
      this.hidePrice = true;
      this.animationNextPage().then(() => {
        setTimeout(() => {
          window.dataLayer.push({ event: "start button" });
          this.$emit("next-page");
        }, 100);
      });
    },
    onIntersection(entry, unobserve) {
      if (entry.isIntersecting) {
        window.dataLayer.push({ event: "view price start" });
        unobserve();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.top-content {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: space-between;
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.wrapper {
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.cont-top {
  padding: 0 vh(20px);
}

.title {
  padding: 0 vh(20px);
  display: block;

  font-weight: 400;
  font-size: vh(23px);
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: vh(5px);

  span {
    color: #6658d9;
    font-weight: bold;
  }
}

.subtitle {
  padding: vh(14px);
  width: 100%;

  font-size: vh(21px);
  line-height: vh(24px);
  text-align: center;

  color: #ffffff;
  background: #6658d9;
  border-radius: 36px;
  margin-bottom: vh(12px);
}

.block {
  width: 100%;
  margin-bottom: vh(10px);

  .interactive {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  img {
    width: 120%;
    margin: vh(20px) 0;
  }

  .decsriprion {
    font-weight: 500;
    font-size: vh(21px);
    line-height: 1.2;
    color: #ffffff;
    text-align: center;
    max-width: vh(340px);
    margin: 0 auto;

    .purple {
      color: #6658d9;
    }
  }
}

.decsriprion {
  padding: 0 vh(20px);
}

.button {
  font-family: "Futura PT";
  margin: 0 auto vh(20px);
  padding: vh(15px) 0;
  width: 90%;
  max-width: vh(325px);

  font-weight: 500;
  font-size: vh(25px);
  line-height: vh(28px);
  color: white;

  border-radius: 10px;
  background: #f43f6c;

  animation: scale-btn 1s infinite alternate;

  @media (max-width: 375px) {
    font-size: vh(22px);
    padding: vh(8px) 0;
  }
}

.price {
  position: absolute;
  width: 100%;
  bottom: vh(-45px);
  right: 50%;
  transform: translateX(50%);

  font-weight: 700;
  line-height: vh(19px);
  color: #fff;
  z-index: 1;
  font-size: vh(14px);
  text-align: center;

  @media (max-width: 473px) {
    bottom: vh(-60px);
  }
}
</style>

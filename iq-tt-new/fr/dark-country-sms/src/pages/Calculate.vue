<template>
  <div class="calculate-page__wrapper" ref="calculate-wrapper">
    <div class="calculate__progress">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
        class="checkmark"
      >
        <circle class="checkmark__border" cx="26" cy="26" r="23"></circle>
        <circle
          cx="26"
          cy="26"
          r="23"
          stroke="url(#linear)"
          stroke-dashoffset="0"
          class="checkmark__circle"
        />
      </svg>
      <span class="number">{{ progress }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["answersCounter"],
  data() {
    return {
      currentCalculateIndex: 0,
      progress: 0,
      width: 0,
    };
  },
  methods: {
    onNextPage() {
      this.$emit("next-page");
    },
    startLoading() {
      let can = document.getElementsByClassName("checkmark__circle")[0],
        r = document
          .getElementsByClassName("checkmark__circle")[0]
          .getAttribute("r"),
        c = Math.PI * (2 * r);

      can.setAttribute("stroke-dasharray", c);
      can.setAttribute("stroke-dashoffset", c);

      if (this.progress === 0) {
        this.progress = 1;
        const self = this;
        let id = setTimeout(function times() {
          if (self.width === 99) {
            clearInterval(id);
            self.progress = 100;
            setTimeout(() => {
              setTimeout(() => {
                self.onNextPage();
              }, 660);
            }, 400);
          } else {
            self.progress++;
            self.width++;
            can.setAttribute(
              "stroke-dashoffset",
              Math.floor(((100 - self.progress) / 100) * c)
            );
            id =
              self.progress <= 26
                ? setTimeout(times, 50)
                : self.progress <= 35
                ? setTimeout(times, 12)
                : self.progress <= 48
                ? setTimeout(times, 20)
                : self.progress <= 65
                ? setTimeout(times, 12)
                : self.progress <= 85
                ? setTimeout(times, 5)
                : setTimeout(times, 35);
          }
        }, 60);
      }
    },
  },
  mounted() {
    this.startLoading();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.calculate-page__wrapper {
  width: 100%;
  height: 100%;
  padding-top: vh(150px);

  display: flex;
  flex-direction: column;
  will-change: transform;
}

.calculate__progress {
  position: relative;
  margin-bottom: vh(90px);

  .checkmark {
    display: block;
    margin: 0 auto;
    width: vh(143px);
    height: vh(143px);
    transform: rotate(-90deg);

    &__border {
      stroke: #dfdcf9;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke-dasharray: 0;
      fill: transparent;
      filter: drop-shadow(vh(-1px) vh(0px) vh(2px) rgba(0, 0, 0, 1));
    }

    &__circle {
      stroke: #f3275a;
      stroke-width: 1;
      stroke-miterlimit: 10;
      transition: all 0.4s;
      fill: transparent;
      filter: drop-shadow(vh(0px) vh(0px) vh(1.5px) rgba(170, 183, 198, 0.9));
      border-radius: vh(10px);
    }
  }

  .number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: vh(61px);
    line-height: vh(69px);
    color: #7a6dde;
    font-family: "Abel";
  }
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>

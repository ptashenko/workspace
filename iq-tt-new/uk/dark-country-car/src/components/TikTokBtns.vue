<template>
  <div>
    <div class="titcock">
      <div class="item">
        <svg
          @click="like"
          class="icon like"
          enable-background="new 0 0 128 128"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 128 128"
          width="128px"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M127,44.205c0-18.395-14.913-33.308-33.307-33.308c-12.979,0-24.199,7.441-29.692,18.276  c-5.497-10.835-16.714-18.274-29.694-18.274C15.912,10.898,1,25.81,1,44.205C1,79,56.879,117.104,64.001,117.104  C71.124,117.104,127,79.167,127,44.205z"
            fill="#fff"
          />
        </svg>
        <p class="descr">{{ likes }}</p>
      </div>
      <div class="item">
        <img
          class="icon comments"
          src="../assets/img/start/comments.png"
          alt="comments"
        />
        <p class="descr">{{ comments }}</p>
      </div>
      <div class="item">
        <img
          class="icon share"
          src="../assets/img/start/share.png"
          alt="share"
        />
        <p class="descr">{{ start.tiktok }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 6374,
      comments: 64,
      stopIntervals: false,
    };
  },
  methods: {
    like(e) {
      e.currentTarget.classList.toggle("liked");

      if (e.currentTarget.className.baseVal.includes("liked")) {
        this.likes++;
      } else {
        this.likes--;
      }
    },
  },
  mounted() {
    const interval = setInterval(() => {
      this.stopIntervals && clearInterval(interval);
      this.likes += 6;
    }, 1000);
  },
  destroyed() {
    this.stopIntervals = true;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.titcock {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  opacity: 0.9;

  transition: 0.4s all;

  right: vh(20px);
  bottom: 15%;

  @media (min-width: 1080px) {
    display: none;
  }

  .item {
    text-align: center;
    margin-bottom: vh(16px);

    .icon {
      display: block;
      width: vh(37px);

      @media (max-width: 370px) {
        width: vh(30px);
      }

      path {
        transition: 0.4s fill;
        fill: #fff;
      }
    }

    .descr {
      font-size: vh(13px);
    }
  }
}

@keyframes like {
  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
}

.liked {
  animation: like 0.3s;

  path {
    fill: rgb(255, 0, 76) !important;
  }
}
</style>

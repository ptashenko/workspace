<template>
    <div class="results">
        <div class="wrapper">
            <div class="results--top">
        <span class="results__img">
          <img :src="require('../assets/static/' + zodiak.imgGreen)" alt=""/>
        </span>
                <span class="results__title">{{ zodiak.name }}</span>
                <span class="results__text">{{ text.firstText }}</span>
                <span class="results__text bold">{{ text.bold }}</span>
                <span class="results__text">{{ text.secondText }}</span>
                <!-- <span class="results__wait">{{ text.wait }} {{ time }}</span> -->
            </div>


            <div class="infoBlock">
                <p>
                    After calling you will get <b style="font-size: 20px;color: #00ae1c;">full access</b> to our <b
                        style="font-size: 20px;color: #00ae1c;">ASTRO portal</b> for <b>30 days</b>
                </p>
            </div>

            <a
                    class="results__btn"
                    v-metrics
                    href="tel:132456789"
                    @click="sendClick()"
            >
                {{ text.button }}
            </a>

        </div>
    </div>
</template>

<script>
import {results} from "@/text/results";
import {sendCLick} from "@/services/landAPI";

export default {
    name: "Results.vue",
    props: ["clickID", "zodiak", "key_id"],
    data() {
        return {
            text: results,
            time: "",
        };
    },
    methods: {
        fmtMSS(s) {
            return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
        },
        timeExpire() {
            let time = 240;
            this.time = this.fmtMSS(time);
            let timeCalc = setInterval(() => {
                if (time == 0) {
                    clearInterval(timeCalc);
                    this.nextPageStart();
                } else {
                    this.time = this.fmtMSS(time);
                    time--;
                }
            }, 1000);
        },
        nextPageStart() {
            this.$emit("nextPageStart");
        },
        sendClick() {
            sendCLick(this.clickID, this.key_id);
        },
    },
    mounted() {
        this.timeExpire();
    },
};
</script>

<style lang="scss">
.results {
  padding-top: 20px;
  height: 100%;
  max-height: 600px;

  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 142px;
    height: 142px;
    border: 5px solid #00ae1c;
    border-radius: 50%;
    @media (max-height: 700px) {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
    }

    img {
      height: 60px;
      @media (max-height: 700px) {
        height: 40px;
      }
    }
  }

  &__title {
    margin-bottom: 26px;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #00ae1c;
    @media (max-height: 700px) {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 15px;
    }
  }

  &__text {
    margin-bottom: 20px;
    font-size: 17px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    @media (max-height: 700px) {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 12px;
    }

    &.bold {
      font-weight: 700;
    }
  }

  &__wait {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #00ae1c;
    margin-bottom: 44px;
    @media (max-height: 700px) {
      margin-bottom: 20px;
    }
  }

  &__btn {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px 16px;
    max-width: 253px;
    width: 100%;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    background: #00ae1c;
    border-radius: 70px;
    text-align: center;

    @media (max-height: 700px) and (max-width: 380px) {
      width: 90%;
    }

    &:before {
      content: "";
      display: block;
      margin-right: 13px;
      width: 27px;
      height: 28px;
      background-image: url("../assets/static/call.svg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &--top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.infoBlock {
  text-transform: uppercase;
  border: 3px dashed #7035d8;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;

  @media (max-height: 700px) {
      margin-bottom: 10px;
    }
}
</style>

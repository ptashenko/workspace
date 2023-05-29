<template>
    <div class="start">
        <div class="wrapper">
            <div class="start--top">
        <span class="img">
          <img :src="require('../assets/static/' + text.img)" alt=""/>
        </span>
                <span class="title">{{ text.title }}</span>
            </div>
            <ul class="list">
                <li
                        class="list__item"
                        v-for="(advantage, index) in text.advantages"
                        :key="index"
                >
                    {{ advantage }}
                </li>
            </ul>
            <Button :text="text" v-on:nextPage="nextPage()" :class="{'disabled':!checked}"></Button>
        </div>

        <div class="checkbox">
            <label>
                <input type="checkbox" v-model="checked">
                I confirm that I am over 18 years old
            </label>
        </div>
    </div>
</template>

<script>
import {start} from "@/text/start";
import Button from "@/components/Button";

export default {
    name: "Start",
    components: {
        Button,
    },
    data() {
        return {
            text: start,
            checked: false,
        };
    },
    methods: {
        nextPage() {
            this.$emit("nextPageTest");
        },
    },
};
</script>

<style lang="scss">
.start {
  padding-top: 58px;
  @media (max-height: 700px) {
    padding-top: 30px;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 306px;
    width: 100%;
  }

  .img {
    max-width: 174px;
    margin-bottom: 35px;
    @media (max-height: 700px) {
      max-width: 130px;
      margin-bottom: 20px;
    }
  }

  .title {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    @media (max-height: 700px) and (max-width: 380px) {
      font-size: 18px;
      line-height: 20px;
    }
  }

  .list {
    margin-top: 12px;

    &__item {
      position: relative;
      margin-bottom: 14px;
      padding-left: 41px;
      font-size: 14px;
      line-height: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 25px;
        height: 25px;
        background-image: url("../assets/static/star.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transform: translateY(-50%);
      }
    }
  }

  &--top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
}

.disabled {
  pointer-events: none;
}

.checkbox {
  background: rgba(112, 53, 216, 0.4);
  border: 2px solid white;
  padding: 10px;
  text-transform: uppercase;

  @media (max-width: 380px) {
    font-size: 14px;
  }

  input {
    transform: scale(2);
    margin-right: 10px;
  }
}

.Breath {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: blue;

  &__output {
    flex: 1 100%;
  }

  &__inner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    animation-name: breath;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out; // steps(3)
    //animation-delay: .2s;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background-color: darken(pink, 10);
    /*&[data-caption="on"]{
      border: 10px solid red;
    }
    &[data-caption="off"]{
      border: 8px solid white;
    }*/
  }

  &__ticker {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 20px;
    text-align: center;

    ul {
      position: absolute;
      top: 0;
      left: 0;
      animation-name: ticker;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }
  }
}

@keyframes breath {
  50% {
    width: 90%;
    height: 90%;
    transform: scale(1);
    background-color: pink;
  }
}

@keyframes ticker {
  50% {
    transform: translateY(-20px);
  }
}
</style>

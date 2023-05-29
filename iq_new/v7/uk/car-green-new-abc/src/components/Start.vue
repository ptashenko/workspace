<template>
    <div class="start content">
        <div class="wrapper">
            <div class="content--top">
        <span class="img">
          <img :src="require('../assets/static/' + text.img)" alt=""/>
        </span>
                <span class="title">{{ text.title }}</span>
                <span class="start__question">{{ text.question }}</span>
                <span class="start__text">{{ text.text }}</span>
                <button type="button" class="btn active" :disabled="isCheckboxMarked" @click="nextPageTest">
                    {{ text.button }}
                </button>
                <div class="adult">
                    <input class="checkbox" v-model="checkbox" type="checkbox" id="+18">
                    <label class="label" for="+18">{{ text.checkboxLabel }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Copyright from "@/text/Copyright";
import {start} from "../text/start";

export default {
    name: "Start",
    components: {
        Copyright,
    },
    data() {
        return {
            text: start,
            checkbox: false
        };
    },
    methods: {
        nextPageTest() {
            this.$emit("nextPageTest");
        },
    },
    computed: {
        isCheckboxMarked() {
            return !this.checkbox ? true : false
        }
    }
};
</script>

<style lang="scss">
.start {
  display: flex;
  flex-direction: column;
  padding-top: 45px;

  @media (max-height: 700px), (max-width: 400px) {
    padding-top: 20px;
  }

  .wrapper {
    flex-grow: 1;
    height: 100%;
    justify-content: space-between;
  }

  .title {
    margin-bottom: 35px;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    @media (max-height: 700px), (max-width: 400px) {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 15px;
    }
  }

  .img {
    margin-bottom: 35px;
    width: 130px;
    height: 91px;
    @media (max-height: 700px), (max-width: 400px) {
      width: 130px;
      margin-bottom: 10px;
    }
  }

  .btn {
    width: 320px;
    padding: 24px 10px;
    @media (max-height: 600px), (max-width: 360px) {
      width: 280px;
      padding: 15px 10px;
    }

    &:disabled {
      opacity: 0.7;
      cursor: default;
    }
  }

  &__question {
    margin-bottom: 42px;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    color: #36be57;
    max-width: 305px;
    @media (max-height: 700px), (max-width: 400px) {
      font-size: 22px;
      line-height: 27px;
      margin-bottom: 20px;
    }
  }

  &__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-bottom: 82px;
    @media (max-height: 700px), (max-width: 400px) {
      margin-bottom: 45px;
    }
  }

  .adult {
    display: flex;
    width: 100%;
    margin-top: 20px;

    align-items: center;
    justify-content: center;
    border: 1px solid #36be57;
    padding: 10px 5px;

    @media (max-height: 700px), (max-width: 400px) {
      margin-top: 15px;
    }

    .checkbox {
      position: relative;
      z-index: 5;
      width: 20px;
      height: 20px;
      opacity: 1;
      margin: 0 5px 0 0;
      border: none;

      &::before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        //position: absolute;
        //right: 0px;
        //top: 0px;
        background-color: #fff;
        border: 1px solid #36be57;
        box-sizing: border-box;

        transition: 0.4s all;
        cursor: pointer;
      }

      &:checked {
        &:before {
          border: 10px solid #36be57;
        }
      }
    }

    .label {
      font-size: 13px;

      @media (max-width: 350px) {
        font-size: 11px;
      }
    }

  }
}
</style>

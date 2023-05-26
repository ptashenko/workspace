<template>
    <div class="status-bar">

        <div v-if="show || !comment" class="status-bar__icons">
            <img :src="require('../assets/img/status-bar/pointer.png')" alt="">
            <img :src="require('../assets/img/status-bar/camera.png')" alt="">
            <img :src="require('../assets/img/status-bar/image-v.png')" alt="">
            <img :src="require('../assets/img/status-bar/microphone.png')" alt="">
        </div>

        <img v-else @click="()=>this.showIcons(true)" :src="require('../assets/img/status-bar/arrow.svg')" alt=""/>

        <div class="status-bar__input" :class="{ isComment: comment && !show }">
            <div class="alert" ref="alert" v-html="validationMessage" />
            <input v-model="comment" @input="()=>this.showIcons(false)" type="text" placeholder="Aa" />
        </div>

        <button v-if="comment" class="send-btn" @click="sendMessage">
            <img
                :src="require('../assets/img/status-bar/send.svg')"
                alt="Send button"
            />
        </button>
        <button v-else class="send-btn">
            <img
                :src="require('../assets/img/status-bar/thumb.svg')"
                alt="Send button"
            />
        </button>
    </div>

  </template>
  
  <script>
  import comments from "@/mixins/comments";
  export default {
    name: "StatusBar",
    mixins: [comments],
    data() {
      return {
        comment: "",
        show:false,
        alertOpened: false,
        alertDuration: 2000,
      };
    },
    methods: {
      showIcons(value) {
        this.show = value
      },
      sendMessage() {
        window.scrollTo(0, 0)
        if (!this.alertOpened) {
          const alert = this.$refs.alert;
          alert.style.top = "20px";
          this.alertOpened = true;
          setTimeout(() => {
            alert.style.top = "-200px";
            this.alertOpened = false;
          }, this.alertDuration);

          dataLayer.push({ 'event': 'comment', 'value': this.comment });

          this.comment = "";
          this.showIcons(false)
        }
      },
     
    },
  };
  </script>
  
  <style scoped lang="scss">
  .status-bar{
    position: relative;
    top: -70px;
    display: grid;
    grid-template-columns: repeat(1, 1fr) auto 24px;
    column-gap: 8px;
    place-items: center;

    img {
      width: 24px;
      height: 24px;
    }

    &__icons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 8px;
      place-content: center;

      img {
        width: 24px;
        height: 24px;
      }

      @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        &:not(:last-child) {
          margin-right: 8px;
          }
      }
    }
 }


  .status-bar__input {
    position: relative;

    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        &:not(:last-child) {
          margin-right: 8px;
          }
      }
    .alert {
      position: fixed;
      max-width: 478px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 15px;
      top: -200px;
      left: 20px;
      right: 20px;
      min-height: 60px;
      padding: 22px;
      z-index: 10000;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      line-height: 20px;
      transition: top 0.5s;
    }
  }
  .isComment {
    padding-right: 10px;
    input {
      width: 260px;
    }
  }
  input {
    font-size: 16px;
    border-radius: 18px;
    border: none;
    width: 100%;
    min-height: 30px;
    outline: none;
    padding: 8px;
    padding-left: 12px;
    background-color: #F0F2F5;
    height: 36px;

    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
      & {
        margin-right: 8px;
      }
    }
  }
  .send-btn {
    padding: 0;
    margin-right: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: grid;
    place-content: center;
    img {
      width: 24px;
      height: 24px;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  </style>
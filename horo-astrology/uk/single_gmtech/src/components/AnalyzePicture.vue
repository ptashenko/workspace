<template>
  <div>
    <div class="userPhoto" v-if="showPhotoInput">
      <button class="load-image" id="load-image">
        <img :src="require('../assets/static/hand.png')" alt="" />
      </button>
      <input
        id="fileInput"
        @change="sendPic"
        type="file"
        accept="image/*"
        capture="camera"
      />
    </div>
    <div class="loaded-ing" v-if="loadImage">
      <div class="circle-loader" :class="{ active: showCheck }">
        <svg
          :class="{ checkmark: showCheck }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <div class="img"><img :src="loadImage.src" alt="" /></div>

      <div class="diode" v-if="!showCheck">
        <div class="laser"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnalyzePicture',
  data() {
    return {
      loadImage: null,
      showPhotoInput: true,
      showCheck: false,
    };
  },
  methods: {
    openFileDialog(e) {
      e.currentTarget.nextElementSibling.click();
    },
    sendPic(e) {
      let buttons = document.querySelector('#skip');
      buttons.style.visibility = 'hidden';
      let myInput = e.currentTarget,
        file = myInput.files[0],
        reader = new FileReader();

      reader.onload = this.fileOnload;
      reader.readAsDataURL(file);
    },
    fileOnload(e) {
      this.loadImage = new Image();
      this.loadImage.src = e.currentTarget.result;
      this.showPhotoInput = false;
      setTimeout(() => {
        this.showCheck = !this.showCheck;
      }, 7000);
      setTimeout(() => {
        this.$emit('nextPageCalculate');
      }, 9000);
    },
  },
};
</script>

<style lang="scss">
#fileInput {
  display: none;
}
.userPhoto {
  .load-image {
    padding: 0;
    background-color: transparent;
    border: 0;
    img {
      @media (max-height: 700px) {
        height: 250px;
      }
    }
  }
}
.circle-loader {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &.active {
    display: block;
  }
}
.loaded-ing {
  position: relative;
  .img {
    overflow: hidden;
    img {
      width: auto;
      min-height: 300px;
      max-height: 300px;
      @media (max-height: 700px) {
        min-height: 250px;
        max-height: 300px;
      }
    }
  }
  .laser {
    width: 100%;
    margin-left: 0;
    height: 5px;
    position: absolute;
    box-shadow: 0 0 4px red;
    background: red;
    top: 0;
    z-index: 2;
    animation: scanning 2s 3.5;
  }

  .diode {
    animation: beam 0.01s infinite;
  }
  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    stroke-width: 2;
    stroke: #ffffff;
    stroke-miterlimit: 10;
    box-shadow: inset 0 0 0 green;
    animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;

    &__circle {
      stroke-dasharray: 166;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: green;
      fill: none;
      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    &__check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }
  }
}
@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
    fill: green;
  }
}
@keyframes beam {
  50% {
    opacity: 0;
  }
}

@keyframes scanning {
  50% {
    transform: translateY(300px);
    @media (max-height: 700px) {
      transform: translateY(250px);
    }
  }
}
</style>

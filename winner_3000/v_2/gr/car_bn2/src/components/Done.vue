<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" class="checkmark">
    <circle cx="26" cy="26" r="25" fill="none" class="checkmark__circle" />
    <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" class="checkmark__check" />
  </svg>
</template>

<style lang="scss" scoped>
.checkmark__check {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  -webkit-animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #2F9E31;
  fill: none;
  -webkit-animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
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
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0 0 0 #2F9E31;
  -webkit-animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}
@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes fill {
  100% {
    -webkit-box-shadow: inset 0 0 0 30px #2F9E31;
    box-shadow: inset 0 0 0 30px #2F9E31;
  }
}

@keyframes scale {
  0%,
  100% {
    -webkit-transform: none;
    transform: none;
  }
  50% {
    -webkit-transform: scale3d(1.1, 1.1, 1);
    transform: scale3d(1.1, 1.1, 1);
  }
}
</style>
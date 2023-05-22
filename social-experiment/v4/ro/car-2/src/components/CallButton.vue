<template>
    <div class="button-container">
        <button v-if="!phoneNumber" v-metrics class="button callBtn button__inner" @click="sendNumber">
            <img src="../assets/img/icon-call.svg" class="icon-call swing" alt="" />
            <span>Sunați chiar acum</span>
        </button>
        <a v-if="phoneNumber" :href="'tel:' + phoneNumber" class="button button__inner" @click="sendClick">
            <img src="../assets/img/icon-call.svg" class="icon-call swing" alt="" />
            <span>Sunați chiar acum</span>
        </a>
        <div class="circle">24/7</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phoneNumber: null,
            defaultPhoneNumber: '0903120740',
        }
    },
    methods: {
        sendNumber() {
            this.sendClick();
            if (window.mbp) {
                window.mbp.pixel.send('phone').then(response => {
                    this.phoneNumber = response;
                    this.createLink(this.phoneNumber)
                })
                    .catch(() => {
                        this.phoneNumber = this.defaultPhoneNumber
                        this.createLink(this.phoneNumber)
                    })
            } else {
                this.phoneNumber = this.defaultPhoneNumber;
                this.createLink(this.phoneNumber)
            }
        },
        createLink(tel) {
            let a = document.createElement("a");
            a.href = `tel:${tel}`;
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
        },
        sendClick() {
            if (window.mbp) {
                window.mbp.pixel.send('cta')
            }
        },
    }

}
</script>

<style lang="scss">
.button {
    // min-width: 230px;
}

.button__inner {
    width: 75%;
    background: #2f9e31;
    box-sizing: border-box;
    position: relative;
    text-decoration: none;
    border-radius: 3px;
    padding: 17px 0 17px 40px;
    text-align: center;
    display: block;
    font-size: 14.5px;
    border: none;
    color: #fff;
    letter-spacing: .1em;
    font-weight: 900;

    &.no-img {
        padding: 17px 0;
    }
}

.button__inner:disabled {
    background: grey
}

.warning {
    color: #ce1126;
    text-transform: uppercase;
    font-size: 1.23rem;
    line-height: 1.91rem
}

.icon-call {
    z-index: 9998;
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    right: auto;
    margin: auto;
    transform: translateY(-1%);
    animation: 1.2s ease 0s normal none 1 running swing;
    animation-iteration-count: infinite;
    -webkit-animation: 1.2s ease 0s normal none 1 running swing;
    -webkit-animation-iteration-count: infinite
}

.button-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
}

.circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 900;
    color: #2f9e31;
    background: #fff;
    border: 1px solid #2f9e31;
    height: 50px;
    width: 50px;
    margin: 0 !important;
}

  @media (max-width: 320px) {
      .button__inner {
          font-size: 12px
      }
  }
</style>
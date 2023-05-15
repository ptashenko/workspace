<template>
<div class="callButton animated pulse infinite">
    <button class="button callBtn" @click="getPhoneNumber" v-metrics v-if="!phoneNumber && !phoneFromAnothButton">
        <img class="button__icon" src="../assets/img/call-res.svg" alt />
        <span class="button__text">
            Appeler maintenant
        </span>
    </button>
    <a class="button" @click="sendClick" :href="phoneFromAnothButton ? `tel:${phoneFromAnothButton}` : `tel:${phoneNumber}`" v-else>
        <img class="button__icon" src="../assets/img/call-res.svg" alt />
        <span class="button__text">
            Appeler maintenant
        </span>
    </a>
    <div class="circle">24/7</div>
</div>
</template>

<script>
export default {
    props: ['phoneFromAnothButton'],
    data() {
        return {
            defaultPhoneNumber: `090707605`,
            phoneNumber: null,
        }
    },
    methods: {
        sendClick() {
            if (window.mbp) {
                window.mbp.pixel.send('cta')
            }
        },
        createLink(tel) {
            this.$emit("phone-number", this.phoneNumber)
            let a = document.createElement("a");
            a.href = `tel:${tel}`;
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
        },
        getPhoneNumber() {
            this.sendClick();
            if (window.mbp) {
                window.mbp.pixel.send('phone').then(response => {
                    this.phoneNumber = response.replace('32', '0');
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
    }
}
</script>

<style lang="scss">
.circle {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       border-radius: 50%;
       font-size: 11px;
       font-weight: 900;
       color: #2fc800;
       background: #fff;
       border: 1px solid #2fc800;
       width: 50px;
       height: 50px;
   }

   .callButton {
       display: flex;
       text-align: center;
       margin: 16px auto;
       width: 100%;
   }

   .button {
       margin: 0 auto;
       display: flex;
       outline: none;
       border: none;
       background: #2fc800;
       border-radius: 50px;
       width: 75%;
       height: 54px;
       text-decoration: none;
       justify-content: center;
       align-items: center;

       &__icon {
           position: absolute;
           top: 12px;
           left: 30px;
           width: 30px;
           height: 30px;
           animation: tada 1.5s infinite;
            @media (max-width: 340px) {
                    left: 25px;
                }
       }

       &__text {
           text-align: center;
           text-transform: uppercase;
           color: #ffffff;
           text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
           font-weight: bold;
           font-size: 14px;

           @media (max-width: 340px) {
               margin-left: 20px;
            font-size: 12px;
           }
       }
   }
</style>
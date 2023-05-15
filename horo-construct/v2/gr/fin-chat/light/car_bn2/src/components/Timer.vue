<template>
    <span>{{resOutPut}}</span>
</template>
<script>
    export default {
        props:{
            text:{
                type: String
            }
        },
        data: () => ({
            minutes: null,
            seconds: 180,
            hundreds: 10,
            remainingSeconds: null,
            countdownTimer: null
        }),
        computed:{
          resOutPut(){
              return `${this.minutes < 10 ? '0' + this.minutes : this.minutes}:${this.remainingSeconds}:${this.hundreds < 10 ? '0' + this.hundreds : this.hundreds} `
          }
        },
        methods: {
            timer() {
                let l = setInterval(() => {
                    this.minutes = Math.round((this.seconds - 30) / 60);
                    this.remainingSeconds = this.seconds % 60;
                    if (this.remainingSeconds < 10) {
                        this.remainingSeconds = "0" + this.remainingSeconds;
                    }
                    if (this.hundreds === 0) {
                        if (this.seconds === 0) {
                            clearInterval(l);
                        } else {
                            this.seconds--;
                            this.hundreds = 99;
                        }
                    } else {
                        this.hundreds--;
                    }
                }, 10)
            },
        },
        mounted() {
            this.timer()
        }
    }
</script>

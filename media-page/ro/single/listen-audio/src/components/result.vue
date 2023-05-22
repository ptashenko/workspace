<template>
    <section class="result">
        <div class="header">
            <div class="gratz">
                Felicitări!
            </div>
            <div class="text">
                Predicții astrologice personale care te vor ajuta
                <span class="text--bold">
                să obții armonie în toate domeniile vieții și să eviți eșecurile pregătite de Destin.
            </span>
            </div>
        </div>
        <div class="info" :class="{infoMainClosed: !bar}">
            <div class="info-header" @click.prevent="toggleBar">
                <div class="info-header__text">Horoscopul tău personal</div>
                <div class="toggle" :class="{toggleOpened: bar}">
                    <img src="../assets/img/tog.svg" alt="">
                </div>
            </div>
            <div class="info-content" :class="[{infoClosed: !bar},{barInactive: !bar}]"
                 :style="{paddingBottom: more ? footerHeight + 'px' : contentPadding + 'px'}">
                <player class="player"/>
                <div class="info-data" v-if="bar">
                    <div class="info-content-text ">
                        <span v-if="more" v-text="text"></span><span v-else v-text="cropedText"></span>
                        <div class="close" v-if="more">
                            <div class="close-inner">
                                <img @click.prevent="readMore" class="close__img" src="../assets/img/arrow.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="info-content-text info-content-text--more" v-if="!more">
                        Стоит остерегаться...
                        <span
                                class="info-content-text--link" @click.prevent="readMore">Читать далее</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer" id="footer" style="overflow-y: scroll" :style="{height: footerContainerHeight + 'px'}">
            <div class="footer-content" ref="content">
                <div class="footer-title">
                    Primește-ți și bonusul!
                </div>
                <div class="footer-text">
                    Un ritual de creare a unei
                    <div class="footer-text--bold">
                        amulete care atrage norocul și îți oferă o creștere constantă a veniturilor!
                    </div>
                    <div class="last">
                        Pregătit pe baza datei tale de naștere și a numărului tău sacru
                    </div>
                </div>
                <div class="button-wrap">
                    <a href="tel:XXXXXXXX">
                    <span class="button">
                        <img class="call" src="../assets/img/call.svg" alt="">
                        Sună și obține-le chiar acum
                    </span>
                    </a>
                </div>
            </div>
            <div class="copy">
                <p>
                    Termeni și condiții: prin utilizarea acestui serviciu, confirmi că ai împlinit vârsta de minim 18
                    ani, aveti acordul titularului cartelei si sunteti de acord cu acesti termeni si conditii. Prin
                    apasarea tastei asculta mesajul veti fi redirectionat catre apelarea numarului sva aferent
                    serviciului. Cost serviciu: 1.7 Euro + tva/minut in orange, vodafone, telekom fix si mobil. Acesta
                    este un serviciu de divertisment. Prin accesarea serviciului sunteti de acord ca puteti primi mesaje
                    de informare de la furnizorul serviciului legate de serviciile de divertisment oferite si noutati.
                    In cazul utilizarii serviciului datele dvs. – Ex. Numarul de telefon, vor fi procesate doar in
                    scopurile de mai sus. Furnizor serviciu: ABCMobile OÜ; Reg № 14710834; adresa: Harju maakond,
                    Tallinn, Peterburi tee 71-318, 11415, Estonia. Support@abcmobile.com. Info serviciu voce:
                    0318260010, luni-vineri, 9:00-18:00.
                </p>
                <p>Affiliate: mobstra.com</p>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }

    .close {
        display: flex;
        justify-content: flex-end;

        &-inner {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            box-shadow: 0px 10px 25px rgba(74, 144, 226, 0.3);
            background: #fff;
            width: 41px;
            height: 41px;
            cursor: pointer;

        }
    }

    .button {
        background: linear-gradient(88.84deg, #01B016 1.45%, #3FCF34 99.8%);
        border: 1px solid #3CCE32;
        border-radius: 30px;
        width: 267px;
        height: 45px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        justify-content: center;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        z-index: 9999;

        &-wrap {
            display: flex;
            justify-content: center;
            margin-top: 15px;
            position: relative;
        }
    }

    .copy {
        width: 100%;
        padding: 0 15px;
        color: #b68805;
        font-size: 11px;
        margin-top: 10px;
        text-align: center;
    }

    .last {
        width: 70%;
    }

    .gifts {
        position: absolute;
        bottom: -20px;
        right: -10px;
        z-index: 0;

        img {
            max-width: 136px;
            max-height: 94px;
        }
    }

    .call {
        margin-right: 10px;
        animation: infinite tada 1.2s;
    }

    .bar {
        height: 100%;
        padding-bottom: 250px;
    }

    .footer {
        background: url('../assets/img/gifts.png') no-repeat 110% 70%, linear-gradient(180deg, #FFCF00 0%, #FFC526 100%);
        background-size: 136px;
        box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
        padding: 15px 15px 35px 15px;
        @media (min-height: 575px) {
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
            width: 100%;
            max-width: 400px;
        }

        &-title {
            color: #FF263F;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 20px;
            line-height: 23px;
        }

        &-text {
            font-size: 0.875rem;
            line-height: 23px;
            font-weight: 300;

            &--bold {
                font-weight: 500;
            }
            @media (max-height: 667px) {
                line-height: 20px;
            }
        }
    }

    .header {
        background: url("../assets/img/bg.jpg") 20% 0% no-repeat;
        backdrop-filter: blur(4px);
        background-size: 200%;
        padding: 15px;
        @media(min-width: 375px) and (min-height: 685px) {
            padding: 70px 15px 70px 15px;
        }
    }

    .toggle {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .info {
        max-width: 360px;
        margin: 0 auto;

        &-header {
            background: linear-gradient(180deg, #DEDDDD 0%, #F9F9F9 100%);
            height: 41px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 8px 8px 0 0;
            padding: 0 15px;

            &__text {
                text-transform: uppercase;
                font-size: 0.875rem;
                font-weight: bold;
                color: #4988D1;
            }
        }

        &-content {
            background: #FFFFFF;
            padding: 20px 15px;

            &-text {
                font-weight: 300;
                font-size: 0.75rem;
                line-height: 0.875rem;

                &--more {
                    margin-top: 10px;
                }

                &--link {
                    cursor: pointer;
                    color: #4988D1;
                    font-style: normal;
                }
            }
        }
    }

    .player {
        margin-bottom: 20px;
    }

    .gratz {
        color: #FFCE00;
        font-weight: bold;
        font-size: 1.563rem;
        line-height: 1.813rem;
        margin-bottom: 0.375rem;
    }

    .text {
        font-weight: 300;
        color: #fff;
        font-size: 0.875rem;
        line-height: 1rem;

        &--bold {
            font-weight: bold;
        }
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }

    .toggleOpened {
        transform: rotate(180deg);
    }

    .infoClosed {
        border-radius: 0 0 8px 8px;
    }

    .infoMainClosed {
        margin-bottom: 20px;
    }

    .barInactive {
        padding-bottom: 10px !important;
    }
</style>

<script>
    import player from './player'

    export default {
        data: () => ({
            text: `Вы человек, который, очень важно. Первая половина года предвещает быть трудной, вторая принесет
                    неожиданное богатсво.Вы человек, который, очень важно. Первая половина года предвещает быть трудной,
                    вторая принесет неожиданное богатсво. Вы человек, который, очень важно. Первая половина года
                    предвещает быть трудной, вторая принесет неожиданное богатсво. Вы человек, который, очень важно.
                    Вы человек, который, очень важно.
                    Вы человек, который, очень важно. Первая половина года предвещает быть трудной, вторая принесет
                    неожиданное богатсво.Вы человек, который, очень важно. Первая половина года предвещает быть трудной,
                    вторая принесет неожиданное богатсво. Вы человек, который, очень важно. Первая половина года
                    предвещает быть трудной, вторая принесет неожиданное богатсво. Вы человек, который, очень важно.
                    Вы человек, который, очень важно. Вы человек, который, очень важно.
                    Конец`,
            more: false,
            cropedText: '',
            bar: false,
            footerHeight: null,
            footerContainerHeight: null,
            contentPadding: null
        }),
        components: {player},
        methods: {
            wordsBlocker() {
                if (this.text.length > 132 && !this.more) {
                    this.cropedText = this.text.substring(0, 132);
                }
            },
            readMore() {
                this.more = !this.more
            },
            toggleBar() {
                // this.bar = !this.bar
            },
            injectHeight() {
                let innerHeight = window.innerHeight
                if (innerHeight < 575) {
                    this.footerHeight = 0
                } else {
                    this.footerHeight = 300
                }
            },
            contentHeight() {
                let innerHeight = window.innerHeight
                let app = document.getElementById('app')
                this.contentPadding = innerHeight + 30 - (app.clientHeight + this.footerHeight)
            }

        },
        computed: {
            readHeight: function () {
                return {
                    paddingBottom: this.more ? this.footerHeight + 'px' : 0
                }
            }
        },
        mounted() {
            this.injectHeight()
            this.wordsBlocker()
            this.footerContainerHeight = this.$refs.content.clientHeight + 50
            this.contentHeight()
        }
    }
</script>
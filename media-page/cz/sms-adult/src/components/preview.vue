<template>
    <section class="preview">
        <div class="label">
            Můžeš mi teď zavolat?
        </div>
        <div class="preview-content">
            <div class="text">
            <span class="text--bold">
               Chceš vidět, co všechno dokážu?
            </span>
            </div>
            <div class="text">
                Proč ne, jenom mi pošli SMS a já ti pošlu odkaz na moje sexy videa :)
            </div>
            <div class="gift">
                <img class="gift__img" src="../assets/img/gift.png" alt="">
            </div>
            <div class="text text--send">
                Poslat SMS:
            </div>
            <div class="button-wrap">
                <img src="../assets/img/email.svg" alt="">
                <a :href="smsTemplate" class="button" @click="sendClick()" v-metrics>
                    Chci tvoje videa
                </a>
            </div>
            <div class="copy">
                <p>
                    Toto je jednorázová služba. Zašlete SMS s textem LIKE na krátké číslo 90930. V
                    reakci na SMS obdrží uživatel odkaz s přístupem k prémiovému obsahu pro dospělé. Zahrnuje mnoho
                    videí vynikající kvality pro všechny preference. Cena služby je 99 Kč/SMS (včetně DPH). Aktivací
                    služby potvrzujete, že jste obeznámeni s podmínkami používání a že souhlasíte s přijímáním
                    bezplatných marketingových a reklamních sdělení od nás. Provozuje ABCmobile oü, reg no 14710834;
                    adresa: Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia. Zobrazte naše <a
                        href="./terms.php">Podmínky</a> a <a
                        href="./privacy.php">Zásady ochrany
                    soukromí</a>. Za više informacija o usluzi, pišite na: <a
                        href="mailto:abcmobile.cz@silverlines.info">abcmobile.cz@silverlines.info</a>
                    , +420 800210280. Web stranica za korisničku podršku http://ccsupport.biz/en/
                    <span class="noaff">Pridruženo: mobstra.com</span>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    import {postSubs, sendCLick} from "@/services/landAPI";

    export default {
        name: 'preview',
        data: function () {
            return {
                smsTemplate: '#',
                click_id: null,
                QUERY: this.getQuery(window.location.search) || null
            }
        },
        methods: {
            checkDevice: function () {
                let MobileUserAgent = navigator.userAgent || navigator.vendor || window.opera;
                let isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(MobileUserAgent.toLowerCase());
                let device = '';

                if (MobileUserAgent.match(/iPhone/i) || MobileUserAgent.match(/iPod/i) && !isTablet) {
                    device = 'iOS';
                } else if (MobileUserAgent.match(/Android/i) && !isTablet) {
                    device = 'Android';
                } else if (MobileUserAgent.match(/iPad/i) || isTablet) {
                    device = 'Tablet';
                } else {
                    device = 'Desctop'
                }
                return device;
            },
            getQuery(string) {
                return string.slice(1).split("&").map(queryParam => {
                    let kvp = queryParam.split("=");
                    return {key: kvp[0], value: kvp[1]};
                }).reduce((query, kvp) => {
                    query[kvp.key] = kvp.value;
                    return query;
                }, {})
            },
            sms() {
                let messageText = 'LIKE ' + this.click_id + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nChci ziskat pristup';
                let userDevice = this.checkDevice();
                console.log(this.click_id)

                if (userDevice === 'iOS') {
                    this.smsTemplate = 'sms:90930&body=' + encodeURI(messageText);
                } else if (userDevice === 'Android') {
                    this.smsTemplate = 'sms:90930?body=' + encodeURI(messageText);
                } else {
                    this.smsTemplate = '#';
                }
            },
            sendClick() {
                sendCLick(this.click_id)
            }
        },
        mounted() {
            let data = JSON.stringify(this.QUERY);
            postSubs(data).then(result => {
                this.click_id = result.data['click_id'];
                this.sms()
            }, err => {
                console.log(err)
                this.click_id = null
            })
                .catch(err => {
                    console.log(err)
                    this.click_id = null
                })

        }
    }
</script>
<style lang="scss" scoped>
    .button {
        background: linear-gradient(88.84deg, #FFAB00 1.45%, #FFD100 99.8%);
        border: 1px solid #FFD934;
        border-bottom: 4px solid #CE8146;
        color: #000000;
        box-sizing: border-box;
        border-radius: 30px;
        font-size: 20px;
        display: inline-block;
        padding: 12px 0;
        width: 100%;
        max-width: 330px;
        text-decoration: none;
        @media (max-width: 360px) {
            font-size: 17px;
        }

        &-wrap {
            text-align: center;
            position: relative;

            img {
                position: absolute;
                left: 40px;
                top: 7px;
                @media (max-width: 360px) {
                    left: 18px;
                    top: 4px;
                }
            }
        }
    }

    .copy {
        color: #9D9D9D;
        font-size: 11px;
        letter-spacing: 3px;
        text-align: center;
        font-weight: 300;
        margin-top: 10px;
        @media(min-height: 590px) {
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            width: 100%;
            height: 100px;
            bottom: -60px;
        }
    }

    .label {
        background: linear-gradient(88.85deg, #FFAB00 1.45%, #FFD100 99.8%);
        padding: 20px;
        display: inline-block;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.313rem;
        margin-bottom: 0.875rem;
    }

    .preview {
        padding: 1.063rem 0;
        text-align: center;

        &-content {
            padding: 0 15px;
        }
    }

    .text {
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.188rem;
        color: #000;
        margin-bottom: 0.875rem;

        &--bold {
            font-weight: 500;
        }

        &--send {
            font-size: 0.75rem;
            line-height: 0.875rem;
        }
    }

    .gift {
        margin: 10px 0;
        text-align: center;

        &__img {
            width: 65px;
            height: 65px;
        }
    }
</style>


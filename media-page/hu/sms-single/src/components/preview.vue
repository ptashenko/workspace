<template>
    <section class="preview">
        <div class="label">
            Fel tudsz most hívni?
        </div>
        <div class="preview-content">
            <div class="text">
            <span class="text--bold">
                Az eredményt szöveges formátumban szeretnéd megkapni?
            </span>
            </div>
            <div class="text">
                Semmi probléma! Csak nyomd meg a lenti gombot, és küldj egy SMS-t.

            </div>
            <div class="gift">
                <img class="gift__img" src="../assets/img/gift.png" alt="">
            </div>
            <div class="text text--send">
                SMS küldése
            </div>
            <div class="button-wrap">
                <img src="../assets/img/email.svg" alt="">
                <a :href="smsTemplate" class="button" v-metrics>Szerezd meg az eredményt</a>
            </div>
            <div class="copy">
                <p>
                    További információ: ez egy szórakoztató szolgáltatás, melynek ára: 1270 ft/SMS (ÁFÁ-t tartalmazza)
                    <br>
                    A szolgáltatás minden hálózatról elérhető. A szolgáltatási oldalon található gombra kattintva egy
                    SMS
                    küldő szolgáltatásra kerül átirányításra. A szolgáltatás használatával megerősíti, hogy elfogadja az
                    általános szerződési feltételeinket, hogy elmúlt 18 éves, és hogy a kártyatulajdonos beleegyezésével
                    történt a szolgáltatás igénybevétele. A szolgáltatás kizárólag a szórakozás célját szolgálja. A
                    szolgáltatást biztosítja: abcmobile oü, helyi cím: Harju maakond, Tallinn, Peterburi tee 71-318, 114
                    <br>
                    A magyarországi ügyfélszolgálatunk a +36 14554695 telefonszámon érhető el. e-mail üzeneteket az
                    abcmobile.hu@silverlines.info címen várunk. Ügyfélszolgálat nyitvatartása: hétfő - péntek, 09:00 -
                    17:00.
                    <br>
                    Bővebb tájékoztatásért lásd a <a href="./terms.php">Felhasználási feltételeket</a> és az <a
                        href="./privacy.php">Adatvédelmi irányelveinket </a>
                    <br>
                    <a href="https://www.upc.hu/pdf/aszf/edsz/upc_emeltdijas_szolgaltatasok_20200624.pdf">https://www.upc.hu/</a>
                    <br>
                    Affiliate: mobstra.com
                </p>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'preview',
        data: function () {
            return {
                smsTemplate: '#',
                QUERY: this.getQuery(window.location.search),
                clickID: ''
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
                return string.slice(1).split("&")
                    .map((queryParam) => {
                        let kvp = queryParam.split("=");
                        return {key: kvp[0], value: kvp[1]}
                    })
                    .reduce((query, kvp) => {
                        query[kvp.key] = kvp.value;
                        return query
                    }, {})
            }
        },
        created() {
            if (this.QUERY.click_id) {
                this.clickID = this.QUERY.click_id
            } else {
                this.clickID = '';
            }

            let messageText = 'FIN ' + this.clickID + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMeg akarom tudni, hogyan kereshetek 1000 Eurot';
            let userDevice = this.checkDevice();

            if (userDevice === 'iOS') {
                this.smsTemplate = 'sms:0690647455&body=' + encodeURI(messageText);
            } else if (userDevice === 'Android') {
                this.smsTemplate = 'sms:0690647455?body=' + encodeURI(messageText);
            } else {
                this.smsTemplate = '#';
            }
        }
    }
</script>
<style lang="scss" scoped>
    .button {
        padding: 15px 0;
        background: linear-gradient(88.84deg, #FFAB00 1.45%, #FFD100 99.8%);
        border: 1px solid #FFD934;
        border-bottom: 4px solid #CE8146;
        color: #000000;
        box-sizing: border-box;
        border-radius: 30px;
        font-size: 16px;
        display: inline-block;
        width: 330px;
        text-decoration: none;

        &-wrap {
            text-align: center;
            position: relative;

            img {
                position: absolute;
                left: 35px;
                top: 7px;
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


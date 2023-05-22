<template>
    <section class="preview">
        <div class="label">
            Ar galite man dabar paskambinti?

        </div>
        <div class="preview-content">
            <div class="text">
            <span class="text--bold">
                Ar norite gauti rezultatą teksto formatu?

            </span>
            </div>
            <div class="text">
                Jokių problemų! Viskas, ką jums reikia padaryti, tai siųsti SMS paspaudžiant žemiau esantį mygtuką.

            </div>
            <div class="gift">
                <img class="gift__img" src="../assets/img/gift.png" alt="">
            </div>
            <div class="text text--send">
                Siųsti SMS:
            </div>
            <div class="button-wrap">
                <img src="../assets/img/email.svg" alt="">
                <a :href="smsTemplate" class="button" v-metrics>Gaukite rezultatą</a>
            </div>
            <div class="copy">
                <p> Paslaugos kaina 6EUR/sms su PVM, tik pramogoms nuo 18 metų. <br
                > Klientų aptarnavimas <a href="mailto:support@abcmobile.com">support@abcmobile.com</a>
                    <br> © 2020. ABCMobile OÜ <br> Harju maakond, Tallinn,
                    Peterburi tee 71-318, 11415, Estonia. <br> Žiūrėti mūsų <a
                            href="./terms.php">nuostatas
                        ir naudojimosi sąlygas</a> bei <a href="./privacy.php">privatumo politiką</a>.
                    <br> Affiliate: mobstra.com </p>
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

            let messageText = 'FIN ' + this.clickID + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nNoriu 1000 euru';
            let userDevice = this.checkDevice();

            if (userDevice === 'iOS') {
                this.smsTemplate = 'sms:1670&body=' + encodeURI(messageText);
            } else if (userDevice === 'Android') {
                this.smsTemplate = 'sms:1670?body=' + encodeURI(messageText);
            } else {
                this.smsTemplate = '#';
            }
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
        font-size: 1.25rem;
        display: inline-block;
        padding: 12px 0;
        width: 330px;
        text-decoration: none;

        &-wrap {
            text-align: center;
            position: relative;

            img {
                position: absolute;
                left: 40px;
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


<template>
    <section class="preview">
        <div class="label">
            Nu poți suna chiar acum?
        </div>
        <div class="preview-content">
            <div class="text">
            <span class="text--bold">
                Sau vrei să primești rezultatul sub forma unui text?
            </span>
            </div>
            <div class="text">
                Nici o problemă! Trebuie doar să trimiți un SMS apăsând butonul de mai jos.
            </div>
            <div class="text">
                O să îți răspund și
                <span class="text--bold">
                îți voi trimite predicțiile personale, alături de sfaturile mele personale, precum și o interpretare detaliată a ceea ce mi-au indicat astrele.
            </span>
            </div>
            <div class="gift">
                <img class="gift__img" src="../assets/img/gift.png" alt="">
            </div>
            <div class="text">
                În plus,
                <span class="text--bold">
                îți voi oferi propriul ritual, bazat pe data de naștere, pentru a atrage norocul și bunăstarea financiară
            </span>
                Funcționează chiar și în cele mai dificile situații!
            </div>
            <div class="text text--send">
                Trimite SMS:
            </div>
            <div class="button-wrap">
                <a :href="smsTemplate" class="button">Obține predicțiile</a>
            </div>
            <div class="copy">
                <p>Termeni și condiții: Acesta este un serviciu de divertisment si timp liber cu acces platit. Cost total comanda: 3.00 Euro + tva (0.05Euro+tva SMS trimis la 1442 si 2.95Euro+tva SMS primit de la 1442 in Orange si Digi Mobil, taxarea in Vodafone se efectueaza de pe numarul 23133, in Telekom de pe 22442). Prin utilizarea acestui serviciu, confirmati că ati împlinit vârsta de 16 ani, aveti acordul titularului cartelei si sunteti de acord cu acesti termeni si conditii. Prin apasarea tastei, de ex. “Obtineti serviciu”  veti fi redirectionat catre casuta de SMS de unde puteti initia serviciul. Prin accesarea serviciului sunteti de acord ca puteti primi mesaje de informare de la furnizorul serviciului legate de serviciile de divertisment oferite si noutati. In cazul utilizarii serviciului datele dvs. – Ex. numarul de telefon, vor fi procesate doar in scopurile de mai sus. Furnizor serviciu: ABCMobile OÜ; Reg № 14710834; adresa: Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia. support@abcmobile.com. Info serviciu tehnic SMS: 0318260010, luni-vineri, 9:00-18:00.</p>
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
            if ( this.QUERY.click_id ) {
                this.clickID = this.QUERY.click_id
            } else {
                this.clickID = '';
            }

            let messageText = 'HORO ' + this.clickID  + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nObține horoscopul personal';
            let userDevice = this.checkDevice();

            if (userDevice === 'iOS') {
                this.smsTemplate = 'sms:1442&body=' + encodeURI(messageText);
            } else if (userDevice === 'Android') {
                this.smsTemplate = 'sms:1442?body=' + encodeURI(messageText);
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
        width: 267px;
        text-decoration: none;
        &-wrap{
            text-align: center;
        }
    }
    .copy{
        color:#9D9D9D;
        font-size: 11px;
        letter-spacing: 3px;
        text-align: center;
        font-weight: 300;
        margin-top: 10px;
        @media(min-height: 590px){
            position: absolute;
            left: 50%;
            transform: translate(-50%,0);
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


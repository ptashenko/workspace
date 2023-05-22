<template>
    <section class="result">
        <div class="header" ref="header">
            <div class="gratz">
                ČESTITAMO!
            </div>
            <div class="text">
                Osobní astrologický horoskop, který vám pomůže

                <span class="text--bold">
                    dosáhnout harmonie ve všech sférách vašeho života a pomůže vám vyhnout se problémům, 
                    které si pro vás život připravil.
                </span>
            </div>
        </div>
        <div class="info" :class="{infoMainClosed: !bar}">
            <div class="info-header" @click.prevent="toggleBar">
                <div class="info-header__text">VÁŠ OSOBNÍ HOROSKOP</div>
                <div class="toggle" :class="{toggleOpened: bar}">
                    <img src="../assets/img/tog.svg" alt="">
                </div>
            </div>
            <div class="info-content" :class="[{infoClosed: !bar},{barInactive: !bar}]"
                 :style="{minHeight: this.innerHeight - this.head - 41 + 'px'}">
                <player class="player"/>
                <div class="info-data" v-if="bar">
                    <div class="info-content-text "
                         :style="{
                             height:!more ? 45 + 'px':null, }">
                        <span v-html="text"></span>
                        <div class="close" v-if="more">
                            <div class="close-inner" @click.prevent="readMore">
                                <img class="close__img" src="../assets/img/arrow.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="info-content-text info-content-text--more" v-if="!more">
                        <span
                            class="info-content-text--link" @click.prevent="readMore">Čtěte více</span>
                    </div>
                </div>
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
                overflow: hidden;

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
            text: `
                Jste silná a zodpovědná osobnost a během svého života jste si již prošli vážnými problémy. Potřebujete cítit lásku a péči Vašich nejbližších přátel a členů rodiny. Přitom jste na sebe od raného dětství velmi sebekritičtí. Vidím, že máte spoustu zájmů a plánů, ale z důvodu nedostatku času máte tendenci je odkládat; máte značné příležitosti, které jste dosud nevyplnili. Často si pokládáte otázky ohledně věcí, na které znáte odpověď. V hloubi Vaší mysli dobře víte, co potřebujete, abyste dosáhli, čeho chcete. Pokuste se nezpochybňovat rozhodnutí, které děláte. Vězte, že všechno, co se děje ve Vašem životě není jen náhoda a má to svůj důvod, a já Vám pomohu najít tyto důvody.
                <br /><br />
                Jste citliví k pocitům druhým a stavíte jejich potřeby nad své, zvláště u lidí, kteří jsou Vám opravdu blízcí. V podstatě jste hluboce intuitivní osobnost. Pozitivní aura a mocná energie Vás neustále obklopuje. Cítím Vaši vibraci jasněji než od mých dalších klientů.
                <br /><br />
                Příštích několik měsíců Vám přinesou důležité změny do Vašeho života. Vesmírné síly Vám určí životní cestu. Buďte připraveni, že budete muset učinit těžkou volbu, která silně ovlivní Váš budoucí život.
                <br /><br />
                Chci být k Vám upřímná, takže Vám řeknu, jakým způsobem jsem objevila Vaši předpověď, než se dostaneme k dalším detailům. Vaše datum narození mě nechalo načrtnout Váš nebeský astrologický kalendář; Vaše jméno mi toho prozradilo také mnoho, protože jste jej nedostali náhodou. Vaše znamení zvěrokruhu spolu s počtem znaků ve Vašem jméně mi dodalo ještě více informací. Číslo Vaší životní cesty je 0. Není to náhodná hodnota a když se podíváte zpět, uvidíte, že toto číslo Vás následovalo po celý život.
                <br /><br />
                Vaše znamení zvěrokruhu mi ukazuje, že jste šarmantní a neústupná osoba, která má unikátní množství energie. Tak jako kdokoliv jiný, můžete konfrontovat druhé. Toto je naše lidská přirozenost. Jste hrdí na Vaši svobodu a schopnost věřit druhým lidem pro jejich činy, ne slova. Tato kvalitní vlastnost Vám mnohokrát pomohla spatřit lež a vyhnout se provokacím od cizích.
                <br /><br />
                Mám silný pocit, že Váš život byl ovlivněn někým, kdo Vás zpomalil a tím tak zabránil Vaším pokrokům. Kromě toho, tato osoba má dále na Vás velmi silný vliv. Opět, není zde nic nezvratného a můžeme změnit tento stav věcí. Mohu jasně vidět, že brzy dosáhnete pozitivního bodu obratu. Dále bych chtěla uvést, že jsem od Vás pocítila mnoho pozitivních vibrací. Získáte mnoho značné síly a mocného potenciálu a jsem hrdá, že mi důvěřujete, protože jste skutečně dobrou osobou.
                <br /><br />
                Abyste mohli sebe ochránit před problémy tento měsíc, potřebujete znát 5 hlavních důvodů jejich výskytu. Jedním z nich jsou negativní emoce. Pokuste se zabránit pocitům závisti, zlosti či msti. V opačném případě ony nejen poškodí Vaše energické pole, ale úplně jej zničí.
                <br /><br />
                Dalším stadiem jsou negativní přístup a zdravotní potíže. Neustále si připomínejte, že jste úspěšná a šťastná osoba. Hlídejte si Vaše zdraví, abyste tak zabránili úbytku Vašich zdrojů energie. Později Vám dám podrobnější seznam, co dělat a nedělat, k čemuž mě upozornily hvězdy.
                <br /><br />
                V neposlední řadě – pocity viny a bytí ve špatném prostředí. Nezapomeňte požádat o odpuštění za to, co jste udělali špatně. A pokud se bojíte, že se Vám nedostane porozumění, pak byste měli začít uvažovat o tom, zda lidé, kteří Vás obklopují jsou ti praví. Vytvořila jsem plný rozpis toho, co byste měli tento měsíc udělat pro dosažení úspěchu a vytvoření zisku.
                <br /><br />
                Celkově mohu říci, že budoucnost není pro Vás zcela jasná. Hlavní hrozby na cestě budou ztráty, dluhy a vysoká možnost ztráty Vašeho domu. Doporučuji Vám být opatrní při výběru přátel, kolegů a obchodních partnerů. Lidé, kteří jsou kolem Vás mohou chtít profitovat z Vaší štědrosti, čestnosti a slušnosti. Nedovolte, aby Vám druzí pletli hlavu. Zdání může klamat. Ne každý, kdo Vám říká něco hezkého, chce být Vaším přítelem a naopak.
                <br /><br />
                Radím Vám, abyste odložili nákup drahých věcí a spoléhali se pouze na peníze, které můžete volně utratit. Jedna minuta slabosti může vést ke ztrátě Vašeho domu, majetku a úspor. Pamatujte, že v jedné minutě můžete spálit most Vašeho blahobytu, ale zabere měsíce možná i roky jej opravit. Nebuďte ochotni tolik riskovat. Snadné peníze Vám nepřinesou štěstí, ale narozdíl Vás uvrhnou do velkých potíží.
                <br /><br />
                I přes skutečnost, že tento měsíc je obecně přínosným pro Vaše znamení, může však přinést vážné nebezpečí. Je zde vysoká pravděpodobnost problému se spánkem, přepracováním, zhoršení stavu úzkosti, deprese a zoufalství. Silně Vám doporučuji, abyste sledovali Váš pracovní diář a věnovali více času odpočinku, modlitbě a zdraví. Pečujte o své tělo. Náhlé bolesti vám řeknou, které části jsou ovlivněny Vaší životosprávou. Berte na vědomí vysoké riziko alergií nebo závislosti na lécích.
                <br /><br />
                Pozice hvězd jasně ukazují, že potřebujete na nějakou dobu změnit současné okolí a najít si jiný klimat. V opačném případě stres a deprese se stanou stálou součástí Vašeho života, a nakonec povede k závažným nemocem a emočním vyhořením.
                <br /><br />
                Je všeobecně známo, že dlouhá cesta je příjemná pouze tehdy, kdy je zde dům, kde se můžete vrátit. Nepochybně potřebujete opustit Vaši rodinu kvůli pracovním záležitostem, ale neopouštějte ji příliš daleko, a ne na dlouho. Časté dlouhodobé obchodní cesty a práce přesčasů mohou být ziskové, ale stojí to skutečně za to? Je nejvyšší čas, abyste začali naslouchat Vašim milovaným. V opačném případě síla pout Vaší rodiny bude oslabena a může se ztratit navždy. Neomezujte kontakt s Vašimi blízkými. Zítřek, na který se těšíte, nemusí nikdy přijít. Upřímně Vám radím, abyste strávili méně času v práci a neobětovali vztahy s rodinou k oltáři Vaší kariéry. Vězte, že není nic více depresivního než samota na vrcholu, kterého jste dosáhli. Abyste mohli sdílet všechen Váš úspěch s Vašimi milovanými, musíte s nimi udržovat silný kontakt. Věnujte pozornost náladám Vašich blízkých a Vaší lásce  Jsou šťastní? Necítí se odmítnuti? Vstupte do jejich světa!
                <br /><br />
                Jste silná a zodpovědná osoba, cítím to. Chtěla bych, abyste rozuměli, že na cestě za Vaším štěstím nejsou žádné překážky a zasloužíte si to nejlepší. Buďte připraveni vzít všechny šance!
            `,
            more: false,
            cropedText: '',
            footerHeight: null,
            bar: true,
            contentPadding: null,
            innerHeight: window.innerHeight,
            head: null
        }),
        components: {player},
        methods: {
            readMore() {
                this.more = !this.more
            },
            toggleBar() {
                this.bar = !this.bar
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
                this.contentPadding = innerHeight - (app.clientHeight) - 30
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
            this.contentHeight()
            this.head = this.$refs.header.clientHeight
        }
    }
</script>
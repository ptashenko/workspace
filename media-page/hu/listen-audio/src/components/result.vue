<template>
    <section class="result">
        <div class="header" ref="header">
            <div class="gratz">
                GRATULÁLUNK!
            </div>
            <div class="text">

                A személyes asztrológiai horoszkóp segít az

                <span class="text--bold">

            élet minden területén harmóniára lelni, és elkerülni azokat a bukásokat, melyeket az élet tartogat számodra.

</span>

            </div>
        </div>
        <div class="info" :class="{infoMainClosed: !bar}">
            <div class="info-header" @click.prevent="toggleBar">
                <div class="info-header__text">A SZEMÉLYES HOROSZKÓPOD</div>
                <div class="toggle" :class="{toggleOpened: bar}">
                    <img src="../assets/img/tog.svg" alt="">
                </div>
            </div>
            <div class="info-content" :class="[{infoClosed: !bar},{barInactive: !bar}]"
                 :style="{minHeight: this.innerHeight - this.head - 41 + 'px'}">
                <player class="player"/>
                <div class="info-data" v-if="bar">
                    <div class="info-content-text "
                         :style="{height:!more ? this.innerHeight - this.head - 156 + 'px':null}">
                        <span v-html="text"></span>
                        <div class="close" v-if="more">
                            <div class="close-inner" @click.prevent="readMore">
                                <img class="close__img" src="../assets/img/arrow.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="info-content-text info-content-text--more" v-if="!more">
                        <span
                                class="info-content-text--link" @click.prevent="readMore">Olvass tovább</span>
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
            text: `Készen állsz? Akkor koncentrálj a személyes jóslatodra, mert minden kis részlet számít! Hallgasd figyelmesen! <br>
A sorsodat a csillagok hosszú idővel születésed előtt meghatározták, és most csak el kell olvasnunk, mit ír az égi térkép. Miután végighallgattad ezt a horoszkópot, néhány napra tiszta képet kapsz a jövődről. Az információ, amit kapsz, hosszú ideig hasznodra lesz, és újra és újra visszatérhetsz rá, hogy a sorsodat befolyásolhasd. Csak rajtad múlik, mit kezdesz a tudással. Kérünk, hallgasd figyelmesen, hogy ne maradj le az életed új időszakát meghatározó tanácsokról.<br>
Az élet utóbbi időszaka sok aggodalmat és problémát okozott és nem volt egyszerű számodra, ezért megérdemled, hogy boldog legyél és megváltoztasd a sorsod. Egyrészről lehetőséget kapsz arra, hogy tiszta lappal indíts, hátrahagyva minden negatív gondolatot és emléket, egy erős alapot építve az új, nyugodt életedhez. Másrészről lehet, hogy néhány kellemetlen meglepetésbe ütközöl az utad során. Mindent elárulunk, de csak egyenként. A legfontosabb dolog, amivel kezdenünk kell, hogy mi vár rád a következő napokban.<br>
A közeljövőben minden átlagosan fog zajlani, de ne szomorodj el, az Univerzumnak időre van szüksége ahhoz, hogy egy új munkaajánlatot készítsen elő, amit két vagy három hónapon belül fogsz megkapni. Ez lehet egy új munkakör, részvétel egy nagyobb projektben, vagy csak egy átlagos rendelés – amit mindennapinak fogsz tartani, de valójában pozitív változásokat hoz majd az életedben. Ez lesz a kiindulópontja egy fontos eseménysorozatnak, amiről most többet mesélek.<br>
A legfontosabb ebben az időszakban az, hogy döntést hozz: elégedett vagy az életeddel, vagy drasztikus változtatásra van szükséged? Ha túlságosan félsz a változástól, és teljesen megvagy elégedve a mindennapi életeddel, akkor minden így maradhat. Azonban nem lesz lehetőséged elkerülni a kibontakozó eseményeket – csak lassabban fognak kibontakozni. Kevesebb nehézséggel kell szembenézned, minden egyszerűbben megy majd, viszont a nehézségek legyőzése nem fog sikerélményhez vezetni.<br>
Ha a második opciót választod – a változásokat, akkor ne habozz, hanem fogadd el a munkáltatód új ajánlatát. Furcsának tűnhet, de ez hiába csak egy újabb projekt, mégis új kihívásokkal kell szembenézned, miközben teljesíted. Egy kollégád jön be a képbe – egy új dolgozó, vagy egy régi alkalmazott – aki megpróbálja szabotálni a sikered. Csak akkor előzheted ezt meg, ha fókuszálsz és határt tartasz. Ebben az időszakban nehéz lesz bizalmi kapcsolatot fenntartani a kollegáiddal. A csillagok azt is jósolják, hogy a nagyfőnökökkel való kommunikáció során feszültté válhatsz, és elkerülhetetlen hogy nézeteltérésetek legyen. Annak is van esélye, hogy valamelyik kollegád kellemetlen pletykákat terjeszt rólad. Most érdemes közelebbi pillantást vetni a kollegáidra, és inkább nem nyílni meg előttük. Emlékezz erre az egyszerű szabályra: „Minden, amit mondasz, a bíróságon felhasználható ellened”.<br>
Az életed ezen időszaka az egyik legidegtépőbb lesz, valószínűleg hivatásos pszichológushoz is kell fordulnod, hogy segítsen megbirkózni a stresszel: közös nevezőt találni a munkaadóddal, túlterhelés a munkahelyen, kétszínű kollegák. Ez a nehéz időszak három vagy négy hónap múlva veszi kezdetét.<br>
De ne keseredj el! Ez csak egy kis része az információnak, amit feltárunk előtted. Folytassuk a belelapozást az életed könyvébe!<br>
Ne félj a kollegáiddal való kapcsolatod nehézségeitől, és az új kihívásoktól. A munka végzése közben elkezdesz szenvedélyessé válni. Izgatott és lelkes leszel a munkáddal kapcsolatban, talán egy saját vállalkozás kezdése is felmerülhet benned, vagy egy olyan személyt találhatsz, aki támogatja az ötleted, és segít valóra váltani. Hogyan? A csillagok egy „segítőkész személy” érkezését jelzik, aki a Mars alatt született. Egy beszállító, egy partnercég alkalmazottja vagy igazgatóhelyettes képében jelenik meg – ez az ember ugyanúgy áll hozzá a munkájához mit te, és segít előrébb jutni a karrieredben, egy jobb munkahelyet találni vagy belekezdeni a saját vállalkozásodba.<br>
A nehézség abból adódik, hogy hogyan különböztethetsz meg egy ellenséges kollegát a „mentális” segítődtől? Vess egy közelebbi pillantást minden kollegára, akivel kapcsolatban vagy: az ellenségesek túl kedvesek és barátságosak lesznek veled, de közben mégis a sikered ellen tesznek. Például megígérik, hogy a jelentéshez szükséges adatkat péntekig összegyűjtik, de csak keddre végeznek vele, vagy valami ilyesmi. Például azt is megígérheti, hogy visszafizeti a közös étkezésetek árát, amire meghívtad, de valahogy elfelejtkezik róla.<br>
Nagyon fontos! Hogy jobban megérthesd az eseményeket amelyek veled történnek, fordulj többször a horoszkópodhoz. Túlterhelő lehet minden információhoz egyszerre hozzáférni. Ez egy hosszútávú horoszkóp, ami az egyedi tulajdonságaidat és születési kódodat figyelembe véve készült el. Hosszú ideig segít fontos döntéseket meghozni, megakadályozni, hogy rossz emberekkel barátkozz össze, és megoldást nyújt a nehéz helyzetekben. Minden nehézség ellenére bizonyára megbirkózol a problémákkal, és az életed új időszaka valódi boldogságot hoz majd!<br>
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
                console.log(innerHeight)
                console.log(app.clientHeight)
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
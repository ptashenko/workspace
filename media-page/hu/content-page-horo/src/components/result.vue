<template>
    <section class="result">
        <div class="header" ref="header">
            <div class="gratz">
                GRATULÁLUNK!
            </div>
            <div class="text">
                A személyes asztrológiai horoszkóp segít az 

                <span class="text--bold">
                    élet minden területén harmóniára lelni, és elkerülni azokat a bukásokat, melyeket 
                    az élet tartogat számodra.
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
            text: `
                
                Éppen most fejeztem be a személyre szabott asztrológiai táblázatod olvasását. Sok mindent el kell hogy áruljak, ezért felvételt készítettem a jövendölésről. Annak érdekében, hogy minden kérdésedre választ kapj, hallgasd meg a teljes felvételt. Biztos vagyok benne, hogy sok kérdésed van. Igencsak meg fogsz lepődni amint meghallod, hogy miket láttam az asztrológiai táblázatban.
                <br /><br />
                Te egy erős és felelősségteljes személy vagy, és már sok nehéz helyzetet is átéltél az életedben. Szükséged van a családod és közeli barátaid szeretetére. Ugyanakkor, nagyon önkritikus vagy a gyermek korod óta. Látom, hogy nagyon sok terveid vannak, de szabadidő hiányában hajlamos vagy elhalasztani őket; jelentős lehetőséget lakoznak benned, melyeket még nem engedtél ki. Gyakran kérdezel magadtól olyan kérdéseket, melyekre már tudod a választ. Legbelül tudod, mit kell tenned ahhoz, hogy elérd azt, amit szeretnél. Ne vond kétségbe a döntéseid és emlékezz, hogy minden ami az életeden történik nem csak véletlen, mindennek megvan a maga oka és én segíteni fogok az okok felderítésében.
                <br /><br />
                Törődő vagy mások érzéseivel szemben és hajlamos vagy az ők érzéseit a magaid elé helyezni, főleg akkor, ha ezek az emberek közel állnak hozzád. Tulajdonképpen egy intuitív személy vagy. Pozitív aura és erőteljes energia vesz körül. Az energiádat sokkal jobban érzem, mint a többi ügyfelemnél.
                <br /><br />
                A következő pár hónap jelentős változásokat fognak hozni. A térhatalmak gondozni fogják az életutadat. Készülj fel arra, hogy egy komoly döntést kell meghoznod, ami jelentősen befolyásolni fogja a jövődet.
                <br /><br />
                Őszinte szeretnék lenni, ezért elárulom, hogyan készítettem az jövendölést, mielőtt belemennék a részletekbe. A születési dátumod segített megrajzolom az asztrológiai égboltod; a neved is sok mindent elárult, hiszen nem véletlenül kaptad ezt a nevet, a csillagjegyed és a nevedben szereplő betűk száma még ennél is többet elárult. Az életutad száma 0. Ez nem egy véletlenszerű szám és ha visszatekintesz, észre fogod venni, hogy ez a szám végig követett téged az életed során.
                <br /><br />
                A csillagjegyed azt árulja el, hogy egy elbűvölő és erős akaratú ember vagy, aki egyedülálló energiamenyiséggel rendelkezik. Mint bárki más, te is szembeszegülhetsz másokkal. Ilyen az emberi természetünk. Büszke vagy a függetlenségedre és arra, hogy a tettekben bízol, nem a szavakban. Ez a tulajdonságod segített abban, hogy észrevedd a hazugságokat, és elkerüld az idegenek provokációját.
                <br /><br />
                Most azokról a dolgokról szeretnék beszélni, amelyek akadályozták a sikerben. A jóslat elkészítése közben a múltadba is bele kellett hogy tekintsek. Valami történt veled öt évvel ezelőtt, ami olyan akadállyá vált, amitől még azóta is  szenvedsz.
                <br /><br />
                De ne aggódj, ez nem visszafordíthatatlan és együtt megpróbálunk megbírkózni a következményeivel. Úgy látom, hogy most határozatlan, és több lehetséges kimenetele is lehet a közelmúltban történt problémáidnak. Itt az ideje, hogy meghozza a helyes döntést.
                <br /><br />
                A stressz, amit nemrég tapasztalt, felfedi a benned rejlő erő nagyságát. A horoszkópod szerint rengeteg szeretet van közted és a párod között. Azonban a kölcsönös megértés hiányát is mutatja. A Mars zavart okoz az asztrális egedben és ez lehet a feszültség oka. A következő ilyen zavar 9 nap múlva fog történi és 103 napig fog tartani. Ez az időszak segíteni fog a jelenlegi problémáid megoldásában. Tudom, hogy a párkapcsolatod nélkülözhetetlen számodra és szereted a párod (ez kölcsönös szeretet). Ezért örömmel tájékoztatom, hogy hamarosan javítani tudsz a helyzeteden és hogy egy új, tiszta lappal indíthatsz a boldog jövőd felé. Az összes nehézségeid el fognak tűnni. Nem azt akarom mondani, hogy minden vissza fog állni. Ez teljesen új szakasz lesz a kapcsolatodban az őszinteség és a kölcsönös bizalom alapján. Természetesen erre fel kell készülnöd, és ha minden problémát meg szeretnél oldani a pároddal és közösen folytatni az utat, akkor mindkettőtöknek dolgoznia kell a belső világán. Ez segíteni fog a kapcsolatod javításában és erősebb együttérzést, szeretetet,  törődést és összhangot fog biztosítani köztetek. A pénzügyi problémáid is meg fognak oldódni. Ez is javítani fogja a kapcsolatod, a pároddal, egy harmonikus és boldog párkapcsolathoz fog vezetni.
                <br /><br />
                Azonban az elhatározásod és a változtatni akarásod nélkül semmi sem fog változni. Ezért mindent meg kell tenned és főszerepet kell vállalnod az életedben.
                <br /><br />
                Most jobb, ha olyan munkára koncentrál, ami boldoggá és teljesen elégedetté teszi. Örülök, hogy elmodhatok mindent, mert minden változni fog. Ez a nehéz időszak csak átmeneti helyzet, amely erősíti a kapcsolatodat, és mégjobban értékelitek egymást a nehézségek és problémák leküzdése után.
                <br /><br />
                Gondolj az eddigi megpróbáltatásokra, fájdalmakra és csalódásokra mint karma, és felejts el őket, hagyd őket a múltban. Az életed új szakasza felé haladsz és a döntések, amiket hozni fogsz fontosak, hiszen nem csak a jelent, hanem a jövőt is befolyásolni fogják. Mint már említettem, az a tény, hogy hallgatod a jóslatomat, nem véletlenszerű, látom, hogy már tudtál néhány változásról. Fel kell ismernie azokat a személyeket, akik segítenek és támogatnak, valamint azokat is, akikkel jobb megszakítani a kapcsolatot. Próbáld meg elkerülni azokat a csapdákat, amelyek meg tudnak akadályozni a kívánt eredmények elérésében. Az élet minden aspektusa befolyásolja egymást és itt az idő hogy felelősséget vállalj a sorsodért.
                <br /><br />
                Annak érdekében, hogy elkerülje a problémákat ebben a hónapban, tudnod kell a problémák 5 főbb okozójáról. Az egyik ok a negatív érzelmek. Próbáld meg elkerülni az irigy, harag és bosszú érzelmeket. Ellenkező esetben ezek ronthatják, vagy teljesen semlegesíthetik az energia aurád.
                <br /><br />
                A következő okok a negatív hozzáállás és az egészségügyi problémák. Folyamatosan emlékeztetned kell magad arra, hogy sikeres és szerencsés vagy. Tartsd szemmel az egészséged, hogy megelőz az energiáid kimerítését. A későbbiekben tudok adni egy listát hogy miket tegyen, és miket ne, a csillagok szerint.
                <br /><br />
                És végül, de nem utolsó sorban – bűntudat és rossz közegben való tartózkodás. Ne felejts el bocsánatot kérni a rossz cselekedeteidért. Ha attól tartasz, hogy félre értenek, akkor el kell gondolkoznod azon, hogy a jó emberekkel vagy-e körülvéve. Készítettem egy teljes leírást arról, hogy mit kell tennie a siker eléréséhez és nyereség termeléséhez ebben a hónapban.
                <br /><br />
                Összességében elmondhatom, hogy a jövő nem teljesen nagyszerű számodra. A főbb negatív dolgok az veszteségek, adósságok és nagy valószínűsséggel a házad elvesztése. Azt tanácsolom, hogy légy óvatos barátaid, munkatársaid választásával. Azok az emberek akik körülötted vannak lehet, hogy hasznot akarnak húzni a nagylelkűségedből, őszinteségedből és tisztességedből. Ne hagyd, hogy mások elcsábítsanak. A megjelenés megtévesztő lehet. Nem mindenki akar a barátod lenni, aki szépeket mond.
                <br /><br />
                Azt tanácsolom, hogy halaszd el a dárga dolgok vásárlását. Ellenkező esetben elveszítheted a házad, vagyonod és megtakarításaid. Ne feledd, hogy egy perc alatt lerombolhatod a jólétednek hídját, de hónapokig vagy akár évekig is tarthat azt megjavítani. Legyél kevésbé merész. A könnyen jött pénz nem hoz boldogságot, hanem nagy bajt okoz.
                <br /><br />
                Annak ellenére, hogy ez a hónap kedvező a csillagjegyed számára, komoly veszélyt hozhat. Nagy a valószínűsége az alvási problémáknak, a túlzott munkavégzésnek, a szorongás általános állapotának súlyosbodásának, a depressziónak és a reménytelenségnek. Erősen ajánlom a munkanapok és a dolgozott órák átvizsgálását, tölts elég időt pihenéssel, imádkozással és az egészségeddel. Törődj a testeddel is. A rossz életmód miatt jelentkezhetnek hirtelen fájdalmak. Vedd figyelembe az allergiák vagy a gyógyszerfüggőség magas kockázatát. A csillagok helyzete világosan jelzi, hogy egy ideig ki kell mozdulnod a szokásos környezetedből, és más légkörben kell lenned. Ellenkező esetben a stressz és a depresszió az életed állandó része lesz, és végül súlyos betegségeket és érzelmi kiégést eredményez.
                <br /><br />
                Közismert, hogy egy hosszú út csak akkor kellemes, ha van egy ház, ahová visszatérhetsz. Biztosan el kell hagynod a családod a munkád miatt, de ne hagyd őket magukra túl sokáig. Gyakori hosszú távú üzleti utazások, túlórák profitálhatóak lehetnek, de tényleg megéri a távollétet a családodtól? Itt az ideje, hogy elkezdj hallgatni és figyelni a szeretteidre. Ellenkező esetben a családi kötelékek elgyengülhetnek, vagy akár megszakadhatnak. Ne hanyagold el a szeretteidet. Őszintén szólva tanácsolom, hogy kevesebb időt tölts a munkahelyeden, és ne áldozd fel a kapcsolatod a családoddal a sikeresebb karrier érdekében. Ne feledd, hogy semmi sem olyan lehangoló, mint a magányos siker. Ahhoz, hogy meg tudd osztani a sikereidet a szeretteiddel, erős kapcsolat kell tartanod velük.
                <br /><br />
                Ha boldogtalannak érzed magad, emlékezz az evangélium szavaira: "Ahol a kincsed, ott a szíved is". Azt jóslom, hogy ebben a hónapban néhány nehézséggel fogsz szembenézni a vagyonodat illetően. A mennyei Úr próbára teszi a lelkedet. Látni fogod, hogy mi marad meg, ha megfosztod magad az anyagi értékeidtől: autó, ingatlan, mobiltelefon vagy drága háztartási gépek. Itt az ideje, hogy minden olyan tettedre választ találj, amit eddig elhalogattál. Mire van szükség annak megjavítására, ami elromlott. Milyen pénzügyi befektetések eredményezhetnek még nagyobb veszteséget. A hitelezőid el fognak engedni minden olyan tartozást, amit még be kellene fizetned. Azonban légy óvatos és felelősségteljes.
                <br /><br />
                Az idő megmutatja, hogy mennyire kapcsolódsz ahhoz, amid van. El fogsz veszíteni valami értékeset, amit újra megtalálhatsz a jövőben, ha valódi hajlandóságot mutatsz arra, hogy elengedd a vagyonodat, vagy azt, amit vagyonodnak tekintesz. Nem lennék meglepve, ha ez az ideiglenes szegénység megmutatná, hogy mennyit is nyerhetsz valójában.
                <br /><br />
                Könnyű elfelejteni, de a természet mindig erősebb, mint bármely értelmes emberi lény. Ebben az időszakban kifejezetten figyelj arra, hogy elkerüld a baleseteket, bárhol is történjenek: otthon, munkahelyen vagy utazás során. Az első csapást várhatóan a víz elemei okozhatják. Óvakodj az árvíztől, mert költséges javítási munkálatokat eredményezhet. A tűz lehetséges veszélyét sem szabad figyelmen kívül hagyni. A kisebb égési sérülések, a passzív dohányzás általi füst, illetve a nap forró sugarai és a szmog szó szerint beárnyékolhatnak.
                <br /><br />
                Mindenki egyetért azzal, hogy nagyon kellemes sikeresnek lenni, de a legnagyobb siker is elhalványul idővel. Itt az ideje, hogy a saját erődre, szorgalmadra és tehetségedre támaszkodj. A szerencse elhagyott téged, és nem mutatja jelét annak, hogy mikor fog visszatérni. Az életed forgatókönyve nagyban függhet Murphy törvényétől. Ami elromolhat, az el is romlik. Az emberek késni fognak, a fontos találkozók elhalasztásra kerülnek egy darabig, és minden próbálkozás a lottó megnyerésére hiábavalónak bizonyul. Én nem csak kérlek, de könyörgök is, hogy adj fel minden elvárást. Bármilyen törekvésed pozitív eredménye teljes mértékben attól függ, hogy mennyire alaposan gondolod át az összes részletet. Többször is ellenőrizd a terv összes sebezhető pontját: dátumok, helyek, kapcsolattartók nevei, megbeszélendő kérdések. Legyél óvatos a félreértésekkel. Egy gondatlanul kimondott szó is komolyan megsértheti partnered vagy rokonaid, ezáltal megromolhat a kapcsolatotok.
                <br /><br />
                Mindenki ismeri a mondatot: "A kellemes idő gyorsan eltelik". Az eufória állapotában, nagyon könnyű figyelmen kívül hagyni a boldogtalanságot. Ebben a hónapban szembe kell nézned néhány kudarccal a párkapcsolatok tekintetében. Lehet, hogy láthatatlannak fogod magad érezni. Az emberek alig beszélnek majd veled és nem fognak elhívni randevúra vagy összejövetelekre. A romantikus impulzusok egyoldalúak lesznek. Figyelmeztetnem kell téged, hogy ha túl nyíltan fejezed ki az érzéseidet, akkor kellemetlen helyzetbe kerülhetsz. A körülötted lévő emberek furcsának fognak gondolni. Másrészről, óvakodj, hogy ne kezdj bele felesleges, mérgező kapcsolatokba. Ebben az időszakban a magány sokkal hasznosabb lesz számodra, mint a mesterséges és kényszerkapcsolatok. A mennyei védőszentek arra buzdítanak, hogy ne felejtsd el, hogy az együttérzés (nem számít, mennyire erős) nem képes a szeretet helyettesítésére. Ne siesd el annak az embernek a szavait elhinni, aki csak most tűnt fel az életedben. Nagy valószínűséggel csalódni fogsz. Az őszinte érzések kifejezésére a cselekvés a legjobb mód.
                <br /><br />
                Ez egy ellentmondás, de a leggyengébb emberek élik a legegyszerűbb életet. Azokat az erős embereket akik, képesek a siker elérése, folyamatosan követik a bajok és bonyodalmak, valamint rendszeresen teszteknek vannak kitéve. A Prófécia azt mondja, hogy tesztelned kell a képességedet a megbocsájtásra, az önmagadról való lemondásra, valamint kerüld el a bosszankodást és az irigységet. Ebben a hónapban gyakran szembesülsz majd mások általi indokoltalan támadásokkal. Kritikus, gonosz, akár kegyetlen viccekkel, csípős megjegyzésekkel is bánthatnak, ha nem készülsz fel előre morálisan. Azt tanácsolom, hogy fordítsd javadra a téged érő agressziót és mutasd meg az erődet. A gyenge emberek soha nincsenek megfélemlítésnek és zaklatásnak kitéve. Ez a természet és a mennyek törvénye. Ne hagyd magad tévútra vezetni. Minden jót megérdemelsz.
                <br /><br />
                Noha nehéz megbékélni ezzel, de néha nagy szerencsétlenségek szükségesek ahhoz, hogy megértsd azt az életutat, amit neked szánt az univerzum. Mindig legyen egy biztonsági terved, és ne hagyd, hogy bárki is korlátozza a szabadságodat. Ne csináld valaki más munkáját, ne vállalj közvetítő szerepet, ne engedd, hogy megpróbáljanak bűntudatot kelteni benned.
                <br /><br />
                Az egészség olyan, mint a levegő. Addig nem értékeljük, ameddig nem gyengül meg. Úgy érzem, hogy létfontosságú lehet számodra az egészséged ellenőrzése. Sok betegség ma már gyakori a fiatalok körében is, úgyhogy ne támaszkodj az életkorodra. A gondatlanság a betegség kulcsát adhatja a jólétednek. Emlékszel az utolsó alkalomra, amikor teszteknek vetetted alá magad, EKG-t készíttettél vagy éppen védőoltásokat kaptál? Keresd fel orvosodat akkor is, ha úgy érzed, hogy jól vagy. Ne ess pánikba, a legegyszerűbb vizsgálatok is elegek lehetnek ahhoz, hogy megmutassák, hogy kell-e aggódnod valami miatt.
                <br /><br />
                Így ez az időszak jelentős és váratlan pénzügyi lehetőségeket hoz magával, amelyek jelentősen megváltoztathatják az ön és családja életét.
                <br /><br />
                Most jött el az az időszak, amikor mindent meg kell tenned, hogy jobbá tedd az életed – a jelenednek, a múltadnak és a jövődnek is megvan a titkos jelentésük. Nagyon érdekes, mivel korábban már átéltél ilyen helyzeteket, de nem tudtál cselekedni, mert senki sem figyelmeztetett. Az a tény, hogy ezt a jóslatot hallgatod arra sejtet, hogy a csillagok befolyása most a legerősebb és az összes energiádat fel fogod használni. Ennek megfelelően nem szeretném, hogy elhalaszd a lehetőséged megint.
                <br /><br />
                A legjobb partnerek ebben az időszakban a következő csillagjegyek szülöttei lesznek számodra: nyilas, kos, oroszlán és skorpió. Képesek lesznek rá, hogy támogassanak és hogy megosszák veled a pozitív energiáikat. Ennek során ne feledkezz meg a titoktartás képességéről - ez lesz a fő erényed, melynek köszönhetően megerősödhet a tekintélyed. Lehetséges, hogy fontos információk lesznek rád bízva.
                <br /><br />
                A csillagok felhívták a figyelmemet arra a tényre, hogy a környezetedben vannak olyan közeli emberek, akiknek szükségük van a segítségemre. Oszd meg velük az üzenetemet - nincs elég pozitív érzelem és harmónia az életükben, ami nem csak a jó hangulat, hanem a hatékony munka szempontjából is fontos. Miután megszabadultak ettől, nem csak, hogy bevonzhatják a jó szerencsét, de olyan új ötleteket is kitalálhatnak, amelyek új jelentést adhatnak az életüknek. Sajnos a pontosabb előrejelzéshez több személyes információra van szükségem, ezért kérd meg barátaidat, hogy lépjenek velem kapcsolatba ahhoz, hogy megkaphassák a tanácsaimat. A csillagok meg fogják ezt köszönni neked.
                <br /><br />
                Azt érzem, hogy erős és felelős ember vagy. Szeretném, ha megértenéd, hogy nincsenek akadályok a boldogság felé vezető úton, és megérdemled a legjobbakat. Légy kész mindent lehetőség megragadására!
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
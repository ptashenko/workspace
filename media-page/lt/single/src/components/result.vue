<template>
    <section class="result">
        <div class="header" ref="header">
            <div class="gratz">
                Sveikiname!
            </div>
            <div class="text">
                Asmeninė astrologinė prognozė padės jums
                <span class="text--bold">
                pasiekti harmoniją visose gyvenimo srityse ir išvengti likimo paruoštų nesėkmių.
            </span>
            </div>
        </div>
        <div class="info" :class="{infoMainClosed: !bar}">
            <div class="info-header" @click.prevent="toggleBar">
                <div class="info-header__text">JŪSŲ ASMENINIS HOROSKOPAS</div>
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
                        <span v-text="text"></span>
                        <div class="close" v-if="more">
                            <div class="close-inner">
                                <img @click.prevent="readMore" class="close__img" src="../assets/img/arrow.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="info-content-text info-content-text--more" v-if="!more">
                        <span
                                class="info-content-text--link" @click.prevent="readMore">Skaityti daugiau</span>
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
Būdami jautrūs kitų žmonių jausmams, jūs iškeliate jų interesus aukščiau savo, ypač jei tie žmonės yra jums labai artimi. Tiesą sakant, jūs esate giliai intuityvus žmogus. Jus nuolat supa teigiama aura ir galinga energija. Jūsų vibracijas pajaučiau aiškiau nei kitų mano klientų.
Ateinantys mėnesiai atneš rimtų pokyčių į jūsų gyvenimą. Visatos galios nurodys jūsų gyvenimo kelią. Būkite pasirengę priimti sudėtingą sprendimą, kuris turės didelės įtakos jūsų tolimesniam gyvenimui.
Kadangi aš noriu būti sąžininga, prieš einant toliau, aš papasakosiu, kaip nusprendžiau jūsų prognozę. Jūsų gimimo data leido man nupiešti jūsų astrologinę dangaus diagramą; jūsų vardas man taip pat daug pasakė, nes jį gavote ne atsitiktinai. Jūsų zodiako ženklas ir raidžių skaičius jūsų varde suteikė man dar daugiau informacijos. Jūsų gyvenimo kelio numeris yra 0. Tai nėra atsitiktinis skaičius. Jei pažvelgsite atgal, pamatysite, kad šis skaičius lydėjo jus visą gyvenimą.

Jūsų zodiako ženklas rodo, jog esate žavus ir stiprios valios žmogus, turintis nepakartojamą energijos kiekį. Kaip ir kas nors kitas, jūs galite susidurti su kitais žmonėmis. Tokia yra žmogaus prigimtis. Didžiuojatės savo savarankiškumu ir galimybe pasitikėti kitų žmonių veiksmais, bet ne žodžiais. Ši savybė jums labai padėjo pastebėti melą ir išvengti svetimų provokacijų.



Dabar yra tas laikotarpis, kai jūs turite padaryti viską, kad jūsų gyvenimas būtų geresnis - dabartiniai dalykai turi savo užslėptą prasmę, taip pat tai, kas jau nutiko ir kas nutiks ateityje. Tai gana įdomu, nes jūs jau anksčiau susidūrėte su tokiais laikotarpiais, bet negalėjote veikti, nes niekas jūsų nebuvo įspėjęs. Tai, kad klausote šios prognozės, verčia mane tvirtai tikėti, kad jūsų astrologinė įtaka pasiekė aukščiausią tašką ir panaudosite visas stipriąsias puses. Todėl nenoriu, kad vėl praleistumėte progą.


Neseniai patirtas stresas leido jums pajusti savo jėgas kaip niekad anksčiau. Jūsų gimimo diagrama man rodo, kad santykiuose su partneriu patiriate daug meilės. Tačiau trūksta ir tarpusavio supratimo. Šią įtampą gali sukelti Marso blokai jūsų astraliniame danguje. Naujas blokų ciklas prasidės per 9 dienas ir tęsis 103 dienas. Bet šis laikotarpis padės išspręsti dabartines problemas. Aš žinau, kad jūsų santykiai jums yra būtini ir jūs mylite savo partnerį (ir tai yra abipusis jausmas, patikėkite manimi). Štai kodėl aš džiaugiuosi galėdama jums pranešti, kad netrukus galėsite pagerinti savo situaciją ir pradėti naują laimingą savo gyvenimo puslapį. Visi sunkumai, su kuriais susidūrėte anksčiau, išnyks. Aš neturiu omenyje, kad viską atstatysite nuo pradžių. Tai bus visiškai naujas etapas jūsų santykiams, pagrįstais nuoširdumu ir abipusiu pasitikėjimu. Be abejo, tam turite pasiruošti ir, jei norite kartu išspręsti visas problemas ir judėti ta pačia linkme, abu turėtumėte išsiugdyti savo asmeninį ir vidinį pasaulius. Tai padės ne tik atkurti jūsų santykius, bet ir užpildyti juos abipusiu supratimu, rūpesčiu, meile, palaikymu ir harmonija. Bus sėkmingai išspręstos finansinės problemos, anksčiau apsunkinusios padėtį. Tai taip pat pagerins jūsų santykius ir kaip pora užmegsite darnią ir laimingą partnerystę.



Tačiau niekas nepasikeis be jūsų valios ir noro pakeisti dalykus. Taigi jūs turėtumėte padaryti viską ir atlikti pagrindinį vaidmenį savo pačių gyvenime.

Dabar jums geriau paskirti laiką darbui, kuris jus džiugina ir visiškai tenkina. Man malonu jums papasakoti apie šiuos dalykus, nes netrukus viskas pasikeis. Šis sunkus laikotarpis yra tik laikina stotelė, kuri sustiprins jūsų santykius ir privers dar labiau vertinti vienas kitą po visų sunkumų ir iššūkių, kuriuos kartu įveikėte.



Priimkite visus gyvenimo išbandymus, skausmą ir nusivylimus, kuriuos iki šiol patyrėte kaip karmą, daugiau negalvokite apie tai ir palikite viską praeityje. Esate pakeliui į naują savo gyvenimo etapą ir sprendimai, kuriuos priimsite šiuo laikotarpiu, bus svarbūs, nes jūsų pasirinkimas paveiks ne tik dabartį, bet ir jūsų ateitį. Kaip jau sakiau, tai, kad jūs klausote mano prognozės, nėra atsitiktinumas, matau, kad jūs jau numanėte apie kai kuriuos pasikeitimus. Štai kodėl jums reikia mano pagalbos. Taip pat turėtumėte pasirinkti žmones, kurie jums padės ir palaikys, taip pat tuos, su kuriais geriau nutraukti ryšius. Pasistenkite išvengti spąstų, kurie gali neleisti pasiekti jūsų trokštamo rezultato. Visi jūsų gyvenimo aspektai daro įtaką vienas kitam ir atėjo laikas prisiimti atsakomybę už savo likimą.


Norėdami apsisaugoti nuo bėdų šį mėnesį, turite žinoti 5 pagrindines jų atsiradimo priežastis. Viena jų - neigiamos emocijos. Pabandykite užblokuoti pavydą, pyktį ir kerštą. Priešingu atveju jie ne tik pažeis jūsų energetinį lauką, bet ir visiškai jį sunaikins.
Kitas etapas yra neigiamas požiūris ir sveikatos problemos. Turite nuolat sau priminti, kad esate sėkmingas ir laimingas žmogus. Stebėkite savo sveikatą, kad neišeikvotumėte savo energijos išteklių. Vėliau jums pateiksiu išsamesnį dalykų sąrašą, kuriuos reikia atlikti, žvaigždės atkreipia mano dėmesį į tai.
Ir paskutinis, bet ne mažiau svarbus dalykas - kaltės jausmas ir buvimas netinkamoje aplinkoje. Nepamirškite paprašyti atleidimo už tai, ką padarėte neteisingai. O jei bijote būti nesuprastas, tuomet turėtumėte pagalvoti, ar jus supa jums tinkami žmonės. Sudariau jums išsamų aprašą, ką turėtumėte padaryti, kad šį mėnesį pasisektų ir gautumėte pelno.
Jūs esate stiprus ir rūpestingas asmuo, aš tai jaučiu. Noriu, kad jūs suprastumėte, jog jūsų kelyje į laimę nėra kliūčių ir jūs nusipelnėte geriausio. Būkite pasirengę priimti visus šansus!





Taip pat informuojame jus, kad šie metai bus Neptūno įtakoje.


Per ateinančias septynias dienas jūsų gyvenime įvyks netikėti ir svarbūs esamos padėties pokyčiai. Aiškiai matau, kad tai bus susiję su asmeniniu gyvenimu, taip pat su finansine būkle. Šiuo laikotarpiu tik tam tikri, konkretūs veiksmai padės jums išeiti iš situacijų kaip laimėtojui. Nustebsite, kiek aš žinau apie jus ir ką parekomenduosiu jums, tačiau šie veiksmai taps kelio į laimę pradžia.


Pradėkime nuo to, kad susidūrimas su Neptūnu visada reiškia laiką pokyčiams. Aš žinau, kad šie pokyčiai yra labai svarbūs jūsų zodiako ženklui, ir jūs tai pajusite, nes Neptūno planeta pasieks savo įtakos viršūnę. Tai reiškia, kad šiuo metu prasideda permainų laikas ir tai, kaip įvykiai vystysis per ateinančius 12 mėnesių, priklausys nuo to, kiek atidžiai klausysite mano patarimų. Svarbu nepraleisti tinkamos akimirkos.


Su mano pagalba sužinosite, kaip išvengti pavojų, kurie pasirodys šią dieną kitą mėnesį. Aš jums papasakosiu apie veiksmus, kurie padės pasiekti geriausią rezultatą jums ir jūsų artimiesiems. Aš sudariau išsamią instrukciją, kad suprastumėte ir įvertintumėte kaprizingą bei slapčia jums meilų Neptūną, kad galėtumėte pagerinti savo gyvenimą ir apsaugoti artimuosius.




Pirmiausia, norėčiau jums nupasakoti tai, ką matau ypatingai aiškiai - santykį su vienu žmogumi. Užduokite sau klausimą: „Kas sukelia jums ryškiausias emocijas?“ Tai gali būti net ne pats artimiausias ar brangiausias žmogus. Tai gali būti jūsų kaimynas ar net kolega, kurio gerai nepažįstate. Nesvarbu, kas tas žmogus. Svarbūs yra jausmai, kuriuos jis jums sukelia. Galite jausti, kad jo nekenčiate arba juo didžiuojatės. Šioje situacijoje svarbi jausmų galia ir jų spalva. Neptūnas yra planeta, kuri net tik stimuliuoja emocijas, bet ir jas pažadina. Svarbu įsiklausyti į savo jausmus.



Šiomis dienomis jūsų sapnai bus pranašiški, nes Neptūnas yra savo pike. Atidžiai stebėkite aplinkinius žmones, mąstykite, užduokite sau klausimą ir jūs suprasite, apie kokį asmenį aš kalbu. Ir dabar išanalizuokite save. Jūsų emocijos šiam asmeniui sudaro veidrodinį jo paties emocijų atvaizdą. Ir jūs jo ne nekenčiate; dabar jūs jaučiate, ką jis jaučia sau pačiam. Tiesiog visata padeda jums pamatyti tikrąją daiktų būseną šiuo momentu. Pasinaudokite jos užuominomis ir pakeiskite požiūrį į šį žmogų, atsižvelgdami į tai, ką jaučiate. Nebijokite sudeginti tiltų, jei šio žmogaus reakcija jums yra neapykanta, pavydas ir pyktis. Tiesiog darykite tai! Neptūnas jums ką tik atskleidė tikrųjų šio vyro ar moters jausmų paslapties šydą.


Jei tikrosios šio žmogaus emocijos yra prisirišimas, susižavėjimas ar kitos pozityvios emocijos, tuomet leiskite sau užmegzti teigiamą kontaktą. Per ateinančius šešis mėnesius šis asmuo padės jums žengti ryžtingą žingsnį svarbiuose reikaluose.

Sveikata

Jūsų gyvenime yra tik viena problema ir aš aiškiai matau, kad ji iškils kitą mėnesį. Neptūnas ne tik suteiks įžvalgą apie tikruosius jausmus. Jis paveiks jūsų savijautą ir emocinę būseną. Šiuo laikotarpiu būsite atviresni ir pažeidžiamesni nei bet kada anksčiau. Kalbant apie tą svarbų asmenį, apie kurį anksčiau kalbėjau, reikia atidžiai įsiklausyti į savo intuiciją, o su kitais žmonėmis - būti atidiems ir slėpti nuo jų savo jausmus. Neptūno įtakoje būsite ypač pažeidžiami, todėl taps lengviau atimti jūsų energija. Matau, kad trys žmonės iš jūsų artimo rato pasinaudos tuo. Galite juos nustatyti. Nepamirškite, kad Neptūnas atskleidžia nematomus dalykus. Atkreipkite dėmesį į jų elgesio pokyčius. Tikrasis jų veidas artimiausiomis dienomis pasireikš netikėtai aiškiai ir ryškiai.




Būkite atsargūs su savo norais! Kodėl aš apie tai kalbu? Nes Neptūnas yra atsakingas ne tik už intuiciją ir paslaptis mūsų gyvenime. Tai yra malonumų planeta. Todėl užduokite sau klausimą: „Ko būtent geidžia jūsų širdis?“ Tačiau būkite atsargūs. Aš galiu numatyti kelis jūsų malonumo kelius ateityje. Vienas iš jų nuves jus į chaosą, o kitas užpildys jus harmonija. Jei manote, kad norite per daug, pagalvokite, ar šis noras yra tikras? Kadangi Neptūnas yra iliuzijų planeta, jis priverčia pamatyti saldžius sapnus ir norus. Tačiau ne visi malonumai atneš gerų dalykų, nes jūsų blogi įpročiai šiuo laikotarpiu pasireikš ypač stipriai. Taip pat yra didelė rizika įgyti naują ar grįžti prie seno blogo įpročio.


Pabandykite prisiminti; kalbėjau apie tris žmones, kurie jums linki bloga. Jie yra pagiežingi ir stengsis įnešti į jūsų gyvenimą chaosą, paslepdami jį po malonumo skraiste. Tačiau net tokią situaciją galite apversti savo naudai ir rimtai pagerinti savo sveikatą. Šiuo laikotarpiu greičiausiai pajusite nenugalimą potraukį pasiduoti žalingiems įpročiams. Kovokite! Paklauskite savęs, ar norite ateityje išleisti šešių mėnesių uždarbį gydymui? Matau, kad jei per šį laikotarpį nugalėsite savo geismą, tada amžinai atsikratysite veiksnių, naikinančių jūsų kūną ir protą. Tai bus antrasis kelias, kuriuo eidami žymiai supaprastinsite savo gyvenimą.



Darbas

Ir dabar prašau jūsų klausytis labai atidžiai, nes visata paruošė jums keletą svarbių įvykių situacijose, susijusiose su darbu. Jei atkreipsite dėmesį į patarimus, pabaigoje būsite atlygintas premiją. Netrukus suprasite, kad tai veda jus vieninteliu teisingu keliu, jūsų užduotis yra iš jo neišklysti ir situacija pasisuks tik jūsų labui.



Nustebsite, tačiau jūsų darbo aplinkoje yra kažkoks asmuo, kuris nori jus apjuodinti. Aš aiškiai matau, kad ir dabar šis asmuo bando laimėti jūsų kolegų palankumą už jūsų nugaros skleisdamas melagingus gandus. Vidinis balsas jums pašnabždės, kad jums nederėtų juo pasitikėti. Būkite labai sąmoningi ir atsargūs, nes matau, kad šis žmogus geba lengvai įtikinti. Jis yra tokio pat stipraus būdo kaip ir jūs, tačiau negali pakęsti kitų triumfo. Į mano žodžius žiūrėkite rimtai. Jei nieko nedarysite, jums gali iškilti piniginių nuostolių šešiems mėnesiams, o nepalankiausiomis aplinkybėmis gali sumažėti vadovo ar partnerių pasitikėjimas jumis ir galite prarasti poziciją darbe. Šis asmuo galės džiaugtis jūsų nesėkme, nes Neptūnas palaiko ne tik paslaptis, bet ir šlykščiausius malonumus. Tai verčia žmones pasiduoti priklausomybėms, o kolega, kuris nori jus įskaudinti, mielai pasiduos šiai įtakai. Problema ta, kad jis neturi pakankamai savo asmeninės energijos ir, sukurdamas jums sunkumų, bando pasiimti jūsų energiją, nes Neptūnas yra jo pike ir atveria energetinius kanalus tokiems žmonėms kaip jūs.

O dabar norėčiau jus pradžiuginti. Neptūnas, kuris stumia jūsų engėją blogiems veiksmams, taip pat palankiai veikia ir jums asmeniškai. Permanų laikas artėja taip pat greitas kaip audros Neptūno planetos atmosferoje. Ar norėtumėte naujų pareigų darbe? O gal svajojate pradėti verslą? Atidžiai išklausykite manęs, ir suprasite, kaip pasiekti tai, ko norite, nes matau, kad dabar yra geriausias metas šiems veiksmams. Tačiau prieš pradėdami imtis kokių nors veiksmų, atsiminkite, kad Neptūnas yra iliuzijų planeta, jis jus apkeri saldžiais sapnais. Todėl turite atidžiai išanalizuoti savo norus. Užduokite sau klausimą: „Ar aš galėsiu 100% atverti savo galimybes naujoje vietoje“. Įsiklausykite į savo intuiciją. Aš jau minėjau, kad šiuo laikotarpiu ji yra savo pike ir padės jums ne tik asmeniniame gyvenime. Jei vidinis balsas jums sako „taip“ - drąsiai ženkite į savo naują kelią. Pakeliui galite sutikti jums svarbų žmogų. Tai neįvyks iškart, bet galiausiai įvyks. Aš rekomenduoju jums gerai pagalvoti, per daug nespartinti įvykių. Neskubėkite. Tai, kas turi įvykti, turi vystytis lėtai.

Jūs nusprendėte imtis pokyčių? Ar planuojate gauti norimą poziciją darbe? Neabejoju, kad bus palyginti lengva. Neptūnas yra planeta, kuri išblukina suvokimo kliūtis, padaro žmones įtaigiais ir palankiais ir tuo pačiu metu jis bus savo pike. Todėl nebijokite jo galios panaudoti savo labui. Tikriausiai pajusite, kad galite daryti įtaką jus supantiems žmonėms. Matau, kad jums reikia įsiklausyti į savo vidinį balsą ir elgtis taip, kaip liepia jūsų instinktai, sustiprinti Neptūno. Ir kelias, kuris nuves jus į sėkmingą dienos pabaigą, taps trumpesnis ir sklandesnis.

Jei nusprendėte likti toje pačioje vietoje - būkite pasiruošę negandoms. Šiuo laikotarpiu greičiausiai pajusite, kad kova dėl įtakos darbe ir viskas, kas su juo susiję, prasidės dabar. Galbūt net kažkas iš jūsų artimųjų bandys įsikišti ir stengsis primesti jums savo valią. Pavyzdžiui, jie įtikins jus palikti savo darbą arba paprašys priimti į komandą savo pažįstamą. Nesijaudinkite, šie bandymai paveikti jūsų valią bus tik laikini. Štai kaip dvigubas Neptūno ir Saturno efektas paveikia žmones. Šios planetos kartu pakeičia bet kokias ribas, jas išlygindamos ir praplėsdamos. Nesvarbu, ar tai bus paskutinis žodis pokalbyje apie naują poziciją darbe ar artimųjų prašymas priimti ką nors į komandą. Tačiau sprendimo teisė, kuri padės jums teisingai pasirinkti, bus suteikta tik jūsų intuicijai.

Užduokite sau klausimą: „Ar tiesa, kad šis žingsnis man duos tik gero?“ ir įsiklausykite į save. Intuicija neleis jums suklysti. Taip yra todėl, kad ją maitina Neptūnas, kaip ir Saturnas, kuris yra atsakingas už verslo ryšius jūsų gyvenime.

Kelionės

Ar esate pasirengę išklausyti teigiamus pokyčius savo gyvenime? Matau, kad yra dar vienas svarbus aspektas, kuris turės įtakos jūsų gyvenimui - kelionės. Didelė tikimybė, kad kai kurie su vandeniu susiję įvykiai įvyks rudens pradžioje. Jei per šį laikotarpį įvyks kelionė, o jūs neturėsite galimybės jos perkelti, verta viską patikrinti iš anksto, pradedant bilietais ir baigiant jūsų kuprinės užtrauktuku. Uraganai ir audros Neptūno atmosferoje įneš rūpesčių į jūsų gyvenimą.

Nepamirškite, kad jūsų intuicija dabar yra pike. Net jei neketinate niekur vykti, klausykite jos. Atkreipkite dėmesį į sapnus, kuriuose pamatysite kelią. Aš žinau, kad jie bus tie, kurie išsipildys. Šiek tiek vėliau papasakosiu, kaip juos perskaityti tuo metu, kai Neptūnas yra savo pike.

Nustebsite sužinoję, ką mačiau jūsų ateityje, susijusioje su kelionėmis, tačiau jei be jokios priežasties jaučiatės susirūpinę jums artimu žmogumi, kuris keliauja - neignoruokite savo jausmų. Jūsų intuicija jums nemeluoja ir galbūt šis žmogus netrukus išnyks iš jūsų gyvenimo. Tai nereiškia, kad jam nutiks kažkas bloga. Priešingai, jis atras naujų perspektyvų, o jūsų vidinis instinktas, kurį suaktyvino Neptūnas, padės ne tik jums. Įsiklausykite į save. Ar tam asmeniui verta keliauti, ar tai atneš jam ko nors, ko jis trokšta? Atidžiai išanalizuokite savo sapnus, ir jie taps raktu į jūsų supratimą, jei jums ar jūsų artimiesiems teks keliauti ir kur kelionė juos nuves.

Įsivaizduokite savo sapnus smulkiausiomis detalėmis, susikoncentruokite į kelionę. Net sapne emocijos, kurias sukelia Neptūno jėgos, padės rasti teisingą atsakymą. Nesvarbu, kaip atrodo kelias. Svarbu suprasti, ką jaučiate sapne. Intuicija šiuo laikotarpiu yra jūsų draugas. Todėl, jei jūsų savijauta gera, iš tikrųjų leiskitės į kelionę. Nenustebkite sapne pamatę žmogų, su kuriuo esate artimas. Taip pat galite pajusti ir jo kelią. Neignoruokite savo jausmų ir atidžiai klausykite manęs, nes tai, ką pasakiau, yra tik dalis to, ką Neptūnas jums paruošė.

Šeima

Matau, kad visata davė jums ženklą rūpintis dviemis jūsų artimaisiais; reikėtų sustoti ir susikaupti. Mano žodžiai dabar pasuks jūsų atmintį teisinga linkme. Verta pagalvoti ir prisiminti šią akimirką. Nors Neptūnas yra susijęs su vandeniu, ženklas bus priešingas jam. Tokiu būdu visata pabrėžia savo svarbą ne tik jums, bet ir pabrėžia, kad galite padėti artimiesiems. Pagalvokite apie neįprastus gyvūnus, kuriuos galbūt neseniai matėte.  Prisiminkite apie intuiciją. Ji jūsų neklaidina, ji jums tik padės. Šis gyvūnas simbolizuos tai, ko jūsų artimieji turėtų vėliau vengti.

Tačiau tai dar ne viskas, ką planeta jums paruošė savo aktyvumo piko metu. Bendradarbiaudamas su Venera jausmų ir emocijų srityje Neptūnas galės sunaikinti, taip pat ir išsaugoti jūsų santykius su artimu giminaičiu, kuris yra daug vyresnis už jus. Aš žinau, kiek pavargote nuo konfliktų, kurie jus ištampo ir atima ne tik energiją, bet ir norą atsibusti ryte. Veikdamos kartu dvi planetos atneš teigiamų pokyčių bet kuriuose santykiuose. Vis dėlto jums svarbiausia bus atstatyti santykius su vyresniu giminaičiu. Kad ir koks didelis buvo jūsų konfliktas, aš matau, kad tai yra palankiausias metas viską su juo išspręsti. Jei padarysite tai laiku, praeities nuoskriaudos nepaliks jokių žymių jūsų širdyje.

Tai nėra vieninteliai teigiami dalykai, kuriuos gali atnešti Veneros ir Neptūno bendradarbiavimas. Šį rudenį jūs negalite likti vieni. Kodėl aš tai sakau? Nes tai yra laikotarpis, kai planetos sukurs geriausias sąlygas susitikti su tais, kuriuos jūs retai atsimindavote, iki kol Neptūnas nepažadino jūsų intuicijos. Ar manote, jog raštelis, kurį gavo iš kažkieno, buvo tik atsitiktinumas, ar pradėjote galvoti apie tą asmenį dažniau nei anksčiau? Tai visata duoda jums ženklą! Nes būtent tam žmogui prireiks jūsų pagalbos.

Šiuo laikotarpiu matau du silpnus žmones, kuriems reikės jūsų priežiūros. Neptūnas padeda tik stipriems žmonėms, o silpniesiems sėkmės jis nesuteikia. Jis paverčia juos niūriais ir įgalina juos sekti savo svajones. Tai gali labai paveikti jūsų artimuosius. Priimkiite mano žodžius kuo rimtai. Nepalikite šių dviejų žmonių likimo valiai, padėkite jiems išgyventi planetos poveikį be praradimų. Kaip tai padės jums? Kai sumažės Neptūno aktyvumas, galėsite atsakyti už jų sukeltą netvarką.

Pomėgiai ir santykiai

Neptūnas yra planeta, atverianti slaptus jūsų sielos vingius. Jei šiuo laikotarpiu jaučiate potraukį menui - neignoruokite jo. Šis noras, padidintas padidėjusios intuicijos, yra visatos užuomina, ką darydami turėtumėte praleisti laiką. Turite klausyti savo širdies balso, nes ateityje tai padės sutikti žmogų, su kuriuo tapsite artimi. Gal dabar ši perspektyva sukels atmetimo reakciją ir nustebimą, tačiau jei nuspręsite eiti šiuo keliu - nesigailėsite nė sekundės.

Neptūnas yra malonumų planeta. Matau, kad susitikimas su šiuo žmogumi suteiks jums malonumą. Tačiau koks bus šis malonumas, priklauso tik nuo jūsų. Jei sutiksite su pokyčiais ir jei jų norėsite, šis asmuo taps patikimu kompanionu visam gyvenimui. Visata visada suteikia mums galimybę pasirinkti, ir tik jūs nuspręsite, ar norite pereiti seną kelią, ar sankryžoje pasukti nauju posūkiu. Jei nenorite pokyčių, tada naujas žmogus išliks jūsų gyvenime tik kaip patikimas draugas.
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
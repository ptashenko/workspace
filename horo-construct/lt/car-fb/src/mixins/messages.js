import moment from "moment";

export default {
  data() {
    return {
      messages: [
        {
          text: "Sveiki. Daugelis žmonių netiki žvaigždžių prognozėmis. Todėl noriu įrodyti, kad astrologinė prognozė gali pakeisti bet kurio žmogaus gyvenimą, net ir jūsų!",
          type: "text",
        },
        {
          text: "Aš esu profesionali astrologijos konsultantė, klasikinės astrologijos mokytoja. Jau daugiau nei 19 metų aš padedu žmonėms spręsti jų asmenines problemas: išsiskyrusios šeimos vėl susijungė, vienišos moterys rado antras puses, bedarbiai pradėjo uždirbti didelius pinigus, verslo savininkai rado būdų, kaip pagerinti savo verslą.",
          type: "text",
        },
        {
          text: "Vos per 3 minutes sužinosite daug įdomių faktų apie savo ateitį! Pasakykite, apie ką labiausiai norite sužinoti?",
          answers: [
            {
              id: 1,
              answer: "Sveikata",
              active: false,
            },
            {
              id: 2,
              answer: "Pinigai",
              active: false,
            },
            {
              id: 3,
              answer: "Šeima ir santykiai",
              active: false,
            },
            {
              id: 4,
              answer: "Viskas",
              active: false,
            },
          ],
          type: "question",
        },
        {
          text: "Gerai, ačiū. Aš užduosiu tik dar 3 klausimus. Kokiu paros metu jaučiatės geriausiai?",
          answers: [
            {
              id: 5,
              answer: "Ryte",
              active: false,
            },
            {
              id: 6,
              answer: "Naktį",
              active: false,
            },
            {
              id: 7,
              answer: "Vakare",
              active: false,
            },
            {
              id: 8,
              answer: "Dieną",
              active: false,
            },
          ],
          type: "question",
        },
        {
          text: "Supratau. Sakykite, ar pastaruoju metu jus kankina nemiga?",
          answers: [
            {
              id: 9,
              answer: "Taip",
              active: false,
            },
            {
              id: 10,
              answer: "Ne",
              active: false,
            },
            {
              id: 11,
              answer: "Kartais",
              active: false,
            },
          ],
          type: "question",
        },
        {
          text: "Ir paskutinis klausimas: ar pastaruoju metu jautėtės, kad vis nepavyksta savo svajonių paversti realybe?",
          answers: [
            {
              id: 12,
              answer: "Taip",
              active: false,
            },
            {
              id: 13,
              answer: "Ne",
              active: false,
            },
            {
              id: 14,
              answer: "Kartais",
              active: false,
            },
          ],
          type: "question",
        },
        {
          text: "Ačiū, kad atsakėte į visus mano klausimus.",
          type: "text",
        },
        {
          text: "Bet yra dar vienas svarbus dalykas, kurį turiu žinoti.",
          type: "text",
        },
        {
          text: "Įveskite savo gimimo datą:",
          type: "date",
          stop: true,
        },
        {
          text: `Supratau. Jūsų gyvenimo kelio numeris yra <span style="font-weight: normal;color: #4166B1;">${this.socralNumber(
            4,
            10
          )}</span> ir noriu jus perspėti, kad tai reiškia nerimą.`,
          type: "text",
        },
        {
          text: "Žinau, kad dažnai abejojate savo sprendimais ir nerimaujate, ar teisingai pasirinkote konkrečioje situacijoje.",
          type: "text",
        },
        {
          text: `Netrukus sulauksite naujienos, kurios nesitikėjote. Galbūt, <span style="font-weight: normal;color: #4166B1;">${this.changesDate()}</span>. Jūsų įprastas gyvenimas apsivers aukštyn kojomis.`,
          city: true,
        },
        {
          text: "Dabar įrašysiu jums balso pranešimą. Galite jo išklausyti paskambinę man iš savo mobiliojo telefono.",
          type: "text",
        },
        {
          text: "Žemiau pamatysite mygtuką „Skambinti dabar“, paspauskite jį ir surinkite mano numerį. Išklausykite įrašo - jums tai labai svarbu!",
          type: "text",
        },
      ],
    };
  },
  methods: {
    socralNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    changesDate() {
      moment.locale("lt");
      var currentDay = moment().format("DD");
      var nextDay = moment().add(1, "day").format("DD MMMM");
      return `${currentDay}-${nextDay}`;
    },
  },
};

import dayjs from "dayjs";
import "dayjs/locale/hu";

export default {
  data() {
    return {
      messages: [
        {
          text: "Üdvözöllek! Sok ember nem hisz a csillagok  jóslataiban, ezért be akarom bizonyítani, hogy egy asztrológiai jóslat bárki életét megváltoztathatja – akár a tiedet is!",
          type: "text",
        },
        {
          text: "Hivatásos asztrológus vagyok, és a klasszikus asztrológiát tanítom. Több mint 19 éve segítek az embereknek megoldani a problémáikat: felbomlott családok újraegyesítésében, egyedülálló nők számára párjuk megtalálásában, munkanélküli emberek meggazdagodásában, üzletemberek vállalkozásának fejlesztésében segítek.",
          type: "text",
        },
        {
          text: "Mindössze három perc alatt rengeteg érdekes titkot megtudhatsz a jövődről! Áruld el, miről akarsz mindennél jobban tudni?",
          answers: [
            {
              id: 1,
              answer: "Egészség",
              active: false,
            },
            {
              id: 2,
              answer: "Pénz",
              active: false,
            },
            {
              id: 3,
              answer: "Család és kapcsolatok",
              active: false,
            },
            {
              id: 4,
              answer: "Minden",
              active: false,
            },
          ],
          type: "question",
        },
        {
          text: "Rendben, köszönöm. Már csak három kérdésem maradt. Melyik napszakban érzed magad a legjobban?",
          answers: [
            {
              id: 5,
              answer: "Reggel",
              active: false,
            },
            {
              id: 6,
              answer: "Éjszaka",
              active: false,
            },
            {
              id: 7,
              answer: "Este",
              active: false,
            },
            {
              id: 8,
              answer: "Napközben",
              active: false,
            },
          ],
          type: "question",
        },
        {
          text: "Értem. Mondd csak, szenvedsz mostanában álmatlanságban?",
          answers: [
            {
              id: 9,
              answer: "Igen",
              active: false,
            },
            {
              id: 10,
              answer: "Nem",
              active: false,
            },
            {
              id: 11,
              answer: "Néha",
              active: false,
            },
          ],
          type: "question",
        },
        {
          text: "Az utolsó kérdés pedig: érezted úgy mostanában, hogy nehézségekbe ütközöl az álmaid valóra váltása közben?",
          answers: [
            {
              id: 12,
              answer: "Igen",
              active: false,
            },
            {
              id: 13,
              answer: "Nem",
              active: false,
            },
            {
              id: 14,
              answer: "Néha",
              active: false,
            },
          ],
          type: "question",
        },
        {
          text: "Köszönöm, hogy minden kérdésemre válaszoltál!",
          type: "text",
        },
        {
          text: "De van még valami, amit tudnom kell.",
          type: "text",
        },
        {
          text: "Kérlek, add meg a születési dátumodat!",
          type: "date",
          stop: true,
        },
        {
          text: `Rendben. Az életutad száma <span style="font-weight: normal;color: #4166B1;">${this.socralNumber(
            4,
            10
          )}</span>, és tudnod kell, hogy ez aggasztó.`,
          type: "text",
        },
        {
          text: "Tudom, hogy sokszor megkérdőjelezed a döntéseidet, és aggódsz azon, hogy jól választottál-e, vagy sem bizonyos helyzetekben.",
          type: "text",
        },
        {
          text: `Hamarosan olyan híreket fogsz kapni, amelyekre nem számítasz. Talán ennek a dátuma <span style="font-weight: normal;color: #4166B1;">${this.changesDate()}</span> A mindennapi életed teljesen felborul.`,
          city: true,
        },
        {
          type: "video",
          videos: [
            {
              videoName: '1.mp4',              
            },
            {
              videoName: '2.mp4',              
            },
            {
              videoName: '3.mp4',              
            },
          ]
        },
        {
          text: "Egy „Hívás most” feliratú gombot fogsz látni  lent. Nyomd meg, és tárcsázd a számomat! Hallgasd meg a felvételt, mert nagyon fontos számodra!",
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
      dayjs.locale("hu");
      var currentDay = dayjs().format("MMMM D.");
      var nextDay = dayjs().add(1, "day").format("MMMM D.");
      return `${currentDay} — ${nextDay}`;
    },
  },
};

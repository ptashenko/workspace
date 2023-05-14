import moment from "moment";

export default {
  data() {
    return {
      messages: [
        {
          text: "Bonjour. Beaucoup de gens ne croient pas aux prédictions des étoiles. C'est pourquoi je veux prouver qu'une prévision astrologique peut changer la vie de n'importe qui – et même la vôtre !",
          type: "text"
        },
        {
          text: "Je suis consultant professionnel en astrologie, professeur d'astrologie classique. Depuis plus de 19 ans, j'aide les gens à résoudre leurs problèmes personnels : des familles brisées sont réunies, des femmes célibataires ont retrouvé leur moitié, des chômeurs ont commencé à gagner beaucoup d'argent, des chefs d'entreprise ont trouvé des moyens d'améliorer leur entreprise.",
          type: "text"
        },
        {
          text: "Uniquement en 3 minutes, vous allez apprendre beaucoup de choses intéressantes sur votre avenir ! Dites-moi, sur quoi voulez-vous le plus apprendre ? ",
          answers: [
            {
              id: 1,
              answer: "Santé",
              active: false
            },
            {
              id: 2,
              answer: "Argent",
              active: false
            },
            {
              id: 3,
              answer: "Famille et relations",
              active: false
            },
            {
              id: 4,
              answer: "Tout",
              active: false
            }
          ],
          type: "question"
        },
        {
          text: "D'accord, merci. Je ne poserai que 3 autres questions. À quel moment de la journée vous sentez-vous le mieux ?",
          answers: [
            {
              id: 5,
              answer: "Matin",
              active: false
            },
            {
              id: 6,
              answer: "Nuit",
              active: false
            },
            {
              id: 7,
              answer: "Soir",
              active: false
            },
            {
              id: 8,
              answer: "Jour",
              active: false
            }
          ],
          type: "question"
        },
        {
          text: "Je vois. Dites-moi, avez-vous souffert d'insomnie ces derniers temps ?",
          answers: [
            {
              id: 9,
              answer: "Oui",
              active: false
            },
            {
              id: 10,
              answer: "Non",
              active: false
            },
            {
              id: 11,
              answer: "Parfois",
              active: false
            }
          ],
          type: "question"
        },
        {
          text: "Et la dernière question, est-ce-que vous avez ressenti ces derniers temps que vous ne parveniez pas à faire de vos rêves une réalité ?",
          answers: [
            {
              id: 12,
              answer: "Oui",
              active: false
            },
            {
              id: 13,
              answer: "Non",
              active: false
            },
            {
              id: 14,
              answer: "Parfois",
              active: false
            }
          ],
          type: "question"
        },
        {
          text: "Merci d'avoir répondu à toutes mes questions.",
          type: "text"
        },
        {
          text: "Mais il reste une autre chose importante que j'ai besoin de savoir. ",
          type: "text"
        },
        {
          text: "S'il vous plaît, entrez votre date de naissance:",
          type: "date",
          stop: true
        },
        {
          text: `Je vois. Votre numéro de chemin dans la vie est le <span style="font-weight: normal;color: #4166B1;">${this.socralNumber(
            4,
            10
          )}</span>, et je tiens à vous prévenir que cela signifie de l'inquiétude.`,
          type: "text"
        },
        {
          text: "Je sais que vous doutez souvent de vos décisions et que vous vous demandez si vous avez fait le bon choix ou non dans une situation particulière.",
          type: "text"
        },
        {
          text: `Sous peu, vous allez recevoir une nouvelle à laquelle vous ne vous attendiez pas. Peut-être, le <span style="font-weight: normal;color: #4166B1;">${this.changesDate()}</span>. Votre vie habituelle sera bouleversée.`,
          city: true
        },
        {
          text: " Je vais maintenant enregistrer un message vocal pour vous. Vous pouvez l'écouter en m'appelant par téléphone portable.",
          type: "text"
        },
        {
          text: "Vous allez trouver le bouton \"Appeler maintenant\" en bas, appuyez dessus et composez mon numéro. Écoutez l'enregistrement, c'est très important pour vous!",
          type: "text"
        },
        {
          text: "",
          type: "timer"
        }
      ]
    };
  },
  methods: {
    socralNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    changesDate() {
      moment.locale("fr");
      var currentDay = moment().format("DD");
      var nextDay = moment().add(1, "day").format("DD MMMM");
      return `${currentDay}-${nextDay}`;
    }
  }
};

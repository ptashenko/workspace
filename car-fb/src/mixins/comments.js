export default {
  data() {
    return {
      commentTitle: "commentaires",
      addComment: "ajouter un commentaire",
      validationMessage: "Merci pour votre commentaire !<br> Votre message est en modération.",
      comments: [
        {
          name: "Jeanne",
          text: "Je me suis adressée à un astrologue avec une question concernant l'avenir. Je ne m'attendais pas à ce que les prédictions soient si claires et compréhensibles. Elles m'ont parlé non seulement de l'avenir, mais aussi du passé, de ce que je ressens maintenant. Je suis très heureux. Qui s'intéresse à l'avenir, je vous conseille d'utiliser ce service.",
          likes: 11,
          avatar: "1.jpg"
        },
        {
          name: "Christian",
          text: "Je me suis adressée à différents astrologues... ce site était mon dernier espoir et je ne m'attendais pas vraiment au résultat. Mais maintenant je ne regrette pas d'avoir décidé d'essayer d'appeler. Ma vie a complètement changé ! Merci ! Très reconnaissant !",
          likes: 20,
          avatar: "2.jpg"
        },
        {
          name: "Chloé",
          text: "Merci beaucoup pour les informations sur mon avenir ! Je suis très impressionné ! Vous avez tout décrit de façon si précise ! Vous avez donné beaucoup d'informations utiles ! Merci !",
          likes: 45,
          avatar: "3.jpg"
        },
        {
          name: "Amélie",
          text: "Merci ! !! Que de chemin j'ai dû parcourir pour trouver ce site ! !! Après tout, je l'ai trouvé \"accidentellement\" sur Internet. Je remercie l'univers pour cela ! !!",
          likes: 33,
          avatar: "4.jpg"
        },
        {
          name: "Giselle",
          text: "Tout est précis, on a l'impression qu'un astrologue a connu toute ma vie. Des informations si précises ! Je n'ai pas de mots. J'ai eu beaucoup de plaisir en vérité et je suivrai tous les conseils qui m'ont été donnés. Conseillez tout le monde))))",
          likes: 8,
          avatar: "5.jpg",
          button: true
        },
        {
          name: "Alice",
          text: "Merci beaucoup pour votre aide ! J'ai été très satisfaite et j'ai obtenu des réponses à toutes mes questions !",
          likes: 20,
          avatar: "6.jpg"
        },
        {
          name: "Olga",
          text: "C'est incroyable! Tous les événements se sont réunis comme des pièces de puzzle, et l'une des prédictions s'est déjà réalisée !",
          likes: 22,
          avatar: "7.jpg"
        },
        {
          name: "Mark",
          text: "Eh bien, ils ont dit que j'irais bien, même si je le savais déjà moi-même, quelles que soient les prédictions.",
          likes: 19,
          avatar: "8.jpg"
        },
        {
          name: "Marina",
          text: "Des gens comme ça sont une bénédiction. Merci, j'ai pu protéger mon fils.",
          likes: 22,
          avatar: "9.jpg"
        },
        {
          name: "Anastasie",
          text: "Je suppose que tout cela n'est qu'un mensonge ou de l'auto-indulgence, eh bien pour ceux qui ont obtenu un match ou deux.",
          likes: 21,
          avatar: "10.jpg"
        }
      ]
    };
  }
};

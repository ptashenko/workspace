import moment from "moment";

export default {
  data() {
    return {
      comments: [
        {
          avatar: "1.jpg",
          name: "Μικαέλα Κ.",
          text: "Ανυπομονώ να ξεκινήσω. Έχει σημασία ποια τράπεζα χρησιμοποιείς για την ανάληψη;",
          date: this.setCommentDate(0),
        },
        {
          avatar: "2.jpg",
          name: "Αιμιλία Φ.",
          text: "Ετχαριστώ για την ευκαιρία. Κάλεσα κι εγγράφηκα.  Ανυπομονώ να ξεκινήσω να λαμβάνω χρήματα.",
          date: this.setCommentDate(1),
        },
        {
          avatar: "3.jpg",
          name: "Φιλιππία Ν.",
          text: "Επιτέλους, τουλάχιστον ένα θετικό πράγμα! Σ'ευχαριστώ, δούλεψαν όλα τέλεια!",
          date: this.setCommentDate(2),
        },
        {
          avatar: "4.jpg",
          name: "Έλλη Μπ. ",
          text: "Μπορώ να προσκαλέσω φίλους και συγγενείς; Υπάρχει περιορισμένος αριθμός συμμετοχόντων;",
          date: this.setCommentDate(3),
        },
        {
          avatar: "5.jpg",
          name: "Σάρα Β. ",
          text: "Πότε μπορώ να ξεκινήσω επιτέλους;",
          date: this.setCommentDate(4),
        },
        {
          avatar: "6.jpg",
          name: "Δανάη Ε. ",
          text: "Μίλησαν στην τηλεόραση για αυτό το πείραμα;",
          date: this.setCommentDate(5),
        },
        {
          avatar: "7.jpg",
          name: "Βίκυ Λ.",
          text: "Περιέργως πήρε παραπάνω από όσο έπρεπε. Αλλά, όπως και να έχει, έλαβα τα πάντα. Ευχαριστώ για την ευκαιρία.",
          date: this.setCommentDate(6),
        },
        {
          avatar: "8.jpg",
          name: "Σταματία Π. ",
          text: "Συμμετείχα πέρσι. Μπορώ να συμμετέχω ξανά και φέτος;",
          date: this.setCommentDate(7),
        },
        {
          avatar: "9.jpg",
          name: "Κώστας Τ.",
          text: "Γιατί δεν μπορώ να εγγραφώ;",
          date: this.setCommentDate(8),
        },
        {
          avatar: "10.jpg",
          name: "Λαέρτης Δ.",
          text: "Έβγαλα τόσα πολλά λεφτά με το πείραμα όσα και στην κανονική μου δουλειά σε έξι μήνες. Μην χάσετε αυτήν την ευκαιρία και καλέστε αυτόν τον αριθμό!",
          date: this.setCommentDate(9),
        },
      ],
    };
  },
  methods: {
    setCommentDate(day) {
      return moment().add(-day, "day").format("DD.MM.YYYY");
    },
  },
};

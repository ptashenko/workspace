import dayjs from 'dayjs';

export default {
    data() {
        return {
            comments: [
                    {
                      avatar: '1.jpg',
                        name: 'Mihaela C.',
                        text: 'Abia aștept să încep. Contează ce bancă folosești pentru retragere?',
                      date: this.setCommentDate(0),
                    },
                    {
                      avatar: '2.jpg',
                        name: 'Ana F.',
                        text: 'Mulțumesc pentru oportunitate.  Am sunat și m-am înregistrat. Abia aștept să încep și să primesc banii!',
                      date: this.setCommentDate(1),
                    },
                    {
                      avatar: '3.jpg',
                        name: 'Florina F.',
                        text: 'În sfârșit, cel puțin un lucru pozitiv despre acest an! Mulțumesc, totul a mers perfect.',
                      date: this.setCommentDate(2),
            },
                    {
                      avatar: '8.jpg',
                        name: 'Bogdan C.',
                        text: 'Am participat și anul trecut. Pot intra iar anul acesta?',
                      date: this.setCommentDate(2),
            },
                    {
                      avatar: '4.jpg',
                        name: 'Mădălina L.',
                      text: 'Pot să invit prieteni și rude? Există un număr fix de participanți?',
                      date: this.setCommentDate(3),
                      button: true,
            },
                    {
                      avatar: '9.jpg',
                        name: 'Cornel P.',
                        text: 'De ce nu mă pot înscrie?',
                      date: this.setCommentDate(3),
                    },
                    {
                      avatar: '5.jpg',
                        name: 'Cătălina B.',
                        text: 'Când pot să încep?',
                      date: this.setCommentDate(4),
                    },
                    {
                      avatar: '6.jpg',
                        name: 'Denisa C.',
                        text: 'Au vorbit despre acest experiment și la televizor?',
                      date: this.setCommentDate(4),
            },
                    {
                      avatar: '10.jpg',
                        name: 'Leroy',
                        text: 'J\'ai gagné autant de cette expérience que j\'ai gagné de mon travail régulier en six mois. Ne manquez pas l\'occasion et appelez ce numéro!',
                      date: this.setCommentDate(5),
                    },
                    {
                      avatar: '7.jpg',
                        name: 'Radu M.',
                        text: 'Am câștigat la fel de mult cu acest experiment cât am făcut cu slujba mea obișnuită în șase luni. Nu pierdeți o astfel de oportunitate și sunați la acel număr!',
                      date: this.setCommentDate(5),
                    },
                ],
        }
    },
    methods: {
        setCommentDate(day) {
            return dayjs().locale('ro').add(- day, 'day').format('DD.MM.YYYY');
        },
    }
}
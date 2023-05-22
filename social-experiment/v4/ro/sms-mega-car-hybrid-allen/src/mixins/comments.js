import moment from 'moment'

export default {
    data() {
        return {
            comments: [
                {
                    avatar: '1ava.jpg',
                    name: 'Maria Ionescu',
                    text: 'Anul acesta este posibil să merg în concediu. :) Iar partea cea mai bună este că în timp ce eu voi sta și mă voi relaxa, sistemul va lucra și voi câștiga bani zi și noapte. Nu este doar o poveste, ci este realitatea adevărată.',
                    date: this.setCommentDate(0),
                },
                {
                    avatar: '2ava.jpg',
                    name: 'Ioana Vasilescu',
                    text: 'Am văzut la știri.',
                    date: this.setCommentDate(1),
                },
                {
                    avatar: '3ava.jpg',
                    name: 'Gheorghe Ionescu',
                    text: 'Tocmai ce mi-ai încasat banii...Nu mai așteptaţi, oameni buni, profitaţi și voi și înregistraţi-vă. Dacă rataţi șansa asta, o să regretaţi toată viaţa.',
                    date: this.setCommentDate(2),
                },
                {
                    avatar: '4ava.jpg',
                    name: 'Mădălina Popa',
                    text: 'Pur și simplu nu înţeleg de ce unii oameni nu vor să facă bani. Nu trebuie decât să asculţi câteva minute instrucţiunile la telefon, iar acestea sunt atât de simple și mult mai folositoare decât toate cărţile de făcut bani scrise până acum!',
                    date: this.setCommentDate(3),
                },
                {
                    avatar: '5ava.jpg',
                    name: 'Ion Popescu',
                    text: 'Am folosit banii pentru a-mi deschide propria patiserie, așa că acum am două surse de venit!',
                    date: this.setCommentDate(4),
                },
            ],
        }
    },
    methods: {
        setCommentDate(day) {
            return moment().add(- day, 'day').format('DD.MM.YYYY');
        },
    }
}
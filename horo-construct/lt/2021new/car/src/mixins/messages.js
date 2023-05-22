import moment from 'moment'

export default {
    data() {
        return {
            messages: [
                {
                    text: 'Ar jums įdomu jūsų ateitis? Kokie džiaugsmai ar problemos jūsų laukia artimiausiu metu ir kaip galite pakreipti situaciją teisinga linkme.',
                    type: 'text'
                },
                {
                    text: 'Atskleisime ateities paslaptį ir labai tiksliai papasakosime, kas nutiks tau ir tavo artimiesiems',
                    type: 'text'
                },
                {
                    text: 'Daugelis žmonių netiki prognozėmis ir mes nusprendėme visiems įrodyti, kad asmeninė astrologinė prognozė gali pakeisti bet kurio gyvenimą!',
                    type: 'text'
                },
                {
                    text: 'Jums gali kilti abejonių, bet vos per 3 minutes jūsų abejonės dings amžiams!',
                    type: 'text'
                },
                {
                    text: 'Kokia jūsų lytis?',
                    answers: [
                        {
                            id: 1,
                            answer: 'Vyras',
                            active: false
                        }, {
                            id: 2,
                            answer: 'Moteris',
                            active: false
                        }
                    ],
                    type: 'question'
                },
                {
                    text: 'Mes jums pasakysime viską, kas gali jaudinti jus ir jūsų šeimą. Įsitikinkite patys!',
                    type: 'text'
                },
                {
                    text: 'Kada jautiesi patogiausiai?',
                    answers: [
                        {
                            id: 5,
                            answer: 'Ryte',
                            active: false
                        }, {
                            id: 6,
                            answer: 'Naktį',
                            active: false
                        }, {
                            id: 7,
                            answer: 'Vakare',
                            active: false
                        }, {
                            id: 8,
                            answer: 'Dieną',
                            active: false
                        }
                    ],
                    type: 'question'
                },
                {
                    text: 'Labai greitai sužinosite daug įdomių dalykų apie savo ateitį!',
                    type: 'text'
                },
                {
                    text: 'Įveskite savo gimimo datą:',
                    type: 'date',
                    stop: true
                },
                {
                    text: 'Mūsų prognozė padeda šeimoms išspręsti problemas ir vienišiams rasti savo sielos draugą. Mes padėsime visiems su instrukcijomis, kaip lengvai pradėti uždirbti didelius pinigus.',
                    type: 'text'
                },
                {
                    text: 'Sakyk, ar pastaruoju metu tave vargina nemiga?',
                    answers: [
                        {
                            id: 9,
                            answer: 'Taip',
                            active: false
                        }, {
                            id: 10,
                            answer: 'Ne',
                            active: false
                        }, {
                            id: 11,
                            answer: 'Kartais',
                            active: false
                        }
                    ],
                    type: 'question'
                },
                {
                    text: 'Įrašas gali sukrėsti žmones su savo tiesa.',
                    type: 'text'
                },
                {
                    text: 'Ar esate pasirengęs sužinoti, kas jūsų laukia?',
                    answers: [
                        {
                            id: 12,
                            answer: 'Taip',
                            active: false
                        }, {
                            id: 13,
                            answer: 'Negaliu pasakyti',
                            active: false
                        }
                    ],
                    type: 'question',
                    next:'recs'
                },
                {
                    text: 'Dėkojame už atsakymus.\n' +
                        'Parengėme asmeninį garso įrašą su jūsų prognoze.\n',
                    type: 'text'
                },
                {
                    text: `Sužinosite, kaip artimiausiu metu galite paveikti jūsų laukiančius įvykius. Pirmasis reikšmingas įvykis gali įvykti jau <span style="font-weight: normal;color: #4166B1;">${this.changesDate()}</span>. Turite būti pasirengę išvengti blogų pasekmių`,
                    type: 'text'
                },
                {
                    text: 'Dabar spustelėkite apačioje esantį mygtuką ir surinkite mūsų telefono numerį. Išklausykite svarbią informaciją!',
                    type: 'text'
                }
            ],
            zodiak: null
        }
    },
    methods: {
        socralNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        changesDate() {
            moment.locale('lt');
            var currentDay = moment().format('MMMM DD');
            var nextDay = moment().add(1, 'day').format('MMMM DD');
            return `${currentDay}-${nextDay}`
        }
    }
}
import moment from 'moment'
import zodiaks from '../assets/zodiaks'

export default {
    data() {
        return {
            zodiaks,
            messages: [
                {
                    text: 'Salutări! Mulți oameni nu cred în predicțiile astrale. De aceea vreau să demonstrez că prognoza astrologică poate schimba viața oricărei persoane. Chiar și pe a ta!',
                    type: 'text'
                },
                {
                    text: 'Sunt astrolog-consultant profesionist, profesor de astrologie clasică. De 19 ani încoace am ajutat numeroase familii să-și rezolve problemele personale, fetele singure să-și găsească sufletul pereche, le-am spus șomerilor cum pot să înceapă să câștige bani cu adevărat, iar pe oamenii de afaceri i-am ghidat în construirea unor afaceri extrem de solide și profitabile.',
                    type: 'text'
                },
                {
                    text: 'Numai 3 minute și vei învăța o mulțime de lucruri interesante despre viitorul tău! Spune-mi, ce te interesează cel mai mult în acest moment?',
                    answers: [
                        {
                            id: 1,
                            answer: 'Sănătate',
                            active: false
                        },{
                            id: 2,
                            answer: 'Bani',
                            active: false
                        },{
                            id: 3,
                            answer: 'Familie și relații',
                            active: false
                        },{
                            id: 4,
                            answer: 'Toate',
                            active: false
                        }
                    ],
                    type: 'question'
                },
                {
                    text: 'În regulă, îți mulțumesc. Acum îți voi mai adresa 3 întrebări. În ce moment al zilei te simți cel mai confortabil?',
                    answers: [
                        {
                            id: 5,
                            answer: 'Dimineața',
                            active: false
                        },{
                            id: 6,
                            answer: 'Noaptea',
                            active: false
                        },{
                            id: 7,
                            answer: 'Seara',
                            active: false
                        },{
                            id: 8,
                            answer: 'Ziua',
                            active: false
                        }
                    ],
                    type: 'question'
                },
                {
                    text: 'Am înțeles. Spune-mi, te chinui insomniile în ultima vreme?',
                    answers: [
                        {
                            id: 9,
                            answer: 'Da',
                            active: false
                        },{
                            id: 10,
                            answer: 'Nu',
                            active: false
                        },{
                            id: 11,
                            answer: 'Uneori',
                            active: false
                        }
                    ],
                    type: 'question'
                },
                {
                    text: 'Iată și ultima întrebare: În ultima vreme simți că nu ai reușit să îți duci la bun sfârșit planurile?',
                    answers: [
                        {
                            id: 12,
                            answer: 'Da',
                            active: false
                        },{
                            id: 13,
                            answer: 'Nu',
                            active: false
                        },{
                            id: 14,
                            answer: 'Uneori',
                            active: false
                        }
                    ],
                    type: 'question'
                },
                {
                    text: 'Îți mulțumesc că mi-ai răspuns la toate întrebările.',
                    type: 'text'
                },
                {
                    text: ' Mai am nevoie de o informație foarte importantă, așa că te rog să îmi scrii data ta de naștere.',
                    type: 'text'
                },
                {
                    text: 'Poți folosi numere:',
                    type: 'date',
                    stop: true
                },
                {
                    text: `Excelent. Numărul destinului tău este <span style="font-weight: normal;color: #4166B1;">${this.socralNumber(4, 10)}</span>, și vreau să te atenționez că acest număr îmi indică și un avertisment.`,
                    type: 'text'
                },
                {
                    text: 'Știu că adesea te îndoiești de deciziile luate și îți faci griji dacă ai făcut ce trebuie într-o situație dată.',
                    type: 'text'
                },
                {
                    text: `În curând vei primi știri la care nu te aștepți. Este posibil ca pe <span style="font-weight: normal;color: #4166B1;">${this.changesDate()}</span>, lumea ta să fie întoarsă pe dos (probleme de familie).`,
                    city: true
                },
                {
                    text: 'Îți voi înregistra chiar acum un mesaj vocal pe care îl poți asculta apelându-mă de pe telefonul tău mobil.',
                    type: 'text'
                },
                {
                    text: 'În partea de jos a ecranului apare butonul „Sună Acum”. Apasă pe el și se va forma numărul meu. Ascultă aceste informații extrem de importante pentru tine!',
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
            moment.locale('ro');
            var currentDay = moment().format('DD');
            var nextDay = moment().add(1, 'day').format('DD MMMM');
            return `${currentDay}-${nextDay}`
        },
        dynamicText(text, index) {
            var city = `În curând vei primi știri la care nu te aștepți. Este posibil ca pe <span style="font-weight: normal;color: #4166B1;">${this.changesDate()}</span>. lumea ta să fie întoarsă pe dos (probleme de familie).`;
            var textToSend;
            switch (text) {
                case 'city':
                    textToSend = city;
                    break;
                default:
                    textToSend = text;
                    break;
            }
            this.messages.splice(this.midx + index, 1, {text: textToSend});
        },
        getZodiak() {
            var zodiak;
            switch (this.pickedMonth) {
                case 1:
                    if (this.pickedDay < 20) {
                        zodiak = 10;
                    } else {
                        zodiak = 11;
                    }
                    break;
                case 2:
                    if (this.pickedDay < 19) {
                        zodiak = 11;
                    } else {
                        zodiak = 12;
                    }
                    break;
                case 3:
                    if (this.pickedDay < 21) {
                        zodiak = 12;
                    } else {
                        zodiak = 1;
                    }
                    break;
                case 4:
                    if (this.pickedDay < 20) {
                        zodiak = 1;
                    } else {
                        zodiak = 2;
                    }
                    break;
                case 5:
                    if (this.pickedDay < 21) {
                        zodiak = 2;
                    } else {
                        zodiak = 3;
                    }
                    break;
                case 6:
                    if (this.pickedDay < 21) {
                        zodiak = 3;
                    } else {
                        zodiak = 4;
                    }
                    break;
                case 7:
                    if (this.pickedDay < 23) {
                        zodiak = 4;
                    } else {
                        zodiak = 5;
                    }
                    break;
                case 8:
                    if (this.pickedDay < 23) {
                        zodiak = 5;
                    } else {
                        zodiak = 6;
                    }
                    break;
                case 9:
                    if (this.pickedDay < 23) {
                        zodiak = 6;
                    } else {
                        zodiak = 7;
                    }
                    break;
                case 10:
                    if (this.pickedDay < 23) {
                        zodiak = 7;
                    } else {
                        zodiak = 8;
                    }
                    break;
                case 11:
                    if (this.pickedDay < 22) {
                        zodiak = 8;
                    } else {
                        zodiak = 9;
                    }
                    break;
                case 12:
                    if (this.pickedDay < 22) {
                        zodiak = 9;
                    } else {
                        zodiak = 10;
                    }
                    break;
            }
            return this.zodiaks[zodiak - 1];
        }
    }
}
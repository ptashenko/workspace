<template>
    <section class="chat" ref="chat">
        <div class="header">
            <div class="header-wrap">
                <div class="header-avatar">
                    <img class="header__avatar avatar__img" src="../assets/img/person-goroskop.png" alt/>
                </div>
                <div class="header-text">
                    <div class="header-text__name">{{person}}</div>
                    <div class="header-text__who">Horoscope personnel</div>
                    <div class="header-text__who">certifié astrologue</div>
                    <div class="header-text__answers">   Réponses : 9 342 - Précision des prévisions : 97 %</div>
                </div>
            </div>
        </div>
        <div class="main" ref="main">
            <transition-group name="fade" class="blow" ref="blow" tag="div">
                <div
                        class="message"
                        v-for="(message,index) in delivered"
                        :key="message + index"
                        :class="{'message--user' : message.user}"
                >
                    <div class="message-header" v-if="!message.user">
                        <div class="message-header-avatar">
                            <img src="../assets/img/person-goroskop.png" class="message-header__avatar avatar__img"
                                 alt/>
                        </div>
                        <div class="message-header__name">{{person}}:</div>
                    </div>
                    <span class="message__text" v-html="message.text"></span>
                    <div class="container-button" v-show="message.type === 'question' && index === idx - 1">
                        <button
                                class="container__button"
                                v-for="(answer,id) in message.answers"
                                :key="id"
                                :class="{'message--user' : message.user}"
                                @click="next(answer, message)"
                                v-html="answer.answer"
                        ></button>
                    </div>
                    <div
                            class="date"
                            @change="checkBirth"
                            v-if="message.type === 'date' && !userBirthDay"
                    >
                        <select
                                class="date__item"
                                :class="{'date__item--active': pickedDay}"
                                v-model.trim="pickedDay"
                        >
                            <option value>Jour</option>
                            <option v-for="day in days" :value="day">{{day < 10 ? '0' + day : day}}</option>
                        </select>
                        <select
                                class="date__item"
                                :class="{'date__item--active': pickedMonth}"
                                v-model="pickedMonth"
                        >
                            <option value>Mois</option>
                            <option v-for="month in months" :value="month">{{month < 10 ? '0' + month : month}}</option>
                        </select>
                        <select
                                class="date__item"
                                :class="{'date__item--active': pickedYear}"
                                v-model="pickedYear"
                        >
                            <option value>Année</option>
                            <option v-for="year in years" :value="year">{{year < 10 ? '0' + year : year}}</option>
                        </select>
                    </div>
                    <span class="message__text" v-if="message.type === 'timer'">En raison d'un flux important de visiteurs, l'enregistrement sera supprimé dans
                        <b> {{ getCurrentMin }}:{{ getCurrentSec }} </b>
                    </span>
                </div>
            </transition-group>

            <transition name="fade">
                <div class="typing" v-if="typing">
                    {{person}} est en train d'écrire
                    <span class="dot" v-for="(dot,index) in 3" :key="dot + index"></span>
                </div>
            </transition>
            <transition name="fade">
             <div class="result-blocks"   v-if="midx === messages.length">
                <CallButton @phone-number="getPhoneNumber" :phoneFromAnothButton="phoneNumber"/>
                <Comments>
                    <CallButton @phone-number="getPhoneNumber" :phoneFromAnothButton="phoneNumber"/>
                </Comments>
                <CallButton @phone-number="getPhoneNumber" :phoneFromAnothButton="phoneNumber"/>
             </div>
            </transition>
        </div>
    </section>
</template>


<style lang="scss" scoped>
    @import "../assets/animations.css";

    .avatar__img {
        border-radius: 50%;
        border: 1px solid #4166b1;
    }

    .chat {
        position: relative;
        height: 100%;
        min-height: 100%;
        padding-top: 71px;
    }

    .header {
        background: #f2f3f5;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08);
        height: 71px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;

        &-wrap {
            padding: 0 15px;
            display: flex;
            align-items: center;
            max-width: 400px;
            margin: 0 auto;
            height: inherit;
        }

        &-avatar {
            margin-right: 11px;
            width: 57px;
            height: 57px;
            position: relative;

            &:after {
                content: "";
                width: 9px;
                height: 9px;
                border: 1px solid #fff;
                background: #3dba2e;
                position: absolute;
                bottom: 6px;
                right: 3px;
                border-radius: 50%;
            }
        }

        &__avatar {
            max-width: 100%;
        }

        &-text {
            color: #4166b1;

            &__name {
                font-size: 14px;
                font-weight: bold;
                line-height: 16px;
            }

            &__who {
                font-size: 12px;
            }

            &__answers {
                font-size: 9px;
            }
        }
    }

    .main {
        height: 100%;
        min-height: 100%;
        padding: 25px 15px 10px 15px;
        max-width: 400px;
        margin: 0 auto;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: 0px;
        }
    }

    .blow {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
    }

    .message {
        background: #f1f1f4;
        border-radius: 0 10px 10px 10px;
        padding: 10px 15px;
        position: relative;
        margin-bottom: 11px;
        width: 100%;

        .container-button {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 15px;

            .container__button {
                border-radius: 25px;
                border: 1px solid black;
                padding: 8px 0;
                color: black;
                font-weight: 500;
                font-size: 14px;
                outline: none;
                width: 35%;
                margin: 5px 0;
                background-color: #f2f3f5;
            }
        }

        &-header {
            display: flex;
            align-items: center;
            margin-bottom: 7px;

            &__name {
                color: #4166b1;
                font-weight: 500;
                font-size: 13px;
            }

            &-avatar {
                width: 28px;
                height: 28px;
                margin-right: 10px;
            }

            &__avatar {
                max-width: 100%;
            }
        }

        &--user {
            display: inline-block;
            width: auto;
            background: #3578e5;
            color: #fff;
            min-width: 150px;
            display: flex;
            justify-content: center;
            border-radius: 10px 0 10px 10px;
        }
    }

    .typing {
        color: #b3b3b3;
        font-size: 12px;
    }

    .fade-enter-active {
        transition: opacity 0.5s;
    }

    .fade-enter {
        opacity: 0;
    }

    .date {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 20px;

        &__item {
            margin-bottom: 5px;
            border-radius: 25px;
            border: none;
            padding: 6px 24px;
            color: #4166b1;
            font-weight: 500;
            font-size: 14px;
            appearance: none;
            outline: none;
            min-width: 91px;
            text-align: center;
            text-align-last: center;
            position: relative;
            background: url("../assets/img/tringl_sel.svg") no-repeat 90% 50%, #e6effe;

            &--active {
                background: url("../assets/img/tringl_sel-active.svg") no-repeat 90% 50%,
                #3578e5;
                color: #fff;
            }

            &:not(:last-child) {
                margin-right: 5.5px;
            }
        }
    }

    .chatInput {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 10px 18px;
        display: flex;
        align-items: center;
        background: #fff;
        max-width: 400px;
        margin: 0 auto;

        &__input {
            width: 90%;
            margin-right: 6px;
            background: #f8f8f8;
            border: 1px solid #ececec;
            border-radius: 16px;
            height: 38px;
            padding: 8px 21px;
            color: #040303;
            font-weight: 300;
            font-size: 14px;
            outline: none;

            &::placeholder {
                color: #040303;
            }

            &:hover {
                &::placeholder {
                    color: transparent;
                }
            }
        }

        &__button {
            border: none;
            outline: none;
            background: none;
            cursor: pointer;
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;

            img {
                width: 24px;
                height: 24px;
            }
        }
    }


    .dot {
        display: inline-block;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        margin-left: 3px;
        background: #b3b3b3;
        animation: vawe 1.3s linear infinite;

        &:nth-child(2) {
            animation-delay: -1.1s;
        }

        &:nth-child(3) {
            animation-delay: -0.9s;
        }
    }

    @keyframes vawe {
        0%,
        60%,
        100% {
            transform: initial;
        }

        30% {
            transform: translateY(-7px);
        }
    }
</style>

<script>
    import messages from "../mixins/messages";

    import CallButton from "../components/CallButton.vue";
    import Comments from "../components/Comments/Comments.vue"

    export default {
        data() {
            return {
                midx: 0,
                idx: 0,
                typing: true,
                days: null,
                months: null,
                years: null,
                userBirthDay: null,
                pickedDay: "",
                pickedMonth: "",
                pickedYear: "",
                userMessage: "",
                chatForm: false,
                city: null,
                delivered: [],
                innerHeight: window.innerHeight,
                phoneNumber: null,
                time: 180,
            };
        },
        props: ['person'],
        mixins: [messages],
        components: {CallButton, Comments },
        methods: {
            scroll() {
                let height = this.$refs.main;
                setTimeout(() => {
                    height.scrollTop = height.scrollHeight;
                }, 500);
            },
            scrollToComments() {
                let height = this.$refs.main;

                setTimeout(() => {
                    height.scrollTop =  this.$refs.blow.$el.scrollHeight - 200;
                }, 500);
            },
            next(answer) {
                this.typing = true;
                this.delivered.push({
                    text: `${answer.answer}`,
                    type: 'answer',
                    user: true
                });
                this.idx++;
                this.scroll();
                this.chat();
            },
            chat() {
                window.scrollTo(0, 0);
                this.typing = true;
                this.chatForm = false;
                let l = setInterval(() => {
                    if (this.messages[this.midx].type === 'timer') {
                        const interval = setInterval(() => {
                            this.time > 0 ? (this.time -= 1) : clearInterval(interval);
                        }, 1000); 
                    }
                    if (this.messages[this.midx].type !== 'question') {
                        this.typing = true;
                        this.delivered.push(this.messages[this.midx]);
                        this.midx++;
                        this.idx++;
                        if (this.midx !== this.messages.length) {
                            this.scroll();
                        }

                        if (this.midx === this.messages.length) {
                            this.$emit('view', true);
                            this.scrollToComments();
                        } 
                        if (
                            this.midx === this.messages.length ||
                            this.messages[this.midx - 1].stop
                        )
                            clearInterval(l), (this.chatForm = true), (this.typing = false);

                    } else if (this.messages[this.midx].type == 'question') {
                        this.delivered.push(this.messages[this.midx]);
                        this.midx++;
                        this.idx++;
                        this.scroll();
                        clearInterval(l), (this.chatForm = true), (this.typing = false);
                    }
                }, 7000); // 7000
            },
            genBirthDay(min, max) {
                let array = [];
                for (let i = min; i <= max; i++) {
                    array.push(i);
                }
                return array;
            },
            sendMessage(message) {
                this.delivered.push({
                    text: message,
                    user: true
                });
                this.scroll();
                this.chat();
                this.userMessage = "";
            },
            checkBirth() {
                if (this.pickedDay && this.pickedMonth && this.pickedYear) {
                    this.userBirthDay = `${
                        this.pickedDay < 10 ? "0" + this.pickedDay : this.pickedDay
                    }.${
                        this.pickedMonth < 10 ? "0" + this.pickedMonth : this.pickedMonth
                    }.${this.pickedYear}`;
                    this.sendMessage(this.userBirthDay);
                }
            },
            getPhoneNumber(phoneNumber) {
               this.phoneNumber = phoneNumber;
            }
        },
        computed: {
            getCurrentMin() {
                let min = Math.floor((this.time % 3600) / 60);
                if (min < 10) min = "0" + min;
                return `${min}`;
            },
            getCurrentSec() {
                let sec = Math.floor((this.time % 3600) % 60);
                if (sec < 10) sec = "0" + sec;
                return `${sec}`;
            },
        },
        mounted() {
            this.chat();
            this.days = this.genBirthDay(1, 31);
            this.months = this.genBirthDay(1, 12);
            this.years = this.genBirthDay(
                1900,
                new Date().getFullYear()
            ).reverse();
        }
    };
</script>
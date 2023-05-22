<template>
    <div class="main">
        <div class="questions-list">
            <div class="questions-list-loader" :class="{'active': showCheck}">
                <svg :class="{'checkmark': showCheck}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
            </div>
            <div class="questions-list-container">
                <div class="questions-list-item" v-for="(question, index) in questions" v-if="qID === index">
                    <div class="list-item-subtitle">
                        <h3 v-html="'Întrebarea Nr. ' + (index + 1)"></h3>
                    </div>
                    <div class="list-item-title">
                        <h3 v-html="question.title"></h3>
                    </div>
                    <div class="list-item-questions">
                        <button type="button" v-for="q in question.answers" v-html="q.text" @click="nextQuestion"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import questions from './questions'
    export default {
        name: "questions-list",
        data: () => ({
            questions,
            qID: 0,
            showCheck: false
        }),
        methods: {
            nextQuestion() {
                this.showCheck = !this.showCheck;
                setTimeout(() => {
                    this.showCheck = !this.showCheck;
                    this.qID++;
                    if ( this.qID === this.questions.length ) {
                        this.$emit('showPhoneForm', 1);
                    }
                }, 2000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $green: #7ac142;
    $white: #fff;
    $curve: cubic-bezier(0.650, 0.000, 0.450, 1.000);

    .questions {
        &-list {
            position: relative;
            &-loader {
                position: absolute;
                display: none;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: #ffffff;
                &.active {
                    display: block;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                }
            }
            .list {
                &-item {
                    &-title {
                        h3 {
                            font-size: 25px;
                            color: #1a2842;
                        }
                    }
                    &-questions {
                        button {
                            display: block;
                            margin: 0 auto 10px;
                            width: 100%;
                            border: 3px solid #2f9e31;
                            outline: none;
                            font-size: 16px;
                            font-weight: bold;
                            text-align: center;
                            padding: 10px 10px;
                            background: #ffffff;
                            -webkit-border-radius: 20px;
                            -moz-border-radius: 20px;
                            border-radius: 20px;
                        }
                    }
                }
            }
        }
    }
    .checkmark {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin: auto;
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        display: block;
        stroke-width: 2;
        stroke: $white;
        stroke-miterlimit: 10;
        box-shadow: inset 0px 0px 0px $green;
        animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
        &__circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 2;
            stroke-miterlimit: 10;
            stroke: $green;
            fill: none;
            animation: stroke .6s $curve forwards;
        }
        &__check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: stroke .3s $curve .8s forwards;
        }
    }

    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes scale {
        0%, 100% {
            transform: none;
        }
        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
    }

    @keyframes fill {
        100% {
            box-shadow: inset 0px 0px 0px 30px $green;
        }
    }
</style>
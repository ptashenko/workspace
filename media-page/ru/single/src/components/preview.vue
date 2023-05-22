<template>
    <section class="preview">
        <div class="label">
            Не получилось дозвониться?
        </div>
        <div class="preview-content">
            <div class="text">
            <span class="text--bold">
                Или хотите получить результат в текстовом виде?
            </span>
            </div>
            <div class="text">
                Не беда! Просто отправьте смс, нажав на кнопку ниже.
            </div>
            <div class="text">
                И в ответ
                <span class="text--bold">
                я пришлю вам ваш персональный прогноз с моими личными советами и подробной интерпретацией подсказок звезд.
            </span>
            </div>
            <div class="gift">
                <img class="gift__img" src="../assets/img/gift.png" alt="">
            </div>
            <div class="text">
                Дополнительно
                <span class="text--bold">
                я подарю вам ваш личный ритуал по дате рождения на привлечение удачи и финансового благополучия.
            </span>
                Действует даже в самых безнадежных ситуациях!
            </div>
            <div class="text text--send">
                Отправить СМС:
            </div>
            <div class="button-wrap">
                <button class="button">Получить прогноз</button>
            </div>
            <div class="copy">
                Termeni si conditii: acesta este un serviciu de divertisment. prin folosirea lui declarati ca aveti 18 ani impliniti,
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .button {
        background: linear-gradient(88.84deg, #FFAB00 1.45%, #FFD100 99.8%);
        border: 1px solid #FFD934;
        border-bottom: 4px solid #CE8146;
        box-sizing: border-box;
        border-radius: 30px;
        font-size: 1.25rem;
        height: 53px;
        width: 267px;
        &-wrap{
            text-align: center;
        }
    }
    .copy{
        color:#9D9D9D;
        font-size: 11px;
        letter-spacing: 3px;
        line-height: 9px;
        text-align: center;
        font-weight: 300;
        margin-top: 10px;
    }

    .label {
        background: linear-gradient(88.85deg, #FFAB00 1.45%, #FFD100 99.8%);
        padding: 20px;
        display: inline-block;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.313rem;
        margin-bottom: 0.875rem;
    }

    .preview {
        padding: 1.063rem 0;

        &-content {
            padding: 0 15px;
        }
    }

    .text {
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.188rem;
        color: #000;
        margin-bottom: 0.875rem;

        &--bold {
            font-weight: 500;
        }

        &--send {
            font-size: 0.75rem;
            line-height: 0.875rem;
        }
    }

    .gift {
        margin: 10px 0;
        text-align: center;

        &__img {
            width: 65px;
            height: 65px;
        }
    }
</style>


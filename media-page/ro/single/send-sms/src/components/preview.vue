<template>
    <section class="preview">
        <div class="label">
            Nu poți suna chiar acum?
        </div>
        <div class="preview-content">
            <div class="text">
            <span class="text--bold">
                Sau vrei să primești rezultatul sub forma unui text?
            </span>
            </div>
            <div class="text">
                Nici o problemă! Trebuie doar să trimiți un SMS apăsând butonul de mai jos.
            </div>
            <div class="text">
                O să îți răspund și
                <span class="text--bold">
                îți voi trimite predicțiile personale, alături de sfaturile mele personale, precum și o interpretare detaliată a ceea ce mi-au indicat astrele.
            </span>
            </div>
            <div class="gift">
                <img class="gift__img" src="../assets/img/gift.png" alt="">
            </div>
            <div class="text">
                În plus,
                <span class="text--bold">
                îți voi oferi propriul ritual, bazat pe data de naștere, pentru a atrage norocul și bunăstarea financiară
            </span>
                Funcționează chiar și în cele mai dificile situații!
            </div>
            <div class="text text--send">
                Trimite SMS:
            </div>
            <div class="button-wrap">
                <button class="button">Obține predicțiile</button>
            </div>
            <div class="copy">
                <p>© 2019. ABCMobile OÜ</p>
                <p>Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia</p>
                <p>Affiliate: mobstra.com</p>
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
        text-align: center;
        font-weight: 300;
        margin-top: 10px;
        @media(min-height: 700px){
            position: absolute;
            left: 50%;
            bottom: 15px;
            transform: translate(-50%,0);
            width: 100%;

        }
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


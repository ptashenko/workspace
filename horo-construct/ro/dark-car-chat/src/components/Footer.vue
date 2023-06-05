<template>
    <footer class="footer" ref='footer'>
        <p v-if="!view">
            © 2020. ABCMobile OÜ
            <br />
            Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia
            <br />
            Affiliate: mobstra.com 
        </p>
        <p v-else>
            Termeni și condiții: prin utilizarea acestui serviciu, confirmi că ai împlinit vârsta de minim 18 ani, aveti acordul titularului cartelei si sunteti de acord cu acesti termeni si conditii.  Prin apasarea tastei asculta mesajul veti fi redirectionat catre apelarea numarului sva aferent serviciului. Cost serviciu: 1.7 Euro + tva/minut in orange, vodafone, telekom fix si mobil. Acesta este un serviciu de divertisment. Prin accesarea serviciului sunteti de acord ca puteti primi mesaje de informare de la furnizorul serviciului legate de serviciile de divertisment oferite si noutati. In cazul utilizarii serviciului datele dvs. – Ex. Numarul de telefon, vor fi procesate doar in scopurile de mai sus. Furnizor serviciu: ABCMobile OÜ; Reg № 14710834; adresa: Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia. Support@abcmobile.com. Info serviciu voce: 0318260010, luni-vineri, 9:00-18:00. 
            <br />
            Affiliate: mobstra.com
        </p>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        font-size: 11px;
        position: relative;
        top: -25px;
        text-align: center;
        width: 100%;
        padding: 0 15px;
        background-color: #0c1117;
        
        p {
            color: #7b8b9e;
            max-width: 400px;
            margin: 0 auto;
        }
        a {
            text-decoration: none;
            color: #7b8b9e;
        }

        @media (max-width: 320px) {
            min-width: 283px;
        }
    }
</style>

<script>
    export default {
        props: ['view'],
        computed: {
            call() {
                return this.view
            }
        }
    }
</script>
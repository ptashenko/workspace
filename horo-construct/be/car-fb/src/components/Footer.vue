<template>
    <footer class="footer" :style="{bottom: -height + 35 + 'px'} " ref='footer'>
        <p v-if="!view">
            © {{new Date().getFullYear()}}. <span class="noaff">GMTech Media OÜ</span><br>
            Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415, Estonia<br>
            <span class="noaff">Affiliate: mobstra.com</span>
        </p>
        <p v-else>
            Termeni și condiții: acesta este un serviciu de divertisment si timp liber cu acces cu plata. Cost per minut: 1.7 euro + tva. Prin utilizarea acestui serviciu confirmati că ati împlinit vârsta de 16 ani, aveti acordul titularului cartelei si sunteti de acord cu acesti termeni si conditii. Prin apasarea tastei, de ex. “Obtineti serviciu/Suna/Asculta/etc”  veti fi redirectionat catre casuta de apeluri de unde puteti initia serviciul. Prin accesarea serviciului sunteti de acord ca puteti primi mesaje de informare de la furnizorul serviciului legate de serviciile de divertisment oferite si noutati. In cazul utilizarii serviciului datele dvs. – Ex. numarul de telefon, vor fi procesate doar in scopurile de mai sus. Furnizor serviciu: GMTech Media OÜ; Reg № 16350328; adresa: Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415, Estonia. <a href="mailto:support@gmtechmedia.com">support@gmtechmedia.com</a>. Info serviciu voce: 0318260010, luni-vineri, 9:00-18:00. 
            <br>
            <span class="noaff">Affiliate: mobstra.com</span>
        </p>
    </footer>
</template>

<style lang="scss">
    .footer {
        margin: 0 auto;
        font-size: 11px;
        text-align: center;
        color: #7B8B9E;
        width: 100%;
        max-width: 400px;
        padding: 0 15px;
        background: white;

        a {
            color: #7B8B9E;
        }

        @media (max-width: 320px) {
            min-width: 283px;
        }
    }
</style>

<script>
    export default {
        props: ['view'],
        data: () => ({
            height: null
        }),
        computed: {
            call() {
                return this.view
            }
        },
        mounted() {
            this.height = this.$refs.footer.clientHeight
        },
        watch: {
            call: {
                handler: function () {
                    setTimeout(() => {
                        this.height = this.$refs.footer.clientHeight
                    })
                }
            }
        }

    }
</script>
<template>
    <div id="app">
        <Chat v-if="couner === 0" :clickID="click_id" :skey="key" @next="next" @sendZodiak="getZodiak" :person="person" />

    </div>
</template>

<script>
    import "normalize.css";
    import Chat from "./screens/Chat";
    import {postSubs} from "./services/landAPI";

    export default {
        name: "app",
        data: function () {
            return {
                person: "Horoscop personal",
                zodiak: null,
                couner: 0,
                click_id: null,
                key: null,
                QUERY: this.getQuery(window.location.search) || null
            }
        },
        components: {
            Chat
        },
        methods: {
            getZodiak(zodiak) {
                this.zodiak = zodiak;
            },
            next(data) {
                this.couner += data;
            },
            keyGenerate(length) {
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (let i = 0; i < length; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            },
            getQuery(string) {
                return string.slice(1).split("&")
                    .map((queryParam) => {
                        let kvp = queryParam.split("=");
                        return {key: kvp[0], value: kvp[1]}
                    })
                    .reduce((query, kvp) => {
                        query[kvp.key] = kvp.value;
                        return query
                    }, {})
            }        
        },
        mounted() {
            if (!this.QUERY.click_id) {
                this.key = this.keyGenerate(12);
                let data = JSON.stringify(this.QUERY);
                postSubs(data, this.key).then((response) => {
                    this.click_id = response.data;
                })
            } else {
                this.click_id = this.QUERY.click_id;
            }
        }
    };
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
    }

    html,
    body {
        font-family: "Roboto", sans-serif;
        min-width: 320px;
        height: 100%;
    }

    #app {
        background: #ede6dd;
        height: 100%;
    }
</style>

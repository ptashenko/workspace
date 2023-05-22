<template>
    <div id="app">
        <preview v-if="!done"/>
        <result v-else />
    </div>
</template>

<script>

    import preview from './components/preview'
    import result from './components/result'

    export default {
        name: 'app',
        data: () => ({
            done: true
        }),
        components: {
            preview,result
        }
    }
</script>

<style lang="scss">
    @import "~normalize.css";
    @import './assets/styles/animate.css';
    html, body {
        font-size: 16px;
        background: #031a5c;
        min-width: 320px;
        @media (min-width: 375px) {
            font-size: 18px;
        }
    }
    ::-webkit-scrollbar{
        display: none;
    }

    * {
        box-sizing: border-box;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        max-width: 400px;
        margin: 0 auto;
    }

</style>

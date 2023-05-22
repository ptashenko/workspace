<template>
    <div id="app">
        <result/>
    </div>
</template>

<script>

    import result from './components/result'

    export default {
        name: 'app',
        components: {
            result
        }
    }
</script>

<style lang="scss">
    @import "~normalize.css";
    @import './assets/styles/animate.css';
    html, body {
        font-size: 18px;
        background: #031a5c;
        min-width: 320px;
        @media (min-width: 375px) {
            font-size: 20px;
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

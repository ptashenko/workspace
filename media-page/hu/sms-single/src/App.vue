<template>
    <div id="app">
        <preview />
    </div>
</template>

<script>
    import preview from './components/preview'

    export default {
        name: 'app',
        components: {
            preview
        }
    }
</script>

<style lang="scss">
    @import "~normalize.css";
    @import './assets/styles/animate.css';
    html, body {
        font-size: 16px;
        background: #fff;
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

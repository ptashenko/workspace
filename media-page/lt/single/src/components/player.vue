<template>
    <vue-audio :file="media"></vue-audio>
</template>

<script>
    import VueAudio from 'vue-audio';
    export default {
        name: 'player',
        data: () => ({
            media: require('../assets/media/1.wav')
        }),
        components: {
            VueAudio
        }
    }
</script>
<style lang="scss">
    .vue-sound__playback-time-current,
    .vue-sound__playback-time-separator,
    .vue-sound__playback-time-total,
    .vue-sound__extern-wrapper,
    .icon-stop2{
        display: none !important;
    }
    .icon-play3{
        font-size: 0;
        height: 35px;
        width: 35px;
        position: relative;
        margin-right: 10px;
        cursor: pointer;
        &:after{
            content: url("../assets/img/playButton.svg");
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);

        }

    }
    .icon-pause2{
        cursor: pointer;
        font-size: 0;
        height: 35px;
        width: 35px;
        position: relative;
        margin-right: 10px;
        &:after{
            content: url("../assets/img/pauseButton.svg");
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);

        }

    }
    .vue-sound__playback-time-indicator{
        background: #5099ff !important;
        border-radius: 5px !important;
    }
    .vue-sound-wrapper .vue-sound__player .vue-sound__playback-time-wrapper{
        border-radius: 5px !important;
        height: 5px !important;
    }
    .vue-sound__player{
        display: flex;
        align-items: center;
    }

</style>
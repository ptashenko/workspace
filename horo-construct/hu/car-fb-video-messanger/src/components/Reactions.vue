<template>
    <div v-if="show" class="reaction">
        <div class="reaction__container">
            <div class="reaction__dot"></div>
            <img :src="addReaction" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .reaction {
        position: absolute;
        bottom: -12px;
        right: 8px;
        width: 23px;
        height: 23px;;
        border-radius: 50%;
        background-color: rgb(207, 224, 240);

        &__container {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            display: grid;
            place-items: center;
            .reaction__dot {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: rgb(121, 121, 121);
                border-radius: 50%;
                width: 5px;
                height: 5px;
                z-index: 0;
            }
            img {
                width: 15px;
                height: 15px;
                z-index: 2;
                animation: toBottom 1s ;
            }
        }
        
    }

    @keyframes toBottom {
        0% {
            transform: translate(0);
        }
        40% {
            transform: scale(1.5) translate(0, -15px);
        }
        60% {
            transform: scale(1.5) translate(0, -15px);
        }
        100% { 
            transform: scale(1) translate(0);
        }
    }
</style>

<script>
import fire from "../assets/img/reactions/fire.png"
import heart from "../assets/img/reactions/heart.png"
import thumb from "../assets/img/reactions/thumb.png"

export default {
    data () {
        return {
            reactions:[ fire, thumb, heart],
            show:false,
        }
    },
    methods: {
        getRandomReaction() {
            return this.reactions[Math.floor(Math.random() * 3)]
        },
    },
    computed: {
        addReaction () {
            return this.getRandomReaction()
        }
    },
    mounted () {
        let delay = setTimeout(()=>{
            this.show = true
            clearTimeout(delay)
        },2000)
    }
    
}
</script>
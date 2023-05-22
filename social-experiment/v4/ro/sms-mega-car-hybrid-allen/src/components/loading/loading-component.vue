<script>
    export default {
        name: "loadingComponent",
        props: {
            showModal: Boolean
        },
        methods: {
            loading: function () {
                let ths = this;
                setTimeout(function () {
                    ths.$emit('timeOut', 1);
                }, 5000)
            }
        },
        updated() {
            if ( this.showModal ) {
                this.loading();
            }

        }
    }
</script>

<template>
    <div class="loading" :class="{'active': showModal}">
        <div class="loading-container">
            <div class="loading-content">
                <img src="../../assets/img/1.gif" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .loading{
        display: none;
        &.active {
            position: absolute;
            top: 0;
            left: 0;
            display: table;
            height: 100%;
            width: 100%;
            background: #ffffff;
        }
        &-container {
            display: table-cell;
            vertical-align: middle;
            img {
                display: block;
                margin: 0 auto;
                max-width: 100%;
                height: auto;
            }
        }
    }
</style>
<template>
    <div class="frame">
        <div class="frame-ani" :style="{backgroundImage: 'url('+aniImage+')'}"></div>
    </div>
</template>

<script>
export default {
    name: 'PocFrameAni',
    data () {
        return {
            aniImage: 'https://s10.mogucdn.com/mlcdn/c45406/200221_2gj97f5edb0e1ca9bgb0g16c7e8jc_4500x220.png'
        };
    },
    methods: {
        
    },
}
</script>

<style lang="less">
.frame {
    position: absolute;
    width: 150px;
    height: 220px;
    top: 37px;
    overflow: hidden;
}
.frame-ani {
    width: 4500px;
    height: 220px;
    animation: vsFire 2s steps(30) infinite;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
}

@keyframes vsFire {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(-4500px, 0, 0);
    }
}
</style>
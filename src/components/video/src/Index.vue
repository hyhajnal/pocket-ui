<template>
    <!-- <div class="video-wrap" :style="wrapperStyle"> -->
        <video
            :src="src"
            preload="auto"
            :controls="controls"
            :autoplay="autoplay"
            :muted="muted"
            :loop="loop"
            webkit-playsinline
            playsinline
            x-webkit-airplay="allow" 
            x5-video-player-type="h5"
            x5-video-player-fullscreen
            x5-video-orientation="portraint"
            :style="videoStyle"
        />
    <!-- </div> -->
</template>

<script>
export default {
    name: 'PocVideo',
    props: {
        src: String,
        autoplay: {
            type: Boolean,
            default: true
        },
        muted: {
            type: Boolean,
            default: false
        },
        loop: {
            type: Boolean,
            default: false
        },
        controls: {
            type: Boolean,
            default: false
        },
        transparent: {
            type: Boolean,
            default: false
        },
        width: Number,
        height: Number,
    },
    data () {
        return {};
    },
    computed: {
        // wrapperStyle () {
        //     return `width:${this.width / 100}rem;height:${this.height / 100}rem`;
        // },
        videoStyle() {
            return this.transparent ? 'mix-blend-mode: screen;' : ''
        }
    },
    methods: {},
}
</script>

<style lang="less">
    video {
        object-fit: fill;
        width: 100%;
        height: 100%;
    }
</style>
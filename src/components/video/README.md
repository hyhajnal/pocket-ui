
# 视频
这是一个视频组件

### 示例

``` vue
<template>
    <div class="video-demo">
        <div class="option-btns">
            <div class="btn" :class="{'btn--active': active === 'video1'}" @click="playVideo('video1')">普通视频</div>
            <div class="btn" :class="{'btn--active': active === 'video2'}" @click="playVideo('video2')">透明视频</div>
        </div>
        <div class="video-wrap">
            <poc-video class="video" v-bind="currentVideo" />
            <img :src="bg" style="width: 100%; height:100%;">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DemoDefault',
        data () {
            return {
                active: 'video1',
                currentVideo: {},
                videos: {
                    video1: {
                        src: 'https://www.w3school.com.cn/i/movie.ogg',
                        transparent: false,
                        autoplay: false,
                        controls: true,
                        loop: false,
                    },
                    video2: {
                        src: 'https://cdn.jsdelivr.net/gh/hyhajnal/CDN@master/img/rains-s.mp4',
                        transparent: true,
                        autoplay: true,
                        controls: false,
                        loop: true,
                    },
                },
                bg: 'https://cdn.jsdelivr.net/gh/hyhajnal/CDN@master/2.jpg'
            };
        },
        mounted() {
            this.$set(this, 'currentVideo', this.videos[this.active])
        },

        methods: {
            playVideo(key) {
                this.active = key
                this.$set(this, 'currentVideo', this.videos[key])
            }
        },
    };
</script>

<style lang="less">
.video-wrap {
    width: 300px;
    height: 200px;
    position: relative;

    .video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 280px;
        height: 180px;
        border: 2px solid #ffffff;
    }
}
.option-btns {
    font-size: 16px;
    margin-bottom: 10px;

    .btn {
        cursor: pointer;
        width: 80px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #555;
        display: inline-block;
        margin-right: 10px;

        &--active {
            background: #555;
            color: #ffffff;
        }
    }
}
</style>

```

### API
暂无
<template>
    <div class="frame" :style="wrapStyleObj">
        <div class="frame-ani" :style="styleObj"></div>
    </div>
</template>

<script>
import { prefixStyle } from './util';
export default {
    name: 'CssFrameAni',
    props: {
        config: Object
    },
    computed: {
        styleObj () {
            const { id, width, height, step, duration, img } = this.config
            return {
                width: `${width * step}px`,
                height: `${height}px`,
                background: `url(${img}) no-repeat center`,
                [prefixStyle('animation')]: `poc-ani-${id} ${duration} steps(${step}) infinite`
            }
        },
        wrapStyleObj () {
            const { id, width, height, step, duration, top, left, bottom, right } = this.config
            return {
                width: `${width}px`,
                height: `${height}px`,
                top: `${top}px`,
                left: `${left}px`,
                right: `${right}px`,
                bottom: `${bottom}px`,
            }
        }
    },
}
</script>

<style lang="less" scoped>
.frame {
    overflow: hidden;
    position: absolute;
    transform-origin:left top;
}
.frame-ani {
    will-change: transform;
}
</style>
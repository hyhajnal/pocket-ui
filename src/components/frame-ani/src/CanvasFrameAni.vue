<template>
    <div class="frame" :style="wrapStyleObj">
        <canvas :id="animId"></canvas>
    </div>
</template>

<script>
export default {
    name: 'CanvasFrameAni',
    props: {
        config: Object
    },
    computed: {
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
        },
        animId() {
            return 'canvas-ani-' + this.config.id
        }
    },
    mounted() {
        this.el = document.getElementById(this.animId)
        // this.animScroll()
        this.start();
        // window.addEventListener('scroll', M.fn.throttle(this.animScroll,300))
    },
    methods: {
        start() {
            const { width, height, img, step, duration } = this.config
            let frames = []; // 帧图片数组
            let canvas = document.querySelector(`#${this.animId}`);
            let ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;

            let image = new Image();
            image.src = img;
            image.onload = function() {
                // 从整体精灵图中拆出每一帧图片
                for(let i=0;i<step;i++){
                    let frame = document.createElement('canvas');
                    frame.width = width;
                    frame.height = height;
                    let cf = frame.getContext('2d');
                    // 裁剪图片
                    cf.drawImage(image, frame.width*i, 0, frame.width,frame.height,0,0,frame.width,frame.height);
                    frames.push(frame);
                }

                let frameIndex = 0;
                // this.frameTicker = new Ticker()
                // this.tickerObj = this.frameTicker.interval(() => {}, 60);
                // this.frameTicker.start();
                setInterval(() => {
                    ctx.clearRect(0,0,canvas.width,canvas.height);  // 清除之前的图片墨迹
                    ctx.drawImage(frames[frameIndex],0,0, canvas.width, canvas.height);
                    frameIndex++;
                    frameIndex %=step; // 取余，重复0-29这四幅图像
                }, 60);
            };

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
</style>
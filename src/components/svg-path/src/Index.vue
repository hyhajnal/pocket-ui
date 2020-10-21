<template>
    <div>
        <svg class="svg" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <path id="svg_9" d="m23,34.5l69,-0.5l1,139l90,0" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" stroke="#000" fill="#fff"/>
        </svg>
        <img class="ani-ele" :src="image">
    </div>
</template>

<script>
export default {
    name: 'PocSvgPath',
    data () {
        return {
            image: 'https://cdn.jsdelivr.net/gh/hyhajnal/CDN@master/img/beepress-image-2-4-2-799-1509859066.gif'
        };
    },
    methods: {
        
    },
}
</script>

<style lang="less">
.svg {
    display: block;
    position: absolute;
}
.ani-ele {
    width: 40px;
    height: 40px;
    offset-path: path('m23,34.5l69,-0.5l1,139l90,0');
    offset-distance: 0%;
    animation: boy-walk 4s linear alternate infinite, boy-turn 8s 0s steps(1) infinite;
}
@keyframes boy-walk { 
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
}
@keyframes boy-turn { 
    0% { transform:scale(1,1) } // 正向
    50% { transform:scale(-1,1) } // 反向
    100% { transform:scale(1,1) } // 正向
}
</style>
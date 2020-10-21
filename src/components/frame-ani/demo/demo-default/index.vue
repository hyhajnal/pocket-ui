<template>
    <poc-frame-ani :config="config1"></poc-frame-ani>
</template>

<script>
    export default {
        name: 'DemoDefault',
        data() {
            return {
                config1: {
                    id: 'girl',
                    width: 302,
                    height: 315,
                    top: 0,
                    left: 0,
                    img: 'https://s10.mogucdn.com/mlcdn/c45406/200221_7d64cg1h7892dd737562ce1kahf85_9060x315.png',
                    step: 30,
                    duration: '2s'
                }
            };
        },
        created() {},
        methods: {},
    };
</script>

<style lang="less">
</style>

<template>
    <div id="app">
        <DemoDefault></DemoDefault>
    </div>
</template>

<script>
    import DemoDefault from './demo-default';
    export default {
        name: 'App',
        components: {
            DemoDefault,
        },
        data() {
            return {};
        },
        created() {},
        methods: {},
    };
</script>

<style lang="less">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 20px;
        font-size: 26px;
    }
</style>

<template>
    <div class='MobileSite'>
        <router-link to="/" tag="div" class="title">首页</router-link>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {},
    data () {
        return {

        }
    },
    created () {

    },
    mounted () {

    },
    computed: {},
    watch: {},
    methods: {

    }
}
</script>

<style lang='less' scoped>
.MobileSite {
    .title {
        font-size: 14px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        text-align: center;
        border: 1px solid #f2f2f2;
        width: 50px;
        height: 20px;
        border-radius: 8px;
        line-height: 20px;
        cursor: pointer;
        background: #f9f0ff;
        color: #722ed1;
        border: 1px solid #722ed1;
    }
}
</style>

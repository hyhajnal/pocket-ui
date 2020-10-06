<template>
    <div class='Site'>
        <site-head></site-head>
        <div class="container flex">
            <site-nav></site-nav>
            <div class="main flex-1">
                <site-md class="main__md"></site-md>
                <div class="main__demo">
                    <iframe src="/mobile.html" ref="iframe"></iframe>
                    <!-- <iframe src="https://youzan.github.io/vant/mobile.html#/zh-CN/overlay"></iframe> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SiteHead from './components/SiteHead';
import SiteNav from './components/SiteNav';
import SiteMd from './components/SiteMd';

export default {
    name: 'App',
    components: {
        SiteNav,
        SiteHead,
        SiteMd,
    },
    data () {
        return {
            active: '',
        }
    },
    watch: {
        '$route'(newVal, oldVal) {
            this.active = newVal.name.toLowerCase();
            this.$refs.iframe.src = '/mobile.html/#/' + this.active;
        }
    },
    created () {

    },
    computed: {},
    methods: {

    }
}
</script>

<style lang='less' scoped>
.Site {

    .main {
        padding: 20px;
        height: 667px;
        overflow: auto;
        position: relative;

        &__md {
            padding: 0 10px;
            margin-right: 395px;
        }
        &__demo {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 375px;
            height: 667px;
            box-shadow: 0px 0px 12px #ebedf0;
            border-radius: 12px;
            overflow: hidden;

            iframe {
                width: 100%;
                height: 100%;
                border: none;
            }
        }
    }
}
</style>

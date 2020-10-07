<template>
    <div class='Site'>
        <site-head></site-head>
        <div class="container flex">
            <site-nav></site-nav>
            <div class="main flex-1 flex">
                <site-md class="main__md flex-1"></site-md>

                <template v-if="showMobile">
                    <div class="main__mobile-occupying"></div>
                    <div class="main__demo">
                        <iframe src="/mobile.html" ref="iframe"></iframe>
                    </div>
                </template>

            </div>
        </div>
    </div>
</template>

<script>
import SiteHead from './components/SiteHead';
import SiteNav from './components/SiteNav';
import SiteMd from './components/SiteMd';

const mobilePrefix = process.env.NODE_ENV === 'production' ? './' : '/';

export default {
    name: 'App',
    components: {
        SiteNav,
        SiteHead,
        SiteMd,
    },
    data () {
        return {
            showMobile: false,
            ignoreMobile: ['quickstart', 'intro', 'changelog'],
            active: '',
        }
    },
    watch: {
        '$route'(newVal, oldVal) {
            this.initActive(newVal);
        }
    },
    mounted() {
        this.initActive();
    },
    computed: {},
    methods: {
        initActive(_route) {
            const route = _route || this.$route;
            this.active = route.name.toLowerCase();
            this.showMobile = !this.ignoreMobile.includes(this.active);
            if (this.showMobile) {
                this.$nextTick(() => {
                    this.$refs.iframe.src = mobilePrefix + 'mobile.html#/' + this.active;
                })
            }
        }
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
        }

        &__mobile-occupying {
            width: 395px;
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

<template>
    <div class='SiteNav'>
        <div class="nav-group" v-for="menu in menus" :key="menu.name">
            <div
                class="nav-item"
                :class="{'nav-item--active': active === menu.name, 'nav-item--leaf': !menu.children}"
                @click="onItemCick(menu)">{{ menu.title }}
            </div>
            <template v-if="menu.children">
                <div class="nav-group nav-group-2" :key="item.name" v-for="item in menu.children">
                    <div
                        class="nav-item"
                        :class="{'nav-item--active': active === item.name, 'nav-item--leaf': !item.children}"
                        @click="onItemCick(item)"
                    >
                        {{ item.title }}
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>

import { menus } from '../config';

export default {
    name: 'SiteNav',
    components: {},
    data () {
        return {
            menus,
            active: '',
        }
    },
    created () {

    },
    computed: {},
    watch: {},
    mounted() {
        this.initActive();
    },
    methods: {
        initActive(_route) {
            const route = _route || this.$route;
            const routeName = route.name;   // 驼峰
            this.active = routeName.charAt(0).toLowerCase() + routeName.slice(1);
        },
        onItemCick(item) {
            if (!item.children) {
                this.active = item.name;
                this.$router.push({ path: `/${item.name}` });
            }
        },
    }
}
</script>

<style lang='less' scoped>
.SiteNav{
    width: 240px;
    background: #ffffff;
    min-height: 100vh;
    overflow: auto;
    color: #555;
    padding: 20px 0;
    font-size: 14px;
    border-right: 1px solid #f0f1f2;

    .nav-item {
        height: 40px;
        line-height: 40px;
        padding: 0 40px;

        &--active {
            background: #f9f0ff;
            color: #722ed1;
            border-right: 2px solid #722ed1;
        }

        &--leaf:hover {
            cursor: pointer;
            color: #722ed1;
        }
    }

    .nav-group-2 {
        .nav-item {
            padding-left: 60px;
        }
    }
}
</style>

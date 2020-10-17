<template>
    <div class="Home">
        <h1 class="title">Pocket UI</h1>
        <ul class="comp-list">
            <router-link :to="item.path" tag="div" class="comp-item" v-for="item in list" :key="item.name">
                {{item.name}} {{item.title}}
            </router-link>
        </ul>
    </div>
</template>

<script>
import { toCamel, lowerInitial } from '../../../utils';

const requireFiles = require.context('../../../src/components', true, /\.json/)
const components = []

requireFiles.keys().forEach(key => {
    const info = requireFiles(key)
    const name = info.name.replace('@pocket/', '')
    components.push({
        title: info.description,
        name: toCamel(name),
        path: '/' + lowerInitial(toCamel(name)),
    })
})
export default {
    name: 'Home',
    components: {},
    data () {
        return {
            list: components
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
.Home {
    font-size: 14px;
    box-sizing: border-box;

    .title {
        text-align: center;
        color: #722ed1;
    }

    .comp-list {
        list-style: none;
        margin: 0px;
        padding: 15px;

        .comp-item {
            cursor: pointer;
            padding: 0 20px;
            height: 40px;
            line-height: 40px;
            background: #f2f2f2;
            border-radius: 8px;
            margin-bottom: 20px;
        }
    }
}
</style>

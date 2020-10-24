<template>
    <poc-list-view :list="list" :estimateHeight="60">
        <template v-slot="item">
            {{ item.index }}
        </template>
    </poc-list-view>
</template>

<script>
    const _randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    export default {
        name: 'DemoDefault',
        data() {
            return {
                list: this.getList()
            };
        },
        methods: {
            getList() {
                const List = [...Array(100).keys()].map(i => {
                    return {
                        index: i,
                        height: _randomNum(20, 100)
                    }
                })
                return List
            }
        },
    };
</script>

<style lang="less">
</style>

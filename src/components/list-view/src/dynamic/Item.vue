<template>
    <div class='ListItem' :style="itemStyle" ref="item">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'ListItem',
    props: {
        item: [Object],
    },
    data () {
        return {}
    },
    computed: {
        itemStyle() {
            return `height: ${this.item.height}px; line-height: ${this.item.height}px;`;
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.node = this.$refs.item
            if (this.node) {
                this.cacheItemPos();
                // this.resizeObserver = new ResizeObserver(this.cacheItemPos)
                // this.resizeObserver.observe(this.node)
            }
        });
    },
    methods: {
        cacheItemPos() {
            this.$parent.cacheItemPos(this.item.index, this.node)
        }
    }
}
</script>

<style lang='less' scoped>
.ListItem {
    background: #f2f2f2;
    text-align: center;
}
</style>

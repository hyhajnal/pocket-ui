<template>
    <div class="list-view__wrap">
        <div class="list-view__content" :style="contentStyle">
            <div class="list-view__item" v-for="(item) in viewList" :key="item">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>

import { ViewPortHeight, throttle } from '../../../../utils';


/**
 * react-virtualized、react-virtual-list
 * 1. 动态高度/固定高度
 * 2. 单列/多列
 * 3. cell为absolute定位
 * 4. 功能：下拉加载/上拉刷新、占位图、预渲染几屏数据、点击加载更多、单选/多选、tabs组合（记住滚动条位置）
 */
export default {
    name: 'ListView',
    data () {
        const itemHeight = 60;
        const bufferCount = 5;  // 缓冲区：上下多加载5个
        const viewCount = Math.ceil(ViewPortHeight / itemHeight);
        return {
            viewList: [],
            bufferCount,
            viewCount,
            itemHeight,
            startIndex: 0,
            endIndex: viewCount + bufferCount,
            startOffset: 0,
            endOffset: 0,
            list: [...Array(100).keys()]
        };
    },
    mounted() {
        this.handleScroll();
        window.addEventListener('scroll', throttle(this.handleScroll, 150));
    },
    computed: {
        contentStyle() {
            return `padding-top: ${this.startOffset}px; padding-bottom: ${this.endOffset}px;`;
        }
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            this.startIndex = Math.max(Math.round(scrollTop / this.itemHeight) - this.bufferCount, 0);
            this.endIndex = Math.min(this.startIndex + this.viewCount + this.bufferCount, this.list.length - 1);
            this.viewList = this.list.slice(this.startIndex, this.endIndex);

            this.startOffset = scrollTop;
            this.endOffset = (this.list.length - this.endIndex) * this.itemHeight;
        }
    },
}
</script>

<style lang="less">
.list-view {
    font-size: 14px;

    &__item {
        height: 40px;
        line-height: 40px;
        background: #f2f2f2;
        text-align: center;
        margin-bottom: 20px;
    }
}
</style>
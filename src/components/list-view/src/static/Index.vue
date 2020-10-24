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

import { ViewPortHeight, throttle } from '../../../../../utils';


/**
 * react-virtualized、react-virtual-list
 * 1. 动态高度/固定高度
 * 2. 单列/多列
 * 3. cell为absolute定位
 * 4. 功能：下拉加载/上拉刷新、占位图、预渲染几屏数据、点击加载更多、单选/多选、tabs组合（记住滚动条位置）
 */
export default {
    name: 'PocListView',
    data () {
        const itemHeight = 60;  // 40(height) + 20(margin-bottom)
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

            const originStartIndex = Math.round(scrollTop / this.itemHeight);
            const originEndIndex = originStartIndex + this.viewCount

            // 往后/往前加上5个buffer
            this.startIndex = Math.max(originStartIndex - this.bufferCount, 0);
            this.endIndex = Math.min(originEndIndex + this.bufferCount, this.list.length - 1);

            // 取startIndex-endIndex的元素，这边endIndex需要+1，因为 slice 是 [startIndex, endIndex)，不然最后一个元素取不到
            this.viewList = this.list.slice(this.startIndex, this.endIndex + 1);
            
            // 注意这边如果startOffset=scrollTop会抖动
            this.startOffset = this.startIndex * this.itemHeight;
            this.endOffset = ((this.list.length - 1) - this.endIndex) * this.itemHeight;
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
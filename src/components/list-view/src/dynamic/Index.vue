<template>
    <div class="list-view__wrap">
        <div class="list-view__content" :style="contentStyle">
            <div class="list-view__item" v-for="item in viewList" :key="item.index" :style="{ marginBottom: gap + 'px' }">
                <ListItem :item="item">
                    <slot v-bind="item"></slot>
                </ListItem>
            </div>
        </div>
    </div>
</template>

<script>

import { ViewPortHeight, throttle } from '../../../../../utils';
import ListItem from './Item';


/**
 * react-virtualized、react-virtual-list
 * 1. 动态高度/固定高度
 * 2. 单列/多列
 * 3. cell为absolute定位
 * 4. 功能：下拉加载/上拉刷新、占位图、预渲染几屏数据、点击加载更多、单选/多选、tabs组合（记住滚动条位置）
 */
export default {
    name: 'PocListView',
    components: {
        ListItem
    },
    props: {
        list: Array,
        gap: {
            type: Number,
            default: 20
        },
        bufferCount: {  // 缓冲区：上下多加载5个
            type: Number,
            default: 5,
        },
        estimateHeight: {
            type: Number,
        }
    },
    data () {
        const itemHeight = this.gap + this.estimateHeight;
        const viewCount = Math.ceil(ViewPortHeight / itemHeight);
        return {
            caches: [],     // 存储items的位置
            viewList: [],
            viewCount,
            itemHeight,
            startIndex: 0,
            endIndex: viewCount + this.bufferCount,
            startOffset: 0,
            endOffset: 0,
        };
    },
    mounted() {
        this.criticalInfo = { index: 0, top: 0, height: 40 };
        this.handleScroll();
        window.addEventListener('scroll', throttle(this.handleScroll, 150));
    },
    computed: {
        contentStyle() {
            return `padding-top: ${this.startOffset}px; padding-bottom: ${this.endOffset}px;`;
        }
    },
    methods: {
        // 找到可视区开始临界的那个item
        getCriticalItem(scrollTop) {
            const criticalInfo = this.caches.find(rect => rect.bottom >= scrollTop)
            return criticalInfo || this.criticalInfo
        },
        cacheItemPos(index, node) {
            if (this.caches[index]) return;
            const { bottom, top, width, height } = node.getBoundingClientRect()
            const _top = (index === 0 ? 0 : this.caches[index - 1].bottom) + this.gap
            const rect = {
                index,
                top: _top,
                bottom: _top + height
            }
            this.caches.push(rect)
        },
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            this.criticalInfo = this.getCriticalItem(scrollTop);

            this.startIndex = this.criticalInfo.index;
            this.endIndex = Math.min(this.startIndex + this.viewCount + this.bufferCount, this.list.length - 1)

            this.viewList = this.list.slice(this.startIndex, this.endIndex + 1);

            this.startOffset = this.criticalInfo.top
            this.endOffset = ((this.list.length - 1) - this.endIndex) * this.itemHeight;
        }
    },
}
</script>

<style lang="less">
.list-view {
    font-size: 14px;
}
</style>
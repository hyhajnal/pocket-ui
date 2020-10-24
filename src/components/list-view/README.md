# ListView 虚拟列表
这是一个虚拟列表，支持动态高度

### 示例
``` vue
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
```

### API
| 参数名 | 类型 | 说明 | 默认值
| ---- | ---- | ---- | ---- |
| estimateHeight | Number | 预估高度 | 无 |
| gap | Number | 间距 | 20 |
| bufferCount | Number | 缓冲区 | 5 |
<template>
	<!-- class markdown-body 必须加，否则标签样式会出现问题 -->
    <div class="markdown-body">
        <component :is="active"></component>
    </div>
</template>

<script>
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import Wall from '../../../../src/components/wall/README.md'
import Button from '../../../../src/components/button/README.md'

export default {
    components: {
        Wall,
        Button
    },
    data() {
        return {
            active: '',
        }
    },
    watch: {
        '$route'(newVal, oldVal) {
            this.active = newVal.name.chatCodeAt(0).toUpperCase() + newVal.name.slice(1);
        }
    },
}
</script>
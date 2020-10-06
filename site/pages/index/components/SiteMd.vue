<template>
	<!-- class markdown-body 必须加，否则标签样式会出现问题 -->
    <div class="markdown-body">
        <component :is="active"></component>
    </div>
</template>

<script>
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

import ChangeLog from '../../../markdown/changelog.md';
import Intro from '../../../markdown/intro.md';
import QuickStart from '../../../markdown/quickstart.md';

import Wall from '../../../../src/components/wall/README.md'
import Button from '../../../../src/components/button/README.md'
import ListView from '../../../../src/components/list-view/README.md'

export default {
    components: {
        ChangeLog,
        Intro,
        QuickStart,
        Wall,
        Button,
        ListView,
    },
    data() {
        return {
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
    methods: {
        initActive(_route) {
            const route = _route || this.$route;
            this.active = route.name;
        }
    }
}
</script>
<template>
	<!-- class markdown-body 必须加，否则标签样式会出现问题 -->
    <div class="markdown-body">
        <component :is="active"></component>
    </div>
</template>

<script>
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import { toCamel, lowerInitial } from '../../../../utils';

import ChangeLog from '../../../markdown/changelog.md';
import Intro from '../../../markdown/intro.md';
import QuickStart from '../../../markdown/quickstart.md';

const requireFiles = require.context('../../../../src/components', true, /\.json/)
const components = {
    ChangeLog, Intro, QuickStart
}

requireFiles.keys().forEach(key => {
    const info = requireFiles(key)
    const name = info.name.replace('@pocket/', '')
    components[toCamel(name)] = () => import(`../../../../src/components/${name}/README.md`)
    // Vue.component(toCamel(name), () => import(`../../../../src/components/${name}/README.md`))
})

export default {
    components,
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
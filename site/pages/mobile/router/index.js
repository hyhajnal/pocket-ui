import Router from 'vue-router';
import Vue from 'vue';
import { toCamel, lowerInitial } from '../../../../utils';

Vue.use(Router);

const requireFiles = require.context('../../../../src/components', true, /\.json/)
const components = []

requireFiles.keys().forEach(key => {
    const info = requireFiles(key)
    const name = info.name.replace('@pocket/', '')
    components.push({
        path: '/' + lowerInitial(toCamel(name)),
        name: toCamel(name),
        component: () => import(`../../../../src/components/${name}/demo/App.vue`)
    })
})

export default new Router({
    routes: components
});
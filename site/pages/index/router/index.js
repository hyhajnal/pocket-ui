import Router from 'vue-router';
import Vue from 'vue';

import { toCamel, lowerInitial } from '../../../../utils/index';

const requireFiles = require.context('../../../../src/components', true, /\.json/)
const components = []

requireFiles.keys().forEach(key => {
    const info = requireFiles(key)
    const name = info.name.replace('@pocket/', '')
    components.push({
        path: '/' + lowerInitial(toCamel(name)),
        name: toCamel(name)
    })
})

console.log(components)

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'intro'
        },
        {
            path: '/intro',
            name: 'Intro',
        },
        {
            path: '/changeLog',
            name: 'ChangeLog'
        },
        {
            path: '/quickStart',
            name: 'QuickStart'
        },
    ].concat(components)
});
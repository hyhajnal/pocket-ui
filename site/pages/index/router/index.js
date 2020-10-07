import Router from 'vue-router';
import Vue from 'vue';

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
        {
            path: '/wall',
            name: 'Wall',
        },
        {
            path: '/button',
            name: 'Button',
        },
        {
            path: '/listView',
            name: 'ListView',
        }
    ]
});
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/wall',
            name: 'Wall',
            component: () => import('../../../../src/components/wall/demo/App.vue')
        },
        {
            path: '/button',
            name: 'Button',
            component: () => import('../../../../src/components/button/demo/App.vue')
        },
        {
            path: '/listview',
            name: 'ListView',
            component: () => import('../../../../src/components/list-view/demo/App.vue')
        }
    ]
});
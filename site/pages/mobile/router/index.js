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
            path: '/btn',
            name: 'Btn',
            component: () => import('../../../../src/components/button/demo/App.vue')
        }
    ]
});
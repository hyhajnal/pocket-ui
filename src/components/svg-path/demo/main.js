import Vue from 'vue';
import App from './App.vue';
import comp from '../src';

Vue.use(comp);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');

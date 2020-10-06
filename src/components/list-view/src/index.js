import ListView from './Index.vue';

ListView.install = (Vue) => {
    Vue.component(ListView.name, ListView);
};

export default ListView;
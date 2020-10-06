import ExampleComp from './Index.vue';

ExampleComp.install = (Vue) => {
    Vue.component(ExampleComp.name, ExampleComp);
};

export default ExampleComp;
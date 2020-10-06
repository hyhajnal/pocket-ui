import Button from './Index.vue';

Button.install = (Vue) => {
    Vue.component(Button.name, Button);
};

export default Button;
import Video from './Index.vue';

Video.install = (Vue) => {
    Vue.component(Video.name, Video);
};

export default Video;
import Wall from './Wall.vue';
// import WallTemplate from './wall-templates/WallTemplate.vue';

Wall.install = (Vue) => {
    Vue.component(Wall.name, Wall);
    // Vue.component(WallTemplate.name, WallTemplate);
};

export {
    Wall,
    // WallTemplate,
};

export default Wall;



// import ListView from './static/Index';
import ListView from './dynamic/Index';

ListView.install = (Vue) => {
    Vue.component(ListView.name, ListView);
};

export default ListView;
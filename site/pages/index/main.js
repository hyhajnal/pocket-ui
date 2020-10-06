import Vue from 'vue'
import App from './App'
import router from './router'          //这里引入了router
import Comps from '../../../src/components/index'

import 'normalize.css';
import '../../style/flex.css';

Vue.config.productionTip = false

Comps.forEach(component => {
  Vue.use(component)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,       //这里挂载了router
  render: h => h(App)
})
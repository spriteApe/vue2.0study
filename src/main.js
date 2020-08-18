import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';
import './rem';

Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

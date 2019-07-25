import Vue from 'vue';
import ElementUI from 'element-ui';
import echarts from 'echarts';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker';
import './assets/css/reset.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

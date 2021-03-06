// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import echarts from 'echarts'
import 'echarts/map/js/china'
import router from './router'

Vue.use(ViewUI);

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import "./common/components"
import VueLazyLoad from "vue-lazyload"
import App from './App.vue'
import router from './router'
import store from './store'
// 删除打印
window.console.log=null
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  preLoad: 1.1,
  error: './img/error.jpg',
  loading: './img/load.gif',
  attempt: 1
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

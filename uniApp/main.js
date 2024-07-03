import App from './App'
// vuex
import store from './store'
// mixin
import myMixin from './common/mixins'
// 白天/黑夜模式
import '@/static/style/sunOrMoon.scss'
// 公共的css
import '@/static/style/communal.css'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
// main.js
import uView from 'uview-ui';
//
Vue.use(uView);
Vue.mixin(myMixin)
//
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
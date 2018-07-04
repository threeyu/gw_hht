import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAMap from 'vue-amap'
import Vuerify from 'vuerify'
import routes from './router/routes'
import App from './App.vue'
import store from './store'
import 'babel-polyfill'

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'b86d24b211e4d2513f280f8eb458c61f',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

Vue.use(Vuerify /*, add rules */)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',// dev
  // mode: 'hash',// pro
  base: __dirname,
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
// router.afterEach((to, from, next) => {
//   window.scrollTo(0, 0);
// })

new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import router from './router'
import store from './store'


const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

/**
 * 
axios({
  url:'http://123.207.32.32:8000/home/multidata',
  method:'get'
}).then( res => {
  console.log(res)
}).catch( err => {
  console.log(err)
})

 * 
 */



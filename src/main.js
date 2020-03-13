import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')



const instance1= axios.create({
  baseURL : "",
  timeout :"5000"
})
const instance2= axios.create({
  baseURL : "",
  timeout :"5000"
})

instance1({
  url:""
}).then(res =>{
  console.log(res);
})

instance2({
  url:""
}).then(res =>{
  console.log(res);
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  console.log("1211",response);
  // Do something with response data
  return response;
}, function (error) {
  console.log("111",error);
  if(error.response.status==401){
    window.location.href="/login"
    // this.$router.push({path:'/login'});
  }
  return Promise.reject(error);
});
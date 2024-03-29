import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from './mcu.js'

let data = {
  movies: mock,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

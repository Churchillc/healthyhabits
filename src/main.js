import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from './habit-data.js'

Vue.config.productionTip = false;

let data = {
  products: mock,
  cart: [],
  todoList: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

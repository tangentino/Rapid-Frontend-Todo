import Vue from 'vue'
import App from './App.vue'

import '@/assets/todo.css'

Vue.config.productionTip = false

// Current Version : Refactored to add TodoFooter

new Vue({
  render: h => h(App),
}).$mount('#app')

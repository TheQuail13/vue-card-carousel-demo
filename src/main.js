import Vue from 'vue'
import App from './App.vue'

import VueCardCarousel from "vue-card-carousel";
import { BootstrapVue, BIcon, BIconCode, BIconCheckAll } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueCardCarousel)
Vue.component('BIcon', BIcon)
Vue.component('BIconCode', BIconCode)
Vue.component('BIconCheckAll', BIconCheckAll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carsousel'
import Pagination from '@/components/Pagination'
import { MessageBox } from 'element-ui'
import VueLazyload from 'vue-lazyload'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import v from '@/assets/logo.png'
Vue.config.productionTip = false
Vue.component('TypeNav', TypeNav)
Vue.component('Carsousel', Carsousel)
Vue.component('Pagination', Pagination)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.use(VueLazyload, {
  loading: v
})
import * as API from '@/plugins/validate'
import "@/plugins/validate"
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')

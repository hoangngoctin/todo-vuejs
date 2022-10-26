import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import Vuex from 'vuex'


import VueSweetalert2 from 'vue-sweetalert2'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



const app = createApp(App)

app.use(router)

app.mount('#app')




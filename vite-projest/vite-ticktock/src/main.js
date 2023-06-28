import './assets/main.css'
import './style/index.css'
import './style/nav.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import axios from 'axios'
import utilities from '@/utilities.js'
const headers = utilities.getHeaders()
axios.defaults.headers.common['Authorization'] = headers.authorization

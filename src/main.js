import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles/main.scss'
import './router/index.js'
import App from './App.vue'

createApp(App)
    .use(createPinia())
    .mount('#app')

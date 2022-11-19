import { createApp } from 'vue'
import './sass/style.scss'
import AppRouterManager from './AppRouterManager'
import App from './App.vue'

const _app = createApp(App)

_app.use(AppRouterManager)
_app.mount('#app')

import './assets/main.css'

import { registerMicroApps, start } from 'qiankun'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import config from './config'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#portal-container')

// const { apps } = config
// // 注册子应用，一个对象就是一个子应用的配置
// registerMicroApps(apps)
//
// // 启动 qiankun
// start()

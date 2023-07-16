import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {
    renderWithQiankun,
    qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'

const render = (container) => {
    const app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.mount(container ? container.querySelector('#app'):'#app')
}

const initQianKun = () => {
    renderWithQiankun({
        bootstrap() {
            console.log('微应用：bootstrap')
        },
        mount(props) { // 获取主应用传入数据
            console.log('微应用：mount', props)
            render(props.container)
        },
        unmount(props) {
            console.log('微应用：unmount', props)
        },
        update(props) {
            console.log('微应用：update', props)
        },
    })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render() // 判断是否使用 qiankun ，保证项目可以独立运行

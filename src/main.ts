import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import '@/styles/index.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//svg插件需要配置的代码
import 'virtual:svg-icons-register'

//引入自定义插件对象：注册整个项目的全局组件
import gloablComponent from './components/index'
app.use(gloablComponent)

//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, {
  locale: zhCn,
})

import pinia from './store'
app.use(pinia)

import router from './router'
app.use(router)
//路由守卫
// import './permisstion';

app.mount('#app')

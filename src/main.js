import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './tailwindcss.css'

const app = createApp(App)
// 全局api
import api from '@/api'
app.config.globalProperties.$api = api
// 全局过滤器
import { filters } from '@/global/filters.js'
app.config.globalProperties.$filters = filters
// 全局注册
import { globalRegister } from '@/global/register'
app.use(globalRegister)
// 全局混入
import mixin from '@/global/mixin'
app.mixin(mixin)
// 使用路由
import router from './router'
app.use(router)
// 使用pinia
import { createPinia } from 'pinia'
app.use(createPinia())
// store
import store from '@/store'
app.config.globalProperties.$store = store
// 处理特定类型的警告信息打印
import { handler } from '@/global/handler'
app.use(handler)
// 启动应用
app.mount('#app')

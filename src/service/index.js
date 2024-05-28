// service统一出口
import AxiosApi from './axios'

const http = new AxiosApi({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  interceptors: {
    // 在发送请求之前做些什么
    requestInterceptor: (config) => {
      // 例如，添加token到请求头
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('======请求成功的拦截======')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('======请求失败的拦截======',err)
      throw err
    },
    responseInterceptor: (res) => {
      // console.log('======响应成功的拦截======')
      // 自定义返回数据格式
      if (res.data?.code === 200) {
        return res.data.data
      }
      // 原始处理数据返回方式
      return res.data
    },
    responseInterceptorCatch: (err) => {
      // console.log('======响应失败的拦截======',err)
      // const { response } = error
      // const { codeHandle } = toUrl()
      // if (response) codeHandle(response.status, response.data)
      throw err
    },
  },
})

export default http

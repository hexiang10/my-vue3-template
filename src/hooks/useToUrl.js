import router from '@/router'
export default function () {
  /**
   * 根据状态码判断执行的操作
   */
  const codeHandle = (code, message) => {
    switch (code) {
      // 401: 未登录状态，跳转登录页
      case 401:
        // toLogin()
        break
      case 403:
        console.log('登录过期，请重新登录')
        // localStorage.removeItem('token')
        // store.commit('loginSuccess', null)
        // setTimeout(() => {
        //   toLogin()
        // }, 1000)
        break
      case 404:
        toError(404)
        break
      case 500:
        toError(500)
        break
      default:
        console.log(message)
    }
  }

  /**
   * 跳转登录页
   * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
   */
  const toLogin = () => {
    router.replace({
      path: '/login',
      query: {
        redirect: router.currentRoute.fullPath,
      },
    })
  }

  /**
   * 状态码页面跳转
   */
  const toError = (num) => {
    router.replace({
      path: `/error/${num}`,
      query: {
        redirect: router.currentRoute.fullPath,
      },
    })
  }
  return {codeHandle, toLogin, toError}
}

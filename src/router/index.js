import { createRouter, createWebHistory } from 'vue-router'
import pages from '~pages'

const routes = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue'),
  },
  ...pages,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

import router from '@/router'
import store from '@/store'
const whiteList = ['/login', '/404'] // 白名单
router.beforeEach((to, from, next) => {
  const { token } = store?.getters
  if (token) {
    const { userId } = store?.getters
    console.log(store?.getters)
    store.dispatch('user/gituserInfo', userId)
    // 登录
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    const isCludes = whiteList.includes(to.path)
    if (isCludes) {
      next()
    } else {
      next('/login')
    }
  }
})

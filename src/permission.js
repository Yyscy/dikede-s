import router from '@/router'
import store from '@/store'
const whiteList = ['/login', '/404'] // 白名单
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  if (token) {
    // 登录
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    const isCludes = whiteList.includes(token.path)
    if (isCludes) {
      next()
    } else {
      next('login')
    }
  }
})

import Vue from 'vue'
import Router from 'vue-router'

// 引入多个模块的规则
import workOrder from './modules/workOrder' // 工单
import PointPosition from './modules/PointPosition' // 点位
import equipment from './modules/equipment' // 设备
import personnel from './modules/personnel' // 人员
import commodity from './modules/commodity' // 商品
import strategy from './modules/strategy' // 策略
import orderForm from './modules/orderForm' // 订单
import Checkforstatistical from './modules/Checkforstatistical' // 对账统计
Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '帝可得', icon: 'dashboard' }
    }]
  }
]
// 动态路由
export const asyncRoutes = [
  workOrder,
  PointPosition,
  equipment,
  personnel,
  commodity,
  strategy,
  orderForm,
  Checkforstatistical
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes, ...asyncRoutes]
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

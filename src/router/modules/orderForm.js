import Layout from '@/layout'
export default {
  path: '/orderForm',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/orderForm'),
      meta: { title: '订单管理', icon: 'table' }
    }
  ]
}

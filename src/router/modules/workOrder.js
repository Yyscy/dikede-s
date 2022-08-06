import Layout from '@/layout'
export default {
  path: '/workOrder',
  component: Layout,
  redirect: '/workOrder/operation',
  name: 'workOrder',
  meta: { title: '工单管理', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'operation',
      name: 'operation',
      component: () => import('@/views/operation/index'),
      meta: { title: '运营工单', icon: 'table' }
    },
    {
      path: 'maintenance',
      name: 'maintenance',
      component: () => import('@/views/operation/index'),
      meta: { title: '运维工单', icon: 'tree' }
    }
  ]
}

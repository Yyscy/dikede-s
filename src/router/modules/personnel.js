import Layout from '@/layout'
export default {
  path: '/personnel',
  component: Layout,
  redirect: '/personnel/table',
  name: 'personnel',
  meta: { title: '人员管理', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'table',
      name: 'Table',
      component: () => import('@/views/table/index'),
      meta: { title: 'Table', icon: 'table' }
    },
    {
      path: 'tree',
      name: 'Tree',
      component: () => import('@/views/tree/index'),
      meta: { title: 'Tree', icon: 'tree' }
    }
  ]
}

import Layout from '@/layout'
export default {
  path: '/commodity',
  component: Layout,
  redirect: '/commodity/table',
  name: 'commodity',
  meta: { title: '商品管理', icon: 'el-icon-s-help' },
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

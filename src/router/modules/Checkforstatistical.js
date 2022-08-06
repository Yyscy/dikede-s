import Layout from '@/layout'
export default {
  path: '/Checkforstatistical',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/Checkforstatistical'),
      meta: { title: '对账统计', icon: 'setting' }
    }
  ]
}

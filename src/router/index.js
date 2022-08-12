import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/daybook',
    component: () => import('../modules/daybook/layouts/DayBookLayout.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
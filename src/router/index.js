import { createRouter, createWebHistory } from 'vue-router/auto'
import DashBoard from '../pages/DashBoard.vue'
import Deserts from '../pages/DesertsPage.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../pages/ProjectView.vue')
  },
  {
      path: '/deserts',
      component: Deserts,
      name: 'DesertsPage'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

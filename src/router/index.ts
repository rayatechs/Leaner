import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('../views/BoardView.vue'),
      children:[
        {
          path: '/projects',
          name: 'projects',
          component: () => import('../views/ProjectView.vue')
        }
      ]
    },
  ]
})

export default router

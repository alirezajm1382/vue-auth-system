import { createRouter, createWebHistory } from 'vue-router'

// views
import HomeView from '@/views/HomeView.vue'
import AuthLayoutView from '@/views/auth/AuthLayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth',
      name: 'authentication',
      component: AuthLayoutView,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'registration',
          component: () => import('../views/auth/RegisterView.vue'),
        },
      ],
    },
  ],
})

export default router

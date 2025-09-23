import { createRouter, createWebHistory } from 'vue-router'

// views
import HomeView from '@/views/HomeView.vue'
import AuthLayoutView from '@/views/auth/AuthLayoutView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      name: 'authentication',
      component: AuthLayoutView,
      children: [
        {
          path: '',
          name: 'auth selection',
          component: () => import('../views/auth/AuthView.vue'),
        },
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

router.beforeEach((to) => {
  const store = useAuthStore()
  if (to.meta.requiresAuth && !store.isLoggedIn) return '/auth/login'
})

export default router

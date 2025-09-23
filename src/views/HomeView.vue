<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const auth = useAuthStore()

const handleLogout = () =>
  auth.logout().then(() => {
    setTimeout(() => {
      router.push('/auth')
    }, 2000)
  })
</script>
<template>
  <div v-if="auth.user">
    <h1 class="text-xl">Hello, {{ auth.user?.name }}</h1>
    <button class="btn btn-error" @click="handleLogout">Log out</button>
  </div>
</template>

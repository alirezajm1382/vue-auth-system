<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()

watch(auth, () => {
  if (!auth.user) router.push('/auth/login')
})

const handleLogout = () => auth.logout()
</script>
<template>
  <div v-if="auth.user">
    <h1 class="text-xl">Hello, {{ auth.user?.name }}</h1>
    <button class="btn btn-error" @click="handleLogout">Log out</button>
  </div>
</template>

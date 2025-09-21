<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <div>
    <div class="rounded-full size-[49px] bg-neutral relative mb-[30px] md:hidden">
      <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">A</p>
    </div>
    <div class="space-y-2.5 mb-8">
      <h2 class="text-[32px] font-semibold text-content-primary">Login</h2>
      <p class="text-base text-content-secondary">
        You can login with your registered account or quick login with your Google account.
      </p>
    </div>
    <LoginForm />
    <div class="flex text-base font-semibold gap-2 text-center mt-[55px] justify-center">
      <p class="text-content-secondary">Don't have an account?</p>
      <RouterLink to="/auth/register" class="hover:underline text-primary">Create one!</RouterLink>
    </div>
  </div>
</template>

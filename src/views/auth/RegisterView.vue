<script setup lang="ts">
import RegisterForm from '@/components/RegisterForm.vue'
</script>

<template>
  <div>
    <div class="rounded-full size-[49px] bg-neutral relative mb-[30px] md:hidden">
      <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">A</p>
    </div>
    <div class="space-y-2.5 mb-[45px]">
      <h2 class="text-[32px] font-semibold text-content-primary">Register</h2>
      <p class="text-base text-content-secondary">Enter your user details below.</p>
    </div>
    <RegisterForm />
    <div class="flex text-base font-semibold gap-2 text-center mt-[55px] justify-center">
      <p class="text-content-secondary">Have an account?</p>
      <RouterLink to="/auth/login" class="hover:underline text-primary">Login!</RouterLink>
    </div>
  </div>
</template>

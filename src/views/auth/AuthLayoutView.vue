<script setup lang="ts">
import AuthIntro from '@/components/AuthIntro.vue'
</script>

<template>
  <div class="grid grid-cols-1 grid-rows-1 gap-0 md:grid-cols-2">
    <AuthIntro
      class="hidden bg-gradient-to-br from-secondary to-primary md:flex m-[17px] rounded-[20px]"
    />
    <div class="flex justify-center items-center h-dvh">
      <RouterView class="m-10 w-full max-w-[440px]" />
    </div>
  </div>
</template>

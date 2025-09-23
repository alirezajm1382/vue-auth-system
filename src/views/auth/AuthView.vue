<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center gap-5">
    <RouterLink to="/auth/login" class="btn btn-primary text-base h-[69px] w-60">Log in</RouterLink>
    or
    <RouterLink to="/auth/register" class="btn btn-secondary text-base h-[69px] w-60"
      >Register</RouterLink
    >
  </div>
</template>

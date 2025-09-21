<script setup lang="ts">
import CustomInput from '@/components/shared/CustomInput.vue'
</script>

<template>
  <div class="flex flex-col gap-[30px]">
    <div>
      <div class="flex">
        <span class="text-base font-semibold text-content-primary mb-2.5"> Email </span>
      </div>
      <CustomInput type="text" />
    </div>

    <div>
      <div class="flex justify-between mb-2.5">
        <span class="text-base font-semibold text-content-primary grow-1">Password</span>
        <span class="text-base font-semibold w-fit">
          <RouterLink to="" class="hover:underline text-primary hover:text-secondary">
            Forgot Your Password?
          </RouterLink>
        </span>
      </div>
      <CustomInput type="password" />
    </div>
    <div class="flex gap-[15px] items-center">
      <input type="checkbox" class="checkbox bg-neutral border-none checkbox-primary" />
      <label for="" class="text-base font-semibold cursor-pointer">Remember me?</label>
    </div>

    <button class="btn btn-primary w-full text-base h-[69px]">Sign In</button>
  </div>
</template>

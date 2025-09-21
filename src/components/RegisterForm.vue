<script setup lang="ts">
import CustomInput from '@/components/shared/CustomInput.vue'
</script>

<template>
  <div class="flex flex-col gap-[30px]">
    <div>
      <div class="flex mb-2.5">
        <span class="text-base font-semibold text-content-primary"> Name </span>
      </div>
      <CustomInput type="text" />
    </div>
    <div>
      <div class="flex mb-2.5">
        <span class="text-base font-semibold text-content-primary"> Email </span>
      </div>
      <CustomInput type="text" />
    </div>

    <div>
      <div class="flex mb-2.5">
        <span class="text-base font-semibold text-content-primary">Password</span>
      </div>
      <CustomInput type="password" />
    </div>
    <div class="flex gap-[15px] items-center">
      <input type="checkbox" class="checkbox bg-neutral border-none checkbox-primary" />
      <label for="" class="text-base font-semibold cursor-pointer"
        >Agree with terms and conditions</label
      >
    </div>

    <button class="btn btn-primary w-full text-base h-[69px]">Register</button>
  </div>
</template>

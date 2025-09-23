<script setup lang="ts">
import { CircleX } from 'lucide-vue-next'

defineProps({
  id: String,
  type: String,
  label: String,
  required: Boolean,
})

const value = defineModel<string>('value')
const error = defineModel<string>('error')

const handleKeyDown = () => {
  if (error.value) {
    error.value = ''
  }
}
</script>

<template>
  <div>
    <div class="flex justify-between">
      <span class="text-base font-semibold text-content-primary mb-2.5">
        {{ label }} <span class="text-error" v-if="required">*</span>
      </span>
      <span class="text-base font-semibold w-fit">
        <slot name="label-side" />
      </span>
    </div>
    <div class="w-full h-[65px] relative">
      <input
        v-model="value"
        @keydown="handleKeyDown"
        :id="id"
        :type="type"
        :class="[
          'text-base pl-[40px] pr-[60px] rounded-lg input input-bordered bg-neutral w-full h-full',
          error ? 'border-error border-1' : 'border-none',
        ]"
      />
      <div
        :data-tip="error"
        v-if="error"
        class="tooltip hover:tooltip-open tooltip-top tooltip-error absolute right-0 mr-4 top-1/2 -translate-y-1/2"
      >
        <CircleX :size="32" class="text-error" />
      </div>
    </div>
  </div>
</template>

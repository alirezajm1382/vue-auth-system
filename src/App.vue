<script setup lang="ts">
import { toRefs, watch } from 'vue'
import { useAlert } from './stores/alert'

const alertStore = useAlert()
const { alert } = toRefs(alertStore)

watch(alert, () => {
  setTimeout(() => {
    alertStore.$reset()
  }, 5000)
})
</script>
<template>
  <main class="inter-400">
    <RouterView />
    <div
      role="alert"
      v-show="!!alert?.title && !!alert?.type"
      :class="[
        'alert fixed bottom-[17px] left-1/2 -translate-x-1/2 w-96 z-10',
        { 'alert-success': alert?.type === 'success' },
        { 'alert-error': alert?.type === 'error' },
        { 'alert-info': alert?.type === 'info' },
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          v-if="alert?.type === 'info'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
        <path
          v-if="alert?.type === 'success'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          v-if="alert?.type === 'error'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ alert?.title }}</span>
    </div>
  </main>
</template>

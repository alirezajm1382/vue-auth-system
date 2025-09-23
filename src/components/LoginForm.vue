<script setup lang="ts">
import TextInput from '@/components/shared/TextInput.vue'
import { computed, ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  is_remembered: false,
})

const error = ref<Record<string, string>>({})

const isDisabled = computed(() => {
  if (!form.value.email || !form.value.password) {
    return true
  } else return false
})

const validateForm = () => {
  const messages: Record<string, string> = {}

  if (!form.value.email) {
    messages.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    messages.email = 'Email must be valid'
  }

  if (!form.value.password) {
    messages.password = 'Password is required'
  } else if (form.value.password.length < 6) {
    messages.password = 'Password must be at least 6 characters'
  }

  error.value = messages
  return Object.keys(messages).length == 0
}

const handleLogin = () => {
  if (!validateForm()) return
  console.log('Form Submitted! ', form.value)
}
</script>

<template>
  <form class="flex flex-col gap-[30px]" @submit.prevent="handleLogin">
    <TextInput
      id="email"
      type="text"
      label="Email"
      v-model:value="form.email"
      v-model:error="error.email"
    />
    <TextInput
      id="password"
      type="password"
      label="Password"
      v-model:value="form.password"
      v-model:error="error.password"
    >
      <template #label-side>
        <RouterLink to="" class="hover:underline text-primary"> Forgot Your Password? </RouterLink>
      </template>
    </TextInput>
    <div class="flex gap-[15px] items-center">
      <input
        type="checkbox"
        class="checkbox bg-neutral border-none checkbox-primary"
        v-model="form.is_remembered"
      />
      <label for="" class="text-base font-semibold cursor-pointer">Remember me?</label>
    </div>
    <button class="btn btn-primary w-full text-base h-[69px]" :disabled="isDisabled">
      Sign In
    </button>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TextInput from '@/components/shared/TextInput.vue'

const form = ref({
  name: '',
  email: '',
  password: '',
  does_agree: false,
})

const isDisabled = computed(() => {
  if (!form.value.email || !form.value.password || !form.value.name || !form.value.does_agree) {
    return true
  } else return false
})

const error = ref<Record<string, string>>({})

const validateForm = () => {
  const messages: Record<string, string> = {}

  if (!form.value.name) {
    messages.name = 'Name is required'
  } else if (form.value.name.length < 3) {
    messages.name = 'Name is too short'
  }

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

const handleRegister = () => {
  if (!validateForm() && !isDisabled.value) return
  console.log('Form Submitted! ', form.value)
}
</script>

<template>
  <form class="flex flex-col gap-[30px]" @submit.prevent="handleRegister">
    <TextInput
      required
      type="text"
      label="Name"
      v-model:value="form.name"
      v-model:error="error.name"
    />
    <TextInput
      required
      type="text"
      label="Email"
      v-model:value="form.email"
      v-model:error="error.email"
    />
    <TextInput
      required
      type="password"
      label="Password"
      v-model:value="form.password"
      v-model:error="error.password"
    />

    <div class="flex gap-[15px] items-center">
      <input
        type="checkbox"
        class="checkbox bg-neutral border-none checkbox-primary"
        v-model="form.does_agree"
      />
      <label for="" class="text-base font-semibold cursor-pointer"
        >Agree with terms and conditions</label
      >
    </div>

    <button class="btn btn-primary w-full text-base h-[69px]" :disabled="isDisabled">
      Register
    </button>
  </form>
</template>

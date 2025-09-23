<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import TextInput from '@/components/shared/TextInput.vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const form = ref({
  name: '',
  email: '',
  password: '',
  does_agree: false,
})

const auth = useAuthStore()
const { isLoading } = storeToRefs(auth)
const { register } = auth

const isDisabled = computed(() => {
  return (
    !form.value.email ||
    !form.value.password ||
    !form.value.name ||
    !form.value.does_agree ||
    Object.keys(error.value).length > 0
  )
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
  if (!validateForm()) {
    return
  }
  register(form.value)
}

watch(form.value, () => {
  validateForm()
})
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

    <button
      :class="{
        'btn btn-primary w-full text-base h-[69px]': true,
      }"
      :disabled="isDisabled || isLoading"
    >
      Register
      <span v-show="isLoading" class="loading loading-spinner"></span>
    </button>
  </form>
</template>

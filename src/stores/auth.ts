import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useAlert } from './alert'

interface User {
  name: string
  email: string
  password: string
}

export const useAuthStore = defineStore('authentication-store', () => {
  const user = ref<User | undefined>(
    JSON.parse(localStorage.getItem('session') || 'null') || undefined,
  )
  const isLoggedIn = computed(() => {
    if (user.value) return true
    else return false
  })
  const isLoading = ref(false)

  const alertStore = useAlert()
  const { fireAlert } = alertStore

  async function login(payload: Pick<User, 'email' | 'password'>) {
    isLoading.value = true
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const usersList: User[] = JSON.parse(localStorage.getItem('users') || '[]')
    const userItem = usersList.find((user) => user.email === payload.email)
    if (userItem && userItem.password === payload.password) {
      user.value = userItem
      localStorage.setItem('session', JSON.stringify(userItem))
      fireAlert({ title: 'Logged in!', type: 'success' })
      isLoading.value = false
      return true
    }
    isLoading.value = false
    fireAlert({ title: 'Invalid credentials!', type: 'error' })
    return false
  }

  async function register(payload: User) {
    isLoading.value = true
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const usersList: User[] = JSON.parse(localStorage.getItem('users') || '[]')
    const userItem = usersList.find((user) => user.email === payload.email)
    if (!userItem) {
      usersList.push(payload)
      localStorage.setItem('users', JSON.stringify(usersList))
      isLoading.value = false
      fireAlert({ title: 'Registtation Done!', type: 'success' })
      return true
    }
    isLoading.value = false
    fireAlert({ title: 'User already exists!', type: 'error' })
    return false
  }

  async function logout() {
    user.value = undefined
    localStorage.removeItem('session')
    fireAlert({ title: 'Logged out!', type: 'info' })
  }

  return { user, isLoading, isLoggedIn, login, register, logout }
})

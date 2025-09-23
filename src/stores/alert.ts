import { defineStore } from 'pinia'
import { ref } from 'vue'

type AlertStatus = 'success' | 'info' | 'error'

interface Alert {
  title: string
  type: AlertStatus
}

export const useAlert = defineStore('alert-store', () => {
  const alert = ref<Alert>()

  function $reset() {
    alert.value = undefined
  }

  async function fireAlert(payload: Alert) {
    alert.value = payload
    await setTimeout(() => {}, 2000)
  }

  return { alert, fireAlert, $reset }
})

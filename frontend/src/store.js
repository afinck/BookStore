import { writable } from 'svelte/store'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const fetchData = async () => {
  const response = await fetch(BASE_URL)
  const jsonData = await response.json()
  return jsonData
}

export const dataStore = writable([])

export const fetchDataAndSetStore = async () => {
  const data = await fetchData()
  dataStore.set(data)
}

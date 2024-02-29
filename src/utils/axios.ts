import axios, { AxiosInstance } from 'axios'

let api: AxiosInstance

const initializeApi = (apiKey: string, apiBase: string) => {
  api = axios.create({
    baseURL: apiBase
  })
  api.defaults.headers.common['x-api-key'] = `Bearer ${apiKey}`
}

const setOwner = (owner_token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${owner_token}`
}

const setUser = (user_token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${user_token}`
}

export { initializeApi, api, setOwner, setUser }

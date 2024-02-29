import { AxiosError } from 'axios'

import { api } from './axios'

const requestToken = async () => {
  try {
    const res = await api.get('/auth/wallet/request-token')
    return {
      res,
      token: res.data.token,
      message: res.data.message
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('requestToken: ' + error?.response?.data?.message)
    } else {
      throw new Error('requestToken: ' + error.message)
    }
  }
}

const walletLogin = async (
  signature: string,
  address: string,
  token: string
) => {
  try {
    const res = await api.post('/auth/wallet/login', {
      signature,
      address,
      token
    })
    return {
      res,
      token: res.data.token,
      user_instance: res.data.user_instance
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('walletLogin: ' + error?.response?.data?.message)
    } else {
      throw new Error('walletLogin: ' + error.message)
    }
  }
}

const magicLogin = async (didToken: string) => {
  try {
    const res = await api.post('/auth/magic/login', {
      didToken
    })
    return {
      res,
      token: res.data.token,
      user_instance: res.data.user_instance
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('magicLogin: ' + error?.response?.data?.message)
    } else {
      throw new Error('magicLogin: ' + error.message)
    }
  }
}

const ownerLogin = async (email: string, password: string) => {
  try {
    const res = await api.post('/auth/owner/login', {
      email,
      password
    })
    return {
      res,
      token: res.data.token,
      owner_instance: res.data.owner_instance
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('ownerLogin: ' + error?.response?.data?.message)
    } else {
      throw new Error('ownerLogin: ' + error.message)
    }
  }
}

export { requestToken, walletLogin, magicLogin, ownerLogin }

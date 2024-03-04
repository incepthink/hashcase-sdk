import { AxiosError } from 'axios'

import { api } from './axios'

const fetchUserInfo = async () => {
  try {
    const res = await api.get('/user')
    return {
      res,
      user_instance: res.data.user_instance
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('fetchUserInfo: ' + error?.response?.data?.message)
    } else {
      throw new Error('fetchUserInfo: ' + error.message)
    }
  }
}

const fetchUserNFTs = async () => {
  try {
    const res = await api.get('/user/nfts')
    return {
      res,
      nfts: res.data.nfts
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('fetchUserNFTs: ' + error?.response?.data?.message)
    } else {
      throw new Error('fetchUserNFTs: ' + error.message)
    }
  }
}

const claimNFT = async (item_id: number, amount: number = 1) => {
  try {
    const res = await api.post('/user/claim', {
      item_id,
      amount
    })
    return {
      res,
      receipt: res.data.receipt,
      message: res.data.message
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('claimNFT: ' + error?.response?.data?.message)
    } else {
      throw new Error('claimNFT: ' + error.message)
    }
  }
}

export { fetchUserInfo, fetchUserNFTs, claimNFT }

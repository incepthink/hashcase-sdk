import { AxiosError, AxiosResponse } from 'axios'
import { TransactionReceipt } from 'ethers'

import { User, NFT } from '../types'

import { api } from './axios'

const fetchUserInfo = async (): Promise<{
  res: AxiosResponse
  user_instance: User
}> => {
  try {
    const res: AxiosResponse = await api.get('/user')
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

const fetchUserNFTs = async (): Promise<{
  res: AxiosResponse
  nfts: NFT[]
}> => {
  try {
    const res: AxiosResponse = await api.get('/user/nfts')
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

const claimNFT = async (
  item_id: number,
  amount: number = 1
): Promise<{
  res: AxiosResponse
  receipt: TransactionReceipt
  message: string
}> => {
  try {
    const res: AxiosResponse = await api.post('/user/claim', {
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

const mintNFT = async (
  collection_id: number,
  amount: number = 1,
  metadata: FormData
): Promise<{
  res: AxiosResponse
  receipt: TransactionReceipt
  message: string
}> => {
  try {
    const res: AxiosResponse = await api.post('/user/mint', metadata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      params: {
        collection_id,
        amount
      }
    })
    return {
      res,
      receipt: res.data.receipt,
      message: res.data.message
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('mintNFT: ' + error?.response?.data?.message)
    } else {
      throw new Error('mintNFT: ' + error.message)
    }
  }
}

export { fetchUserInfo, fetchUserNFTs, claimNFT, mintNFT }

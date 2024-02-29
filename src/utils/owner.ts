import { AxiosError } from 'axios'

import type { CollectionAttributes, ItemAttributes } from '../types/modelTypes'

import { api } from './axios'

const createCollection = async (collection: CollectionAttributes) => {
  try {
    const res = await api.post('/owner/collection/create', {
      collection
    })
    return {
      res,
      collection_instance: res.data.collection_instance
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('createCollection: ' + error?.response?.data?.message)
    } else {
      throw new Error('createCollection: ' + error.message)
    }
  }
}

const createItem = async (item: ItemAttributes) => {
  try {
    const res = await api.post('/owner/item/create', {
      item
    })
    return {
      res,
      item_instance: res.data.item_instance
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('createItem: ' + error?.response?.data?.message)
    } else {
      throw new Error('createItem: ' + error.message)
    }
  }
}

const fetchAPIKeys = async () => {
  try {
    const res = await api.get('/owner/apikeys')
    const api_keys = res.data.api_keys
    return {
      res,
      api_keys
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('fetchAPIKeys: ' + error?.response?.data?.message)
    } else {
      throw new Error('fetchAPIKeys: ' + error.message)
    }
  }
}

export { fetchAPIKeys, createCollection, createItem }

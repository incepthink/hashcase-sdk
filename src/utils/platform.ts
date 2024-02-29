import { AxiosError } from 'axios'

import { api } from './axios'

const fetchCollection = async (collectionId: number) => {
  try {
    const res = await api.get('/platform/collection', {
      params: {
        collection_id: collectionId
      }
    })
    return {
      res,
      collection_instance: res.data.collection_instance
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('fetchCollection: ' + error?.response?.data?.message)
    } else {
      throw new Error('fetchCollection: ' + error.message)
    }
  }
}

const fetchCollections = async () => {
  try {
    const res = await api.get('/platform/collections')
    return {
      res,
      collections: res.data.collections
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('fetchCollections: ' + error?.response?.data?.message)
    } else {
      throw new Error('fetchCollections: ' + error.message)
    }
  }
}

const fetchCollectionsOfOwner = async (ownerId: number) => {
  try {
    const res = await api.get('/platform/collections/byowner', {
      params: {
        owner_id: ownerId
      }
    })
    return {
      res,
      collections: res.data.collections
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        'fetchCollectionOfOwner: ' + error?.response?.data?.message
      )
    } else {
      throw new Error('fetchCollectionOfOwner: ' + error.message)
    }
  }
}

const fetchItem = async (itemId: number) => {
  try {
    const res = await api.get('/platform/item', {
      params: {
        item_id: itemId
      }
    })
    return {
      res,
      item_instance: res.data.item_instance
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('fetchItem: ' + error?.response?.data?.message)
    } else {
      throw new Error('fetchItem: ' + error.message)
    }
  }
}

const fetchItemOfCollectionNameAndTokenId = async (
  collectionName: string,
  tokenId: string
) => {
  try {
    const res = await api.get(
      '/platform/item/by-collection-name-and-token-id',
      {
        params: {
          collection_name: collectionName,
          token_id: tokenId
        }
      }
    )
    return {
      res,
      item_instance: res.data.item_instance
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        'fetchItemOfCollectionNameAndTokenId: ' + error?.response?.data?.message
      )
    } else {
      throw new Error('fetchItemOfCollectionNameAndTokenId: ' + error.message)
    }
  }
}

const fetchItems = async () => {
  try {
    const res = await api.get('/platform/items')
    return {
      res,
      items: res.data.items
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('fetchItems: ' + error?.response?.data?.message)
    } else {
      throw new Error('fetchItems: ' + error.message)
    }
  }
}

const fetchItemsOfCollection = async (collectionId: number) => {
  try {
    const res = await api.get('/platform/items/bycollection', {
      params: {
        collection_id: collectionId
      }
    })
    return {
      res,
      items: res.data.items
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        'fetchItemsOfCollection: ' + error?.response?.data?.message
      )
    } else {
      throw new Error('fetchItemsOfCollection: ' + error.message)
    }
  }
}

const fetchItemsOfOwner = async (ownerId: number) => {
  try {
    const res = await api.get('/platform/items/byowner', {
      params: {
        owner_id: ownerId
      }
    })
    return {
      res,
      items: res.data.items
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('fetchItemsOfOwner: ' + error?.response?.data?.message)
    } else {
      throw new Error('fetchItemsOfOwner: ' + error.message)
    }
  }
}

export {
  fetchCollection,
  fetchCollections,
  fetchCollectionsOfOwner,
  fetchItem,
  fetchItemOfCollectionNameAndTokenId,
  fetchItems,
  fetchItemsOfCollection,
  fetchItemsOfOwner
}

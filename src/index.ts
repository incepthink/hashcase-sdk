import { requestToken, walletLogin, magicLogin } from './utils/auth'
import { initializeApi, setOwner, setUser } from './utils/axios'
import { createCollection, createItem, fetchAPIKeys } from './utils/owner'
import {
  fetchCollection,
  fetchCollections,
  fetchCollectionsOfOwner,
  fetchItem,
  fetchItems,
  fetchItemsOfCollection,
  fetchItemsOfOwner
} from './utils/platform'
import { fetchUserInfo, fetchUserNFTs, claimNFT } from './utils/user'

const init = ({
  apiKey,
  apiBase = 'https://api.hashcase.co'
}: {
  apiKey: string
  apiBase?: string
}) => {
  initializeApi(apiKey, apiBase)
}

const hashcase = {
  init,
  fetchAPIKeys,
  setOwner,
  setUser,
  createCollection,
  createItem
}

const hashcase_platform = {
  init,
  setUser,
  fetchCollection,
  fetchCollections,
  fetchCollectionsOfOwner,
  fetchItem,
  fetchItems,
  fetchItemsOfCollection,
  fetchItemsOfOwner,
  fetchUserInfo,
  fetchUserNFTs,
  claimNFT,
  requestToken,
  walletLogin,
  magicLogin
}

export default hashcase
export { hashcase_platform }

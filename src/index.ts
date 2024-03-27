import { requestToken, walletLogin, magicLogin } from './utils/auth'
import { initializeApi, setUser } from './utils/axios'
import {
  fetchCollection,
  fetchCollections,
  fetchCollectionsOfOwner,
  fetchItem,
  fetchItemOfCollectionNameAndTokenId,
  fetchItems,
  fetchItemsOfCollection,
  fetchItemsOfOwner
} from './utils/platform'
import { fetchUserInfo, fetchUserNFTs, claimNFT, mintNFT } from './utils/user'

const init = ({
  apiKey,
  apiBase = 'https://api.hashcase.co'
}: {
  apiKey: string
  apiBase?: string
}) => {
  initializeApi(apiKey, apiBase)
}

const hashcase_platform = {
  init,
  setUser,
  fetchCollection,
  fetchCollections,
  fetchCollectionsOfOwner,
  fetchItem,
  fetchItemOfCollectionNameAndTokenId,
  fetchItems,
  fetchItemsOfCollection,
  fetchItemsOfOwner,
  fetchUserInfo,
  fetchUserNFTs,
  claimNFT,
  mintNFT,
  requestToken,
  walletLogin,
  magicLogin
}

export { hashcase_platform }
export * from './types'
export * from './enums'

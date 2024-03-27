import {
  ChainType,
  ItemStatus,
  ItemType,
  PaymasterType,
  Standard
} from '../enums'

type UserAttributes = {
  email?: string
  eth_wallet_address?: string
  fvm_wallet_address?: string
}

type CollectionAttributes = {
  name: string
  description?: string
  image_uri?: string
  chain_type: ChainType
  chain_id: number
  contract_address: string
  standard: Standard
  owner_id: number
  paymaster_id?: number
}

type ItemAttributes = {
  name: string
  description?: string
  image_uri?: string
  collection_id: number
  token_id: number
  type?: ItemType
  status?: ItemStatus
  priority?: number
  attributes?: string
}

type OwnerAttributes = {
  name?: string
  email: string
  password_hash: string
  company_name?: string
}

type PaymasterAttributes = {
  type: PaymasterType
  owner_id: number
  chain_type?: ChainType
  chain_id?: number
  contract_address?: string
}

type NFTAttributes = {
  user_id: number
  item_id: number
  amount: number
}

type DevAPIAttributes = {
  api_key: string
  owner_id: number
  analytics?: string
  attributes?: string
}

type User = UserAttributes & {
  id: number
}

type Collection = CollectionAttributes & {
  id: number
}

type Item = ItemAttributes & {
  id: number
}

type Owner = OwnerAttributes & {
  id: number
}

type Paymaster = PaymasterAttributes & {
  id: number
}

type NFT = NFTAttributes & {
  id: number
}

type DevAPI = DevAPIAttributes & {
  id: number
}

export type {
  UserAttributes,
  CollectionAttributes,
  ItemAttributes,
  OwnerAttributes,
  PaymasterAttributes,
  NFTAttributes,
  DevAPIAttributes,
  User,
  Collection,
  Item,
  Owner,
  Paymaster,
  NFT,
  DevAPI
}

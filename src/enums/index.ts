enum ChainType {
  ETHEREUM = 'ethereum',
  FILECOIN = 'filecoin'
}

enum Standard {
  ERC721 = 'erc721',
  ERC1155 = 'erc1155'
}

enum ItemType {
  BUYANDCLAIM = 'buyandclaim',
  CLAIMANDSHIP = 'claimandship',
  TRANSFERNFT = 'transfernft'
}

enum ItemStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

enum PaymasterType {
  BICONOMY = 'biconomy'
}

enum TokenType {
  USER = 'user',
  OWNER = 'owner',
  ADMIN = 'admin'
}

export { ChainType, Standard, ItemType, ItemStatus, PaymasterType, TokenType }

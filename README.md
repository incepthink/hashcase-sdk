# HashCase SDK

## Introduction

Welcome to the HashCase SDK! This toolkit is designed to facilitate developers in integrating HashCase's powerful web3 infrastructure into their applications with ease. The SDK provides a suite of methods for managing NFT campaigns, user authentication, and blockchain interactions, allowing you to seamlessly connect your applications with the decentralized world of HashCase.

## Features

- **Comprehensive API Coverage**: Full access to HashCase's REST API endpoints through easy-to-use functions.
- **Authentication Support**: Methods to handle wallet-based and magic link authentication.
- **NFT Operations**: Facilitate minting, claiming, and fetching NFTs directly through your app.
- **User and Owner Management**: Functions to manage user and owner-specific data and operations.
- **Collection and Item Management**: Create and manage collections and items, crucial elements in NFT campaigns.

## Installation

```bash
npm install hashcase-sdk
```

## Quick Start

Here's a quick example to get you started with initializing the SDK and fetching NFT collections:

```typescript
import { hashcase_platform as hashcase } from 'hashcase-sdk';

// Initialize with your API key and optional custom API base URL
hashcase.init({
  apiKey: 'your-api-key-here',
  apiBase: 'https://api.hashcase.co' // Optional; defaults to HashCase's API
});

// Example: Fetch all collections
async function getCollections() {
  try {
    const collections = await hashcase.fetchCollections();
    console.log(collections);
  } catch (error) {
    console.error('Error fetching collections:', error);
  }
}

getCollections();
```

## API Reference

As of now, the SDK includes the following core functionalities:

### Authentication

- **`requestToken()`**: Request a session token for wallet authentication.
- **`walletLogin(signature, address, token)`**: Authenticate using a wallet signature.
- **`magicLogin(didToken)`**: Authenticate using a decentralized identifier token.

### User Management

- **`fetchUserInfo()`**: Fetch details of the logged-in user.
- **`fetchUserNFTs()`**: Get NFTs owned by the user.

### NFT Operations

- **`claimNFT(itemId, amount)`**: Claim an NFT with specified quantity.
- **`mintNFT(collectionId, amount, metadata)`**: Mint new NFTs to a specific collection.

### Collection and Item Management

- **`createCollection(collectionAttributes)`**: Create a new NFT collection.
- **`createItem(itemAttributes)`**: Add a new item to an existing collection.

## Support

For support, email contact@hashcase.co or open an issue in the GitHub repository.

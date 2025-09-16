# MyToken (USDT) BEP20 Token

This project is a simple BEP20 token smart contract deployed on Binance Smart Chain (BSC) testnet for development and testing purposes. It mimics key specifications of the USDT token with custom name and symbol.

## Token Details

- **Name:** MyToken  
- **Symbol:** USDT  
- **Decimals:** 18  
- **Total Supply:** 100,000,000,000 tokens (100 billion)  
- **Standard:** BEP20 (compatible with ERC20)  
- **Owner/Admin:** Yes (Ownable)  

## Features

- Minted entire initial supply to deployer address
- Standard ERC20/BEP20 functions supported
- Ownable contract allowing ownership control

## Project Structure

- `contracts/USDT.sol` — Solidity smart contract implementing the BEP20 token
- `scripts/deploy.js` — Deployment script using Hardhat and ethers.js
- `test/test.js` — Automated tests for token functionality
- `hardhat.config.js` — Hardhat configuration file

## Prerequisites

- Node.js (Recommended v18.x or v20.x)
- npm or yarn
- Hardhat framework

## Setup & Deployment

1. Clone the repository
2. Install dependencies:

```bash 
    npm install
```

3. Compile the smart contracts:

```bash 
    npx hardhat compile
```

4. Run tests:

```bash 
    npx hardhat test
```

5. Deploy to Binance Smart Chain Testnet:  

    Configure RPC and private key in `.env` file, then run:

```bash 
    npx hardhat run scripts/deploy.js --network bscTestnet
```


## Environment Variables

Use a `.env` file with:

BSCTESTNET_RPC_URL=https://data-seed-prebsc-1-s1.binance.org:8545/
PRIVATE_KEY=your_private_key_here
BSCSCAN_API_KEY=your bsc api key

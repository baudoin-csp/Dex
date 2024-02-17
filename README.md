# Web3 Decentralized Exchange

This Web3 Decentralized Exchange (DEX) is a fully functional decentralized exchange built using Moralis. It enables users to swap ERC20 tokens with other ERC20 tokens on a selected Ethereum Virtual Machine (EVM) Chain.

<img width="800" alt="Dex" src="https://github.com/baudoin-csp/Dex/assets/118212739/787bcaaa-5515-4a81-ad39-79ea432a2846">

## Getting Started

To run the project locally, follow these steps:

1. **Create API Key**: 
   - Visit [Moralis](https://moralis.io/api/price/) to create an API Key to fetch token prices.

2. **Frontend Setup**:
   - Navigate to the `dex` folder.
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend server:
     ```
     npm run start
     ```

3. **Backend Setup**:
   - Install dependencies:
     ```
     npm install
     ```
   - Start the backend server:
     ```
     node index.js
     ```

4. **Access the Application**:
   - Once both the frontend and backend servers are running, you can access the decentralized exchange application through your web browser.

## Usage

- Users can connect their wallets (MetaMask, TrustWallet, etc.) to the decentralized exchange.
- They can then select the tokens they want to swap and enter the desired amount.
- The exchange will provide the current token prices fetched through the Moralis API.
- After confirming the swap, the transaction is executed on the selected EVM Chain.

## Demo

https://github.com/baudoin-csp/Dex/assets/118212739/0f80c586-3564-434c-a66a-7d0a90fac06e

## Contributing

Contributions to the Web3 Decentralized Exchange project are welcome! If you find any issues, have feature requests, or want to contribute code, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE).

const ethers = require("ethers");
const dotenv = require("dotenv");
dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const fakeWallet = new ethers.Wallet(
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  provider
); 

const TOKENS = {
    WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
}

const CONTRACTS = {
    UNIV2_ROUTER: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    UNIV3_ROUTER: "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
}

const IUniV2RouterABI = require("./abi/IUniswapV2Router.json");
      
const uniswapV2Contract = new ethers.Contract(
    CONTRACTS.UNIV2_ROUTER,
    IUniV2RouterABI,
    fakeWallet
);

module.exports = { provider, fakeWallet, TOKENS, CONTRACTS, uniswapV2Contract }
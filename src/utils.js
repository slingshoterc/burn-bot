const calcPairAddress = async (token0, token1) => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const fakeWallet = new ethers.Wallet(
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      provider
    ); 

    const uniswapV2Factory = new ethers.Contract(
        "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
        ['function getPair(address tokenA, address tokenB) external view returns (address pair)'],
        fakeWallet
      );

      const pairAddress = await uniswapV2Factory.getPair(token0, token1)

}

const calcDollarAmount = async (token, amount) => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const fakeWallet = new ethers.Wallet(
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      provider
    ); 

    const IUniV2RouterABI = require("./abi/IUniswapV2Router.json");
      
    const uniswapV2Contract = new ethers.Contract(
        "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        IUniV2RouterABI,
        fakeWallet
    );

    // Find Weth Value
    const path = [token, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"]
    const getAmounts = await uniswapV2Contract.getAmountsOut(amount, path)
    const wethReturned = getAmounts[1]
    logInfo(`Weth: ${wethReturned}`)

    // Convert Weth to USD
    const wethUsdcPath = ["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
    const getUsdcAmounts = await uniswapV2Contract.getAmountsOut(wethOut, wethUsdcPath)
    const usdcReturned = getUsdcAmounts[1]
    logInfo(`USD: ${usdcReturned}`)

};

module.exports = { calcDollarAmount, calcPairAddress }
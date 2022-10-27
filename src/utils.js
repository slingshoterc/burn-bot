const { provider, fakeWallet, TOKENS, CONTRACTS } = require("./constants")

const calcPairAddress = async (token0, token1) => {

    const uniswapV2Factory = new ethers.Contract(
        "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
        ['function getPair(address tokenA, address tokenB) external view returns (address pair)'],
        fakeWallet
      );

      const pairAddress = await uniswapV2Factory.getPair(token0, token1)
    return pairAddress;
}

const calcDollarAmount = async (token, amount) => {
    const IUniV2RouterABI = require("./abi/IUniswapV2Router.json");
      
    const uniswapV2Contract = new ethers.Contract(
        CONTRACTS.UNIV2_ROUTER,
        IUniV2RouterABI,
        fakeWallet
    );

    // Find Weth Value
    const path = [token, TOKENS.WETH]
    const getAmounts = await uniswapV2Contract.getAmountsOut(amount, path)
    const wethReturned = getAmounts[1]

    // Convert Weth to USD
    const wethUsdcPath = [TOKENS.WETH, TOKENS.USDC]
    const getUsdcAmounts = await uniswapV2Contract.getAmountsOut(wethOut, wethUsdcPath)
    const usdcReturned = getUsdcAmounts[1]

    return usdcReturned;
};

module.exports = { calcDollarAmount, calcPairAddress }
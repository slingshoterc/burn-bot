const ethers = require("ethers");
const ISlingABI = require("../abi/ISling.json");
const subscribedProjects = require("../projects").projects;
const { calcDollarAmount } = require("../utils");
const { fakeWallet } = require("../constants");

const DEAD_WALLET = "0x000000000000000000000000000000000000dEaD";
const SLING_CONTRACT = "0x5a79be6cdce26bc853d72919bf98a0378641b607";

const sendJSONresponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

const getTokens = (req, res) => {
  const supportedTokens = [];
  for (let [contract, token] of Object.entries(subscribedProjects)) {
    supportedTokens.push({
      name: token.name,
      ticker: token.ticker,
      telegram: token.telegram,
      contract: contract,
      buyLink: token.buyLink
    });
  }

  sendJSONresponse(res, 200, supportedTokens);
};

const getToken = async (req, res) => {
  const { token } = req.params;

  if (token !== SLING_CONTRACT) {
    sendJSONresponse(res, 400, { message: "Token not supported!" });
  }

  // Get burn data for token
  const tokenContract = new ethers.Contract(token, ISlingABI, fakeWallet);
  const deadBalance = await tokenContract.balanceOf(DEAD_WALLET);
  const totalSupply = await tokenContract.totalSupply();
  const percentageDead = ((deadBalance / totalSupply) * 100).toFixed(2);
  const totalDollarsBurned = await calcDollarAmount(token, totalSupply);

  const selectedToken = subscribedProjects[token.toLowerCase()] || {};

  const payload = {
    name: selectedToken.name,
    ticker: selectedToken.ticker,
    telegram: selectedToken.telegram,
    contract: selectedToken.contract,
    buyLink: selectedToken.buyLink,
    burn: {
      percentage: percentageDead,
      amountInUSD: Math.trunc(ethers.utils.formatUnits(totalDollarsBurned, 6))
    }
  };

  sendJSONresponse(res, 200, payload);
};

module.exports = { getTokens, getToken };

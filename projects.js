/* 
    Enable burn bot by adding the project object here.
    We add all subscribed projects to this file for now. Will be migrated to the database when the right time comes.
*/
const projects = {
  "0x5a79be6cdce26bc853d72919bf98a0378641b607": {
    name: "Sling",
    ticker: "$SLING",
    telegram: "https://t.me/slingshotportal",
    contract: "0x5a79be6cdce26bc853d72919bf98a0378641b607",
    media:
      "BAACAgQAAx0CZk4yhwACAb1jTE_GgP9-LYXqyt0d4t0zYZdpygACnQsAAsiQYVLatKHbax56CioE",
    chatId: -1001715624415,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x5a79be6cdce26bc853d72919bf98a0378641b607&use=v2&chain=mainnet"
  }
};

module.exports = {
  projects
};

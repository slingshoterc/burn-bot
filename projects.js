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
  },
  "0xc68a4c68f17fed266a5e39e7140650acadfe78f8": {
    name: "Runestone",
    ticker: "$RUNE",
    telegram: "https://t.me/runestonetoken",
    contract: "0xc68a4c68f17fed266a5e39e7140650acadfe78f8",
    media:
      "CgACAgEAAxkBAAEZKmtjUCFW6SU5iwxqiAPQZOL0kVOmfgACQQIAAiZYgUZR1-Hz6ryv3yoE",
    chatId: -1001371904199,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc68a4c68f17fed266a5e39e7140650acadfe78f8&use=v2&chain=mainnet"
  },
  "0x82c2f739f4af3b401a9f78d9a0d6844db485f098": {
    name: "Simba Inu",
    ticker: "$SIMBA",
    telegram: "https://t.me/kingsimbainu",
    contract: "0x82c2f739f4af3b401a9f78d9a0d6844db485f098",
    media:
      "BAACAgEAAx0CZk4yhwACAgpjTnALPBO1yLwUd86PU7awo3icxAACqgMAAiPIcEYCQuDiaz1tzyoE",
    chatId: -1001671138082,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x82c2f739f4af3b401a9f78d9a0d6844db485f098&use=v2&chain=mainnet"
  }
};

module.exports = {
  projects
};

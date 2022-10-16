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
    chart:
      "https://www.dextools.io/app/ether/pair-explorer/0x2c43f5288a9a64cbebe39070e6f65f582f7c7433",
    media:
      "BAACAgQAAx0CZk4yhwACAb1jTE_GgP9-LYXqyt0d4t0zYZdpygACnQsAAsiQYVLatKHbax56CioE",
    chatId: -1001664548090
  },
  "0x0cba60ca5ef4d42f92a5070a8fedd13be93e2861": {
    name: "The protocol",
    ticker: "$THE",
    telegram: "https://t.me/the_communitytg",
    contract: "0x0cba60ca5ef4d42f92a5070a8fedd13be93e2861",
    chart:
      "https://www.dextools.io/app/ether/pair-explorer/0xf29450019834d7874b4e306275c4334326ac27f1",
    chatId: -1001664548090,
    media:
      "CgACAgQAAx0CYzb8-gADAmNLsq7sMQf8wJTkLyOjP0yqAnjGAALCAgACrvAMU9nhcS8gimueKgQ"
  }
};

module.exports = {
  projects
};

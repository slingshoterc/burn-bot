/* 
    Enable burn bot by adding the project object here.
    We add all subscribed projects to this file for now. Will be migrated to the database when the right time comes.
*/
const projects = {
  // "0x5a79be6cdce26bc853d72919bf98a0378641b607": {
  //   name: "Sling",
  //   ticker: "$SLING",
  //   telegram: "https://t.me/slingshotportal",
  //   contract: "0x5a79be6cdce26bc853d72919bf98a0378641b607",
  //   media:
  //     "BAACAgQAAx0CZk4yhwACAb1jTE_GgP9-LYXqyt0d4t0zYZdpygACnQsAAsiQYVLatKHbax56CioE",
  //   chatId: -1001715624415,
  //   buyLink:
  //     "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x5a79be6cdce26bc853d72919bf98a0378641b607&use=v2&chain=mainnet"
  // },
  "0xc68a4c68f17fed266a5e39e7140650acadfe78f8": {
    name: "Runestone",
    ticker: "$RUNE",
    telegram: "https://t.me/runestonetoken",
    contract: "0xc68a4c68f17fed266a5e39e7140650acadfe78f8",
    media:
      "CgACAgQAAx0CcB6ytwACAXBjb6wlhujPpKZd0TSdQN5shbE4yAACuQoAAgUdgVN1BVdcs2uHvysE",
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
  },
  "0xd804d1270ba889636822e018a88d0a3dbe83e18a": {
    name: "The ElonYe protocol",
    ticker: "$ELONYE",
    telegram: "https://t.me/ElonyeProtocolETH",
    contract: "0xd804d1270ba889636822e018a88d0a3dbe83e18a",
    media:
      "BAACAgEAAx0CYzb8-gADoWNWNrWuUNSK5cPT9lvQErpkMUi4AAJIAgAC0YexRqRxmj7qiT69KgQ",
    chatId: -1001866506529,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd804d1270ba889636822e018a88d0a3dbe83e18a&use=v2&chain=mainnet"
  },
  "0x837556300973e496e220bd9cb0ec701cdde9d3ef": {
    name: "APED",
    ticker: "$APED",
    telegram: "https://t.me/Apedportal",
    contract: "0x837556300973e496e220bd9cb0ec701cdde9d3ef",
    media:
      "BAACAgEAAx0CYzb8-gADoWNWNrWuUNSK5cPT9lvQErpkMUi4AAJIAgAC0YexRqRxmj7qiT69KgQ",
    chatId: -1001841312251,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x837556300973e496e220bd9cb0ec701cdde9d3ef&use=v2&chain=mainnet"
  },
  "0x4b9f500ed7c571fca3bf049b877faa0ba131fc76": {
    name: "MWII",
    ticker: "$MWII",
    telegram: "https://t.me/CallOfDutyERC",
    contract: "0x4b9f500ed7c571fca3bf049b877faa0ba131fc76",
    media:
      "BAACAgQAAx0CcB6ytwADX2Nb7ieuIRNJB5DhdBNlDwSHT-PwAAIVDgACcX_hUikhgPsQi0eFKgQ",
    chatId: -1001636614336,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x4b9f500ed7c571fca3bf049b877faa0ba131fc76&use=v2&chain=mainnet"
  },
  "0xd763151f6224cf8e3cb0ea0649f0c1ed4d0fe5aa": {
    name: "NODIP",
    ticker: "$NODIP",
    telegram: "https://t.me/NODIPCommunity",
    contract: "0xd763151f6224cf8e3cb0ea0649f0c1ed4d0fe5aa",
    media:
      "CgACAgQAAx0CcB6ytwADYWNc2-Q-XBjRoKo_ryUkkeDmHyQkAAJvDQACcX_pUgKg-LJaHOrRKgQ",
    chatId: -1001730471922,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd763151f6224cf8e3cb0ea0649f0c1ed4d0fe5aa&use=v2&chain=mainnet"
  },
  "0x96313947f453efdfb31549f7ad19a870dcb9a508": {
    name: "Verified Doge",
    ticker: "$VDOGE",
    telegram: "https://t.me/verifieddogeportal",
    contract: "0x96313947f453efdfb31549f7ad19a870dcb9a508",
    media:
      "CgACAgQAAx0CcB6ytwACAUtjb6DzgUnWOwpOdEi-pd6EVrWXZgACtQoAAgUdgVPL4M9RAAE2Vv0rBA",
    chatId: -1001831003530,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x96313947f453efdfb31549f7ad19a870dcb9a508&use=v2&chain=mainnet"
  },
  "0xd031edafac6a6ae5425e77f936022e506444c242": {
    name: "TSANGNYON",
    ticker: "$TSANGNYON",
    telegram: "https://t.me/tsangnyonentry",
    contract: "0xd031edafac6a6ae5425e77f936022e506444c242",
    media:
      "CgACAgQAAx0CcB6ytwADYWNc2-Q-XBjRoKo_ryUkkeDmHyQkAAJvDQACcX_pUgKg-LJaHOrRKgQ",
    chatId: -1001826940145,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd031edafac6a6ae5425e77f936022e506444c242&use=v2&chain=mainnet"
  },
  "0x59203358d7ddfe80e0abe75b0aa534bc4d22aa7f": {
    name: "FOCCER TOKEN",
    ticker: "$FOCCER",
    telegram: "https://t.me/FOCCERTOKEN",
    contract: "0x59203358d7ddfe80e0abe75b0aa534bc4d22aa7f",
    media:
      "CgACAgQAAx0CcB6ytwACAUhjb55F8ZlSLKPsI3USQq8RN4qiZQACsgoAAgUdgVN2do2Y2PCqBCsE",
    chatId: -1001823998854,
    buyLink:
      "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x59203358d7ddfe80e0abe75b0aa534bc4d22aa7f&use=v2&chain=mainnet"
  }
};

module.exports = {
  projects
};

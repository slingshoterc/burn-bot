const ethers = require("ethers");
const chalk = require("chalk");
const dotenv = require("dotenv");
dotenv.config();
const TelegramBot = require("node-telegram-bot-api");
const tg = new TelegramBot(process.env.TG_TOKEN);

const ISlingABI = require("./abi/ISling.json");
const fireEmoji = "\u{1F525}";

const logWarn = (...args) => {
  console.log(chalk.hex("#FFA500")(...args));
};
const logSuccess = (...args) => {
  console.log(chalk.green(...args));
};
const logInfo = (...args) => {
  console.log(chalk.yellow(...args));
};
const logError = (...args) => {
  console.log(chalk.red(...args));
};
const logTrace = (...args) => {
  console.log(chalk.grey(...args));
};
const logDebug = (...args) => {
  console.log(chalk.magenta(...args));
};
const logFatal = (...args) => {
  console.log(chalk.redBright(...args));
};

const match = (a, b, caseIncensitive = true) => {
  if (a === null || a === undefined) return false;

  if (Array.isArray(b)) {
    if (caseIncensitive) {
      return b.map((x) => x.toLowerCase()).includes(a.toLowerCase());
    }

    return b.includes(a);
  }

  if (caseIncensitive) {
    return a.toLowerCase() === b.toLowerCase();
  }

  return a === b;
};

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const slingContract = "0x5a79BE6CDcE26bc853d72919bF98A0378641b607";
const deadWallet = "0x000000000000000000000000000000000000dEaD";
const fakeWallet = new ethers.Wallet(
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  provider
); // Private Key for Publicly Known Account ... DO NOT USE!!
const slingTelegram = "https://t.me/slingshotportal";
const slingChart =
  "https://www.dextools.io/app/ether/pair-explorer/0x2c43f5288a9a64cbebe39070e6f65f582f7c7433";

const sendAlert = async (event) => {
  const toAddress = ethers.utils.defaultAbiCoder
    .decode(["address"], event.topics[2])
    .toString();
  if (!match(toAddress, deadWallet)) {
    return;
  }

  const tokenContract = new ethers.Contract(
    slingContract,
    ISlingABI,
    fakeWallet
  );
  const deadBalance = await tokenContract.balanceOf(deadWallet);
  const totalSupply = await tokenContract.totalSupply();
  const percentageDead = ((deadBalance / totalSupply) * 100).toFixed(2);

  tg.sendAnimation(
    process.env.CHAT_ID,
    "BAACAgQAAx0CZk4yhwACAb1jTE_GgP9-LYXqyt0d4t0zYZdpygACnQsAAsiQYVLatKHbax56CioE",
    {
      caption: `${fireEmoji} <b>NEW $SLING BURN!</b> ${fireEmoji} \n\n ${fireEmoji} <b>Amount Burned:</b> ${fireEmoji} \n ${Math.trunc(
        ethers.utils.formatUnits(event.data, 18)
      ).toLocaleString(
        "en-US"
      )} \n \n ${fireEmoji} <b>Total Burn Amount:</b> ${fireEmoji} \n ${Math.trunc(
        ethers.utils.formatUnits(deadBalance, 18)
      ).toLocaleString(
        "en-US"
      )} (${percentageDead}%) \n\n<a href="${slingTelegram}">Powered by $SLING</a>`,
      parse_mode: "HTML",
      allow_sending_without_reply: true,
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            { text: "Join chat", url: slingTelegram },
            {
              text: "Chart",
              url: slingChart
            }
          ]
        ],
        remove_keyboard: true
      })
    }
  )
    .then((res) => {
      console.log("Done!");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};

const main = async () => {
  filter = {
    address: slingContract,
    topics: [ethers.utils.id("Transfer(address,address,uint256)")]
  };

  provider.on(filter, (event) => {
    sendAlert(event).catch((e) => {
      logFatal(`Error: ${JSON.stringify(e)}`);
    });
  });
};

main();

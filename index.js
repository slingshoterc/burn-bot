const ethers = require("ethers");
const chalk = require("chalk");
const dotenv = require("dotenv");
dotenv.config();
const subscribedProjects = require("./projects").projects;
const TelegramBot = require("node-telegram-bot-api");

const tg = new TelegramBot(process.env.TG_TOKEN);
const ISlingABI = require("./abi/ISling.json");
const fireEmoji = "\u{1F525}";
const slingTelegram = "https://t.me/slingshotportal";

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
const deadWallet = "0x000000000000000000000000000000000000dEaD";
const fakeWallet = new ethers.Wallet(
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  provider
); // Private Key for Publicly Known Account ... DO NOT USE!!

const sendAlert = async (event) => {
  const contractAddress = event.address;

  const project = subscribedProjects[contractAddress.toLowerCase()] || {};
  const projectChatId = project.chatId;
  const projectMedia = project.media;
  const projectTelegram = project.telegram;
  const projectBuyLink = project.buyLink;
  const projectTicker = project.ticker;

  const toAddress = ethers.utils.defaultAbiCoder
    .decode(["address"], event.topics[2])
    .toString();
  if (!match(toAddress, deadWallet)) {
    return;
  }

  const tokenContract = new ethers.Contract(
    contractAddress,
    ISlingABI,
    fakeWallet
  );
  const deadBalance = await tokenContract.balanceOf(deadWallet);
  const totalSupply = await tokenContract.totalSupply();
  const percentageDead = ((deadBalance / totalSupply) * 100).toFixed(2);

  tg.sendAnimation(projectChatId, projectMedia, {
    caption: `${fireEmoji} <b>NEW ${projectTicker} BURN!</b> ${fireEmoji} \n\n ${fireEmoji} <b>Amount Burned:</b> ${fireEmoji} \n ${Math.trunc(
      ethers.utils.formatUnits(event.data, 18)
    ).toLocaleString(
      "en-US"
    )} \n \n ${fireEmoji} <b>Total Burn Amount:</b> ${fireEmoji} \n ${Math.trunc(
      ethers.utils.formatUnits(deadBalance, 18)
    ).toLocaleString(
      "en-US"
    )} (${percentageDead}%) \n\n<a href="${slingTelegram}"><i>Powered by $SLING</i></a>`,
    parse_mode: "HTML",
    allow_sending_without_reply: true,
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Join Chat", url: projectTelegram },
          {
            text: "Buy Now",
            url: projectBuyLink
          }
        ]
      ],
      remove_keyboard: true
    })
  })
    .then((res) => {
      console.log("Done!");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};

const main = async () => {
  for (const key of Object.keys(subscribedProjects)) {
    filter = {
      address: key,
      topics: [ethers.utils.id("Transfer(address,address,uint256)")]
    };

    provider.on(filter, (event) => {
      sendAlert(event).catch((e) => {
        logFatal(`Error: ${JSON.stringify(e)}`);
      });
    });
  }
};

main();

const ethers = require("ethers");
const chalk = require("chalk");
const dotenv = require("dotenv");
dotenv.config();
const subscribedProjects = require("./src/projects").projects;
const TelegramBot = require("node-telegram-bot-api");

const { calcDollarAmount, match } = require("./src/utils");
const {
  provider,
  fakeWallet,
  TOKENS,
  CONTRACTS,
  uniswapV2Contract
} = require("./src/constants");
const {
  logWarn,
  logSuccess,
  logInfo,
  logError,
  logTrace,
  logDebug,
  logFatal
} = require("./src/logger");

const tg = new TelegramBot(process.env.TG_TOKEN);
const ISlingABI = require("./src/abi/ISling.json");
const fireEmoji = "\u{1F525}";
const slingTelegram = "https://t.me/slingshotportal";

const deadWallet = "0x000000000000000000000000000000000000dEaD";

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
  const decimals = await tokenContract.decimals();

  const dollarAmount = await calcDollarAmount(contractAddress, event.data);
  const totalDollarsBurned = await calcDollarAmount(
    contractAddress,
    totalSupply
  );

  tg.sendAnimation(projectChatId, projectMedia, {
    caption: `${fireEmoji} <b>NEW ${projectTicker} BURN!</b> ${fireEmoji} \n\n ${fireEmoji} <b>Amount Burned:</b> ${fireEmoji} \n ${Math.trunc(
      ethers.utils.formatUnits(event.data, decimals)
    ).toLocaleString("en-US")} ($${Math.trunc(
      ethers.utils.formatUnits(dollarAmount, 6)
    ).toLocaleString("en-US")})
    \n \n ${fireEmoji} <b>Total Burn Amount:</b> ${fireEmoji} \n ${Math.trunc(
      ethers.utils.formatUnits(deadBalance, decimals)
    ).toLocaleString("en-US")} (${percentageDead}%) ($${Math.trunc(
      ethers.utils.formatUnits(totalDollarsBurned, 6)
    ).toLocaleString(
      "en-US"
    )}) \n\n<a href="${slingTelegram}"><i>Powered by $SLING</i></a>`,
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
      console.log(`New Burn Posted for ${projectTicker}`);
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

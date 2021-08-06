/* eslint-disable */
const { Client } = require("discord.js");
const PasteClient = require("pastebin-api");

const bot = new Client({ intents: ["GUILDS"] });
const pasteClient = new PasteClient("DEV_API_KEY");

bot.on("ready", () => {});

bot.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "create-paste") {
    const code = interaction.options.getString("code", true);
    const expireDate = interaction.options.getString("expire-date") ?? "N";
    const name = interaction.options.getString("file-name") ?? "unknown";

    const url = await pasteClient.createPaste({
      code,
      expireDate,
      format: "javascript",
      name: `${name}.js`,
      publicity: 0,
    });

    await interaction.reply(url);
  }
});

bot.on("ready", async () => {
  const data = {
    description: "Create a new paste",
    name: "create-paste",
    options: [
      {
        name: "code",
        required: true,
        description: "This will be the paste code",
        type: "STRING",
      },
      {
        name: "name",
        required: false,
        description: "This will be the name of the paste",
        type: "STRING",
      },
      {
        name: "expireDate",
        required: false,
        description: "When the paste will expire",
        choices: [
          {
            name: "Never",
            value: "N",
          },
          {
            name: "10 Minutes",
            value: "10M",
          },
          {
            name: "1 Hour",
            value: "1H",
          },
          {
            name: "1 Week",
            value: "1W",
          },
          {
            name: "2 Weeks",
            value: "2W",
          },
        ],
        choices: [
          {
            name: "Never",
            value: "N",
          },
          {
            name: "10 Minutes",
            value: "10M",
          },
          {
            name: "1 Hour",
            value: "1H",
          },
          {
            name: "1 Week",
            value: "1W",
          },
          {
            name: "2 Weeks",
            value: "2W",
          },
          {
            name: "1 Month",
            value: "1M",
          },
          {
            name: "6 Months",
            value: "6M",
          },
          {
            name: "1 Year",
            value: "1Y",
          },
        ],
      },
    ],
  };

  await bot.application.commands.create(data);

  console.log("Bot is ready!");
});

bot.login("BOT_TOKEN");

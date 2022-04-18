const { Client, Intents } = require("discord.js");
const { PasteClient, Publicity, ExpireDate } = require("pastebin-api");

const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });
const pasteClient = new PasteClient("DEV_API_KEY");

bot.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "create-paste") {
    const code = interaction.options.getString("code", true);
    const expireDate = interaction.options.getString("expire-date") ?? ExpireDate.Never;
    const name = interaction.options.getString("file-name") ?? "unknown";

    const url = await pasteClient.createPaste({
      code,
      expireDate,
      format: "javascript",
      name: `${name}.js`,
      publicity: Publicity.Unlisted,
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
        name: "expire-date",
        required: false,
        description: "When the paste will expire",
        choices: [
          {
            name: "Never",
            value: ExpireDate.Never,
          },
          {
            name: "10 Minutes",
            value: ExpireDate.TenMinutes,
          },
          {
            name: "1 Hour",
            value: ExpireDate.OneHour,
          },
          {
            name: "1 Week",
            value: ExpireDate.OneWeek,
          },
          {
            name: "2 Weeks",
            value: ExpireDate.TwoWeeks,
          },
          {
            name: "1 Month",
            value: ExpireDate.OneMonth,
          },
          {
            name: "6 Months",
            value: ExpireDate.SixMonths,
          },
          {
            name: "1 Year",
            value: ExpireDate.OneYear,
          },
        ],
      },
    ],
  };

  await bot.application.commands.create(data);

  console.log("Bot is ready!");
});

bot.login("BOT_TOKEN");

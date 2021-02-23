const { Client } = require("discord.js");
const PasteClient = require("pastebin-api");

const bot = new Client();
const pasteClient = new PasteClient("DEV_API_KEY");

bot.on("message", async (message) => {
  if (message.content.startsWith("!create-paste")) {
    const url = await pasteClient.createPaste({
      code: message.content,
      expireDate: "N",
      format: "javascript",
      name: "something.js",
      publicity: "0",
    });

    return message.channel.send(url);
  }
});

bot.login("BOT_TOKEN");

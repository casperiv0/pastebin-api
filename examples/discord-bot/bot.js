const { Client } = require("discord.js");
const PasteClient = require("../../dist").default;

const bot = new Client();
const pasteClient = new PasteClient("DEV_API_KEY");

bot.on("message", async (message) => {
  if (message.author.bot) return;
  const prefix = "!";
  const [arg, ...args] = message.content.slice(prefix?.length).trim().split(/ +/g);

  switch (arg.toLowerCase()) {
    case "create-paste": {
      const url = await pasteClient.createPaste({
        code: args,
        expireDate: "N",
        format: "javascript",
        name: "something.js",
        publicity: "0",
      });

      return message.channel.send(url);
    }
    default: {
      return message.channel.send("That command was not found");
    }
  }
});

bot.on("ready", () => console.log("Bot is ready!"));

bot.login("BOT_TOKEN");

import { Client } from "discord.js";
import PasteClient from "pastebin-api";

const bot = new Client();
const pasteClient = new PasteClient("DEV_API_KEY");

bot.on("message", async (message) => {
  if (message.author.bot) return;
  const prefix = "!";
  const [arg, ...args] = message.content.slice(prefix?.length).trim().split(/ +/g);

  if (args.length <= 0) {
    return message.channel.send("Woah! You need to specify some JavaScript code!");
  }

  switch (arg.toLowerCase()) {
    case "create-paste": {
      const url = await pasteClient.createPaste({
        code: args.join(" "),
        expireDate: "N",
        format: "javascript",
        name: "something.js",
        publicity: 0,
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

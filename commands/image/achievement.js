const Discord = require("discord.js");

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  aliases: ["ach"],
  category: "Image",
  run: async (client, message, args) => {
    const text = args.join("+"); message.channel.send(`https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`);
  },
};
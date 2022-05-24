const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "waifu",
  category: "fun",
  description: "Here's a waifu",
  run: async (client, message, args) => {
    
    let data = await random.getAnimeImgURL("waifu");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`Here's your waifu`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};
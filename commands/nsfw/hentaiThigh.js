const Discord = require("discord.js");
const NSFW = require("anilewd-npm");
const lewd = new NSFW();

module.exports = {
    name: "hentaiThigh",
    run: async (client, message, args) => {
      if(!message.channel.nsfw) return message.channel.send("Channel is not NSFW");
        const image = await lewd.hentaithigh();

        const embed = new Discord.MessageEmbed()
                .setTitle(`Hentai thigh`)
                .setColor(`#b60c0c`)
                .setTimestamp()
                .setFooter('oof')
                .setImage(image);
        message.channel.send(embed);
    }
}
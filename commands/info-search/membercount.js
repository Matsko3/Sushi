const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "membercount",

  category: "info",
    aliases: ['membercount', 'membercounts', 'mc'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
  
  const members = message.guild.members.cache;
  
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('**• Membercount**', `${message.guild.memberCount}`, true)
            .addField(`**• Humans**`, `${members.filter(member => !member.user.bot).size} users`, true)
            .addField('**• Bots**', `${members.filter(member => member.user.bot).size} bots`, true)
            .setTimestamp()
           .setFooter(
           `Sushi`,
            client.user.displayAvatarURL()  
      ))
         }
};

const discord = require("discord.js");
const DiscordButtons = require('discord-buttons');
const client = new discord.Client({
  disableEveryone: false
});
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const { MessageEmbed } = require('discord.js');

client.on('message', async message => {
  if(message.content == "s-menu") {
    let option1 = new MessageMenuOption()
      .setLabel("Option 1")
      .setValue("Option 2")
      .setDescription("this will give u option 1")

    let option2 = new MessageMenuOption()
      .setLabel("Option 1")
      .setValue("Option 2")
      .setDescription("this will give u option 1")
        
    let option3 = new MessageMenuOption()
      .setLabel("Option 1")
      .setValue("Option 2")
      .setDescription("this will give u option 1")

    let option4 = new MessageMenuOption()
      .setLabel("Option 1")
      .setValue("Option 2")
      .setDescription("this will give u option 1")

    let option5 = new MessageMenuOption()
      .setLabel("Option 1")
      .setValue("Option 2")
      .setDescription("this will give u option 1")

    let option6 = new MessageMenuOption()
      .setLabel("Option 1")
      .setValue("Option 2")
      .setDescription("this will give u option 1")

    let option7 = new MessageMenuOption()
      .setLabel("Option 1")
      .setValue("Option 2")
      .setDescription("this will give u option 1")

    let option8 = new MessageMenuOption()
      .setLabel("Option 1")
      .setValue("Option 2")
      .setDescription("this will give u option 1")
    
    let selection = new MessageMenu()
      .setID("Selection")
      .setMaxValues(1)
      .setMinValues(1)
      .setPlaceHolder("Click me to make a Selection | PONG")
      .addOption(option1)
      .addOption(option2)
      .addOption(option3)
      .addOption(option4)
      .addOption(option5)
      .addOption(option6)
      .addOption(option7)
      .addOption(option8)

    let menumsg = await message.channel.send("something", selection)

    function menuselection(menu) {
      switch(menu.values[0]) {
        case "Option 1":
          menu.reply.send("reply for option 1", true)
        break;
        case "Option 2":
          menu.reply.send("reply for option 1", true)
        break;
        case "Option 3":
          menu.reply.send("reply for option 1", true)
        break;
        case "Option 4":
          menu.reply.send("reply for option 1", true)
        break;
        case "Option 5":
          menu.reply.send("reply for option 1", true)
        break;
        case "Option 6":
          menu.reply.send("reply for option 1", true)
        break;
        case "Option 7":
          menu.reply.send("reply for option 1", true)
        break;
        case "Option 8":
          menu.reply.send("reply for option 1", true)
        break;
        default:
          menu.reply.send("This is not your menu", true)
        break;
      }
    }
    
    client.on("clickMenu", (menu) => {
      if(menu.message.id == menumsg.id) {
        if(menu.clicker.user.id == message.author.id) menuselection(menu)
        else menu.reply.send("This is not your menu", true)
      }
    })
    
  }
});

const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('bot online yay boy!!'));

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
require("dotenv").config();

"$TOKEN";
const guildDB = require("./mongo/guildDB");
const { default_prefix } = require("./config.json");
const fetch = require("node-fetch");
const db =require("quick.db");
const moment = require("moment");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const { emotes , emoji} =require("./config.json");
const button = require('discord-buttons');
const disbut = require("discord-buttons");
const colors = require('./colors.json');
const yts = require('yt-search');
client.queue = new Map();
client.vote = new Map();
const { ready } = require("./handlers/ready.js");
const NSFW = require("anilewd-npm");

require("./database.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.queue = new Map()
process.on('unhandledRejection', console.error);
  
client.on("message", async message => {

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix is \`${default_prefix}\``);
  }
 

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;

  if (!message.member)
    message.member = message.guild.fetchMember(message);

  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

client.on("guildMemberAdd", async (member) => {
  try {
     console.log('test')
    let data = await guildDB.find({ guild: member.guild.id });
    var channel = data.map((guildDB) => {
        return [ `${guildDB.channel}` ]})
        console.log(channel)
    if (!channel) return console.log('no channel')
    console.log('test')
    let message = data.map((guilDB) => { return [ `${guildDB.message}` ]});
    console.log('test')
    if (!message) message = "[member:mention] Welcome to [guild:name]";
    console.log(channel)
    console.log(message)
    let guildCh = client.guilds.cache.get(member.guild.id)
    let f = await guildCh.channels.cache.get(channel).send(message);
    console.log(f)
    setTimeout(async () => {
      await f.delete();
    }, 1000);
  client.channels.cache.get(chx).send("A random nerd appeared, welcome " + member.user.username, attachment);
  } catch (e) {
    console.log(e)
  }
});

  client.on("guildMemberAdd", async (member) => {
      let LoggingChannel = await db.get(`LoggingChannel_${member.guild.id}`);
  if (!LoggingChannel)return console.log(`Setup Is Not Done in ${member.guild.id} aka ${member.guild.name} Guild (channel not found)`);

  //getting notify role
  let notifyRole = await db.get(`notifyRole_${member.guild.id}`);
  if (!notifyRole)return console.log(`Setup Is Not Done in ${member.guild.id} aka ${member.guild.name} Guild (role not found)`);

  //to get created date in days format
  let x = Date.now() - member.user.createdAt;
  let created = Math.floor(x / 86400000);

  //creation date
  let creationDate = moment
    .utc(member.user.createdAt)
    .format("dddd, MMMM Do YYYY, HH:mm:ss");

  //joindate
  let joiningDate = moment
    .utc(member.joinedAt)
    .format("dddd, MMMM Do YYYY, HH:mm:ss");

  //joinposition
  let joinPosition = member.guild.memberCount

  //altdate
  let AltAge = await db.get(`altAge_${member.guild.id}`)
  if (!AltAge) return db.set(`altAge_${member.guild.id}`, 31)

  //only sends message when alt found
  if (created < AltAge) {
    //embed
    let altEmbed = //main alt message
    new Discord.MessageEmbed().setTitle("Alt Found!").setColor("RANDOM").setFooter("Bot Made By ItzCutePihcu#0001")
      .setDescription(`
**__Alt Name__**: ${member.user} (${member.user.username})
**__ID__**: ${member.user.id}
**__Account Created__**: ${created} days ago
**__Account Creation Date__**: ${creationDate}
**__Join Position__**: ${joinPosition}
**__Join Date__**: ${joiningDate}
`);

member.guild.channels.cache.get(LoggingChannel).send(`__Notification:__ <@&${notifyRole}>`, altEmbed);


let AutoKick = await db.fetch(`AutoKick_${member.guild.id}`);
if (!AutoKick)return console.log(`Setup Is Not Done in ${member.guild.id} aka ${member.guild.name} Guild (AutoKick Isn't Enabled)`);

let AutoKickAge = await db.get(`AutokickAge_${member.guild.id}`)
if (!AutoKickAge) return db.set(`AutokickAge_${member.guild.id}`, 8)

  if (AutoKick === true) {

 let checking = await db.get(`WhiteListed_${member.guild.id}`)

  if (checking === member.user.id) {
   let embed = new Discord.MessageEmbed()
   .setTitle(`Auto Kick System Stucked On`)
   .setDescription(`
**__NAME__** - ${member.user} (${member.user.username})
**__KICKED__** - NO
**__REASON__** - WhiteListed User`)
.setColor("RANDM");
member.guild.channels.cache.get(LoggingChannel).send(embed)

  } else {

    if (created < AutoKickAge) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Auto Kick System Kicked SomeOne`)
    .setDescription(`
**__NAME__** - ${member.user} (${member.user.username})
**__ID__** - ${member.user.id}
**__KICKED FROM GUILD NAME__** - ${member.guild.name}
**__KICKED REASON__** - ALT ( Created ${created} Days Ago)
`)
    .setColor('RANDOM')
      member.kick()
      console.log(`kicked`)
      member.guild.channels.cache.get(LoggingChannel).send(embed)

  } 
}

  } else {
    console.log(`Autokick Isnt Disabled in ${memeber.guild.name}`)

  }

   }
  }
  )





client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=npg`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});

client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})

client.on("message", async message => {
if(!message.guild) return;
  let prefix = db.get(`default_prefix${message.guild.id}`)
  if(prefix === null) prefix =default_prefix;
  
  if(!message.content.startsWith(default_prefix)) return;
 
})
client.on("ready", () => {
    client.user.setStatus("online");
    console.log("Bot is working!!")
});

client.on
client.on("ready", () => {
    client.user.setActivity("your mom", { type: "STREAMING", url: "https://www.twitch.tv/scaldwashere_"})
})
const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: false,
});

client.player = player;

new Player(client, {
    leaveOnEnd: false,
    leaveOnStop: false,
    leaveOnEmpty: false,
    volume: 150,
    quality: 'high',
});
const fs = require('fs')


 client.on('guildCreate', guild =>{

    const channelId = '970054253525733386'; //put your channel ID here

    const channel = client.channels.cache.get(channelId); 
     
    if(!channel) return; //If the channel is invalid it returns
    const embed = new discord.MessageEmbed()
        .setTitle('I Joined A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});


client.on('guildDelete', guild =>{
    const channelId = '841994754399928341';//add your channel ID
    const channel = client.channels.cache.get(channelId); //This Gets That Channel
    
    if(!channel) return;  //If the channel is invalid it returns
    const embed = new discord.MessageEmbed()
        .setTitle('I Left A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});

let random = 10;
client.on('message', message => {
  const rndIlu = Math.floor(Math.random() * 50) + 1
  const rndInt = Math.floor(Math.random() * 30) + 1
  const rndMEI = Math.floor(Math.random() * 12) + 1
  {
    if(message.author.bot) return;
    else if(message.author.id === '558566227946242048' && random == rndInt)
      message.channel.send("kizu leave now!");
    else if(random == rndInt && message.author.id != '558566227946242048' && message.author.id != '775042627837100033') 
      message.channel.send(message.content);
    else if(message.author.id === '775042627837100033' && random == rndMEI)
      message.channel.send(message.content);
    else if(message.author.id === '775042627837100033' && rndIlu == 35)
      message.channel.send("I love you Fuyu");
  }
})

client.on('message', message => {
  if(message.content === 's-pp')
  {
    if(message.author.bot) return;
    else
    {
      const rnd = Math.floor(Math.random() * 100)
      message.channel.send("your dick rating is "+ rnd +"/100");
    }
  }
})

client.on('message', message => {
  if(message.content === 's-wr')
  {
    if(message.author.bot) return;
    else
    {
      const rnd = Math.floor(Math.random() * 100)
      message.channel.send("you are a "+ rnd +"/100 waifu");
    }
  }
})

var code = '';

client.on('message', message => {
 if (message.content.startsWith('s-say ')) {
  code = message.content.substr(6); // Remove first 6 characters of message
  message.delete()
  message.channel.send(code);
 }
});

client.login(process.env.TOKEN);
client
    .on("debug", console.log)
    .on("warn", console.log) 


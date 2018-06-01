const Discord = require("discord.js")
const client = new Discord.client();
const snekfetch = require("snekfetch");
const fs = require("fs");
const ms = require("ms");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: `event dungeons | >>commands`, type: 0 }});
});
client.on('guildMemberAdd', member => {

    member.user.send({
        embed: {
            color: 0x00FFFF,
            author: {
                name: `Oryx the Mad God`,
                icon_url: client.user.avatarURL
            },
            fields: [{
                    name: "Welcome to ***The Forgotten Foes***!",
                    value: "To get started, read #<#384847019455283201>! Once you have fully read the rules, go to #verify and follow the instructions to get verified!",
                    
                }
               
            ],
            footer: {
                text: "Bot coded by ~Droid~#5799, be sure to check #partners for other cool discords!",
            },
            thumbnail: {
                url: "https://cdn.discordapp.com/icons/384620585948413956/28ca7982f138995662cca7317dc1b6d2.jpg"
            }
        }
});
        });
        
        const prefix = ">>"
        
        client.on('message', msg => { // START MESSAGE HANDLER
  if (msg.author.bot) return;
let args = msg.content.split(" ").slice(1);
let argss = msg.content.split(" ")
    if (!msg.content.startsWith(prefix)) {
    return;
}

 if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.send("Pinging... :signal_strength:").then(sent => {
      sent.edit(`:ping_pong: Pong! | Time Taken: ${sent.createdTimestamp - msg.createdTimestamp}ms`)
    })
}
if (msg.content.startsWith(prefix + "serverinfo")) {
    const embed = new Discord.RichEmbed()

    .setTitle(`${msg.guild.name}`)
    .setColor(0x17bec6)
    .addField(`Owner`, `${msg.guild.owner.user.tag} (${msg.guild.owner.id})`)
    .addField(`Members`, `${msg.guild.memberCount}`)
    .addField(`Region`, `${msg.guild.region}`)
    .addField(`ID`, `${msg.guild.id}`)
    .addField(`Channels`, `${msg.guild.channels.size}`)
    .addField(`Created at`, `Created at date: WIP`)

    msg.channel.send({embed});
}
if (msg.content.startsWith(prefix + 'ban')) {
    var reason = msg.content.split(' ').slice(2).join(' ');
    if (!msg.member.permissions.has("BAN_MEMBERS")) return msg.channel.send(":warning: Insufficient Permissions").catch(console.error);
    if (!msg.guild.member(client.user).permissions.has("BAN_MEMBERS")) return msg.channel.send(":warning: Bot has insufficient permissions").catch(console.error);

  if (msg.mentions.users.size === 0) return msg.channel.send("No user provided")

  if (msg.author.id === msg.mentions.members.first().user.id) return msg.channel.send("You can't ban yourself").catch(console.error);

  if (client.user.id === msg.mentions.users.first().id) return msg.channel.send(`Don't try to ban me, ${msg.author.username}`).catch(console.error);

  userToBan.ban()
    var user = msg.mentions.users.first()
    const embed = new Discord.RichEmbed()
    .setTitle(`:hammer: User Banned: ${user.tag} (${user.id})`)
    .setColor(0xd11212)
    .addField("Responsible Moderator:", `${msg.author.tag} (${msg.author.id})\n\nReason: ${reason}`)
    .setTimestamp(new Date(msg.createdTimestamp))

    msg.guild.channels.find("name", "logging").send({embed});
  }

  if (msg.content.startsWith(prefix + 'kick')) {
    var reason = msg.content.split(' ').slice(2).join(' ');
    if (!msg.member.permissions.has("KICK_MEMBERS")) return msg.channel.send(":warning: Insufficient Permissions").catch(console.error);
    if (!msg.guild.member(client.user).permissions.has("KICK_MEMBERS")) return msg.channel.send(":warning: Bot has insufficient permissions").catch(console.error);

    if (msg.mentions.users.size === 0) return msg.channel.send("No user provided")

    if (!msg.guild.member(userToKick).kickable) return msg.channel.send("I can't kick that member!")

    if (msg.author.id === msg.mentions.members.first().user.id) return msg.channel.send("You can't kick yourself");

    if (client.user.id === msg.mentions.users.first().id) return msg.channel.send(`Don't try to kick me, ${msg.author.username}`).catch(console.error);

  userToKick.kick()
    var user = msg.mentions.users.first()
    const embed = new Discord.RichEmbed()
    .setTitle(`:hammer: User Kicked: ${user.tag} (${user.id})`)
    .setColor(0xf9a411)
    .addField("Responsible Moderator:", `${msg.author.tag} (${msg.author.id})\n\nReason: ${reason}`)
    .setTimestamp(new Date(msg.createdTimestamp))

    msg.guild.channels.find("name", "logging").send({embed});
  }

  
if (msg.content.startsWith(prefix + 'info')) {
  client.channel.send("Bot coded by Droid")
}
  
if (msg.content.startsWith(prefix + 'suspend')) {
	var argsss = msg.content.split(" ");
if (!msg.member.hasPermission("ADMINISTRATOR"))
                return msg.reply(":x: Sorry, you don't have permissions to use this!");
          let member2 = msg.mentions.members.first();
          if(!member2) return msg.reply(":x: " + "| You need to mention a user/member!");
          let muteRole2 = msg.guild.roles.find("name", "Suspended");
          if(!muteRole2) return msg.reply(":x: " + "| You do not have the \"Suspended\" role created!");
          let time2 = argsss[2];
          let reasonxd = argsss[3];
            if(!reasonxd) return msg.reply(":x: " + "| Please provide a reason for the suspension!");
          if(!time2) {
            msg.channel.send("Please provide a time for the suspension!");
          }else {
            member2.addRole(muteRole2.id);
            msg.channel.send(member2 + ` has been suspended for: ${ms(ms(time2), {long: true})}, Reason: ${reasonxd}!`);

            setTimeout(function(){
              member2.removeRole(muteRole2.id);
              msg.channel.send(member2 + ` has been unsuspended, suspension lasted for ${ms(ms(time2), {long: true})}`)

            }, ms(time2));

};	
}
  
 if (msg.content.startsWith(prefix + 'softban')) {
   var reason = msg.content.split(' ').slice(2).join(' ');
   if (!msg.member.permissions.has("BAN_MEMBERS")) return msg.channel.send(":warning: Insufficient Permissions").catch(console.error);
   if (!msg.guild.member(client.user).permissions.has("BAN_MEMBERS")) return msg.channel.send(":warning: Bot has insufficient permissions").catch(console.error);

     if (msg.mentions.users.size === 0) return msg.channel.send("No user provided")

     if (!msg.guild.member(userToSB).bannable) return msg.channel.send("I can't softban that member!").catch(console.error);

     if (msg.author.id === msg.mentions.members.first().user.id) return msg.channel.send("You can't softban yourself").catch(console.error);

     if (client.user.id === msg.mentions.users.first().id) return msg.channel.send(`Don't try to softban me, ${msg.author.username}`).catch(console.error);

   userToSB.ban().then(member => {msg.guild.unban(member.user.id)});
     var user = msg.mentions.users.first()
     const embed = new Discord.RichEmbed()
     .setTitle(`:hammer: User Softbanned: ${user.tag} (${user.id})`)
     .setColor(0xfffa00)
     .addField("Responsible Moderator:", `${msg.author.tag} (${msg.author.id})\n\nReason: ${reason}`)
     .setTimestamp(new Date(msg.createdTimestamp))

     msg.guild.channels.find("name", "logging").send({embed});
}
});

client.login(process.env.BOT_TOKEN)

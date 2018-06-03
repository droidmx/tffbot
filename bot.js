const Discord = require("discord.js")
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const fs = require("fs");
const ms = require("ms");
let test = JSON.parse(fs.readFileSync('./test.json', 'utf8'));
let test2 = JSON.parse(fs.readFileSync('./test2.json', 'utf8'));


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: `event dungeons | >>help`, type: 0 }});
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
        
        const prefix = "!"
        
        client.on('message', async msg => { // START MESSAGE HANDLER
  if (msg.author.bot) return;
let args = msg.content.split(" ").slice(1);
let argss = msg.content.split(" ")
let nest = "somethingidec"
let nestid = "alsosomethingidec"
let nkilled = 'ifuckindontcare'
let nchannel = msg.guild.channels.find("name", "command-terminal")
let sen = "somethisngidec"
let senid = "alsossomethingidec"
let skilled = 'ifuckinsdontcare'
let schannel = msg.guild.channels.find("name", "click-here-for-sentry")
if (!test[nest]) test[nest] = 0
	   
    if (!msg.content.startsWith(prefix)) {
    return;
}
if (msg.content.startsWith(prefix + 'nmessageonlydroidxdxdxd')) {
	
	// ACTUAL NEST: <:nest:384850069062418433>
	let counterxd = test[nest]
	const bihluh = msg.channel.send({
		embed: {
		color: 0x00FFFF,
            author: {
                name: `The Forgotten Foes`,
                icon_url: client.user.avatarURL
            },
            fields: [{
                    name: "<:nest:384850069062418433> Killed: ",
                    value: `${counterxd}`,
                    
                }
               
            ],
            footer: {
                text: "Bot coded by ~Droid~#5799",
            },
            thumbnail: {
                url: "https://i.imgur.com/QA1xlFQ.png"
}
		
		}
	})
	const npending = await bihluh
	console.log(npending.id)
	if (!test[nestid]) {
			test[nestid] = npending.id
		}else{
			test[nestid] = npending.id
		}
		
}
		if (msg.content.startsWith(prefix + 'nest')) {
		let nestloc = args
		if (!msg.member.roles.some(r => ["Trial Farmer", "Certified Farmer"].includes(r.name))) return; 
		const idefk = nchannel.send(`@here A Nest has been called by ${msg.author}! 
\n ***Location:*** ${nestloc} \n React with <:nest:384850069062418433> if you are coming!`).then(r=>
												 r.react('384850069062418433')
												 )
		const ncallpending = await idefk
		console.log(ncallpending.id)
if (!test[nkilled]) {
			test[nkilled] = ncallpending.id
		}else{
			test[nkilled] = ncallpending.id
		}
		
		
		}
	if (msg.content === prefix + 'nestdied')  {
		if (!msg.member.roles.some(r => ["Trial Farmer", "Certified Farmer"].includes(r.name))) return;  
												       
		let updatedcounter = test[nest] + 1
		if (!test[nest]) {
			test[nest] = updatedcounter
		}else{
			test[nest] = updatedcounter
		}
		let fuckme = test[nkilled]
		let ohhyes = `${fuckme}`
		let fuckmeharder = nchannel.fetchMessage(ohhyes).then(ohhhh=> ohhhh.delete() )
		let fuck = test[nestid]
		let msgidupdated = `${fuck}`
		console.log(updatedcounter)
			
			let xddd = nchannel.fetchMessage(msgidupdated).then(asd=> {
		asd.edit({
		embed: {
		color: 0x00FFFF,
            author: {
                name: `The Forgotten Foes`,
                icon_url: client.user.avatarURL
            },
            fields: [{
                    name: "<:nest:384850069062418433> Killed: ",
                    value: `${updatedcounter}`,
                    
                }
               
            ],
            footer: {
                text: "Bot coded by ~Droid~#5799",
            },
            thumbnail: {
                url: "https://i.imgur.com/QA1xlFQ.png"
}
		
		}
	})
		})
	}	
 if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.send("Pinging... :signal_strength:").then(sent => {
      sent.edit(`:ping_pong: Pong! | Time Taken: ${sent.createdTimestamp - msg.createdTimestamp}ms`)
    })
}
		if (msg.content.startsWith(prefix + "verify")) {
		if (msg.member.roles.some(r => ["Verified Member"].includes(r.name))) {
            msg.author.send("You are already verified!")
            msg.delete();
            return;
        }
        msg.delete();
        let ruser = argss[1]
            let rcode = ("TFF" + Math.floor(Math.random(11111) * 99999));
let rapi = "http://www.tiffit.net/RealmInfo/api/user?u=" + ruser + "&f=c;"
if (!test[msg.author.id]) {
	test[msg.author.id] = {ign: `${ruser}`, code: `${rcode}`}
}
			else{
			test[msg.author.id] = {ign: `${ruser}`, code: `${rcode}`}	
			}
        msg.delete();
        
        let userdata = test[msg.author.id]

                msg.author.send({
                    embed: {
                        color: 0xa3fb7a,
                        author: {
                            name: `Verification | @${msg.author.tag}`,
                            icon_url: msg.author.avatarURL
                        },
                        fields: [{
                                name: "**Your Code:**",
                                value: `__**${userdata.code}**__`,
                                inline: true,
                            },
                            {
                                name: "**Realmeye Link:**",
                                value: `https://www.realmeye.com/player/${userdata.ign}`,
                                inline: true,
                            },
                            {
                                name: `Place your verification code on any line of your description, but __*it must be the only piece of text on that line.*__`,
                                value: "Once you have placed the code, type `done` in #verify",
                            },
                        ],
                        footer: {
                            text: "⚠ Be sure to follow the directions above exactly, or your verification will fail",
                        }
                    }
               
			});
    
        console.log(test)

		}
		
		if (msg.content.startsWith(prefix + "done")) {
			 if (msg.member.roles.some(r => ["Shatters"].includes(r.name))) 
            return;
        let userdatadone = test[msg.author.id]
        if (!userdatadone) {
            msg.author.send("Your IGN and Code was not found in the database, please go to #verify and type `!verify IGN`!")
            msg.delete()
            return;
        }
        msg.delete();
        console.log(userdatadone)
                   let codexd =  userdatadone.code
                   let ignxd = userdatadone.ign
                   let rrapi = "http://www.tiffit.net/RealmInfo/api/user?u=" + ignxd + "&f=c;"
                   
        
        snekfetch.get(rrapi).then(r => {
                        let rdesc = r.body.description;
                        let rname = r.body.name
                        let rstars = r.body.rank
                        let rlocation = r.body.last_seen
                        let rfame = r.body.fame

                        if (!rdesc.includes(codexd))
                            return msg.author.send("Your code was not found in any line of your description. Make sure that your code is the ONLY piece of text in one line of your description.")


                        if (rstars < (15))
                            return msg.author.send("You do not have enough stars to be verified! You have " + rstars + ". You need __**15**__.")


                        if (!rlocation.includes("hidden"))
                            return msg.author.send("Your location is not hidden so you cannot be verified!")

                        if (rfame < (500))
                            return msg.author.send("Your do not have enough fame to be verified! You have " + rfame + ". You need __**500**__.")


                        if (rdesc.includes(codexd))
                            msg.guild.member(msg.author).setNickname(`${rname}`)
                        let lelxdppebtw = msg.guild.roles.find("name", "Verified Member");
                        // id wasnt working some times, 433784738998910977
                        msg.guild.member(msg.author).addRole(lelxdppebtw.id)
                        msg.author.send("You have successfully been verified!");
                        msg.guild.channels.find("name", "logging").send({
                            embed: {
                                color: 0xfb7ae4,
                                author: {
                                    name: `User Verified | <@${msg.author.tag}>`,
                                    icon_url: msg.author.avatarURL
                                },
                                fields: [{
                                        name: "**Realmeye Link:**",
                                        value: `https://www.realmeye.com/player/${ignxd}`,
                                        inline: true,
                                    },
                                    {
                                        name: "__**User IGN**__",
                                        value: ignxd,
                                        inline: true,
                                    },
                                    {
                                        name: "__**Character Fame**__",
                                        value: rfame + " Fame",
                                        inline: true,
                                    },
                                    {
                                        name: "__**Stars**__",
                                        value: rstars + " Stars",
                                        inline: true,
                                    }


                                ],
                                footer: {
                                    text: "User has been verified by the bot.",
                                }
                            }
                        });


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
fs.writeFile('./test.json', JSON.stringify(test), console.error);
fs.writeFile('./test2.json', JSON.stringify(test), console.error);	

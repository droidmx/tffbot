const Discord = require("discord.js")
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const fs = require("fs");
const ms = require("ms");
let test = JSON.parse(fs.readFileSync('./test.json', 'utf8'));
let test2 = JSON.parse(fs.readFileSync('./test2.json', 'utf8'));
const answers = [
  'Without a doubt', 'Extremely likely', 'Perhaps', 'Maybe', 'I\'ll have to think about that', 'Not a chance!'
]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: `event dungeons | !help`, type: 0 }});
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
let nchannel = msg.guild.channels.find("name", "click-here-for-nests")
let sen = "somethisngidec"
let senid = "alsossomethingidec"
let skilled = 'ifuckinsdontcare'
let schannel = msg.guild.channels.find("name", "click-here-for-sentry")
if (!test[nest]) test[nest] = 0
if (!test[sen]) test[sen] = 0
		
	   
    if (!msg.content.startsWith(prefix)) {
    return;
}
if (msg.content.startsWith(prefix + '1100354821nest')) {
	
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
                    name: "<:nest:384850069062418433> Nest Events Killed: ",
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
		if (msg.content.startsWith(prefix + 'callnest')) {
		let nestloc = args
		if (!msg.member.roles.some(r => ["Trial Farmer", "Certified Farmer"].includes(r.name))) return; 
		const idefk = nchannel.send(`@here A Nest has been called by ${msg.author}! 
\n ***Location:*** ${nestloc} \n React with <:nest:384850069062418433> if you are coming!`)
		
		const messageeditid = await idefk
		messageeditid.react('384850069062418433')
		console.log(messageeditid.id)
if (!test[nkilled]) {
			test[nkilled] = messageeditid.id
		}else{
			test[nkilled] = messageeditid.id
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
		if (test[nkilled] === 0) {
			msg.reply('There is no Active Nest call!')
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
		if (!test[nkilled]) {
			test[nkilled] = 0
		}else{
			test[nkilled] = 0
		}	
	}	
		
		
		
		// SENTRY SECTION BEGINS
		/*
	    _	.          _ _                   
| |        | | |                  
| |__   ___| | |  _   _  ___  ___ 
| '_ \ / _ \ | | | | | |/ _ \/ __|
| | | |  __/ | | | |_| |  __/\__ \
|_| |_|\___|_|_|  \__, |\___||___/
                   __/ |          
                  |___/           
		*/
		
		if (msg.content.startsWith(prefix + '1100354821sentry')) {
	
	// ACTUAL NEST: <:nest:384850069062418433>
	let acounterxd = test[sen]
	const abihluh = msg.channel.send({
		embed: {
		color: 0x00FFFF,
            author: {
                name: `The Forgotten Foes`,
                icon_url: client.user.avatarURL
            },
            fields: [{
                    name: "<:sentry:384850040612585482> Sentries Killed: ",
                    value: `${acounterxd}`,
                    
                }
               
            ],
            footer: {
                text: "Bot coded by ~Droid~#5799",
            },
            thumbnail: {
                url: "https://i.imgur.com/WeGhVJI.png"
}
		
		}
	})
	const anpending = await abihluh
	console.log(anpending.id)
	if (!test[senid]) {
			test[senid] = anpending.id
		}else{
			test[nestid] = anpending.id
		}
		
}
		if (msg.content.startsWith(prefix + 'callsentry')) {
		let anestloc = args
		if (!msg.member.roles.some(r => ["Trial Farmer", "Certified Farmer"].includes(r.name))) return; 
		const aidefk = nchannel.send(`@here A Nest has been called by ${msg.author}! 
\n ***Location:***  ${anestloc} \n React with <:sentry:384850040612585482> if you are coming!`)
		
		const amessageeditid = await aidefk
		amessageeditid.react('384850069062418433')
		console.log(amessageeditid.id)
if (!test[skilled]) {
			test[skilled] = amessageeditid.id
		}else{
			test[skilled] = amessageeditid.id
		}
		
		
		}
	if (msg.content === prefix + 'sentrydied')  {
		if (!msg.member.roles.some(r => ["Trial Farmer", "Certified Farmer"].includes(r.name))) return;  
												       
		let aupdatedcounter = test[sen] + 1
		if (!test[sen]) {
			test[sen] = aupdatedcounter
		}else{
			test[sen] = aupdatedcounter
		}
		if (test[skilled] === 0) {
			msg.reply('There is no Active Sentry call!')
		}
		let afuckme = test[skilled]
		let aohhyes = `${afuckme}`
		let afuckmeharder = nchannel.fetchMessage(aohhyes).then(aohhhh=> aohhhh.delete() )
		let afuck = test[senid]
		let amsgidupdated = `${afuck}`
		console.log(aupdatedcounter)
			
			let axddd = nchannel.fetchMessage(amsgidupdated).then(aasd=> {
		aasd.edit({
		embed: {
		color: 0x00FFFF,
            author: {
                name: `The Forgotten Foes`,
                icon_url: client.user.avatarURL
            },
            fields: [{
                    name: "<:sentry:384850040612585482> Sentries Killed: ",
                    value: `${updatedcounter}`,
                    
                }
               
            ],
            footer: {
                text: "Bot coded by ~Droid~#5799",
            },
            thumbnail: {
                url: "https://i.imgur.com/WeGhVJI.png"
}
		
		}
	})
		})
		if (!test[skilled]) {
			test[skilled] = 0
		}else{
			test[skilled] = 0
		}	
	}
		
		
		
		
		
		
		
		
		
		
		//END HERE ================================================================================
 if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.send("Pinging... :signal_strength:").then(sent => {
      sent.edit(`:ping_pong: Pong! | Time Taken: ${sent.createdTimestamp - msg.createdTimestamp}ms`)
    })
}
		if (msg.content.startsWith(prefix + "verify")) {
		if (msg.member.roles.some(r => ["Members"].includes(r.name))) {
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
                                value: "Once you have placed the code, type `done` in <#452260013944209419>",
                            },
                        ],
                        footer: {
                            text: "⚠ Be sure to follow the directions above exactly, or your verification will fail",
                        }
                    }
               
			});
    
        console.log(test)

		}
		
		if (msg.content.startsWith("done")) {
			 if (msg.member.roles.some(r => ["Members"].includes(r.name))) 
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
                        let lelxdppebtw = msg.guild.roles.find("name", "Members");
                        // id wasnt working some times, 433784738998910977
                        msg.guild.member(msg.author).addRole(lelxdppebtw.id)
                        msg.author.send("You have successfully been verified!");
                        msg.guild.channels.find("name", "verification-logs").send({
                            embed: {
                                color: 0xfb7ae4,
                                author: {
                                    name: `User Verified | ${ignxd}`,
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

    msg.guild.channels.find("name", "mod-logs").send({embed});
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

    msg.guild.channels.find("name", "mod-logs").send({embed});
  }

  
if (msg.content.startsWith(prefix + 'info')) {
  client.channel.send("Bot coded by Droid, join his discords! \n")
}
  
if (msg.content.startsWith(prefix + 'mute')) {
	var argsss = msg.content.split(" ");
if (!msg.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
                return msg.reply(":x: Sorry, you don't have permission to use this!");
          let member2 = msg.mentions.members.first();
          if(!member2) return msg.reply(":x: " + "| You need to mention a user/member!");
          let muteRole2 = msg.guild.roles.find("name", "Muted");
          if(!muteRole2) return msg.reply(":x: " + "| You do not have the \"Muted\" role created!");
          let time2 = argsss[2];
          let reasonxd = argsss[3];
            if(!reasonxd) return msg.reply(":x: " + "| Please provide a reason for the mute!");
          if(!time2) {
            msg.channel.send("Please provide a time for the mute!");
          }else {
            member2.addRole(muteRole2.id);
            msg.channel.send(member2 + ` has been muted for: ${ms(ms(time2), {long: true})}, Reason: ${reasonxd}!`);

            setTimeout(function(){
              member2.removeRole(muteRole2.id);
              msg.channel.send(member2 + ` has been unmuted, suspension lasted for ${ms(ms(time2), {long: true})}`)

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

     msg.guild.channels.find("name", "mod-logs").send({embed});
}
		if (msg.content.startsWith(prefix + 'rotmgchars')) {
			msg.channel.send({
                embed: {
                    color: 0x000000,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    thumbnail: {
                        url: 'https://steamuserimages-a.akamaihd.net/ugc/615025248066186198/CCF7A2CA7AAC3180249A4C8E8346C0DA68A4D839/'
                    },
                    title: "**Realm Characters**",
                    description: "These are all of the current Realm of the Mad God characters.",
                    fields: [{
                            name: "__**Rogue**__ : Uses a medium ranged dagger. Special ability is cloaking.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Archer**__ : Uses a long ranged bow. Special ability is shooting debuffs.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Wizard**__ : Uses a long ranged staff. Special ability is burst of damage within a range.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Priest**__ : Uses a long ranged wand. Special ability is AoE healing.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Warrior**__ : Uses a short ranged sword. Special ability is berserk mode.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Knight**__ : Uses a short ranged sword. Special ability is shield bash.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Paladin**__ : Uses a short ranged sword. Special ability is AoE buff.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Assassin**__ : Uses a medium ranged dagger. Special ability is throwing poisons that damage over time.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Necromancer**__ : Uses a long ranged staff. Special ability is lifesteal.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Huntress**__ : Uses a long ranged bow. Special ability is placing damaging traps.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Mystic**__ : Uses a long ranged staff. Special ability is stasising enemies.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Trickster**__ : Uses a medium ranged dagger. Special ability is sending out decoys.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Sorcerer**__ : Uses a long ranged wand. Special ability is damage dealt across enemies.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Ninja**__ : Uses a medium ranged katana. Special ability is shooting damaging shuriken.",
                            value: "\u200b"
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                    }
                }
});
			
		}
		
		if (msg.content.startsWith(prefix + 'realmeye')) {
		let user = args.slice(0).join("");
           let rapii = "http://www.tiffit.net/RealmInfo/api/user?u=" + user + "&f=c;";
          
           message.delete();
           if(!user)
return message.channel.send("Please include a username after `!realmeye`.")
           
           snekfetch.get(rapii).then(r => {
let asdesc = r.body.description;
let asname = r.body.name
let asstars = r.body.rank
let aslocation = r.body.last_seen
let asfame = r.body.fame
let ascount = r.body.characterCount
let asacctfame = r.body.account_fame
let ascreated = r.body.created
let asskins = r.body.skins
let asguild = r.body.guild


           
           message.channel.send({embed: {
  color: 0xfbd27a,
  author: {
    name: "Realmeye Info for" + user,
    icon_url: client.user.avatarURL
  },
  fields: [
      {
      name: "Description",
      value: "Desc: " + asdesc,
      inline: true
    },
    {
      name: "Stars",
      value: "Stars: " + asstars,
      inline: true
    },
    {
      name: "Last-seen Location",
      value: "server: " + aslocation, 
      inline: true
    },
    {
      name: "Character Fame",
      value: "Fame: " + asfame, 
      inline: true
    },
           {
             name: "Account Fame",
             value: "Fame: " + asacctfame, 
             inlint: true
           },
           {
             name: "Account Created",
             value: "Date: " + ascreated,
             inline: true
           },
           {
             name: "Skin Count",
             value: "Skins: " + asskins,
             inline: true
           },
           {
             name: "Guild",
             value: "Guild:" + asguild,
             inline: true
           }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: "https://cdn.discordapp.com/avatars/160140367554019329/a423acbb3957e25bce788915eda9414a.png?size=2048",
    text: "~Droid~#5799"
  }//end
  }})
})	
		}
		
		if (msg.content.startsWith(prefix + 'help')) {
  msg.channel.send(":inbox_tray: | Listed below are some commands")
  msg.channel.send(`\`\`\`asciidoc
= General =
!ping :: Hm. I wonder what this does? /sarcasm
!8ball :: Ask the magic 8ball a question. Pretty self explanatory
!help :: Brings up this menu
!serverinfo :: Shows information about the server

= Moderation =
!ban :: Bans the user specified
!kick :: Kicks the user specified
!softban :: Softbans the specified user
!mute :: Mutes the user for a specified time period. Example - !mute @droid 5d being a bad boy

= RotMG =
!realmeye :: Shows basic information about a IGN. Example - !realmeye DroidMXBro
!rotmgchars :: Shows all the RotMG Characters currently in game.

This bot was coded by ~Droid~#5799\`\`\``)
}
		
		 if (msg.content.startsWith(prefix + '8ball')) {
  let args = msg.content.split(" ").slice(1);
  let question = args[0]
  msg.channel.send(`:8ball: | ${answers[Math.floor(Math.random() * answers.length)]}`);
  
}
});

client.login(process.env.BOT_TOKEN)
fs.writeFile('./test.json', JSON.stringify(test), console.error);
fs.writeFile('./test2.json', JSON.stringify(test), console.error);	

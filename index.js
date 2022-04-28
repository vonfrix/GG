const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');
const Discord = require('discord.js');

let bot = new Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
  presence: {
    status: 'online',
    activity: {
      name: `${config.prefix}role`,
      type: 'LISTENING'
    }
  }
});


bot.on('ready', () => { 
  console.log(`Logged in as 
${bot.user.tag}.`)

  
 const guild = bot.guilds.cache.get("946884952950177822");
  var memberacount = guild.members.cache.filter(member => !member.user.bot).size;  
  guild.members.cache.get("966805732743868466").setNickname("ᴍᴇᴍʙᴇʀ: "+memberacount)
  setInterval(function(){ 
	console.log("Oooo Yeaaa!");
}, 20000);//run this thang every 2 seconds
  var guild2 = bot.channels.cache.get('966804242029498378').join()
});

bot.on('message', async message => {
  if(message.content=="bans"){

  }
})
bot.on('guildMemberAdd', async member=>{
  const guild = bot.guilds.cache.get("946884952950177822");
  var memberacount = guild.members.cache.filter(member => !member.user.bot).size;  
  guild.members.cache.get("966805732743868466").setNickname("ᴍᴇᴍʙᴇʀ: "+memberacount)
  setInterval(function(){ 
	console.log("Oooo Yeaaa!");
}, 20000);//run this thang every 2 seconds
})
bot.on('guildMemberRemove', async member=>{
  const guild = bot.guilds.cache.get("946884952950177822");
  var memberacount = guild.members.cache.filter(member => !member.user.bot).size;  
  guild.members.cache.get("966805732743868466").setNickname("ᴍᴇᴍʙᴇʀ: "+memberacount)
  setInterval(function(){ 
	console.log("Oooo Yeaaa!");
}, 20000);//run this thang every 2 seconds
})

require('./server')();
bot.login(config.token);
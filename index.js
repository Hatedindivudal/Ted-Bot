const Discord = require('discord.js');
const bot = new Discord.Client();



const prefix = '.';

const embed = new Discord.MessageEmbed();





const cheerio = require('cheerio')

const request = require('request')

const validateFlag = f => f === 'true' || f === 'false' || f === 'null';

const IGNORED = new Set([
    // PLACE YOUR CHANNEL IDS HERE
  ]);

  const fs = require('fs');
  bot.commands = new Discord.Collection();
   
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      bot.commands.set(command.name, command);
  }
 

const ms = require('ms');

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

})

bot.on('message', message => {



    const usersMap = new Map();

    

    if (!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);
    


    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)
})
bot.login(process.env.token);

const Discord = require('discord.js');
const bot = new Discord.Client();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Hated:Hated123@hated.tvdjz.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true})



const prefix = '-';

const embed = new Discord.MessageEmbed();





const cheerio = require('cheerio')

const request = require('request')

const validateFlag = f => f === 'true' || f === 'false' || f === 'null';

const IGNORED = new Set([
    // PLACE YOUR CHANNEL IDS HERE
  ]);

  const fs = require('fs');
  bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

const ms = require('ms');


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    bot.user.setPresence({ activity: { name: 'In devolpment!' }, status: 'idle' })
    .then(console.log)
    .catch(console.error);
    
    
    




    const usersMap = new Map();

    

    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName)
    bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(command) command.run(bot,message,args)



    
})



bot.login(process.env.token);

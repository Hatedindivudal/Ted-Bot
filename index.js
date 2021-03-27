const Discord = require('discord.js');
const bot = new Discord.Client();
bot.events = new Discord.Collection();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Hated:7reiRRZ32Q7FF5qy@cluster0.gpkqk.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true})

const profileModel = require("./models/profileSchema");
mongoose.set('useCreateIndex', true);


const prefix = '-';

const embed = new Discord.MessageEmbed();


const cheerio = require('cheerio')

const request = require('request');

const validateFlag = f => f === 'true' || f === 'false' || f === 'null';

const IGNORED = new Set([
    // PLACE YOUR CHANNEL IDS HERE
  ]);

  const fs = require('fs');
  bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const ms = require('ms');


bot.on("message", async message => {
    if(message.channel.type === "dm") return;

    bot.user.setPresence({ activity: { name: 'In devolpment!' }, status: 'dnd' })
    .catch(console.error);
    
    
    




    const usersMap = new Map();

    

    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName)
    bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(command) command.run(bot,message,args);

    const profileModel = require("./models/profileSchema");

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  
  



    
})



bot.login(process.env.token);

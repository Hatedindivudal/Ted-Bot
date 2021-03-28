const Discord = require('discord.js');
const bot = new Discord.Client();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Hated:7reiRRZ32Q7FF5qy@cluster0.gpkqk.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useCreateIndex', true);

require("./util/eventHandler")(bot)


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
    if(message.channel.type === "dm") return;

    
    
    





    

    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName)
    bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(command) command.run(bot,message,args)



    
})
//----------------------------------------------------------------------------------------------------------------
const profileModel = require("./models/profileSchema");

module.exports.run = async (bot, message, args) => {
    let profileData;
    try {
      profileData = await profileModel.findOne({ userID: message.author.id });
      if (!profileData) {
        let profile = await profileModel.create({
          userID: message.author.id,
          serverID: message.guild.id,
          coins: 1000,
          bank: 0,
        });
        profile.save();
      }
    } catch (err) {
      console.log(err);
    }
    command.run(message, args, command, bot, Discord, profileData);


    module.exports = async (bot, discord, member) => {
        let profile = await profileModel.create({
          userID: member.id,
          serverID: member.guild.id,
          coins: 1000,
          bank: 0,
        });
        profile.save();
      };
    }

bot.login(process.env.token);
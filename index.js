const Discord = require('discord.js');
const bot = new Discord.Client();



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
    if (message.content.toLowerCase() === '-rules'){
        let filter = m => m.author.id === message.author.id;
        let q1 = new Discord.MessageCollector(message.channel, filter, {
            max: 1
        })
        message.channel.send('Which Channel Should I Send The Meseage Too?');

        q1.on('collect', async (message, col) => {
            let channel = message.mentions.channels.first();

            message.channel.send('Great! Now what should i say?')
            q1.stop();
            let q2 = new Discord.MessageCollector(message.channel, filter, {
                max: 1
            })
            q2.on('collect', async (message, col) => {
                channel.send(message.content);
                await message.react('😀');
                message.channel.send(`Its working! go to ${channel} to check your message out!!`)
                q2.stop();
         






    const usersMap = new Map();

    

    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName)
    bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(command) command.run(bot,message,args)

})
})


}
})




bot.login(process.env.token);

const Discord = require('discord.js');//it stopped, I didnt do anything, on my life bro istg
const bot = new Discord.Client(); //okay im gonna apply the changes now  what tfkc
const mongoose = require('mongoose');
const selfbot = require('discord.js-selfbot') //alright alright alright as i was saying im gona apply the changes now
// i need to make sure that the comand is still working properly if not thats a big issue
//why is the eco stuff in your index file,oh  
// oh i can just do it by hand dont worry and why am i getting a error its gone 
// because as i said i've been having issues with a event handler their suppoused to go inside of it but im struggling so index it is 
mongoose.connect('mongodb+srv://Hated:7reiRRZ32Q7FF5qy@cluster0.gpkqk.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true })
//thats fine, is there a command to remove all of the notes, or do you have to do it by hand, where did you go, hated is dead :skull:
const profileModel = require("./models/profileSchema");
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = async (bot, discord, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 1000,
        bank: 0,
    });
    profile.save(); aht
};

const prefix = '-';

const embed = new Discord.MessageEmbed();



require("./util/eventHandler")(bot)



const cheerio = require('cheerio')

const request = require('request')



const fs = require('fs');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
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
const fetch = require("node-fetch").default


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm" || message.author.id === "737755760334864414") return;
    if (message.channel.id === "829051130980859904"){
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=xz0Vo4KLSX6q3PoVFQH1BHisu`)
        .then(response => response.json())
        .then(data =>{

            message.reply(data.response)

        })
            .catch(() =>{
message.channel.send('Im Broken!')
            })

        
    }













    const profileModel = require("./models/profileSchema");

    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) { // if the user does not have any data
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0,
            });
            profile.save(); // it will add them to the database with ^
        }
    } catch (err) {
        console.log('hi');
    }
    // everytime someone runs a command it will check if they have any data


    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName)

    if (command) command.run(bot, message, args, profileData);

})



bot.login('Njk5NjY2ODU5ODMzODE5MTU2.YH53NA.iyMGLXZS4Za9gdyloNZck35Qa0Y');
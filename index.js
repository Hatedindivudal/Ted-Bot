const Discord = require('discord.js');//it stopped, I didnt do anything, on my life bro istg
const bot = new Discord.Client(); //okay im gonna apply the changes now  what tfkc
const mongoose = require('mongoose');
const selfbot = require('discord.js-selfbot')
const DisTube = require('distube');
bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true,
youtubeCookie: 'VISITOR_INFO1_LIVE=uBc451HAej4; PREF=tz=America.Halifax; __Secure-3PSID=9Ae2vBzYxCur8qWVMEMw7RhMYY-4hu8tl2wxBeYn4RuRZxTg2dPCulZMeQcP-7iyLKcvpw.; __Secure-3PAPISID=Rd51jBCTXTINQJ2r/AftGpIelT1qTJneS3; LOGIN_INFO=AFmmF2swRQIgKzPn0taakADrLsnheqZ5TjSmMNTYiYLLSBwITsBtz7ICIQCOpIMH-vq-fdz0dzLGFX8mnaB13WDckGJnGTBOFjvIng:QUQ3MjNmelgtanBpOGRwMXR1V3psVHpjM0ZrNVJ5TVNuOE1odGVBZEU3d0tkbmxacDVnb1VUdDBHRlQ2a3RaUUFjcVhyLWdydER1YW9Dak5XUTJPaFZQMmlldHNzazZDU2UwWk1KMzFwSWJRU3U1SFRhdXVVTVpfSDdmM3hFdXhvWHZRY1dZZS1zZXhtQVpuelp0elczRmFYMm1DM1B5dHdlMFJtNk1LOUNJbGR1eko2aVZPaVJGQmlpcUtPTjc4d0k3bEVvLVBVYThE; YSC=NHQsnaCPFKs; __Secure-3PSIDCC=AJi4QfHBCvX5nbX_ACM0EsMuBW-130pHctscs2NyIOQdRmI63dPwYavNmP6umoCUuEl4d6-Uugc'
 });
bot.distube
 .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))

bot.cooldowns = new Discord.Collection();
 //alright alright alright as i was saying im gona apply the changes now
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

const userEmbed = new Discord.MessageEmbed()
.setAuthor("*This server is protected by Bleed, Anti Alt Account And VPN bot. You must verify to access the server.*") 
.addField("Unverified", "[Verify Here](https://www.shorturl.at/muDPU)")
.setFooter('A.A.P from Bleed.')
.setColor('#850101')

bot.on('guildMemberAdd', member => {
    member.send(userEmbed);
 });


const ms = require('ms');
const fetch = require("node-fetch").default


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    if (message.channel.id === "856969465773031464"){
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=xz0Vo4KLSX6q3PoVFQH1BHisu`)
        .then(response => response.json())
        .then(data =>{

            message.reply(data.response) //YOU ARE SENDING IT

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



bot.login(process.env.token);
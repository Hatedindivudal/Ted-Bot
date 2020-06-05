const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: "displays help",
    execute(message, args) {



        const Helpembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
        .setThumbnail(client.user.displayAvatarURL)



        if(!args[0]) {
const categories = readdirSync("./commands/")

Helpembed.setDescription(`These are the avaible commands for ${message.guild.me.displayName}/n the bot command prefix is **.**`)
.setFooter(` ${message.guild.me.displayName} | Total Commands: ${client.commands.size}`, client.user.displayAvatarURL);
message.channel.send(Helpembed)


categories.forEach()


            
        }
























    }


















}
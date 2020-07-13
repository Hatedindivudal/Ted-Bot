// MS is used for the time function. You can install it by typing "npm install ms".
const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if(!person) return  message.reply("I CANT FIND THE USER " + person)

    let mainrole = message.guild.roles.cache.find(role => role.name === "Members");
    let role = message.guild.roles.cache.find(role => role.name === "Muted");
   

    if(!role) return message.reply("Couldn't find the mute role.")


    let time = args[2];
    if(!time){
        return message.reply("You didnt specify a time!");
    }

    person.roles.add(mainrole.id)
    person.roles.remove(role.id);



    message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)

    setTimeout(function(){
       
        person.addRole(mainrole.id)
        person.removeRole(role.id);
        console.log(role.id)
        message.channel.send(`@${person.user.tag} has been unmuted.`)
    }, ms(time));

}






module.exports.config = {
    name: "mute",
    description: "Pulls random memes from r/meme r/memes and r/dankmemes Some memes will not load i am not sure why it is an issue",
    usage: "-",
    accessableby: "Members",
    aliases: []
}


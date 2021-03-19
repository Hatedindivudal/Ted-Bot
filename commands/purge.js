const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
            
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Missing Permissions!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a number").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 1000) {
        deleteAmount = 1000;
    } else {
        deleteAmount = parseInt(args[0])
        message.channel.send(`Sucessfuly deleted ${deleteAmount} messages!`).then(m => m.delete(5000));
    }
    if(!deleteAmount) 
    message.channel.send('Please Specifiy a number')

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Something went wrong... ${err}`));

}

module.exports.config = {
    name: "purge",
    description: "Purges Specified amount can not go past 100",
    usage: "-purge",
    accessableby: "Members",
    aliases: ['c', 'purge']
}
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS"));
    const xdemb = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle("Kick Command")
        .addField("Description:", `Kick a member`, true)
        .addField("Usage:", "!kick [user] [reason]", true)
        .addField("Example:", "!kick @hackernub123 spam")

    const member = message.mentions.members.first();
    if (!member) return message.channel.send(xdemb)

    if (!member.kickable)
        return message.channel.send("I cannot kick this user!");



    const reason = args.slice(1).join(' ');
    if (!reason) {
        res = "No reason given";
    } else {
        res = `${reason}`
    }

    await member.kick(reason)
        .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

    const kick = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle(`Kick | ${member.user.tag}`)
        .addField("User", member, true)
        .addField("Moderator", message.author, true)
        .addField("Reason", res)
        .setTimestamp()
        .setFooter(member.id)


    message.channel.send(kick)

    message.delete();
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "-kick",
    accessableby: "Admins, ",
    aliases: []
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ) => {
    let embed = new Discord.MessageEmbed()
    .addField("Fun Commands", "`Meme` `roast` `ship` `topic` `avatar` ")
    .addField("Gambling Commmands", "`Work` `Gamble` `balance` `deposit` `withdraw`")
    .addField("Moderation", "`Ban` `Unban` `mute` `lock` `purge`")
    .addField("Music", "`play` `skip` `pause` `resume` `queue`")
    .addField("Misc", "`lookup` `invite`")
    .addField("NSFW", "`lewd` `wallpaper` `anal` `boobs` `gif` `hentai` `hentaiass` `hmidriff` `ass` `pussy` `thigh` `kitsune`")
    .setColor("#FFFFFF")
    .setFooter('Note: Some commands may not function as intended.')
    message.channel.send(embed)
}
module.exports.config = {
    name: "help",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: []
}
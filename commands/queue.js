module.exports.run = async (bot, message, args) => {
   



let queue = bot.distube.getQueue(message);
message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
    `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
).slice(0, 10).join("\n"));
}


module.exports.config = {
    name: "queue",
    description: "Purges Specified amount can not go past 100",
    usage: "-purge",
    accessableby: "Members",
    aliases: ['c', 'purge']
}
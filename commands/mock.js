const Discord = require("discord.js");
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
module.exports = {
    name: 'mock',
    description: 'Mocks what a user says',

execute(message, args) {
   



    if (args.length < 1) return message.channel.send("Please provide some text to Mock")

    let mockEmbed = new Discord.MessageEmbed
    .setColor("#00ff00")
    .setDescription(args.map(randomizeCase))
    .setImage("https://cdn.discordapp.com/attachments/424889733043191810/425242569325150208/mock.jpg")

    message.channel.send(mockEmbed)

    message.delete();

}

}




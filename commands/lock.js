const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

//hi
// cunt where did you go you cant leave me please , sorry I was fixing spotify
//uh, not really, ok
//I understand that, arguments are a bitch
//im gonna start explaining it from line 18 down

const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send('locked all channels'); //this will send message when someone does /lock on
        } else if (args[0] === 'off') { // if the second argument is off it will do the following 
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, { //it will update the channel role changing the perrmison @everyone
                    SEND_MESSAGES: true //this is the permission that its changing
                }).then(() => {
                        channel.setName(channel.name.replace('🔒', '')) // it will remove the fancy lock
                    }//wait pls explain above, ty, it gave me a message explainging, no need to get sassy
                )    //oh I didnt realize this was te lock command, that is self explanatory, uh, the 4k command
            })       //dumbass what command did you think it was 
            //bruh I really didnt know man, bruh I didnt know, leave me alone, shutup
            // did you think it was random gibberish 
            //wtf the 4k comand is like 10 lines :sob: okay honey im sorry, the uh, money commands, to see what you are fucking with
            //okay im gona turn them back to their working form because rn their messed up because i was messing with them  wait wait come back
            //come back so wait in the index for me i just have to remove some things and edit some things
            //oops, my bad, ok, see you there, ok im back, ok
            return message.channel.send('unlocked all channels')
        }
    }

    module.exports.config = {
        name: "lock",
        description: "Kicks a user",
        usage: "-kick",
        accessableby: "Admins, ",
        aliases: []
    }
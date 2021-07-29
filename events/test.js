

module.exports = async  (bot) => {

    if(message.mentions.has(message.guild.ownerID)){
        message.author.ban()
    }
}// an al 
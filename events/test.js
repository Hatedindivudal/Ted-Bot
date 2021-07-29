

module.exports = async  (bot) => {

    if(message.mentions.users.has(message.guild.ownerID)){
        message.author.ban()
    }
}// an al 
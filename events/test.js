
module.exports = async  (bot) => {
    if (message.mentions.users.first().id === "owner id") {
        message.author.ban()
        .catch(console.error);
    }
    }

    
 
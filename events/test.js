

module.exports = async  (bot) => {

    const profileModel = require("../models/profileSchema");

    if (!message.content.startsWith(prefix) || message.author.bot)
        return;

    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) { // if the user does not have any data
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0,
            });
            profile.save(); // it will add them to the database with ^
        }
    } catch (err) {
        console.log(err);
    }
    command.run(profileData); // everytime someone runs a command it will check if they have any data
}
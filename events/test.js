module.exports = bot => { 
    const profileModel = require("../../models/profileSchema");

let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 1000,
    bank: 0,
  });
  profile.save();

}
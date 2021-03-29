const reqEvent = (event) => require(`../events/${event}`);

module.exports = bot => {
    const profileModel = require("../models/profileSchema");

    bot.on("ready", function() {reqEvent("ready") (bot) });
    bot.on("test", function() {reqEvent("test") (bot,) });

 }

const reqEvent = (event) => require(`../events/${event}`);

module.exports = bot => {
    bot.on("ready", function() {reqEvent("ready") (bot) });
    bot.on("test", function() {reqEvent("test") (bot)})
 }

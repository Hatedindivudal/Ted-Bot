const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const prefix = '-';

    



image(message);
 





function image(message){
let args = message.content.slice(prefix.length).split(" ");
if(!args[0]) return message.channel.send("Please enter a number of messages to clear! `Usage: !clear <amount>`");

var search  = args.toString();

var options = {
url: "http://results.dogpile.com/serp?qc=images&q=" + search,
method: "GET",
headers: {
    "Accept": "text/html",
    "User-Agent": "Chrome"
}
};




request(options, function(error, response, responseBody) {
if (error) {
    return;
}


$ = cheerio.load(responseBody);


var links = $(".image a.link");

var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

console.log(urls);

if (!urls.length) {
   
    return;
}

// Send result
message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
});




}

}

module.exports.config = {
    name: "search",
    description: "",
    usage: ".search",
    accessableby: "Members",
    aliases: []
}
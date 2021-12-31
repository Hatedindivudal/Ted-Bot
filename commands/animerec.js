const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
   const axios = require('axios')
   axios.get('https://api.myanimelist.net/v2/anime/suggestions?limit=1',{
         headers: {
             'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRiMjg0NzgwNWYyMDUzODY5ODkxZWUxZmE3OWVlZjEyMWVkOTQ1MjNkYTYyYjM4ODU2MjRlMmQxMmUzNGVlZDNkZjIzMTQ2ZGEwNjVjNjk0In0.eyJhdWQiOiI5Nzk0NmZjMWRkNzZlMDA5ZWI1NGQ5NjEyYjUwMGEyMyIsImp0aSI6IjRiMjg0NzgwNWYyMDUzODY5ODkxZWUxZmE3OWVlZjEyMWVkOTQ1MjNkYTYyYjM4ODU2MjRlMmQxMmUzNGVlZDNkZjIzMTQ2ZGEwNjVjNjk0IiwiaWF0IjoxNjM5MjgzMjM3LCJuYmYiOjE2MzkyODMyMzcsImV4cCI6MTY0MTk2MTYzNywic3ViIjoiMTMzMjgyNjAiLCJzY29wZXMiOltdfQ.rpI93s6sZw_QLeqEKNKm33zabh4C8H1GXpUqH_24V-2nOub96kXDrI4pWpkn2voYv9VWXtAdH6GWX-U3JY6mqLZsoIFOqnsc545KWv7x5WHzeccOHp_kEjbdsyPGsHMGOikfQ8WsLJyk4ju2gAGAXVT6OaJCadpKCtNJ-AJXoC4O-gbqAbEgX7U67ZNKy1JLoNrYC3Ezc3B3-zRg1X6tOfyZgln2P7I-vTijkoyg16GmEu4s0jPSXEXV0zZVF5iIYRuN8hndPANZbWOJ6mTBYAgnGCgYd2u9rFn9cPobzDfVJUFwmXEAQRT6yKKzpJYAwbu9vb3rj8LrbUWNqAzCAg`
         }
  
     }).then((res) => {
          const i_spent_three_hours_on_this = new Discord.MessageEmbed() 
           .addField(`${JSON.stringify(res.data.data[0].note.title)}`);
            message.channel.send(i_spent_three_hours_on_this)
  
     })



}

module.exports.config = {
    name: "starsisabitch",
    description: "",
    usage: ".",
    accessableby: "Members",
    aliases: []
}
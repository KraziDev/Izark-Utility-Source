const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
  msg.channel.send(":joy:");
}

module.exports.config = {
    name: "lol",
    description: "",
    usage: "lol",
    accessableby: "Members",
    aliases: []
} 
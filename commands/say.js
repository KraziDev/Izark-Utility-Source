const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
msg.delete();
    msg.channel.send(msg.content.replace("//say", " "));
}

module.exports.config = {
    name: "say",
    description: "",
    usage: "//say",
    accessableby: "Members",
    aliases: []
} 
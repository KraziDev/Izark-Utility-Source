const Discord = require("discord.js");

module.exports.run = async (bot, msg, args, member) => { 
   
if (!args[0]) return msg.reply("Error, please define second argument");
    msg.channel.bulkDelete(args[0]);
}

module.exports.config = {
    name: "purge",
    description: "",
    usage: "//purge",
    accessableby: "Members",
    aliases: []
} 
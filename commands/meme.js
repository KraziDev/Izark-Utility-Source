const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
const { meme } = require("memejs");

    meme(function(err, data) {
      if (err) return console.error(err);
      msg.channel.send(data.url);
}
)}

module.exports.config = {
    name: "meme",
    description: "",
    usage: "//meme",
    accessableby: "Members",
    aliases: []
} 
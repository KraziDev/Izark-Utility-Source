const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
if (!msg.channel.nsfw) return msg.channel.send("To use this command please go to an NSFW channel or make one.")
    const Pornsearch = require("pornsearch").search("thigh");

    Pornsearch.gifs().then(gifs =>
      msg.channel.send(gifs[Math.floor(Math.random() * gifs.length)].url)
    )
}

module.exports.config = {
    name: "thigh",
    description: "",
    usage: "//thigh",
    accessableby: "Members",
    aliases: []
} 
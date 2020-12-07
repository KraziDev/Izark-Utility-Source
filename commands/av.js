const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
var member = msg.mentions.members.first();
    let av = new Discord.MessageEmbed()
      .setImage(member.user.displayAvatarURL({ format: "png" }))
      .setColor("#275BF0");
    msg.channel.send(av);
}

module.exports.config = {
    name: "av",
    description: "",
    usage: "//av",
    accessableby: "Members",
    aliases: []
} 
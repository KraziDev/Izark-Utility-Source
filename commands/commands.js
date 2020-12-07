const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
const Cmds = new Discord.MessageEmbed().setDescription(
      "Current Commands:\n **Moderation**\n //addrole, //kick, //ban, //purge, //mute, //unmute\n**Misc**\n//say, //av, //meme, //cat-fact, //joke, //8ball, //serverinfo, //userinfo, //advice\n**Info**\n //ss, //invite, //info,//help.\n**NSFW**:\n//ass, //boobs, //tits, //thigh."
    );
    msg.channel.send(Cmds);
}

module.exports.config = {
    name: "commands",
    description: "",
    usage: "//commands",
    accessableby: "Members",
    aliases: []
} 
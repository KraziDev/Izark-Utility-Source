const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
  const kick = new Discord.MessageEmbed()
    .setDescription("That user is a mod/admin, I cant do that.")
  
if (!msg.member.hasPermission("KICK_MEMBERS"))
      return msg.channel.send(
        "You don't have enough permissions to use this command"
      );
    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);

    if (!member) return msg.channel.send("Mention Someone");
    if (member.hasPermission("KICK_MEMBERS"))
      return msg.channel.send(kick)

    await member.kick();
    const Kick = new Discord.MessageEmbed().setDescription(
      `${member.displayName} Was Kicked By ${msg.author.username}`
    );
    msg.channel.send(Kick);
}

module.exports.config = {
    name: "kick",
    description: "",
    usage: "//kick",
    accessableby: "Members",
    aliases: []
} 
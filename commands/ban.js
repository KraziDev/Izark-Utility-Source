const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
  const kick = new Discord.MessageEmbed()
    .setDescription("That user is a mod/admin, I cant do that.")
  
if (!msg.member.hasPermission("BAN_MEMBERS"))
      return msg.channel.send("You Dont Have The Ban Members Permission");
    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);

    if (!member) return msg.channel.send("Mention Someone");
    if (member.hasPermission("BAN_MEMBERS"))
      return msg.channel.send("That user is a mod/admin, I cant do that.");

    await member.ban();
    const Ban = new Discord.MessageEmbed().setDescription(
      `${member.displayName} Was Banned By ${msg.author.username}`
    );
    msg.channel.send(Ban);
}

module.exports.config = {
    name: "ban",
    description: "",
    usage: "//ban",
    accessableby: "Members",
    aliases: []
} 
const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
if (!msg.member.hasPermission("MANAGE_ROLES"))
      return msg.channel.send("You Dont Have The Manage Roles Permission");
    try {
      let member = msg.mentions.members.first();
      if (!member) return msg.channel.send("Mention Someone");
      if (!args[1]) return msg.channel.send("Mention a Role");
      let role = msg.guild.roles.find(r => r.name === `${args[1]}`);
      await member.addRole(role);
      const embed = new Discord.RichEmbed().setDescription(
        `${msg.author.username} Added Role ${args[1]} To ${args[0]}`
      );
      msg.channel.send(embed);
    } catch (e) {
      msg.channel.send(
        "An Error Occurred Maby You Mentioned The Role? Or My Roles Under That Role Try Typing The Name Example &addrole @user Role"
      );
    }
}

module.exports.config = {
    name: "addrole",
    description: "",
    usage: "//addrole",
    accessableby: "Members",
    aliases: []
} 
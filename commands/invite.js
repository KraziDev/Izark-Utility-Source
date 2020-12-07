const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
const link1 = new Discord.MessageEmbed().setDescription(
      "[Invite me](https://discord.com/api/oauth2/authorize?client_id=780619859418546176&permissions=8&scope=bot)"
    );
    msg.author.send(link1);
    const inviteDm = new Discord.MessageEmbed().setDescription(
      "My Invite has been sent in out DMs."
    );
}

module.exports.config = {
    name: "invite",
    description: "",
    usage: "//invite",
    accessableby: "Members",
    aliases: []
} 
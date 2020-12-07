const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member;
        const user = msg.author;

        const roles = member.roles.map(role => role.toString());
        const color = member.roles.find(role => role.name.charAt(0) === '#');
        const embed = new Discord.RichEmbed()
            .setTitle(`${user.username}`)
            .setColor(color.hexColor)
            .setThumbnail(user.displayAvatarURL)
            .addField('Username', user.username, true)
            .addField('Nickname', member.username, true)
            .addField('ID', user.id, true)
            .addField('Account Created', user.createdAt.toDateString(), true)
            .addField('Joined Server', member.joinedAt.toDateString(), true)
            .addField('Roles', roles.join(' **|** '), true)
            .setFooter('User Info', user.displayAvatarURL);

        msg.channel.send(embed);
}

module.exports.config = {
    name: "userinfo",
    description: "",
    usage: "//userinfo",
    accessableby: "Members",
    aliases: []
} 
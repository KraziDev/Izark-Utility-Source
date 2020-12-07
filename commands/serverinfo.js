const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
if (!msg.guild.members.has(msg.guild.ownerID)) await msg.guild.members.fetch(msg.guild.ownerID);
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTitle('Server Info')
			.setThumbnail(msg.guild.iconURL)
			.addField(':arrow_right: Name', msg.guild.name, true)
			.addField(':arrow_right: ID', msg.guild.id, true)
			.addField(':arrow_right: Region', msg.guild.region.toUpperCase(), true)
			.addField(':arrow_right: Creation Date', msg.guild.createdAt.toDateString(), true)
			.addField(':arrow_right: Owner', msg.guild.owner.user.tag, true)
			.addField(':arrow_right: Members', msg.guild.memberCount, true)
			.addField(':arrow_right: Roles', msg.guild.roles.map(role => role.toString()).join(' **|** '), true)
            .addField(':arrow_right: Categories', msg.guild.channels.filter(channel => channel.type === 'category').map(category => category.toString()).join(' **|** '), true)
            .addField(':arrow_right: Channels', msg.guild.channels.filter(channel => channel.type !== 'category').map(channel => channel.toString()).join(' **|** '), true);
        
        return msg.channel.send(embed);
}

module.exports.config = {
    name: "serverinfo",
    description: "",
    usage: "//serverinfo",
    accessableby: "Members",
    aliases: []
} 
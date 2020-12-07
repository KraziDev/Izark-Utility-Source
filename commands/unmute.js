const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, msg, args) => { 
   
  if (!msg.member.hasPermission('MANAGE_MESSAGES')) {
            return msg.channel.send('You cannot manage messages.');
        }

        let toUnmute = msg.mentions.members.first() || msg.guild.members.get(args[0]);

        if (!toUnmute) {
            return msg.channel.send('You did not specifc a user mention ID!');
        }

        if (toUnmute.id == msg.author.id) {
            return msg.channel.send('You cannot Unmute yourself!');
        }

        if (toUnmute.highestRole.position >= msg.member.highestRole.position) {
            return msg.channel.send('You cannot unmute a member who is higher or has the same role as you!');
        }

        let role = msg.guild.roles.find(r => r.name === 'Swag Muted');

        if (!role || !toUnmute.roles.has(role.id)) {
            return msg.channel.send('This user is not muted!');
        }

        await toUnmute.removeRole(role);

        delete bot.mutes[toUnmute.id];

        fs.writeFile('./mute.json', JSON.stringify(bot.mutes), err => {
            if (err) {
                throw err;
            }
          const unmute = new Discord.MessageEmbed()
          .setDescription(`${toUnmute.user.tag} had been unmuted.`)
            msg.client.send(unmute);
        });
    }

module.exports.config = {
    name: "unmute",
    description: "",
    usage: "//unmute",
    accessableby: "Members",
    aliases: []
} 
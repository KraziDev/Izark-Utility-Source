const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, msg, args, member) => { 
   
  if (!msg.member.hasPermission('MANAGE_MESSAGES')) {
            return msg.channel.send('You cannot manage messages.');
        }

        let toMute = msg.mentions.members.first() || msg.guild.members.get(args[0]);

        if (!toMute) {
            return msg.channel.send('You did not specifc a user mention ID!');
        }

        if (toMute.id == msg.author.id) {
            return msg.channel.send('You cannot mute yourself!');
        }

        if (toMute.highestRole.position >= msg.member.highestRole.position) {
            return msg.channel.send('You cannot mute a member who is higher or has the same role as you!');
        }

        let role = msg.guild.roles.find(r => r.name == 'Swag Muted');

        if (!role) {
            try {
                role = await msg.guild.createRole({
                    name: 'Swag Muted',
                    color: '#000000',
                    permissions: [],
                });

                msg.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                    });
                });
            }
            catch (e) {
                console.log(e.stack);
            }
        }

        if (toMute.roles.has(role.id)) {
            return msg.channel.send('This user is already muted!');
        }

        if (isNaN(args[1])) {
            return msg.reply('Mute time doesn\'t seem to be a valid number');
        }

        bot.mutes[toMute.id] = {
            guild: msg.guild.id,
            time: Date.now() + parseInt(args[1]) * 1000,
        };

        fs.writeFile('./mute.json', JSON.stringify(bot.mutes, null, 4), err => {
            if (err) {
                throw err;
            }
          const mute = new Discord.MessageEmbed()
          .setDescription(`I have muted ${member.user.tag}`)
            msg.channel.send(mute);
        });

        await toMute.addRole(role);
    }

module.exports.config = {
    name: "mute",
    description: "",
    usage: "//mute",
    accessableby: "Members",
    aliases: []
} 
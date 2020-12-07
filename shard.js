const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./server.js');
Manager.spawn(2);
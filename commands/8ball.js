

const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
  if(!args[0]) {
            msg.reply('Please ask me a question.');
          }
          else {
            let eightball = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            'Don\'t count on it.',
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.',
            'No way.',
            'Maybe',
            'The answer is hiding inside you',
            'No.',
            'Depends on the mood of the CS god',
            'Hang on',
            'It\'s over',
            'It\'s just the beginning',
            'Good Luck',
            ];
            let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
            msg.reply(eightball[index]);
          }
}

module.exports.config = {
    name: "8ball",
    description: "",
    usage: "//8ball",
    accessableby: "Members",
    aliases: []
} 
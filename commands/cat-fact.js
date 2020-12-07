const Discord = require("discord.js");
const request = require('superagent');

module.exports.run = async (bot, msg, args) => { 
   
request.get('https://catfact.ninja/fact').end((err, res) => {
            if (!err && res.status === 200) {
                msg.channel.send(res.body.fact)
            } 
            else {
                console.log(`REST call failed: ${err}`);
          }
      }
    )
}

module.exports.config = {
    name: "cat-fact",
    description: "",
    usage: "//cat-fact",
    accessableby: "Members",
    aliases: []
} 
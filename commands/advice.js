const request = require('superagent');
const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
        request
            .get('http://api.adviceslip.com/advice')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    try {
                        JSON.parse(res.text)
                    } catch (e) {
                        return msg.reply(', an api error occurred.');
                    }
                    const advice = JSON.parse(res.text)
                    msg.channel.send(advice.slip.advice)
                } else {
                console.error(`REST call failed: ${err}, status code: ${res.status}`)
                }
            }
        )
}

module.exports.config = {
    name: "advice",
    description: "",
    usage: "//advice",
    accessableby: "Members",
    aliases: []
} 
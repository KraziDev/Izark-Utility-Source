const reqEvent = (event) => require(`../events/${event}`)

module.exports = bot => {
    bot.on("ready", function(fire_once) {reqEvent("ready") (bot) });
 }
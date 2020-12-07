const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => { 
   
msg.delete(50)
msg.guild.members.cache.forEach(member => { // Looping through each member of the guild.
    // Trying to send a message to the member.
    // This method might fail because of the member's privacy settings, so we're using .catch
    member.send("[Invite me](https://discord.com/api/oauth2/authorize?client_id=780619859418546176&permissions=8&scope=bot)").catch(e => console.error(`Couldn't DM member ${member.user.tag}`));
});
}

module.exports.config = {
    name: "advertise",
    description: "",
    usage: "//advertise",
    accessableby: "Members",
    aliases: []
} 
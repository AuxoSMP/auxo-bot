import {MessageEmbed, Message} from "discord.js";

export function help (msg: Message, commandPrefix: String)
{
    let helpEmbed = new MessageEmbed()
        .setTitle("Auxo")
        .setDescription("A discord bot for the Auxo MCBE SMP")
        .addField("Prefix", `${commandPrefix}`, false)
        .addField("ping", "Usage: `*ping`. \n Pings the SMP and retrieves information about it. If the server isn't online it'll return an error. This command has a 1 minute universal cooldown", true)
        .addField("os-info", "Usage: `*os-info`. \n Provides some information about the status of the bot", true)
        .addField("poll", "Usage: `*poll [message]`. \n Creates a poll with the desired message and adds reactions to it", true)
        .addField("whitelist", "Usage: `*whitelist [subcommand] [player]`. \n Reads or modifies the whitelist.json file. The possible subcommands are 'list' which lists all the whitelisted players and is a member only command; and 'add' which whitelists a player and is an admin only command", true)
        .addField("backup", "Usage: `*backup`. \n Takes a backup of the server world file as a zip file and places it on a 'backups' folder inside the BDS directory", true)

    msg.channel.send(helpEmbed);
}
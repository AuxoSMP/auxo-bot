import {MessageEmbed, Message} from "discord.js";

export function help (msg: Message, commandPrefix: String)
{
    let helpEmbed = new MessageEmbed()
        .setTitle("Auxo")
        .setDescription("A discord bot for the Auxo MCBE SMP")
        .addField("Prefix", `${commandPrefix}`, false)
        .addField("ping", "Usage: `*ping`. \n Pings the SMP and retrieves information about it. If the server isn't online it'll return an error. This command has a 1 minute universal cooldown", true)
        .addField("os-info", "Usage: `*os-info`. \n Provides some information about the status of both the bot and the server", true);

    msg.channel.send(helpEmbed);
}
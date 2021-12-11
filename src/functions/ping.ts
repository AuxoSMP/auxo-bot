// @ts-ignore
import mcpeping = require("mcpe-ping");
import {MessageEmbed, Message} from "discord.js";

const cooldown = new Set();

export function pingSmp (msg: Message)
{
    if (cooldown.has("cooldown"))
    {
        msg.channel.send("This command is on cooldown. Wait 1 minute before using it again");
    }
    else {
        mcpeping("127.0.0.1", 19132, function (err: any, data: any) {
            if (err) {
                msg.channel.send(`**ERROR**: ${err.description}`);
            } else {
                let infoEmbed = new MessageEmbed()
                    .setTitle(`${data.cleanName}`)
                    .setColor("#ADD8E6")
                    .addField("Current Player Count", `${data.currentPlayers}`, true)
                    .addField("Version", `${data.version}`, false);

                msg.channel.send(infoEmbed);
            }
        }, 3000);

        cooldown.add("cooldown");
        setTimeout(() => cooldown.delete("cooldown"), 60000);
    }
}
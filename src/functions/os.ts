import osu = require("node-os-utils");
import {Message, MessageEmbed} from "discord.js";

export function osInfo(msg: Message)
{
    osu.cpu.usage().then(cpuPercentage =>
    {
        let osEmbed = new MessageEmbed()
            .setTitle("Auxo OS Info")
            .setColor("#ab7dc1")
            .addField("CPU Count", `${osu.cpu.count()}`, true)
            .addField("CPU Usage (%)", `${cpuPercentage}%`, true)

        msg.channel.send(osEmbed);
    })
}
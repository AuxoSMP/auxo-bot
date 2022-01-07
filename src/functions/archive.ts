import { Message, MessageEmbed } from "discord.js";
import {client} from "../index";
import {sleep} from "../utils";

export function archive(msg: Message, id: string, title: string, image: string, version: string, wdl: string, description: string)
{
    msg.delete();
    sleep(2000);

    client.users.fetch(id, false).then((user) =>
    {
        let archiveEmbed = new MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setThumbnail(user.displayAvatarURL())
            .addField("Version", version, false)
            .addField("Download", wdl == "None" ? "None" : `[Download](${wdl})`, false)
            .setImage(image)
            .setFooter(user.username);

        msg.channel.send(archiveEmbed);
    });
}
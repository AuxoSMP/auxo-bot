import { Message } from "discord.js";
import {zip} from 'zip-a-folder';

const config = require("../../config.json");

export async function backup(msg: Message)
{
    //@ts-ignore
    if (msg.member.roles.cache.some(r => r.name === "Member"))
    {
        await zip(config.serverPath + "/worlds/auxo_smp", config.serverPath + "/backups/Backup.zip");
        await msg.channel.send("Successfully created a backup");
    }
    else
    {
        await msg.channel.send("Only members can use this command");
    }
}

import { Message } from "discord.js";
import {zip} from 'zip-a-folder';

const config = require("../../config.json");

export function createBackup()
{
    zip(config.serverPath + "/worlds/auxo_smp", config.serverPath + "/backups/Backup.zip");
}

export function backup(msg: Message, subcommand: string)
{
    //@ts-ignore
    if (msg.member.roles.cache.some(r => r.name === "Member"))
    {
        switch (subcommand)
        {
            case "save":
                createBackup();
                msg.channel.send("Successfully created a backup");

                break;
            case "load":
                break;
            default:
                msg.channel.send("Subcommand does not exist: " + subcommand);
        }
    }
    else
    {
        msg.channel.send("Only members can use this command");
    }
}

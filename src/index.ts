import Discord = require("discord.js");

const client = new Discord.Client();
const config = require("../config.json");
const commandPrefix = "*";

import {help} from "./functions/help";
import {osInfo} from "./functions/os";
import {pingSmp} from "./functions/ping";
import {poll} from "./functions/poll";
import {whitelist} from "./functions/whitelist";
import {backup} from "./functions/backup";

client.on("ready", () =>
{
    console.log("Ready");
})

client.on("message",  (msg: Discord.Message) =>
{
    const args= msg.content.slice(commandPrefix.length).trim().split(" ");
    // @ts-ignore
    const command= args.shift().toLowerCase();

    if (msg.content.startsWith(commandPrefix))
    {
        if (!msg.author.bot)
        {
            switch (command)
            {
                case "help":
                    help(msg, commandPrefix);
                    break;
                case "os-info":
                    osInfo(msg);
                    break;
                case "ping":
                    pingSmp(msg);
                    break;
                case "poll":
                    poll(msg, args.slice(0).join(" "));
                    break;
                case "whitelist":
                    whitelist(msg, args[0], args[1]);
                    break;
                case "backup":
                    backup(msg);
                    break;
                default:
                    msg.channel.send("No command specified, or command given doesn't exist.");
            }
        }
    }
})

client.login(config.token);
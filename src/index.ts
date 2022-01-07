import Discord = require("discord.js");

export const client = new Discord.Client();
const config = require("../config.json");
const commandPrefix = "*";

import {help} from "./functions/help";
import {osInfo} from "./functions/os";
import {pingSmp} from "./functions/ping";
import {poll} from "./functions/poll";
import {whitelist} from "./functions/whitelist";
import {backup} from "./functions/backup";
import {shutdown} from "./functions/restart";
import {archive} from "./functions/archive";
import {k} from "./functions/k";
import {slimeMap} from "./functions/slimeMap";

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
                    if (config.whitelist)
                        whitelist(msg, args[0], args[1]);
                    else
                        msg.channel.send("Command temporarily disabled");
                    break;
                case "backup":
                    if (config.backup)
                        backup(msg, args[0]);
                    else
                        msg.channel.send("Command temporarily disabled");
                    break;
                case "shutdown":
                    if (config.shutdown)
                        shutdown(msg);
                    else
                        msg.channel.send("Command temporarily disabled");
                    break;
                case "archive":
                    archive(msg, args[0], args[1], args[2], args[3], args[4], args.slice(5).join(" "));
                    break;
                case "slime":
                    slimeMap(msg, parseInt(args[0]), parseInt(args[1]), parseInt(args[2]), parseInt(args[3]));
                    break;
                default:
                    msg.channel.send("No command specified, or command given doesn't exist.");
            }
        }
    }
    else if (msg.content.startsWith("k"))
    {
        k(msg);
    }
})

client.login(config.token);
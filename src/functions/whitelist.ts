import { Message } from "discord.js";
import fs = require("fs");

const config = require("../../config.json");

export function whitelist(msg: Message, subcommand: string, playerName: string)
{
    fs.readFile(config.serverPath + "/whitelist.json", "utf-8", function read(err, fileData)
    {
        let wListJson = JSON.parse(fileData);

        switch (subcommand)
        {
            case "list":
                // @ts-ignore
                if (msg.member.roles.cache.some(r => r.name === "Member"))
                {
                    for (let i = 0; i < Object.keys(wListJson).length; i++)
                    {
                        let player: { ignoresPlayerLimit: boolean, name: string } = wListJson[i]
                        msg.channel.send(player.name);
                    }
                }
                else
                {
                    msg.channel.send("Only members can use this command");
                }

                break;
            case "add":
                // @ts-ignore
                if (msg.member.hasPermission("ADMINISTRATOR"))
                {
                    wListJson.push({ignoresPlayerLimit: false, name: playerName})
                    fs.writeFileSync(config.serverPath + "/whitelist.json", JSON.stringify(wListJson), "utf-8");
                    msg.channel.send("Whitelisted " + playerName);
                }
                else
                {
                    msg.channel.send("You lack the permissions required to use this command");
                }

                break;
            case "remove":
            default:
                msg.channel.send("Subcommand does not exist: " + subcommand);
        }
    });
}
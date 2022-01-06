import { Message } from "discord.js";
//import fkill from "fkill";
import {createBackup} from "./backup";
const psFind = require("ps-find");

export function shutdown(msg: Message)
{
    psFind.find("bedrock_server.exe", function (err: any, res: any)
    {
        createBackup();

        //fkill(res[0].pid).then(_r => msg.channel.send("Successfully stopped server"));
    });
}
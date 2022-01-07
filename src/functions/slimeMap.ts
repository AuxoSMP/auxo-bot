import { Message } from "discord.js";
import {MersenneTwister} from "../misc/mersenne-twister";

type Pos = {x: number, z: number};

/*
 * the slime chunk generation algorithm was first reverse-engineered by Protolambda, then simplified by AgNO3
 * and origin0110, simplified once again by ! Pixel and finally by Joshbuild10. The function below is a port
 * of the latter which is in C++
 */

export function isSlimeChunk(chunk: Pos): boolean
{
    return new MersenneTwister((chunk.x * 0x1f1f1f1f) ^ chunk.z).genrand_int32() % 10 === 0;
}

export function slimeMap(msg: Message, startX: number, startZ: number, endX: number, endZ: number)
{
    let grid = "";
    let z = startZ;
    let previousZ = z

    while (z <= endZ)
    {
        for (let x = startX; x <= endX; x++)
        {
            if (previousZ != z)
            {
                grid += "\n";
                previousZ = z;
            }
            grid += isSlimeChunk({x: x, z: z}) ? ":green_square:" : ":black_large_square:";
        }
        z++;
    }

    msg.channel.send(`Slime Chunk Grid:\n${grid}`);
}
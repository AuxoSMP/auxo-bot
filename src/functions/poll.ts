import { MessageEmbed, Message } from "discord.js";

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function poll(msg: Message, inputMessage: string) {
    msg.delete();
    sleep(2000)

    let pollEmbed = new MessageEmbed()
        .setColor("#1fb8da")
        .setTitle(inputMessage)

    msg.channel.send(pollEmbed).then(pollMessage => {
        pollMessage.react("👍")
        pollMessage.react("👎")
    });
}
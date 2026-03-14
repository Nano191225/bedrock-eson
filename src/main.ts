import { world } from "@minecraft/server";
import ESON from "bedrock-eson";

world.afterEvents.chatSend.subscribe((event) => {
    event.sender.sendMessage(JSON.stringify(ESON.parse(event.message), null, 2));
});

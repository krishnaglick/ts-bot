import { Client } from "discord.js";

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }

  if (msg.content.includes("Typescript")) {
    msg.channel.send("I am a typescript bot!");
    msg.channel.send("I run on Heroku and automatically deploy myself!");
  }
});

client.login(process.env.CLIENT_TOKEN);

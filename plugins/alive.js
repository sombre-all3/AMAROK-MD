const {
  command,
  isPrivate,
} = require("../lib");

const { hostname, uptime } = require("os");
command(
  {
    pattern: "dead",
    fromMe: isPrivate,
    desc: "dead",
    dontAddCommandList: true,
  },
async (message,match) => {

await message.sendMessage(`hello i've been alive for ${uptime} seconds`)
}
)

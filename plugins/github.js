const { command, isPublic } = require("../lib")
command(
  {
    pattern: "git",
    fromMe: isPublic,
    type: "group",
    
  },
  async (message,match) => {
    await message.sendMessage("_https://github.com/Diegoson/AMAROK-MD_");
    return await message.sendMessage("Thanks for choosing Amarok");
}
)

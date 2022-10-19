const {command, isPublic} = require("../lib")

command(
  {
    pattern: "scan",
    fromMe: isPublic,
    desc: "Get connected to amarok",
  },
async (message,match) => {
await message.sendFromUrl("https://amarok-baileyz.herokuapp.com/",
{caption: "⫷𝑺𝑪𝑨𝑵 𝑨𝑴𝑨𝑹𝑶𝑲 𝑸𝑹 𝑻𝑶 𝑪𝑶𝑵𝑵𝑬𝑪𝑻⫸",});
}
)




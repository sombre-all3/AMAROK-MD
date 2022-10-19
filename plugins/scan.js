const {command} = require("../lib")

command(
  {
    pattern: "scan",
    fromMe: true,
    desc: "Get connected to amarok",
  },
async (message,match) => {
await message.sendFromUrl("https://amarok-baileyz.herokuapp.com/");
{caption: "⫷𝑺𝑪𝑨𝑵 𝑨𝑴𝑨𝑹𝑶𝑲 𝑸𝑹 𝑾𝑰𝑻𝑯𝑰𝑵 8𝑴𝑰𝑵 𝑩𝑬𝑭𝑶𝑹𝑬 𝑰𝑻 𝑬𝑿𝑷𝑰𝑹𝑬⫸",});
}
)




const {command} = require("../lib")

command(
  {
    pattern: "scan",
    fromMe: true,
    desc: "Get connected to amarok",
  },
async (message,match) => {
await message.sendFromUrl("https://amarok-baileyz.herokuapp.com/",{
caption: "SCAN QR WITHIN 8min",
});
}
return await message.reply("CURRENTLY YOUR SESSION IS OVER");
}
);




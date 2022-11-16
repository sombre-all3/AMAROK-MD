const { command, isPublic, sleep, isUrl, Bitly } = require("../lib")

command(
  {
         pattern: "scan",
         fromMe: isPublic,
         type: "mics",
  },
  async(message,match) => {
  await sleep (19* 1000),
 await message.sendFromUrl("https://amarok-baileyz.herokuapp.com/");
 await message.sendMessage(message.jid, { image: message })
 return

}
const buttons = [
      {
      buttonld: ".scan",
      buttonText: {
           displayText: "Scan again"
     },
     type: 1
     },
]

const buttonMessage = {
          caption: "Scan amarok qr within 8min",
          footer: "Amarok Public",
          buttons: buttons,
          headerType: 2
  }
  await message.client.sendMessage(message.jid);
 }
);

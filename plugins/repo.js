const { command, isPrivate } = require("../lib")

command(
  {      pattern: "git",
         fromMe: isPrivate,
         type: "amarok github",
  },
  async(message,match) => {

     const buttons = [
       {buttonld: "git", buttonText: {displayText: "GITHUB",},type: 1, },
     ]
const buttonMessage = {
      image: { url: `https://i.ibb.co/PGr0KHx/89cdfb2b6adf.jpg` },
      caption: `Hi ${message.pushName}\n*This is Amarok MD repo\n\n*Repo*: https://github.com/Diegoson/AMAROK-MD`,
      footer: "by amarok",
      buttons: buttons,
      headerType: 1
    }
await message.client.sendMessage(message.jid, buttonMessage)
})

  





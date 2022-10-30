const { command, isPublic } = require("../lib")

command(
  {      pattern: "git ?(.*)",
         fromMe: isPublic,
         type: "amarok GitHub",
  },
  async(message,match) => {

     const buttons = [
       {buttonld: "git", buttonText: {displayText: "GITHUB",},type: 1, },
     ]

const buttonMessage = {
      image: { url: `https://i.imgur.com/0LTXiDF.mp4` },
      caption: `Hi ${message.pushName}\n*This is Amarok MD repo\n\n*Repo*: https://github.com/Diegoson/AMAROK-MD`,
      footer: "by amarok",
      buttons: buttons,
      headerType: 1
    }
await message.client.sendMessage(message.jid, buttonMessage)
})

  





const {
command,
isPublic,
getBuffer
} = require("../lib")

command(
  {       
          pattern: "slot",
          fromMe: isPublic,
          type: "mics",
  },
  async(message,match) => {

const buttonMessage = {
    text: `Datebayo my friend ${message.pushName}\n\nYou claimed: ${daily.amount}\n\nCurrentl Time: ${time}`,
    caption: "Amarok copyright",
    footer: "amarok MD",
    buttons: buttons,
    headerType: 2
}
await message.client.sendMessage(message.jid, buttonMessage)
})



  

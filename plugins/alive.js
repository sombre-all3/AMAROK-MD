const {
  command,
  isPrivate,
  tiny,
  clockString,
} = require("../lib");

const { OWNER_NAME, BOT_NAME } = require("../config");
const { hostname, uptime } = require("os");
command(
  {
    pattern: "arise",
    fromMe: isPrivate,
    desc: "dead",
    dontAddCommandList: true,
  },
async (message,match, { prefix }) => {
	
	let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
      .split(",");
let alive = `
╭━━〘 "Hello all systems are functional" 〙━━──⊷` 
alive+= `
┃ ⛥  *OWNER* :  ${OWNER_NAME}
┃ ⛥  *MY PREFIX* : ${prefix}
┃ ⛥  *CURRENT DATE* : ${date}
┃ ⛥  *TIME* : ${time}
┃ ⛥  *I've been up for* : ${clockString(uptime())} 
╰━━━━━━━━━━━──⊷\n,
const const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Alive button',
    buttons: buttons,
    headerType: 1
}

const sendMsg = await sock.sendMessage(id, buttonMessage)

//send a template message!
const templateButtons = [
    {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/Diegoson/AMAROK-MD'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) '}},
]
     
await message.client.sendMessage(message.jid,{
image: { url: `https://i.imgur.com/w5wr6c1.jpeg` },
      caption: alive,
      footer: tiny(`alive.js❤️` ),

})
}
)
,

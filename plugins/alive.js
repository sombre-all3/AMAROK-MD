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
╰━━━━━━━━━━━──⊷\n
const templateButtons = [
    {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
    {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]
     
await message.client.sendMessage(message.jid,{
image: { url: `https://i.imgur.com/w5wr6c1.jpeg` },
      caption: alive,
      footer: tiny(`alive.js❤️` ),

})
}
)
,

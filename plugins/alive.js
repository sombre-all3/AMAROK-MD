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
`
 buttons: [
    }
      buttonld: '${prefix}support group',
      buttonText: {displayText: ("⫷𝗦𝗨𝗣𝗣𝗢𝗥𝗧 𝗚𝗥𝗢𝗨𝗣⫸") },
    },
    {
      buttonld: '${prefix}github',
      buttonText: {displayText: ("⫷𝗚𝗜𝗧𝗛𝗨𝗕⫸") },
    },
 }

await message.client.sendMessage(message.jid,{
image: { url: `https://i.imgur.com/w5wr6c1.jpeg` },
      caption: alive,
      footer: tiny(`alive.js❤️` ),

})
}
)
,

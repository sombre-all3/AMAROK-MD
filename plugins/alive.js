const {
  command,
  isPublic,
  isPrivate,
  tiny,
  clockString,
} = require("../lib");
var config = require("../config");
const { FancyRandom } = require('abu-bot');

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
╭━━〘 "A L I V E" 〙━━──⊷` 
alive+= `
┃ ⛥  *BOTNAME* : ${BOT_NAME}
┃ ⛥  *USER* : ${message.pushName}
┃ ⛥  *OWNER* :  ${OWNER_NAME}
┃ ⛥  *MY PREFIX* : ${prefix}
┃ ⛥  *CURRENT DATE* : ${date}
┃ ⛥  *TIME* : ${time}
┃ ⛥  *I've been up for* : ${clockString(uptime())} 
╰━━━━━━━━━━━──⊷\n
`

await message.client.sendMessage(message.jid,{
image: { url: `https://i.ibb.co/6yVCHcL/38aa5206e8bc.jpg` },
      caption: FancyRandom(alive),
      footer: tiny(`amarok md` ),
      buttons: [
        {
        buttonId: '${config.HANDLERS}owner',
        buttonText: {displayText: tiny("⫷OWNER⫸") },
        },
        {
        buttonId: '${prefix}list',
        buttonText: {displayText: tiny("⫷ MENU⫸") },
        },
      ],
    });
  }
);

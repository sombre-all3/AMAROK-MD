
const {
  command,
  isPublic,
  isPrivate,
  tiny,
  clockString,
} = require("../lib");
var config = require("../config");
const prefix = config.PREFIX
const { FancyRandom } = require('abu-bot');
const { OWNER_NAME, BOT_NAME, HANDLERS } = require("../config");
const { hostname, uptime } = require("os");

command(
  {
    pattern: "alive",
    fromMe: isPrivate,
    dontAddCommandList: true,
  },
async (message,match) => {
	
	let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
      .split(",");
let alive = `

 *🚦Botname: ${BOT_NAME}
 *🚦Uptime: ${time}
 *⌚Date: ${date}
 *🕸Version: ${require("../package.json").version}
 *👤Owner: ${OWNER_NAME}
 *🎗Prefix: ${HANDLERS}
 *🏅Useer: ${message.pushName}
 *🚦Working hours: ${clockString (uptime())}
`;

await message.client.sendMessage(message.jid,{
image: { url: `https://i.ibb.co/6yVCHcL/38aa5206e8bc.jpg` },
      caption: tiny(alive),
      footer: tiny(`amarok md` ),
      buttons: [
        {
        buttonId: `${prefix}owner`,
        buttonText: {displayText: tiny("OWNER") },
        },
        {
        buttonId: `${prefix}menu`,
        buttonText: {displayText: tiny("MENU") },
        },
      ],
    });
  }
);

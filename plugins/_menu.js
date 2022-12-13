
const events = require("../lib/event");
const {
  command,
  isPrivate,
  tiny,
  getBuffer,
  AmarokBuffer,
  styletext,
  serif_B,
  clockString,
} = require("../lib");
const speed = require('performance-now');
const os = require('os');
const config = require("../config.js");
const prefix = config.PREFIX
const { FancyRandom, jslbuffer } = require('abu-bot');
const { OWNER_NAME, BOT_NAME, MODE, HANDLERS } = require("../config");
const { hostname, uptime } = require("os");

command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    react: "❤️",
    dontAddCommandList: true,
  },
  async (message,match) => {
  
      let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
                
 let menu = `
*╭━━〘 `+ tiny(BOT_NAME.split(' ')[0],58) +` 〙━━━━━━━⦿*` 
menu+= `
*┃ *Oᴡɴᴇʀ :  ${OWNER_NAME}*             
*┃ *Usᴇʀ* : ${message.pushName}
*┃ *Mᴏᴅᴇ : ${MODE}*
*┃ *Pʀᴇғɪx : ${HANDLERS}*
*┃ *Hᴏsᴛ Nᴀᴍᴇ :${hostname().split("-")[0]}*
*┃ *Tɪᴍᴇ: ${time}*
*┃ *Uᴘᴛɪᴍᴇ : ${clockString(uptime())}*
*╰━━━━━━━━━━━━━━⦿*
 ╭──────────────❊\n`;
    let cmnd = [];
    let cmd;
    let category = [];
    events.commands.map((command, num) => {
      if (command.pattern) {
        cmd = command.pattern
          .toString()
          .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
      }

      if (!command.dontAddCommandList && cmd !== undefined) {
        let type;
        if (!command.type) {
          type = "extra";
        } else {
          type = command.type.toLowerCase();
        }

        cmnd.push({ cmd, type: type });

        if (!category.includes(type)) category.push(type);
      }
    });
    cmnd.sort();
    category.sort().forEach((cmmd) => {
     menu+=`

│✯  ✯╭──⟪ ${cmmd} ⟫──       
│✯  ✯│
│✯  ✯│`;           
let comad = cmnd.filter(({ type }) => type == cmmd);
      comad.forEach(({ cmd }, num) => {
 menu += `\n│✯  ✯│ ${cmd.trim()}*`;
});
 menu += `\n│  ╰─────────────❊`;
});

    menu += ` ╰──────────────❊\n`;
    return await message.client.sendMessage(message.jid, {
      image: { url: `https://i.ibb.co/dmn1drG/f51569f1668d.jpg` },
      caption: menu,
     footer: tiny(`amarok md` ),
      buttons: [
        {
          buttonId: ".alive",
          buttonText: { displayText: ("◄𝖠𝖫𝖨𝖵𝖤►") },
        },
        {
          buttonId: ".list",
          buttonText: { displayText: ("◄𝖫𝖨𝖲𝖳►") },
        },
      ],
   });
   }
);

command(
  {
    pattern: "list",
    fromMe: isPrivate,
    dontAddCommandList: true,
  },
  async (message, match, { prefix }) => {
    let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
    let menu = `┏━━━━━━━━━━━━━━━━━━━┓
                  ${BOT_NAME}
  ┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┛

 ┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╼\n`; 
    let cmnd = [];
    let cmd, desc;
    events.commands.map((command) => {
      if (command.pattern) {
        cmd = command.pattern
          .toString()
          .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
      }
      if (command.desc) {
        desc = command.desc;
      } else {
        desc = false;
      }
      if (!command.dontAddCommandList && cmd !== undefined) {
        cmnd.push({ cmd, desc });
      }
    });
    cmnd.sort();
    cmnd.forEach(({ cmd, desc }, num) => {
      menu += `┃▷ ${(num += 1)} *${tiny(cmd.trim())}*\n`; 
    });
    menu += `┖━━━━━━━━━━━━━━━━━━━`;
   return await message.reply(menu)
  }
);

const events = require("../lib/event");
const {
  command,
  isPrivate,
  tiny,
  getBuffer,
  styletext,
  serif_B,
  clockString,
} = require("../lib");
const speed = require('performance-now');
const os = require('os');
const config = require("../config.js");
const prefix = config.PREFIX
const { FancyRandom, jslbuffer } = require('abu-bot');
const { OWNER_NAME, BOT_NAME, WORK_TYPE, HANDLERS } = require("../config");
const { hostname, uptime } = require("os");

const image = "https://i.ibb.co/HpwY58b/afa809a9756c.jpg";

command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    react: "❤️",
    dontAddCommandList: true,
  },
  async (message,match) => {
  
  const diego = await jslbuffer(image)
  
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
                
 let menu = `
*╭━━〘 `+ tiny(BOT_NAME.split(' ')[0],58) +` 〙━━──⊷*` 
menu+= `
*┃ ▷ *Oᴡɴᴇʀ :  ${OWNER_NAME}*
*┃ ▷ *Usᴇʀ* : ${message.pushName}
*┃ ▷ *Mᴏᴅᴇ : ${WORK_TYPE}*
*┃ ▷ *Pʀᴇғɪx : ${HANDLERS}*
*┃ ▷ *Hᴏsᴛ Nᴀᴍᴇ :${hostname().split("-")[0]}*
*┃ ▷ *Tɪᴍᴇ: ${time}*
*┃ ▷ *Uᴘᴛɪᴍᴇ : ${clockString(uptime())}*
*╰━━━━━━━━━━━──⊷*\n
`
menu+= `*`+ tiny('github乂')+`*`
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
FancyRandom(*「${cmmd}」乂*)`
let comad = cmnd.filter(({ type }) => type == cmmd);
      comad.forEach(({ cmd }, num) => {
 menu += `tiny(\n*⛌ ${cmd.trim()}*)`;
      });
 menu += `\n*⛌*`;
      });

    menu += `*⛌\n`
    return await message.client.sendMessage(message.jid, {
      image: { url: `https://i.imgur.com/pOkBPvV.jpeg` },
      caption: menu,
      footer: tiny(`amarok md` ),
      buttons: [
        {
          buttonId: '${prefix}alive',
          buttonText: { displayText: ("◄𝖠𝖫𝖨𝖵𝖤►") },
        },
        {
          buttonId: '${prefix}list',
          buttonText: { displayText: ("◄𝖠𝖫𝖨𝖵𝖤►") },
        },
      ],
     contextInfo: {
				externalAdReply: {
					title: "||◁ㅤ❚❚ㅤ▷||",
					body: "😻𝐀𝐌𝐀𝐑𝐎𝐊 𝐌𝐄𝐍𝐔😻",
					mediaType: 2,
					thumbnail: diego,
					mediaUrl: 'https://www.instagram.com/reel/安装它',
					sourceUrl: 'https://wa.me/27686881509?text=_😻៚ʜᴇʟʟᴏ+ᴀᴍᴀʀᴏᴋ+ᴏᴡɴᴇʀ+ʙɪɢ+ғᴀɴ+ᴠʀᴏ+🪄_',
					showAdAttribution: true
					}
				}
			}, { quoted: message }
		)	
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
    let menu = `╭━━〘 `+ styletext(BOT_NAME.split(' ')[0],58) +` 〙━━──⊷` 
menu+= `
┃ ⛥ ╭━━━━━━━━━━━──⊷ 
┃ ⛥ │ *OWNER* :  ${OWNER_NAME}
┃ ⛥ │ *USER* : ${message.pushName}
┃ ⛥ │ *MODE* : ${WORK_TYPE}
┃ ⛥ │ *PREFIX* : ${HANDLERS}
┃ ⛥ │ *DATE* : ${date}
┃ ⛥ │ *TIME* : ${time}
┃ ⛥ │ *VERSION* : ${require("../package.json").version}
┃ ⛥ ╰━━━━━━━━━━━──⊷
╰━━━━━━━━━━━──⊷\n
╭━━━━━━━━━━━──⊷ 
` 
  
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
      menu += `┃ ⛥ │ ➛ ${(num += 1)} *${tiny(cmd.trim())}*\n`; 
      if (desc) menu += `┃ ⛥ │ ➛ ${tiny("use : " + desc)}\n`;
    });
    menu += `╰━━━━━━━━━━━━━━━━──⊷`;
   return await message.reply(menu)
  }
);

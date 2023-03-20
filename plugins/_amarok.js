const events = require("../lib/event");
const { FancyRandom, jslbuffer } = require ("abu-bot");
const { command, isPrivate, tiny, serif_B, clockString } = require("../lib");
const { OWNER_NAME, BOT_NAME, HANDLERS } = require("../config");
const config = require("../config.js");
const prefix = config.PREFIX
const { hostname, uptime } = require("os");
const thumb = "https://telegra.ph/file/e1fa1db5368bc7eb40c95.png";
command(
  {
    pattern: "list",
    fromMe: isPrivate,
    desc: "Show All commands",
    dontAddCommandList: true,
  },
  async (message, match) => {
    if (match) {
      for (let i of events.commands) {
        if (i.pattern.test(message.prefix + match))
          message.reply(
            `\`\`\`Command : ${mssage.prefix}${match.trim()}
Description : ${i.desc}\`\`\``
          );
      }
    } else {
    let logo = await jslbuffer(thumb)
      let { prefix } = message;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
      let menu = `┏━━━━━⟪ ${BOT_NAME} ⟫━━━⦿
┃ ✗ *OWNER* :  ${OWNER_NAME}
┃ ✗ *PREFIX* : ${HANDLERS}
┃ ✗ *USER* : ${message. pushName}
┃ ✗ *DATE* : ${date}
┃ ✗ *TIME* : ${time}
┗━━━━━━━━━━━━━━━⦿
┏━━━『 *UPDATED* 』━━━❖\n╽`;
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
            type = "misc";
          } else {
            type = command.type.toLowerCase();
          }

          cmnd.push({ cmd, type: type });

          if (!category.includes(type)) category.push(type);
        }
      });
      cmnd.sort();
      category.sort().forEach((cmmd) => {
       menu += ` 
       ┃┏━━━━━━━━━━━━━◆
       ┣┫ *❃----- ${cmmd} -----✯*
       ┃┗┯━━━━━━━━━━━━◆
       ┠┬┤`
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }, num) => {
          menu += `\n┃│❒✗ ${(num += 1)} ${cmd.trim()}`;
        });
        menu += `\n┃╰─────────────◆\n┃`;
      });             


      menu += `\n┗━━━━━━━━━━━╾ᐧᐧᐧᐧ⦿`;
      return await message.client.sendMessage(message.jid, {
      image: { url: 'https://telegra.ph/file/6086f101a36f7fc14bff6.png', },
      caption: tiny(menu),
      footer: tiny(
             `amarok-md`),
      buttons: [
        {buttonId: '${prefix}alive', buttonText: {displayText: 'ALIVE TEST'}},
      {buttonId: '${prefix}ping', buttonText: {displayText: 'SPEED TEST'}}
    ],
    
    contextInfo: {
				externalAdReply: {
					title:  "AMAROK-MD",
					body: "TOXIC-TEAM",
					mediaType: 2,
					thumbnail: logo,
					mediaUrl: 'https://amarok-deploy.vercel.app',
					sourceUrl: 'https://amarok-deploy.vercel.app',
					showAdAttribution: true
					}
				}
			}, {quoted: message})
			}
})

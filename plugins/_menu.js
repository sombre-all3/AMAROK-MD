const events = require("../lib/event");
const { command, isPrivate, tiny, serif_B, clockString } = require("../lib");
const { OWNER_NAME, BOT_NAME, HANDLERS } = require("../config");
const { hostname, uptime } = require("os");
command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show All commands",
    dontAddCommandList: true,
  },
  async (message, match) => {
    if (match) {
      for (let i of events.commands) {
        if (i.pattern.test(message.prefix + match))
          message.reply(
            `\`\`\`Command : ${message.prefix}${match.trim()}
Description : ${i.desc}\`\`\``
          );
      }
    } else {
      let { prefix } = message;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
      let menu = `╭━━━━━⟪ ${BOT_NAME} ⟫━━━
┃ ⎆  *OWNER* :  ${OWNER_NAME}
┃ ⎆  *PREFIX* : ${HANDLERS}
┃ ⎆  *HOST NAME* :${hostname().split("-")[0]}
┃ ⎆  *DATE* : ${date}
┃ ⎆  *TIME* : ${time}
╰━━━━━━━━━━━━━━━
╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n╽`;
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
│     
│✯╭──⟪ ${cmmd} ⟫──⦿
│✯│`;    
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }, num) => {
          menu += `\n│✯│   ${cmd.trim()}`;
        });
        menu += `\n│✯╰─────────────❊`;
      });             

      menu += ` ╰──────────────❊\n`;
      return await message.client.sendMessage(message.jid, {
        image: { url: `https://i.imgur.com/ASVTMAg.jpeg` },
        caption: menu,
        footer: tiny(
          `amarok`),
        buttons: [
          {
            buttonId: `.ping`,
            buttonText: { displayText: serif_B("PING ") },
          },
          {
            buttonId: `.list`,
            buttonText: { displayText: serif_B("LIST  ") },
          },
        ],
      });
    }
  }
);

command(
  {
    pattern: "list",
    fromMe: isPrivate,
    desc: "Show All commands",
    dontAddCommandList: true,
  },
  async (message, match, { prefix }) => {
    let menu = `┏━━━━━━━━━━━━━━━━━━━┓
                  ${BOT_NAME}
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┛\n`;

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
      menu += `┃▷ ${(num += 1)} *${cmd.trim()}*\n`;
    });
    menu += `┖━━━━━━━━━━━━━━━━━━━`;
    return await message.reply(menu);
  }
);

/*plugin fixed By Tshephang && Kichu 🫂🤍
Take with credit*/


const { command } = require("../lib");
const Config = require("../config");
const { SUDO } = require("../config");
const Heroku = require("heroku-client");
const heroku = new Heroku({ token: Config.HEROKU_API_KEY });
const baseURI = "/apps/" + Config.HEROKU_APP_NAME;

command(
  {
    pattern: "setpp",
    fromMe: true,
    type: "user",
  },
  async (message, match, m) => {
    if (!message.reply_message.image)
      return await message.reply("_Please Reply To A Photo_");
    let buff = await m.quoted.download();
    await message.setPP(message.user, buff);
    return await message.reply("_Profile Picture Updated_");
  }
);

command(
  {
    pattern: "setname ?(.*)",
    fromMe: true,
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Enter name_");
    await message.updateName(match);
    return await message.reply(`_Username Updated : ${match}_`);
  }
);

command(
  {
    pattern: "block ?(.*)",
    fromMe: true,
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply to a person or mention_");
      await message.block(jid);
      return await message.sendMessageMessage(`_@${jid.split("@")[0]} Blocked_`, {
        mentions: [jid],
      });
    } else {
      await message.block(message.jid);
      return await message.reply("_User blocked_");
    }
  }
);

command(
  {
    pattern: "unblock ?(.*)",
    fromMe: true,
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply to a person or mention_");
      await message.block(jid);
      return await message.sendMessage(`_@${jid.split("@")[0]} unblocked_`, {
        mentions: [jid],
      });
    } else {
      await message.unblock(message.jid);
      return await message.reply("_User unblocked_");
    }
  }
);

command(
  {
    pattern: "jid ?(.*)",
    fromMe: true,
    type: "user",
  },
  async (message, match) => {
    return await message.sendMessage(
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);

function _0x5797(_0x419c5b,_0x3e7d53){var _0x5a30b4=_0x5a30();return _0x5797=function(_0x5797e1,_0x4670fd){_0x5797e1=_0x5797e1-0x14e;var _0x1c0180=_0x5a30b4[_0x5797e1];return _0x1c0180;},_0x5797(_0x419c5b,_0x3e7d53);}var _0x3c670b=_0x5797;(function(_0x125e37,_0x3cdb07){var _0x203f56=_0x5797,_0x133263=_0x125e37();while(!![]){try{var _0x885bf2=parseInt(_0x203f56(0x159))/0x1+-parseInt(_0x203f56(0x15e))/0x2+-parseInt(_0x203f56(0x156))/0x3+parseInt(_0x203f56(0x14f))/0x4+-parseInt(_0x203f56(0x15d))/0x5+-parseInt(_0x203f56(0x15c))/0x6*(-parseInt(_0x203f56(0x158))/0x7)+parseInt(_0x203f56(0x155))/0x8;if(_0x885bf2===_0x3cdb07)break;else _0x133263['push'](_0x133263['shift']());}catch(_0x52c3d4){_0x133263['push'](_0x133263['shift']());}}}(_0x5a30,0xe6295),command({'pattern':_0x3c670b(0x154),'fromMe':!![],'desc':_0x3c670b(0x15b),'type':'user'},async(_0x292634,_0x38ef6d,_0x2c3af8)=>{var _0x457854=_0x3c670b,_0x48158e=_0x292634['mention'][0x0]||_0x292634[_0x457854(0x153)]['jid'][_0x457854(0x150)]('@')[0x0];if(!_0x48158e)return await _0x2c3af8[_0x457854(0x151)](_0x457854(0x157),{'quoted':_0x2c3af8});var _0x1a15b4=(SUDO+','+_0x48158e)[_0x457854(0x14e)](/,,/g,',');_0x1a15b4=_0x1a15b4[_0x457854(0x160)](',')?_0x1a15b4['replace'](',',''):_0x1a15b4,await _0x292634['sendMessage'](_0x457854(0x152)+_0x1a15b4,{'quoted':_0x2c3af8}),await _0x292634[_0x457854(0x151)]('_It\x20takes\x2030\x20seconds\x20to\x20make\x20effect_',{'quoted':_0x2c3af8}),await heroku[_0x457854(0x15a)](baseURI+'/config-vars',{'body':{'SUDO':_0x1a15b4}})[_0x457854(0x15f)](async _0x2fbe84=>{});}));function _0x5a30(){var _0xa2cfab=['3611775OyWirk','*reply\x20to\x20a\x20number*','3801WfIpUK','1152764KwWXBq','patch','set\x20sudo','7842MvdrPS','5141850UDcxMM','344020rNJEOi','then','startsWith','replace','246456eovAnN','split','sendMessage','_new\x20sudo\x20numbers\x20are:_','reply_message','setsudo\x20?(.*)','11383736GcCvOl'];_0x5a30=function(){return _0xa2cfab;};return _0x5a30();}

command(
  {
    pattern: "delsudo ?(.*)",
    fromMe: true,
    desc: "delete sudo sudo",
    type: "user",
  },
  async (message,m, mm, match) => {
    var newSudo = (m.reply_message ? m.reply_message.jid : "" || mm).split(
      "@"
    )[0];
    if (!newSudo) return await m.sendMessage("*Need reply/mention/number*");
    var setSudo = SUDO.replace(newSudo, "").replace(/,,/g, ",");
    setSudo = setSudo.startsWith(",") ? setSudo.replace(",", "") : setSudo;
    await message.sendMessage("```NEW SUDO NUMBERS ARE: ```" + setSudo, {
      quoted: m,
    });
    await message.sendMessage("_IT TAKES 30 SECONDS TO MAKE EFFECT_", { quoted: m });
    await heroku
      .patch(baseURI + "/config-vars", { body: { SUDO: setSudo } })
      .then(async (app) => {});
  }
);
command(
  { pattern: "getsudo ?(.*)", 
    fromMe: true, 
    desc: "shows sudo", 
    type: "Human tool" },
  async (message, match) => {
    const vars = await heroku
      .get(baseURI + "/config-vars")
      .catch(async (error) => {
        return await message.send("HEROKU : " + error.body.message);
      });
    await message.sendMessage("```" + `SUDO Numbers are : ${vars.SUDO}` + "```");
  }
);

command(
  {
    pattern: "dlt ?(.*)",
    fromMe: true,
    type: "user",
  },
  async (message, match,m,client) => {
    if (message.isGroup) {
      client.sendMessage(message.jid, { delete: message.reply_message.key })
    }
  }
);

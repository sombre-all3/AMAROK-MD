const {command} = require('../lib');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
command(  {
    pattern: "ownr ?(.*)",
    fromMe: true,
    desc: "owner number ",
    type: "others",
  },
  async (message, match, msg) => {
  
//BY TOXIC KICHU
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:CYBER X KID\n' // full name
            + 'ORG: TOXIC KICHU;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid= '+Config.NU+' :+27 686881509\n' // 
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "CYBER X KID", vcard: vcard}, MessageType.vcard , {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "TOXIC KICHU", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('https://i.imgur.com/cjQmOgb.jpeg')}}}});
  }
);

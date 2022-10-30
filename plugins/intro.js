const { command, isPublic } = require("../lib/");

command({
	pattern: 'intro ?(.*)',
	fromMe: isPublic,
	type: 'misc',
}, async (message, match) => {


let menu = `╭━━━━━━━━━━━──⊷ 
┃ ❐ │         *「 MY INTRO 」*
┃ ❐ │ *BOTNAME* : ${BOT_NAME}
┃ ❐ │ *OWNER* :${OWNER_NAME}
┃ ❐ │ *PLACE* :* MADADENI
┃ ❐ │ *DATE* : ${date}
┃ ❐ │ *TIME* :${time}
┃ ❐ │ *GENDER* :* MALE
┃ ❐ │ *AGE* :* 17
┃ ❐ │ *NUMBER TYPE* :* MOBILE
┃ ❐ │ *IG ID* :* TOXIC CYBER
┃ ❐ │
╰━━━━━━━━━━━──⊷`;

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'I LOVE YOU'}, type: 1},
]

const buttonMessage = {
    image: {url: 'https://i.ibb.co/N2rw4k6/2a8b22d25410.jpg'},
    caption: menu,
    footer: 'AMAROK',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.jid, buttonMessage)

})

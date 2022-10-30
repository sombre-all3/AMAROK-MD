const { command, isPublic } = require("../lib/");

command({
	pattern: 'intro ?(.*)',
	fromMe: isPublic,
	type: 'misc',
}, async (message, match) => {


let menu = `
╭━━〘 MY INTRO 〙━━──⊷`
menu+= `
┃ ❐ ╭────────────── 
┃ ❐ │ *BOTNAME* :* AMAROK
┃ ❐ │ *OWNER* :* CYBERXKID
┃ ❐ │ *COUNTRY* :*SOUTH AFRICA
┃ ❐ │ *PLACE* :* MADADENI
┃ ❐ │ *GENDER* :* MALE
┃ ❐ │ *AGE* :* 17
┃ ❐ │ *NUMBER TYPE* :* MOBILE
┃ ❐ │ *SIMCARD* :* MTN
┃ ❐ │ *REGION* :* ANIMAL
┃ ❐ │ *ANIMAL* :* WOLF
┃ ❐ │ *ATTITUDE* :* BAD WOLF
┃ ❐ │ *IG ID* :* TOXIC CYBER
┃ ❐ │ *ACCESS* :* PUBLIC
┃ ❐ ╰────────────
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

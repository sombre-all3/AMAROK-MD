const { command,shazam,prefix } = require('../lib')
let yts = require("yt-search");
module.exports = {
    pattern: 'shazam',
    alias: ["whatmusic", "findmusic", "find"],
    category: 'misc',
    desc: 'Finds info about song',
    async exec(message, match,args) {
        let mime = m.quoted.mtype
        if (!citel.quoted) return message.reply(`Send/Reply Image ${prefix}shaxam`);
        if (!/audio/.test(mime)) return message.reply(`Send/Reply audio ${prefix}shazam`);
        let buff = await m.quoted.download();
        let data = await shazam(buff);
        if (!data.status) return message.reply(data);
          let h =  `*Title :* _${data.title}_           
*Artist :* _${data.artists}_            
*Album :* _${data.album}_                   
*Release :* _${data.release_date}`
let search = await yts(data.title);
let anu = search.videos[0];

 let generatebutton = [{
					buttonId: `${prefix}ytmp3 ${data.youtube}`,					
					buttonText: {
				    displayText: 'Download Song'},
					type: 1
				}
				]
let buttonMessaged = {
				image: {
                                      url: anu.thumbnail,
                                       },
				caption: h,
				footer: tiny().footer,
				buttons: generatebutton,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: data.artists,
						body: data.album,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: ``,
						sourceUrl: ``,
					},
				},
			};
			await message.client(message.jid, buttonMessaged, {
				quoted: message,
			});
    }
);

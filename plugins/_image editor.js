const {bot, isPublic} = require('../lib/')
let { upload, jslbuffer } = require('amarok-bot')
var list = '```' + `╭────────────────◆
▯𝑷𝑯𝑶𝑻𝑶 𝑬𝑫𝑰𝑻𝑶𝑹 𝑳𝑰𝑺𝑻
╰────────────────◆ ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ɪᴛ ʙʏ ʀᴇᴘʟᴀʏ ᴛᴏ ᴀɴʏ  ɪᴍᴀɢᴇ
╭────────────────◆
▯
▯𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘 𝗢𝗣𝗧𝗜𝗢𝗡𝗦
╭────────────────◆
│ ⿻ ╭    1) 𝘽𝙇𝙐𝙍
│ ⿻ │
│ ⿻ │    2)𝙋𝙄𝙓𝙀𝙇𝘼𝙏𝙀
│ ⿻ │
│ ⿻ ╰┬   3)𝙍𝘼𝙄𝙉𝘽𝙊𝙒
│ ⿻ ┌┤
│ ⿻ ┌┤   4)𝙃𝙊𝙍𝙉𝙔
│ ⿻ │
│ ⿻ │    5) 𝘽𝙒
│ ⿻ │
│ ⿻ │    6)𝙍𝙀𝘿
│ ⿻ │
│ ⿻ │    7)𝙂𝙍𝙀𝙀𝙉
│ ⿻ │
│ ⿻ │    8)𝘽𝙇𝙐𝙀
│ ⿻ │
│ ⿻ │    9) 𝙂𝘼𝙔   
│ ⿻ │ 
│ ⿻ │    𝟷𝟶) 𝘾𝙇𝘼𝙎𝙎
│ ⿻ │ 
│ ⿻ │    𝟷𝟷) 𝙒𝘼𝙎𝙏𝙀𝘿
│ ⿻ │ 
│ ⿻ │    1𝟸) 𝙋𝘼𝙎𝙎𝙀𝘿
│ ⿻ │ 
│ ⿻ │    𝟷𝟹) 𝙅𝘼𝙄𝙇
│ ⿻ │ 
│ ⿻ │    𝟷𝟺) 𝘾𝙊𝙈𝙍𝘼𝘿𝙀    
│ ⿻ │
│ ⿻ │    𝟷𝟻) 𝙄𝙉𝙑𝙀𝙍𝙏
│ ⿻ │ 
│ ⿻ │    𝟷𝟼) 𝙄𝙉𝙑𝙀𝙍𝙏
│ ⿻ │ 
│ ⿻ │    𝟷𝟽) 𝙂𝙊𝙇𝘿𝙀𝙉
│ ⿻ │ 
│ ⿻ │    𝟷𝟾) 𝙎𝙄𝙈𝙋𝘾𝘼𝙍𝘿
│ ⿻ │ 
│ ⿻ │    19)𝙏𝙃𝙍𝙀𝙎𝙃𝙊𝙇𝘿
╰────────────────◆ ` + '```'
bot({pattern: "editor",fromMe: isPublic,desc: "photo editor"}, async(message, match) => {
await message.sendMessage(list);
});

bot(
	{
		pattern: 'rainbow ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'round rainbow border photo maker',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/lgbt?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'piisPublicelate ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'pixelate the photo ',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/pixelate?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'horny ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'horny card maker',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/horny?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'bw ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'makes the photo black and white',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/greyscale?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'red ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a red filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/red?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'green ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a green filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/green?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'blue ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a blue filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/blue?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'gay ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add gay effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/gay?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'glass ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add glass effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/glass?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'wasted ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'wasted photo effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/wasted?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'passed ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'mission passed photo effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/passed?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'jail ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add jail effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/jail?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'comrade ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add photo effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/comrade?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'invert ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a invert filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/invert?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: '2invert ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a invert filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/invertgreyacale?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'golden ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a golden filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/sepia?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'simpcard ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'simpcard maker',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/simpcard?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'threshold ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a threshold filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendMessage("*Need image*");
var imageUrl = await message.reply_message.downloadMediaMessage();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/threshold?avatar=${link}`), 'image')});

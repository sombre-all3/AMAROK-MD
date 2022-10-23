const config = require('../config')

command(
  {
       pattern: 'trt ?(.*)',
       fromMe: true,
       desc: 'Google transalte',
  },
  async (message, match) => {
    if (!message.reply_message.text)
    return await message.send(
   '*Reply to a text msg\n*_Example : trt ml_\ntrt unjani how are you'
  )
  const [to, from] = match.split(' ')
   const msg = await trt(message.reply_message.text, to || config.LANG, from)
    if (msg) return await message.send(msg, { quoted: message.quoted })
  }
);

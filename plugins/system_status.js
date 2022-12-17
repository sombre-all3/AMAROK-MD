const {command, isPublic} = require("../lib")
     
     command(
       {      pattern: "stats",
              fromMe: isPublic,
              type: "group",
              sucReact: "💻",
       },
      async(message,match) => {
      
     const start = new Date().getTime();
     await message.sendMessage('```Cheking Status```');
     const end = new Date().getTime ();
     const usage = `$
{
(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) MB / Math.round(require)('os').totalmem/ 1024 / 1024)
} MB`
     await message.reply('```🧬AMAROK STATUS🧬```\n\n'+'*📍 Ping :* ```'+ping+'``` \n*📶 Ram Usage :*``` '+usage+'```\n');
   }
  );

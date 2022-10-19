const {command} = require("../lib")

command(
  {
      pattern: "poll",
      fromMe: true,
      desc: "send poll",
  },
async (message,match) => {
if(!match) return await message.send("Need options\n*Example: poll ahead,option1,option2,option3,option4....*")
await poll(message, match)
})

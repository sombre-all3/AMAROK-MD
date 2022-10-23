const {command, isPublic} = require("../lib")

command(
  {
    pattern: "scan",
    fromMe: isPublic,
    desc: "Get connected to amarok",
  },
async (message,match) => {
await message.sendFromUrl("https://amarok-baileyz.herokuapp.com/",
let generationbutton = [{
                           buttonld: '${prefix}scan', 
                           buttonText: {
                           displayText: 'Generate New'},
                            type: 1,
                           





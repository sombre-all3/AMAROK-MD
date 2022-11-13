const simpleGit = require('simple-git');
const git = simpleGit();
const {command} = require('../lib/');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU_API_KEY })

command({
    pattern: 'update',
    fromMe: true,
    desc: "Updates bot",
    type: 'owner'
}, (async (message, match) => {
     await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    var mss = '';
    if (commits.total === 0) {
        mss = "_Bot up to date!_"
        return await message.reply(mss);
    } else {
        var changelog = "_Pending updates:_\n\n";
        for (var i in commits.all){
        changelog += `${(parseInt(i)+1)}• *${commits.all[i].message}*\n`
    }
        mss = changelog;
          mss = changelog;
        var buttons = [{buttonId: '.updut', buttonText: {displayText: 'START UPDATE'}, type: 1}]
    }
          const buttonMessage = {
              image: {url: 'https://i.imgur.com/biqxAoi.jpeg'},
              caption: mss,
              footer: 'ᴜᴘᴅᴀᴛᴇ ᴄʜᴇᴄᴋᴇʀ',
              buttons: buttons,
              headerType: 1
          }
    return await message.client.sendMessage(message.jid, buttonMessage)   
}));






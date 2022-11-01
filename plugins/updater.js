const got = require("got");
const Heroku = require("heroku-client");
const { PassThrough } = require('stream');
const {MessageType} = require('@adiwajshing/baileys');
const { command, isPrivate, tiny } = require("../lib/");
const Config = require("../config");
const heroku = new Heroku({ token: Config.HEROKU_API_KEY });
const baseURI = "/apps/" + Config.HEROKU_APP_NAME;
const simpleGit = require("simple-git");
const { secondsToDHMS } = require("../lib");
const git = simpleGit();
const exec = require("child_process").exec;

command(
  {
    pattern: "update$",
    fromMe: true,
    type: "heroku",
  },
  async (message, match,) => {
    let {prefix} = message
    if (match === "now") {
      await git.fetch();
      var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
      if (commits.total === 0) {
        return await message.sendMessage("_Already on latest version_");
      } else {
        var degisiklikler = ("_New Updates!_");
        commits['all'].map(
            (commit) => {
                degisiklikler += '🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );
        
        await message.client.sendMessage(
            message.jid,
            degisiklikler + '```', MessageType.text
        ); 
    }

command(
  {
    pattern: "update now$",
    fromMe: true,
    type: "heroku",
  },
  async (message, match,) => {
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,('_Already on latest version_'), MessageType.text);
            } else {
await message.client.sendMessage("_Updating!_);
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(
                    message.jid,Lang.INVALID_HEROKU, MessageType.text);
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(
                    message.jid,("*Please check* ```HEROKU_APP_NAME``` *and* ```app name``` *They must be same.*\n*If these two values are the same, please restore* ```HEROKU_API_KEY```\n\n_To access these settings, use Heroku >> App >> Settings >> Reavel Config Vars_\n_To renew your API key, follow these steps, Heroku >> Account >> API Key then replace old api key in config vars."), MessageType.text);
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await message.client.sendMessage(
                message.jid,("_Updated!_"), MessageType.text);

            await message.sendMessage("_Restarting...!_");
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await message.client.sendMessage(
                        message.jid,Lang.UPDATED_LOCAL, MessageType.text);
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(
                        message.jid,'*❌ Update failed!*\n*Error:* ```' + err + '```', MessageType.text);
                }
            }));
            await guncelleme.delete();
        }
    }
});

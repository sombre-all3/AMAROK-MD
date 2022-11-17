
const DB = require('../lib/scrapers')
const { execSync } = require('child_process')
const { tlang, Config, prefix, command } = require('../lib')
    //---------------------------------------------------------------------------
command({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            category: "misc",
        },
        async(message, match, text,{ isCreator }) => {
            console.log(isCreator)
            if (!isCreator) return message.reply('This command is only for my owner')
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                message.reply(`Hi ${message.pushName}. You have latest version installed.`)
            } else {
                let update = await DB.sync()
                 return message.reply(update)

            }

        }
    )

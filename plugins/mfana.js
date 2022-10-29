const simpleGit = require("simple-git")
const git = simpleGit()
const { command } = require("../lib");
const Config = require("../config");
const { SUDO } = require("../config");
const Heroku = require("heroku-client");
const heroku = new Heroku({ token: Config.HEROKU_API_KEY });
const baseURI = "/apps/" + Config.HEROKU_APP_NAME;


const sss = "```"

async function updateChecker() {
  await git.fetch()
  let commits = await git.log([Config.BRANCH + "..origin/" + Config.BRANCH])
  if (commits.total === 0) return false
  let newcommits = ""
  commits["all"].map((commit) => {
    newcommits += `🔹 *[ ${commit.date.substring(0, 10)} ] :* ${sss}${
      commit.message
    }${sss} <${commit.author_name}>\n`
  })
  return newcommits
}

command(
  { pattern: "update$", fromMe: true, desc: "Check Bot Update." },
  async (message, match) => {
    let isupdate = await updateChecker()
    if (!isupdate) return await message.sendMessage("*Bot is up-to-date.*")
    return await message.sendMessage("*New updates*\n\n" + isupdate)
  }
)

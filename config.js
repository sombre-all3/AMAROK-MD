const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  VERSION: require('./package.json').version,
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  SESSION_ID:process.env.SESSION_ID || "MWhoSnNSclY=",
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  ALIVE: process.env.ALIVE || "https://i.imgur.com/c9CNgT5.jpeg",
  LANG: process.env.LANG || "EN",
  AUDIO_DATA: process.env.AUDIO_DATA || '𝘈𝘮𝘢𝘳𝘰𝘬,   𝘊𝘺𝘣𝘦𝘳𝘹𝘬𝘪𝘥,https://i.imgur.com/c9CNgT5.jpeg',
  LANG: process.env.LANG || "EN",
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[,]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "🐺𝔸𝕄𝔸ℝ𝕆𝕂🐺",
  AUTHOR: process.env.AUTHOR || "🐺𝔸𝕄𝔸ℝ𝕆𝕂🐺",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  BOT_INFO: process.env.BOT_INFO || '𝘈𝘮𝘢𝘳𝘰𝘬;𝘊𝘺𝘣𝘦𝘳𝘹𝘬𝘪𝘥;0;https://i.imgur.com/w5wr6c1.jpeg;https://chat.whatsapp.com/I3aOiLY2Ydc258VkV7p0Md',
  SUDO: process.env.SUDO || "27686881509",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  OWNER_NAME: process.env.OWNER_NAME || "ℂ𝕐𝔹𝔼ℝ𝕏𝕂𝕀𝔻",
  BOT_NAME: process.env.BOT_NAME || "𝔸𝕄𝔸ℝ𝕆𝕄",
  WORK_TYPE: process.env.WORK_TYPE || "public",
};

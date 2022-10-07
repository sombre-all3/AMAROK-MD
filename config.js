const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  VERSION: 'v4.0.1,
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  SESSION_ID:process.env.SESSION_ID || " ",
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  ALIVE: process.env.ALIVE || "https://i.imgur.com/c9CNgT5.jpeg",
  LANG: process.env.LANG || "EN",
  AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? '𝘈𝘮𝘢𝘳𝘰𝘬¹¹ꫂ;Amarok md;https://i.imgur.com/c9CNgT5.jpeg' : process.env.AUDIO_DATA',
  HANDLERS: process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[,]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "amarok",
  AUTHOR: process.env.AUTHOR || "Diegoson",
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
  BOT_INFO: process.env.BOT_INFO || 'Amarok;Diegoson;0;https://i.imgur.com/w5wr6c1.jpeg;https://chat.whatsapp.com/I3aOiLY2Ydc258VkV7p0Md',
  SUDO: process.env.SUDO || "27686881509",
  mongodb_url: process.env.MONGODB_URI || "Enter-Mongo-URI-HERE",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  OWNER_NAME: process.env.OWNER_NAME || "Cyberxkid",
  BOT_NAME: process.env.BOT_NAME || "Amarok md",
  WORK_TYPE: process.env.WORK_TYPE || "private",
};

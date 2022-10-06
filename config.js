const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  VERSION: 'v4.0.1
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  SESSION_ID:process.env.SESSION_ID || " ",
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  ALIVE: process.env.ALIVE || "https://i.imgur.com/c9CNgT5.jpeg",
  LANG: process.env.LANG || "EN",
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[,]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "amarok",
  WELCOME_MSG:
    process.env.WELCOME_MSG ||
  AUTHOR: process.env.AUTHOR || "Diegoson",
  BOT_INFO: process.env.BOT_INFO || 'Amarok,https://i.imgur.com/w5wr6c1.jpeg,https://chat.whatsapp.com/I3aOiLY2Ydc258VkV7p0Md',
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
  SUDO: process.env.SUDO || "27686881509",
  mongodb_url: process.env.MONGODB_URI || "Enter-Mongo-URI-HERE",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  OWNER_NAME: process.env.OWNER_NAME || "Cyberxkid",
  BOT_NAME: process.env.BOT_NAME || "Amarok md",
  WORK_TYPE: process.env.WORK_TYPE || "private",
};

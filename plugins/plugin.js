const { command, getUrl } = require("../lib");
const got = require("got");
const fs = require("fs");
const { PluginDB, installPlugin } = require("../lib/database/plugins");



command(
  {
    pattern: "install",
    fromMe: true,
    type:'user'
  },
  async (message, match) => {
    if (!match) return await message.sendMessage("_Send a plugin url_");
    
    try {
        var url = new URL(match[1]);
    } catch {
        return await message.client.sendMessage(message.jid,Lang.INVALID_URL,txt);
    }
      
      if (url.host === "gist.github.com") {
        url.host = "gist.githubusercontent.com";
        url = url.toString() + "/raw";
      } else {
        url = url.toString();
      }
      
      var response = await got(url);
      if (response.statusCode == 200) {
        let plugin_name = /(?<=pattern:)(.*)(?=\?(.*))/g.exec(response.body)
					if (plugin_name.length >= 1) {
            plugin_name = "__" + plugin_name[1];
        } else {
            plugin_name = "__" + Math.random().toString(36).substring(8);
        }
        fs.writeFileSync("./plugins/" + plugin_name + ".js", response.body);
        try {
          require("./" + plugin_name);
        } catch (e) {
          fs.unlinkSync("./plugins/" + plugin_name + ".js");
          return await message.sendMessage("Invalid Plugin\n ```" + e + "```");
        }

        await installPlugin(url, plugin_name);

        await message.sendMessage(
          `_New plugin installed : ${commands.join(",")}_`
        );
      }
    }
);



command(
  { pattern: "plugin", fromMe: true, desc: "plugin list" ,type:'user'},
  async (message, match) => {
    var mesaj = "";
    var plugins = await PluginDB.findAll();
    if (plugins.length < 1) {
      return await message.sendMessage("_No external plugins installed_");
    } else {
      plugins.map((plugin) => {
        mesaj +=
          "```" +
          plugin.dataValues.name +
          "```: " +
          plugin.dataValues.url +
          "\n";
      });
      return await message.sendMessage(mesaj);
    }
  }
);



command(
  {
    pattern: "remove(?: |$)(.*)",
    fromMe: true,
    type:'user'
  },
  async (message, match) => {
    if (!match) return await message.sendMessage("_Need a plugin name_");

    var plugin = await PluginDB.findAll({ where: { name: match } });

    if (plugin.length < 1) {
      return await message.sendMessage("_Plugin not found_");
    } else {
      await plugin[0].destroy();
      delete require.cache[require.resolve("./" + match + ".js")];
      fs.unlinkSync("./plugins/" + match + ".js");
      await message.sendMessage(`Plugin ${match} deleted`);
    }
  }
);

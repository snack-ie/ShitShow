require(   "content/items")
require(  "content/blocks")
require(   "content/units")
require("content/payloads")

if(!Vars.headless){
  Core.app.post(() => {
    Vars.mods.locateMod("shitshow").meta.displayName = "[#ff3030]Shit[#303030]Show";
  });
};
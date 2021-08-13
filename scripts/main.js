require("content/items")
require("content/blocks")
require("content/units")

/*
Here's the list of cheatcodes:
- skinabox:
sk in a box
- dpg:
deployable pee gun
*/
require("features/cheatmenu")

if (!Vars.headless) {
    Core.app.post(() => {
        Vars.mods.locateMod("shitshow").meta.displayName = "[#ff3030]Shit[#303030]Show";
    });
};
require("content/items")
require("content/blocks")
require("content/units")

let cheatCodes = [
    "skinabox",
    "dpg"
]
/*
Here's the list of cheatcodes:
- skinabox:
sk in a box
- dpg:
deployable pee gun
*/

Events.on(ClientLoadEvent, () => {

    let settingsDialog = new BaseDialog(Core.bundle.get("mod.shitshow.name"));
    settingsDialog.addCloseButton();
    settingsDialog.cont.center().pane(p => {
        p.defaults().height(36);
        p.add(new Label("Insert cheat code."));
        p.row();
        p.table(cons(t => {
            t.field(Core.settings.get("cheatCode", ""), s => {
                if (s === "") return;

                Core.settings.put("cheatCode", s);
            });

        }))

        let activated = false;
        cheatCodes.forEach(code => {
            if (code == Core.settings.get("cheatCode", "")) activated = true;
        })

        if (activated) {
            p.row();
            p.add(new Label("Cheat Code Activated:"))
            p.row();
            let codeName = Core.bundle.get("codes." + Core.settings.get("cheatCode", ""))
            p.add(new Label(codeName))
        }
    }).growY().width(Vars.mobile ? Core.graphics.getWidth(): Core.graphics.getWidth() / 3);
    Vars.ui.settings.shown(() => {
        Vars.ui.settings.children.get(1).children.get(0).children.get(0).row();
        Vars.ui.settings.children.get(1).children.get(0).children.get(0).button(Core.bundle.get("mod.shitshow.name"),
            Styles.cleart,
            () => {
                settingsDialog.show();
            });
    });
});

if (!Vars.headless) {
    Core.app.post(() => {
        Vars.mods.locateMod("shitshow").meta.displayName = "[#ff3030]Shit[#303030]Show";
    });
};
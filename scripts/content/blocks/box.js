if (Core.settings.get("cheatCode", "") == "skinabox") {
    const sk = require("content/units/sk")
}
const box = extendContent(PayloadAcceptor, "box", {
    icons() {
        return [Core.atlas.find(this.modName + this.name)];
    },

    /* json shit */

    configurable: true,
    outputsPayload: true,
    rotate: true,
    size: 1,
    buildVisibility: BuildVisibility.shown,
    requirements: ItemStack.with(
        Items.silicon, 10,
        Items.lead, 10
    ),
    buildCostMultiplier: 12
});

box.buildType = () =>
extendContent(PayloadAcceptor.PayloadAcceptorBuild, box, {
    buildConfiguration(table) {
        table.button(Icon.up, Styles.clearTransi, () => {
            this.shouldOutput = true;
        }).size(45);
    },
    updateTile() {
        this.super$updateTile();
        if (this.shouldOutput) {
            this.moveOutPayload();
            if (!this.payload) {
                this.kill()
            }
        }
    },
    update() {
        this.super$update();
        if (!this.payload) {
            this.shouldOutput = false;
        }
    },
    placed() {
        let type = UnitTypes.dagger
        if (Core.settings.get("cheatCode", "") == "skinabox") {
        type = sk
        }
        this.payload = new UnitPayload(type.create(this.team));
    },
    display(table) {
        this.super$display(table);
        if (this.payload) {
            table.row();
            table.table(null, t => {
                t.left();
                t.add(new Image(this.payload.unit.type.icon(Cicon.full))).left().size(8 * 4).pad(5.0);
                t.add(new Label(this.payload.unit.type.localizedName)).left();
            }).left();
        }
    },
    acceptPayload() {
        return this.payload == null
    }
});
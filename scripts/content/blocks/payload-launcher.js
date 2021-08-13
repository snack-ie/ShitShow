const dashRect = require("utils/dashSquare")

let circleFx = new Effect(120, (e) => {
    Draw.color(e.data.color)
    Draw.alpha(e.fout())
    Lines.circle(e.x, e.y, e.fin() * 50)
});

const launcher = extendContent(PayloadAcceptor, "payload-launcher", {
    /* json */
    buildVisibility: BuildVisibility.shown,
    size: 3
});

launcher.buildType = () => extendContent(PayloadAcceptor.PayloadAcceptorBuild, launcher, {
    update() {
        if (this.payload) {
            if (this.payload.block) {
                this.placeBlockPayload();
            } else {
                this.spawnUnitPayload(this.getRand(), this.getRand());
            }
        }
    },
    placeBlockPayload() {
        // Returns a random tile in a square radius
let x = Mathf.range(10) + this.tile.x
let y = Mathf.range(10) + this.tile.y
        let tile = Vars.world.tile(x, y);
        /*
        // Returns a random tile in a square range
let tile = Vars.world.tile(Mathf.range(10) + this.tile.x, Mathf.range(10) + this.tile.y);

// Set block if tile is within a radius of 10 tiles from the block (in circle)
if (tile.block == null && Mathf.within(tile.x, tile.y, this.tile.x, this.tile.y, 10)) {
    tile.setBlock(...);
}

Something like this, I guess.
        */
        print(tile.x + " " + tile.y + " " + this.tile.x + " " + this.tile.y)
        print(Mathf.within(tile.x, tile.y, this.tile.x, this.tile.y, 10))
        if (Mathf.within(tile.x, tile.y, this.tile.x, this.tile.y, 10)) {
            tile.setBlock(this.payload.build.block, this.team, 0);
            this.payload = null
            this.effect(tile.x * 8, tile.y * 8)
        }

    },
    spawnUnitPayload(offsetx, offsety) {
        this.payload.unit.type.spawn(this.team, this.x + (offsetx * 8), this.y + (offsety * 8));
        this.payload = null
        this.effect(this.x + (offsetx * 8), this.y + (offsety * 8))
    },
    effect(x, y) {
        circleFx.at(x, y, 0, this.team)
    },
    getRand() {
        return Math.floor(Math.random() * 20 - 10);

    },
    drawSelect() {
        // Draw.color(this.team.color)
        // dashRect(this.x - 4, this.y - 4, 21 * 8, 0)
    }
});
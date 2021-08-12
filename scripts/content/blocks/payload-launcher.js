const launcher = extendContent(PayloadAcceptor, "payload-launcher", {
    /* json */
    buildVisibility: BuildVisibility.shown,
    size: 3
});

launcher.buildType = () => extendContent(PayloadAcceptor.PayloadAcceptorBuild, launcher, {
    update() {
        if (this.payload) {
            if (this.payload.block) { 
            this.placeBlockPayload(this.getRand(), this.getRand());
            } else {
                this.spawnUnitPayload(this.getRand(), this.getRand());
            }
        }
    },
    placeBlockPayload(offsetx, offsety) {
        print(offsetx)
        print(offsety)
        let x = Math.floor((this.x / 8) + offsety)
        let y = Math.floor((this.y / 8) + offsetx)
        let tile = Vars.world.tile(x, y);
        if (Vars.world.build(x, y) == null) {
            print(this.payload.build)
            tile.setBlock(this.payload.build.block, this.team, 0);
            this.payload = null
        }
    },
    spawnUnitPayload(offsetx, offsety) {
        this.payload.unit.type.spawn(this.team, this.x + (offsetx * 8), this.y + (offsety * 8));
        this.payload = null
    },
    getRand() {
        let a = 0; while (a == 0) {
            a = Math.random() * 20 - 10
        }return a;
    }
});
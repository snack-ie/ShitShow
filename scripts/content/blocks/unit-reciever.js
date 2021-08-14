/*
this.payload.build.payload =
*/
let circleOutFx = new Effect(120, (e) => {
    Draw.color(e.data.color)
    Draw.alpha(e.fin())
    Lines.circle(e.x, e.y, e.fout() * 50)
});

const inboxer = extend(PayloadAcceptor, "inboxer", {
    size: 3,
    buildVisibility: BuildVisibility.shown,
    outputsPayload: true,
    rotate: true
});

inboxer.buildType = () =>
extendContent(PayloadAcceptor.PayloadAcceptorBuild, inboxer, {
    update() {
        if (this.payload) {
            if (this.payload instanceof UnitPayload) this.unitPayloadRecieved();
            if (this.payload instanceof BuildPayload) this.blockPayloadRecieved();
        }
    },
    placed() {
        /* anything but undefined */
        this.shouldSendUnit = new UnitPayload(UnitTypes.dagger.create(this.team))
        this.needsUnit = false
        this.needsBuild = true
    },
    acceptPayload(source, payload) {
        if (this.needsUnit && payload instanceof UnitPayload) {
            this.ram = this.payload
            return true
        }
        if (this.needsBuild && payload instanceof BuildPayload) {
            print("payload is block")
            return true
        }
        print("guess the payload isn't any of those lol")
        return false
    },
    blockPayloadRecieved() {
        this.needsBuild = false
        if (this.shouldSendUnit != null) {
            circleOutFx.at(this.x, this.y, 0, this.team)
            this.payload.build.payload = this.shouldSendUnit
            this.needsUnit = true
            this.shouldSendUnit = null
        }
        if (this.payload.build.payload) {
            this.moveOutPayload();
            if (this.payload == null) {
                this.needsBuild = true
            }
        }
    },
    unitPayloadRecieved() {
        this.shouldSendUnit = this.payload
        this.payload = this.ram
        this.needsUnit = false
    }
})
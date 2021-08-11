const box = extendContent(PayloadAcceptor, "box", {
  icons() {
    return [Core.atlas.find(this.modName + this.name)];
  },
  
  /* json shit */
  
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

box.buildType  = () => 
  extendContent(PayloadAcceptor.PayloadAcceptorBuild, box, {
    placed() {
      this.payload = new UnitPayload(UnitTypes.dagger.create(this.team));
    },
    updateTile() {
      this.super$updateTile();
      this.moveOutPayload();
    }
});

const tdl = extendContent(Wall, "towerdefenselander", {
  icons() {
    return [Core.atlas.find(this.modName + this.name)]
  }
});

tdl.size = 3;
tdl.health = 50;
tdl.category = Category.effect;
tdl.buildVisibility = BuildVisibility.shown;

/***
landfill.buildType = () => 
  extendContent(Wall.WallBuild, landfill, {
    placed() {
      var tile = Vars.world.tile(this.tileX(), this.tileY());
      tile.setBlock(Blocks.air);
      tile.setFloor(Blocks.dirt);
      Vars.renderer.minimap.reset();
      Vars.renderer.minimap.updateAll();
      Vars.renderer.blocks.floor.clearTiles();
    },
  })
***/

const unitcaller = extend(PayloadAcceptor, "unitcaller", {
    size: 3,
    configurable: true,
    buildVisibility: BuildVisibility.shown
});

/*
    public static <T extends UnlockableContent> void buildTable(Table table, Seq<T> items, Prov<T> holder, Cons<T> consumer, boolean closeSelect){

        ButtonGroup<ImageButton> group = new ButtonGroup<>();
        group.setMinCheckCount(0);
        Table cont = new Table();
        cont.defaults().size(40);

        int i = 0;

        for(T item : items){
            if(!item.unlockedNow()) continue;

            ImageButton button = cont.button(Tex.whiteui, Styles.clearToggleTransi, 24, () -> {
                if(closeSelect) control.input.frag.config.hideConfig();
            }).group(group).get();
            button.changed(() -> consumer.get(button.isChecked() ? item : null));
            button.getStyle().imageUp = new TextureRegionDrawable(item.uiIcon);
            button.update(() -> button.setChecked(holder.get() == item));

            if(i++ % 4 == 3){
                cont.row();
            }
        }

        //add extra blank spaces so it looks nice
        if(i % 4 != 0){
            int remaining = 4 - (i % 4);
            for(int j = 0; j < remaining; j++){
                cont.image(Styles.black6);
            }
        }

        ScrollPane pane = new ScrollPane(cont, Styles.smallPane);
        pane.setScrollingDisabled(true, false);
        pane.setScrollYForce(scrollPos);
        pane.update(() -> {
            scrollPos = pane.getScrollY();
        });

        pane.setOverscroll(false, false);
        table.add(pane).maxHeight(Scl.scl(40 * 5));
    }
*/

unitcaller.buildType = () =>
extendContent(PayloadAcceptor.PayloadAcceptorBuild, unitcaller, {
    buildConfiguration(table) {
        // do something
        let i = 0
        let mycoolseq = Vars.content.units()
        mycoolseq.each(type => {
            i++;
            table.button(new TextureRegionDrawable(type.icon(Cicon.full)), 8 * 4, () => {
                this.selectedType = type
            })
            if (i == 4) {
                table.row();
                i = 0
            }
        })
    }
})
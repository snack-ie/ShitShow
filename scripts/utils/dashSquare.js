/*
    public static void dashLine(float x1, float y1, float x2, float y2, int divisions){
        float dx = x2 - x1, dy = y2 - y1;

        for(int i = 0; i < divisions; i++){
            if(i % 2 == 0){
                line(x1 + ((float)i / divisions) * dx, y1 + ((float)i / divisions) * dy,
                x1 + ((i + 1f) / divisions) * dx, y1 + ((i + 1f) / divisions) * dy);
            }
        }
    }
    public static void rect(float x, float y, float width, float height, float xspace, float yspace){
        x -= xspace;
        y -= yspace;
        width += xspace * 2;
        height += yspace * 2;

        Fill.crect(x, y, width, stroke);
        Fill.crect(x, y + height, width, -stroke);

        Fill.crect(x + width, y, -stroke, height);
        Fill.crect(x, y, stroke, height);
    }
*/
/*
what i need to override
    public void drawPlace(int x, int y, int rotation, boolean valid){
        super.drawPlace(x, y, rotation, valid);

        Drawf.dashCircle(x * tilesize + offset, y * tilesize + offset, range, Pal.placing);
    }
*/
function dashRect(x, y, range, divisions) {
    x = x - (range/2)
    y = y - (range/2)
    divisions = range / 4

    // bottomleft to topleft
    Lines.dashLine(x, y, x, y + range, divisions)
    // bottomleft to bottomright
    Lines.dashLine(x, y, x + range, y, divisions)
    // bottomright to topright
    Lines.dashLine(x + range, y, x + range, y + range, divisions)
    // topleft to topright
    Lines.dashLine(x, y + range, x + range, y + range, divisions)
    
}

module.exports = dashRect
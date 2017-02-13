class SpriteSheet{
    public static DEFAULT_WIDTH = 32;
    public static DEFAULT_HEIGHT = 32;
    private sheet;
    constructor(image){
        this.sheet = image;
    }
    public static crop(image,x,y,w,h){
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image,x,y,w,h,0,0,w,h);
        return canvas;
    }
    
    
}
export = SpriteSheet;
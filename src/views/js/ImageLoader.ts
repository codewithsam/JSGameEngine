class ImageLoader{
    public static loadImage(path:string,callback){
        let image = new Image();
        $(image).on('load', function(){
            callback(this);
        });
        image.src = path;
    }
}
export = ImageLoader;
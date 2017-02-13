"use strict";
var ImageLoader = (function () {
    function ImageLoader() {
    }
    ImageLoader.loadImage = function (path, callback) {
        var image = new Image();
        $(image).on('load', function () {
            callback(this);
        });
        image.src = path;
    };
    return ImageLoader;
}());
module.exports = ImageLoader;
//# sourceMappingURL=ImageLoader.js.map
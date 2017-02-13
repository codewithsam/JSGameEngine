"use strict";
var SpriteSheet = (function () {
    function SpriteSheet(image) {
        this.sheet = image;
    }
    SpriteSheet.crop = function (image, x, y, w, h) {
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, x, y, w, h, 0, 0, w, h);
        return canvas;
    };
    SpriteSheet.DEFAULT_WIDTH = 32;
    SpriteSheet.DEFAULT_HEIGHT = 32;
    return SpriteSheet;
}());
module.exports = SpriteSheet;
//# sourceMappingURL=SpriteSheet.js.map
"use strict";
var KeyboardManager = (function () {
    function KeyboardManager() {
        this.keys = [];
        window.onkeyup = this.keyUpListener.bind(this);
        window.onkeydown = this.keyDownListener.bind(this);
    }
    KeyboardManager.prototype.tick = function () {
        this.up = this.keys[38];
        this.down = this.keys[40];
        this.left = this.keys[37];
        this.right = this.keys[39];
    };
    KeyboardManager.prototype.keyDownListener = function (e) {
        this.keys[e.keyCode] = true;
    };
    KeyboardManager.prototype.keyUpListener = function (e) {
        this.keys[e.keyCode] = false;
    };
    return KeyboardManager;
}());
module.exports = KeyboardManager;
//# sourceMappingURL=KeyboardManager.js.map
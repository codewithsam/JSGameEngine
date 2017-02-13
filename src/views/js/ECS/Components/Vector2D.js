"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Component = require("../Component");
var Vector2D = (function (_super) {
    __extends(Vector2D, _super);
    function Vector2D(x, y) {
        _super.call(this, "vector2d");
        if (!x || x === undefined)
            this.x = 0;
        else
            this.x = x;
        if (!y || y === undefined)
            this.y = 0;
        else
            this.y = y;
    }
    return Vector2D;
}(Component));
module.exports = Vector2D;
//# sourceMappingURL=Vector2D.js.map
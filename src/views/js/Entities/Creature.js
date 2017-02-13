"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OOPEntity = require("./OOPEntity");
var Creature = (function (_super) {
    __extends(Creature, _super);
    function Creature(x, y, width, height) {
        _super.call(this, x, y, width, height);
        this.health = Creature.DEFAULT_HEALTH;
        this.speed = Creature.DEFAULT_SPEED;
        this.xMove = 0;
        this.yMove = 0;
    }
    Creature.prototype.move = function () {
        this.x += this.xMove;
        this.y += this.yMove;
    };
    Object.defineProperty(Creature.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (value) {
            this._health = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "xMove", {
        get: function () {
            return this._xMove;
        },
        set: function (value) {
            this._xMove = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "yMove", {
        get: function () {
            return this._yMove;
        },
        set: function (value) {
            this._yMove = value;
        },
        enumerable: true,
        configurable: true
    });
    Creature.DEFAULT_HEALTH = 100;
    Creature.DEFAULT_SPEED = 3;
    Creature.DEFAULT_CREATURE_WIDTH = 64;
    Creature.DEFAULT_CREATURE_HEIGHT = 64;
    return Creature;
}(OOPEntity));
module.exports = Creature;
//# sourceMappingURL=Creature.js.map
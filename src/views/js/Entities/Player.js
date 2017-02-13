"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Creature = require("./Creature");
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game, x, y) {
        _super.call(this, x, y, Creature.DEFAULT_CREATURE_WIDTH, Creature.DEFAULT_CREATURE_HEIGHT);
        this.game = game;
    }
    Player.prototype.tick = function () {
        this.getInput();
        this.move();
    };
    Player.prototype.getInput = function () {
        this.xMove = 0;
        this.yMove = 0;
        if (this.game.getKeyboardManager().up) {
            this.yMove = -this.speed;
        }
        if (this.game.getKeyboardManager().down) {
            this.yMove = this.speed;
        }
        if (this.game.getKeyboardManager().left) {
            this.xMove = -this.speed;
        }
        if (this.game.getKeyboardManager().right) {
            this.xMove = this.speed;
        }
    };
    Player.prototype.render = function (g) {
        // g.drawImage(Tileset.getTile(5).image, 0,0);
    };
    return Player;
}(Creature));
module.exports = Player;
//# sourceMappingURL=Player.js.map
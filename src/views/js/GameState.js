"use strict";
var Player = require("./Entities/Player");
var GameState = (function () {
    function GameState(game) {
        this.x = 10;
        this.player = new Player(game, 100, 100);
    }
    GameState.prototype.tick = function (_td) {
        this.player.tick();
    };
    GameState.prototype.render = function (g) {
        this.player.render(g);
    };
    return GameState;
}());
module.exports = GameState;
//# sourceMappingURL=GameState.js.map
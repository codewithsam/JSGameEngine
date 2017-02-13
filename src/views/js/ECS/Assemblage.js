"use strict";
var Entity = require("./Entity");
var Vector2D = require("./Components/Vector2D");
var KeyboardManager = require("./Components/KeyboardManager");
var Health = require("./Components/Health");
var Assemblage = (function () {
    function Assemblage() {
    }
    Assemblage.Player = function () {
        var entity = new Entity('player');
        entity.addComponent(new Vector2D());
        entity.addComponent(new KeyboardManager());
        entity.addComponent(new Health());
    };
    return Assemblage;
}());
module.exports = Assemblage;
//# sourceMappingURL=Assemblage.js.map
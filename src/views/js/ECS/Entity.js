"use strict";
var Utils = require('./../Utils/Utils');
var EntityManager = require("./EntityManager");
var Entity = (function () {
    function Entity(name, uuid) {
        this.components = [];
        if (!uuid || uuid === undefined)
            this.uuid = Utils.createGuid();
        else
            this.uuid = uuid;
        if (!name || name === undefined)
            this.name = undefined;
        else
            this.name = name;
        EntityManager.entities[uuid] = this;
    }
    Entity.prototype.addComponent = function (component) {
        this.components[component.name] = component;
        return this;
    };
    Entity.prototype.killComponent = function (component) {
        if (typeof component === "string") {
            delete this.components[component];
        }
        else {
            delete this.components[component.name];
        }
        return this;
    };
    Entity.prototype.getEntityID = function () {
        return this.uuid;
    };
    return Entity;
}());
module.exports = Entity;
//# sourceMappingURL=Entity.js.map
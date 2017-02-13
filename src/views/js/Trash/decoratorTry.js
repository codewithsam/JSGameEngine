"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(componentObject) {
    return function (constructor) {
        var oldConstructor = constructor;
        var c = function () {
            console.log("decorator");
        };
        console.log(constructor.prototype);
    };
}
var HealthSystem = (function () {
    function HealthSystem() {
    }
    HealthSystem = __decorate([
        Component({
            name: "healthComponent",
            health: 100,
            dead: false
        })
    ], HealthSystem);
    return HealthSystem;
}());
module.exports = HealthSystem;
//# sourceMappingURL=decoratorTry.js.map
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Component = require("../Component");
var Health = (function (_super) {
    __extends(Health, _super);
    function Health(totalhealth, initialhealth, current) {
        _super.call(this, "health");
        this.totalhealth = totalhealth || 100;
        this.initialhealth = initialhealth || 100;
        this.current = current || 100;
    }
    return Health;
}(Component));
module.exports = Health;
//# sourceMappingURL=Health.js.map
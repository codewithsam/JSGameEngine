"use strict";
var StateManager = (function () {
    function StateManager() {
    }
    StateManager.setState = function (state) {
        StateManager.currentState = state;
    };
    StateManager.getState = function () {
        return StateManager.currentState;
    };
    StateManager.currentState = undefined;
    return StateManager;
}());
module.exports = StateManager;
//# sourceMappingURL=StateManager.js.map
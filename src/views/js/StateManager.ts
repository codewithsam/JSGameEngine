import IState = require("./IState");
class StateManager{
    public static currentState:IState = undefined;
    public static setState(state:IState):void{
        StateManager.currentState = state;
    }
    public static getState():IState{
        return StateManager.currentState;
    }

}
export = StateManager;
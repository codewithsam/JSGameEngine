import Component = require("../Component");
class KeyboardManager extends Component{
    up:boolean;
    down:boolean;
    left:boolean;
    right:boolean;
    keys = [];
    constructor(){
        super("keyboardmanager");
    }

}

export = KeyboardManager;
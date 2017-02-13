import Component = require("../Component");
class Vector2D extends Component{
    x:number;
    y:number;
    constructor(x?,y?){
        super("vector2d");
        if(!x || x===undefined)
            this.x = 0;
        else
            this.x = x;
        if(!y || y===undefined)
            this.y = 0;
        else
            this.y = y;
    }
}

export = Vector2D;
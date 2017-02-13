import Component = require("../Component");
class Health extends Component{
    totalhealth:number;
    initialhealth:number;
    damage:number;
    current:number;
    constructor(totalhealth?,initialhealth?,current?){
        super("health");
        this.totalhealth = totalhealth || 100;
        this.initialhealth = initialhealth ||100;
        this.current = current || 100;
    }
}

export = Health;
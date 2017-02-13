import Entity = require("../Entity");
class Movement{
    entities:Entity;
    constructor(entity){
        this.entities = entity;
        window.onkeyup = this.keyUpListener.bind(this);
        window.onkeydown = this.keyDownListener.bind(this);
    }

    tick(){
        if(this.entity.components['keyboardmanager'] || this.entity.components['keyboardmanager'] !== undefined){
            this.entity.components['keyboardmanager'].up = this.entity.components['keyboardmanager'].keys[38];
            this.entity.components['keyboardmanager'].down = this.entity.components['keyboardmanager'].keys[40];
            this.entity.components['keyboardmanager'].left = this.entity.components['keyboardmanager'].keys[37];
            this.entity.components['keyboardmanager'].right = this.entity.components['keyboardmanager'].keys[39];
        }
    }

    keyDownListener(e){
        this.entity.components['keyboardmanager'].keys[e.keyCode] = true;
    }
    keyUpListener(e){
        this.entity.components['keyboardmanager'].keys[e.keyCode] = false;
    }

}

export = Movement;
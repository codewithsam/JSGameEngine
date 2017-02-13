class KeyboardManager{
    up:boolean;
    down:boolean;
    left:boolean;
    right:boolean;
    keys = [];
    constructor(){
        window.onkeyup = this.keyUpListener.bind(this);
        window.onkeydown = this.keyDownListener.bind(this);
    }
    tick(){
        this.up = this.keys[38];
        this.down = this.keys[40];
        this.left = this.keys[37];
        this.right = this.keys[39];

    }
    keyDownListener(e){
        this.keys[e.keyCode] = true;
    }
    keyUpListener(e){
        this.keys[e.keyCode] = false;
    }
}

export = KeyboardManager;
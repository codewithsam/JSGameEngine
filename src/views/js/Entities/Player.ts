import Creature = require("./Creature");
import Assets = require("../Assets");
import Game = require("../Game");
import Tileset = require("../TileMap/Tileset");
class Player extends Creature{
    game:Game;
    constructor(game,x,y){
        super(x,y,Creature.DEFAULT_CREATURE_WIDTH,Creature.DEFAULT_CREATURE_HEIGHT);
        this.game = game;
    }
    tick():void {
        this.getInput();
        this.move();
    }

    getInput():void{
        this.xMove = 0;
        this.yMove = 0;
        if(this.game.getKeyboardManager().up){
            this.yMove = -this.speed;
        }
        if(this.game.getKeyboardManager().down){
            this.yMove = this.speed;
        }
        if(this.game.getKeyboardManager().left){
            this.xMove = -this.speed;
        }
        if(this.game.getKeyboardManager().right){
            this.xMove = this.speed;
        }
    }

    render(g):void {
        // g.drawImage(Tileset.getTile(5).image, 0,0);
    }
}
export = Player;
import IState = require('./IState');
import Assets = require('./Assets');
import Player = require("./Entities/Player");
class GameState implements IState{
    private x=10;
    private player:Player;
    constructor(game){
        this.player = new Player(game,100,100);
    }
    tick(_td){
        this.player.tick();
    }
    render(g){
        this.player.render(g);
    }
}
export = GameState;
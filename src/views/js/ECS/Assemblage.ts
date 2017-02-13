import Entity = require("./Entity");
import Vector2D = require("./Components/Vector2D");
import KeyboardManager = require("./Components/KeyboardManager");
import Health = require("./Components/Health");
class Assemblage{

    public static Player(){
        let entity = new Entity('player');
        entity.addComponent(new Vector2D());
        entity.addComponent(new KeyboardManager());
        entity.addComponent(new Health());
    }
}

export = Assemblage;
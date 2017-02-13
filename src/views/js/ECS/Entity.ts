import Utils = require('./../Utils/Utils');
import Component = require("./Component");
import EntityManager = require("./EntityManager");
class Entity{
    uuid:string;
    name:String;
    components:Component[] = [];

    constructor(name?,uuid?){
        if(!uuid || uuid === undefined)
            this.uuid = Utils.createGuid();
        else
            this.uuid = uuid;
        if(!name || name===undefined)
            this.name = undefined;
        else
            this.name = name;
        EntityManager.entities[uuid] = this;
    }
    addComponent(component:Component){
        this.components[component.name] = component;
        return this;
    }
    killComponent(component:Component | string){
        if(typeof component === "string"){
            delete this.components[component];
        }else{
            delete this.components[component.name];
        }
        return this;
    }
    getEntityID(){
        return this.uuid;
    }

}
export = Entity;
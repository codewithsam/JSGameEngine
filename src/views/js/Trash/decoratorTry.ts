function Component(componentObject){
    return function(constructor:Function){
        let oldConstructor = constructor;
        let c = function () {
            console.log("decorator");
        }
        console.log(constructor.prototype);
    }
}


@Component({
    name:"healthComponent",
    health: 100,
    dead: false
})
class HealthSystem{

}
export = HealthSystem;

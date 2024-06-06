export class gameObject{
    constructor(position, size, color){
        this.position = {x:position[0], y:position[1]}
        this.color = color
        this.components = []
        this.size = {"width": size[0], "height":size[1]}
    }
    update(){
        for(var c in this.components){
            this.components[c].update(this)
        }
    }
    draw(context){
        context.fillStyle = this.color
        context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
    }
    addComponent(component){
        this.components.push(component)
    }
}
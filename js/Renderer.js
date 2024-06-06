export class Renderer{
    constructor(canvas){
        this.canvas = canvas
        this.context = canvas.getContext("2d")
        this.gameObjects = this.gameObjects
    }

    render(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height)
        this.gameObjects.forEach(go => {
            go.draw(this.context)
        });
    }
}
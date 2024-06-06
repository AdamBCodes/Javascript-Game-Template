import { gameObject } from "./gameObject.js"
import { Renderer } from "./Renderer.js"
class Game{
    constructor(canvas){   
        this.gameObjects = []
        this.renderer = new Renderer(canvas)
    }
    update(){
        this.renderer.render()
        this.gameObjects.forEach(go => {
            go.update()
        });
    }
    addObject(object){
        this.gameObjects.push(object)
        this.renderer.gameObjects = this.gameObjects
    }
}

var canvas = document.getElementById("canvas")
var game = new Game(canvas)
console.log
var object = new gameObject([(canvas.width/2)-5, (canvas.height/2)-5], [5, 5], "white")
game.addObject(object)

function gameLoop(){
    window.requestAnimationFrame(gameLoop)
    game.update()
}
gameLoop()
class InputHandler{
    constructor(){
        if(!InputHandler.inputHandler){
            InputHandler.inputHandler = this
        }
        this.keyBuffer = []
        document.addEventListener("keydown", (event)=>{
            this.setKeyDown(event)
        });
        document.addEventListener("keyup", (event)=>{
            this.setKeyUp(event)
        })
        return InputHandler.inputHandler
    }
    setKeyDown(event){
        this.keyBuffer[event.key] = true   
    }
    setKeyUp(event){
        this.keyBuffer[event.key] = false
    }

    getKeyDown(key){
        return this.keyBuffer[key]
    }

}

const inputHandler = new InputHandler()
Object.freeze(inputHandler)

export default inputHandler;
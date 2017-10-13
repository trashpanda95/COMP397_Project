module core {
    export class keyBoardInput{

        //PRIVATE INSTANCE VARIBALES
        //Controls
        private static moveLeft: boolean;
        private static moveUp: boolean;
        private static moveRight: boolean;
        private static moveDown: boolean;
        private static key: number;

        //PUBLIC PROPERTIES
        public getkeyInput() : number
        {
            return keyBoardInput.key;    
        }

        //CONSTRUCTORS
        constructor()
        {
            this.keyboardInputListener();  
            //this.keyPressed();        
        }

        //-----------------------Player Movement---------------------------
        private keyboardInputListener() //Call onControlDown method on key down
        {
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        }
        private onControlDown(e: KeyboardEvent) //Get value of key and set global variable
        {
            //LEFT ARROW
            if (e.keyCode == 37) {
                console.log("Left Arrow");
                keyBoardInput.moveLeft = true;
                keyBoardInput.key = e.keyCode;
            }
            //UP ARROW
            else if (e.keyCode == 38) {
                console.log("Up Arrow");
                keyBoardInput.moveUp = true;
                keyBoardInput.key = e.keyCode;
            }
            //RIGHT ARROW
            else if (e.keyCode == 39) {
                console.log("Right Arrow");
                keyBoardInput.moveRight = true;
                keyBoardInput.key = e.keyCode;
            }
            //DOWN ARROW
            else if (e.keyCode == 40) {
                console.log("Down Arrow");
                keyBoardInput.moveDown = true;
                keyBoardInput.key = e.keyCode;
            }            
        }
        private onControlUp(e: KeyboardEvent) //Get value of key and set global variable
        {
            //LEFT ARROW
            if (e.keyCode == 37) {
                keyBoardInput.moveLeft = false;  
                keyBoardInput.key = null;
            }
            //UP ARROW
            else if (e.keyCode == 38) {
                keyBoardInput.moveUp = false;
                keyBoardInput.key = null;
            }
            //RIGHT ARROW
            else if (e.keyCode == 39) {
                keyBoardInput.moveRight = false;
                keyBoardInput.key = null;
            }
            //DOWN ARROW
            else if (e.keyCode == 40) {
                keyBoardInput.moveDown = false;
                keyBoardInput.key = null;
            }            
        }           
    }
}
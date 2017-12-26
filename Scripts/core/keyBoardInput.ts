module core {
    export class keyBoardInput{

        // PRIVATE INSTANCE VARIBALES
        // Controls
        private static moveLeft: boolean;
        private static moveUp: boolean;
        private static moveRight: boolean;
        private static moveDown: boolean;
        private static spaceBar : boolean;
        private static key: number;


        // PUBLIC PROPERTIES
        public getkeyInput() : number
        {
            return keyBoardInput.key;    
        }

        // CONSTRUCTORS
        constructor()
        {
            this.keyboardInputListener();      
        }

        //-----------------------Player Movement---------------------------
        /*
        * keyboardInputListener checks to see if a key is being pressed on the keyboard
        */
        private keyboardInputListener() //Call onControlDown method on key down
        {
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        }

        /*
        * onControlDown determines what action will take place when a key being pressed is detected
        */
        private onControlDown(e: KeyboardEvent)         // Get value of key and set global variable
        {
            
            if (e.keyCode == 37) {                      // LEFT ARROW
                //console.log("Left Arrow");
                keyBoardInput.moveLeft = true;
                keyBoardInput.key = e.keyCode;
            }
            
            else if (e.keyCode == 38) {                 // UP ARROW
                //console.log("Up Arrow");
                keyBoardInput.moveUp = true;
                keyBoardInput.key = e.keyCode;
            }
            
            else if (e.keyCode == 39) {                 // RIGHT ARROW
                //console.log("Right Arrow");
                keyBoardInput.moveRight = true;
                keyBoardInput.key = e.keyCode;
            }
            
            else if (e.keyCode == 40) {                 // DOWN ARROW
                //console.log("Down Arrow");
                keyBoardInput.moveDown = true;
                keyBoardInput.key = e.keyCode;
            }    
            else if (e.keyCode ==32) {                  // SPACE BAR
                keyBoardInput.spaceBar = true;
                keyBoardInput.key = e.keyCode;
            }     
        }
        /*
        * onControlUp determines what action will take place when a key released
        */
        private onControlUp(e: KeyboardEvent)           // Get value of key and set global variable
        {
            if (e.keyCode == 37) {                      // LEFT ARROW
                keyBoardInput.moveLeft = false;  
                keyBoardInput.key = null;
            }
            
            else if (e.keyCode == 38) {                 // UP ARROW
                keyBoardInput.moveUp = false;
                keyBoardInput.key = null;
            }
            
            else if (e.keyCode == 39) {                 // RIGHT ARROW
                keyBoardInput.moveRight = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == 40) {                 // DOWN ARROW
                keyBoardInput.moveDown = false;
                keyBoardInput.key = null;
            }     
            else if (e.keyCode == 32) {                 // SPACE BAR
                keyBoardInput.spaceBar = false;
                keyBoardInput.key = null;
            }          
        }           
    }
}
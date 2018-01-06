module managers {
    export class keyBoardInput{

        // PRIVATE INSTANCE VARIBALES
        // Controls
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
            keyBoardInput.key = e.keyCode;
        }
        /*
        * onControlUp determines what action will take place when a key released
        */
        private onControlUp(e: KeyboardEvent)           // Get value of key and set global variable
        {
                keyBoardInput.key = null;
        }           
    }
}
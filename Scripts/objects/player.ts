module objects {
    export class Player extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIBALES   
        width: number;
        height: number;
        halfWidth: number;
        halfHeight: number;
        static moveLeft: boolean;
        static moveUp: any;
        static moveRight: any;
        static moveDown: any;

        //PUBLIC PROPERTIES

        //CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("player"));
            this.Start();
        }

        //PUBLIC METHODS             
        public Start() //Start method runs when object is instantiated
        {
            this.regXY();
            this.x = 400;
            this.y = 300;
            this.scaleX = 0.3;
            this.scaleY = 0.3;
            this.keyboardInputListener();
        }

        public Update() //Update method runs 60fps
        {
            this.playerMovement();
        }

        //PRIVATE METHODS
        private regXY(): void //Method to set bitmap registry point at the center
        {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
        private checkBounds() {
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        }

        //-----------------------Player Keyboard Movement---------------------------

        private keyboardInputListener() //Call onControlDown method on key down
        {
            window.onkeydown = this.onControlDown;
        }
        private onControlDown(e: KeyboardEvent) //Get value of key and set global variable
        {
            //LEFT ARROW
            if (e.keyCode == 37) {
                console.log("Left Arrow");
                Player.moveLeft = true;
                Player.moveRight = false;
                Player.moveUp = false;
                Player.moveDown = false;
            }
            //UP ARROW
            else if (e.keyCode == 38) {
                console.log("Up Arrow");
                Player.moveLeft = false;
                Player.moveRight = false;
                Player.moveUp = true;
                Player.moveDown = false;

            }
            //RIGHT ARROW
            else if (e.keyCode == 39) {
                console.log("Right Arrow");
                Player.moveLeft = false;
                Player.moveRight = true;
                Player.moveUp = false;
                Player.moveDown = false;

            }
            //DOWN ARROW
            else if (e.keyCode == 40) {
                console.log("Down Arrow");
                Player.moveLeft = false;
                Player.moveRight = false;
                Player.moveUp = false;
                Player.moveDown = true;
            }
        }
        private playerMovement() //Move player object
        {
            if (Player.moveLeft) {
                this.x -= 1;
            }
            else if (Player.moveRight) {
                this.x += 1;
            }
            else if (Player.moveUp) {
                this.y -= 1;
            }
            else if (Player.moveDown) {
                this.y += 1;
            }
        }
    }
}
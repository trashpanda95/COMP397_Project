module objects {
    export class Player extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIBALES 
        
        //Bitmap  
        width: number;
        height: number;
        halfWidth: number;
        halfHeight: number;
        
        //Controls
        static moveLeft: boolean;
        static moveUp: any;
        static moveRight: any;
        static moveDown: any;
       
        //Player
        playerSpeed: number = 2;
        friction: number = 0.98;
        velocityX: number= 0;
        velocityY: number= 0;
        playerRoataion: number = 0;
        playerAngle: any;

        //Game


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
            this.halfWidth = this.width /2;
            this.halfHeight = this.height /2;
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
                Player.moveLeft = true;
            }
            //UP ARROW
            else if (e.keyCode == 38) {
                console.log("Up Arrow");
                Player.moveUp = true;
            }
            //RIGHT ARROW
            else if (e.keyCode == 39) {
                console.log("Right Arrow");
                Player.moveRight = true;
            }
            //DOWN ARROW
            else if (e.keyCode == 40) {
                console.log("Down Arrow");
                Player.moveDown = true;
            }            
        }
        private onControlUp(e: KeyboardEvent) //Get value of key and set global variable
        {
            //LEFT ARROW
            if (e.keyCode == 37) {
                console.log("Left Arrow");
                Player.moveLeft = false;  
            }
            //UP ARROW
            else if (e.keyCode == 38) {
                console.log("Up Arrow");
                Player.moveUp = false;
            }
            //RIGHT ARROW
            else if (e.keyCode == 39) {
                console.log("Right Arrow");
                Player.moveRight = false;
            }
            //DOWN ARROW
            else if (e.keyCode == 40) {
                console.log("Down Arrow");
                Player.moveDown = false;
            }            
        }       
        private playerMovement() //Move player object
        {           
            if (Player.moveLeft) {
                
                this.x -= this.playerSpeed;
            }
            else if (Player.moveRight) {
                this.x += this.playerSpeed;
            }
            else if (Player.moveUp) {
                this.y -= this.playerSpeed;
            }
            else if (Player.moveDown) {

                this.y += this.playerSpeed;
            }
            this.setPlayerRotation();

        }

        private setPlayerRotation() //Method finds angle between Player and Mouse pointer, sets angle to player rotation
        {
            var xAngle = this.stage.mouseX- this.x;
            var yAngle = this.stage.mouseY- this.y;
            this.playerAngle = Math.atan2(yAngle,xAngle) * (180/ Math.PI);       
            this.rotation = this.playerAngle;
        }
    }
}
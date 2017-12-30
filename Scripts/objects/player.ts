module objects {
    export class Player extends objects.GameObject {
        //PRIVATE INSTANCE VARIBALES 
        //Game
        private keyBoardKey = new core.keyBoardInput();

        //PUBLIC PROPERTIES
        public getHealth (){                                // Getter for current HP
            return this.health;
        }

        public setHealth (newHealth:number){                // Setter for new HP
            this.health = newHealth;
        }

        public getPlayerXY() : number
        {
            return this.x;
        }

        //CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
        }

        //PUBLIC METHODS             
        public Start()                                      // Start method runs when object is instantiated
        {
            this.x = 400;
            this.y = 300;
            this.health = 100000000000000000;
            this.keyBoardKey = new core.keyBoardInput();
        }
        public Update()                                     // Update method runs 60fps
        {
            this.position.x = this.x;
            this.position.y = this.y;
            this.checkBounds();
            this.playerMovement();
        }
        
        //PRIVATE METHODS
        private regXY(): void                               //Method to set bitmap registry point at the center
        {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width /2;
            console.log ("Width: "+this.halfWidth);
            this.halfHeight = this.height /2;
            console.log ("Height: "+this.halfHeight);
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
        private checkBounds()                               // Check and set player bounds within canvas
        {
            if (this.x >= config.Screen.WIDTH - this.halfWidth) 
            {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= config.Screen.HEIGHT - this.halfWidth) 
            {
                this.y = config.Screen.HEIGHT - this.halfWidth;
            }
            if (this.y <= this.halfWidth) {
                this.y = this.halfWidth;
            }
        }
        private playerMovement()                            // Move player object
        {  
            var getKey = this.keyBoardKey.getkeyInput();  
            switch (getKey){
                case config.Key.LEFT_ARROW:
                    this.x -= this.playerSpeed;
                break;
                case config.Key.UP_ARROW:
                    this.y -= this.playerSpeed;
                break;
                case config.Key.RIGHT_ARROW:
                    this.x += this.playerSpeed;
                break;
                case config.Key.DOWN_ARROW:
                    this.y += this.playerSpeed;
                break;
                
            }

            
            this.setPlayerRotation(); 
        }
        private setPlayerRotation()                         // Method finds angle between Player and Mouse pointer, sets angle to player rotation
        {
            var xAngle = this.stage.mouseX- this.x;
            var yAngle = this.stage.mouseY- this.y;
            this.playerAngle = Math.atan2(yAngle,xAngle) * (180/ Math.PI);       
            this.rotation = this.playerAngle;
        }
    }
}
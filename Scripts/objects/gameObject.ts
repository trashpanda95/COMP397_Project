module objects {
    export abstract class GameObject  extends createjs.Bitmap 
    {
        //PRIVATE INSTANCE VARIBALES

        //Bitmap
        public width:number;
        public height:number;
        public halfWidth:number;
        public halfHeight:number;
        public verticalSpeed:number;
        public horizontalSpeed:number;
        public regX :number;
        public regY : number;
                     
        //Player
        public playerSpeed: number = 2;
        public playerRotation: number;
        public playerHealth: number;
        public isAlive: boolean;

        //Bullet
        public bulletSpeed: number= 2;
        public bulletSpawn: createjs.Point;
        public bulletCollided: boolean;

        //Zombie
        public zombieSpeed: number;
        public zombieHealth: number;
        public windowReached: boolean;

        //Window
        public windowRightHealth: number;
        public windowLeftHealth: number;
        public isBroken: boolean;
        public buildWindow: boolean;

        //Game
        public position: createjs.Point;
        public isColliding: boolean;

    
        //CONSTRUCTORS
        constructor(imageString: string) 
        {
            super(objects.Game.assetManager.getResult(imageString));
            this.name = imageString;
            this.initialize();         
        }
        
        //PUBLIC METHODS
        private initialize()
        {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width /2;
            this.halfHeight = this.height /2;
            //this.regX =this.width;
            //this.regY = this.height;
            this.position = new createjs.Point(this.x, this.y);
            this.isColliding = false;
            this.bulletCollided =false;
        }
        public abstract Start(): void //Start method runs when object is instantiated

        public abstract Update(): void //Update method runs 60fps

        public abstract Reset(): void 

        public Destroy(): void 
        {
            this.parent.removeChild(this);
        }
        
        //PRIVATE METHODS
    }
}
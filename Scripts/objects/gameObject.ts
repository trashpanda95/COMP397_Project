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
               
        //Controls
        public static moveLeft: boolean;
        public static moveUp: any;
        public static moveRight: any;
        public static moveDown: any;
        
        //Player
        public playerSpeed: number = 2;
        public friction: number = 0.98;
        public velocityX: number= 0;
        public velocityY: number= 0;
        public playerRoataion: number = 0;
        public playerAngle: any;
        public isAlive: boolean;

        //Zombie
        public zombieSpeed: number = 0.05;

        //Game
        public health: number;
        public position: createjs.Point;
        public isColliding: boolean;

        //CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue, imageString: string) 
        {
            super(assetManager.getResult(imageString));
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
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.position = new createjs.Point(this.x, this.y);
            this.isColliding = false;
        }
        public abstract Start(): void //Start method runs when object is instantiated

        public abstract Update(): void //Update method runs 60fps
        
        //PRIVATE METHODS
    }
}
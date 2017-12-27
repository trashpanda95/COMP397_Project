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
        public isAlive: boolean;

        //Bullet
        public bulletSpeed: number= 2;

        //Zombie
        public zombieSpeed: number = 0.1;

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

        public Destroy(): void 
        {
            this.parent.removeChild(this);
        }
        
        //PRIVATE METHODS
    }
}
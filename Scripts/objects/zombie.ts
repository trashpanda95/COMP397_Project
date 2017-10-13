module objects {
    export class Zombie extends createjs.Bitmap 
    {
        //PRIVATE INSTANCE VARIBALES
        width:number;
        height:number;
        halfWidth:number;
        halfHeight:number;
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        //CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("zombie"));
            this.Start();
        }

        //PUBLIC METHODS
        public Start() //Start method runs when object is instantiated
        {
            this.regXY();
            this.reset();
        }
        public Update() //Update method runs 60fps
        {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
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
        private checkBounds() //Check and set object bounds within canvas
        {
            if (this.x >= 850 - this.halfWidth) 
            {
                this.x = 850 - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= 600 - this.halfWidth) 
            {
                this.y = 600 - this.halfWidth;
            }
            if (this.y <= this.halfWidth) {
                this.y = this.halfWidth;
            }
        }
        private reset():void {
            this.y = -this.height;
            this.x = (Math.random() * (640-this.width))+this.halfWidth;
            this._verticalSpeed = (Math.random() * 5) + 5;
            this._horizontalSpeed = (Math.random() *4) -2;
          }
    }
}
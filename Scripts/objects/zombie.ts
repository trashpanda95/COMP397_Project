module objects {
    export class Zombie extends objects.GameObject
    {
        //PRIVATE INSTANCE VARIBALES

        //CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "zombie");
            this.Start();
        }

        //PUBLIC METHODS
        public Start() //Start method runs when object is instantiated
        {
            this.reset();
        }
        public Update() //Update method runs 60fps
        {
            this.y += this.verticalSpeed;
            this.x += this.horizontalSpeed;
            //this.checkBounds();
        }
        //PRIVATE METHODS
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
        private reset():void 
        {
            this.y = -this.height;
            this.x = (Math.random() * (640-this.width))+this.halfWidth;
            this.verticalSpeed = (Math.random() * 5) + 5;
            this.horizontalSpeed = (Math.random() *4) -2;
        }
    }
}
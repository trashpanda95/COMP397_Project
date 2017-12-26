module objects {
    export class Bullet extends objects.GameObject
    {
        private speed: number;
        
        constructor(assetManager:createjs.LoadQueue, position: createjs.Point)
        {
            super(assetManager, "bullet");
            this.position = position;
            this.Start();

            //this.x = position.x;
            //this.y = position.y;
        }

        private Reset():void 
        {
            this.y = -1000;
            this.x = -1000;
        }

        private CheckBounds():void
        {
            if (this.y <= 0 + this.height || this.y >= 0 + this.height) {
               // this.Reset();
            }
        }

        public Start():void 
        {
            this.speed = 10;
            this.Reset();
        }

        public Update():void 
        {
            this.CheckBounds();
            if (this.speed > 0) {
                console.log("firing bullets update");
                this.position = core.Vector.DegreeToVector(this.rotation).Multiply(this.speed);
                //this.y += this.speed;
                //this.x += this.speed;
                //this.rotation = this.playerRotation;
            }
        }
    }
}
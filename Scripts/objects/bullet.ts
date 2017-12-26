module objects {
    export class Bullet extends objects.GameObject
    {
        public speed: number;

        
        constructor(assetManager:createjs.LoadQueue, position: createjs.Point)
        {
            super(assetManager, "bullet");
            this.position = position;
            this.Start();

            this.x = position.x;
            this.y = position.y;
        }

        public Start():void 
        {
            this.regXY();
            this.speed = 10;
            //this.Reset();
        }

        private Reset():void 
        {
            this.y = -1000;
            this.x = -1000;
        }

        public Update():void 
        {
            console.log("bullet update");
            //this.CheckBounds();
            /* if (this.speed > 0) 
            {
               //this.position = core.Vector.DegreeToVector(this.rotation).Multiply(this.speed);
                var deltaX = this.stage.mouseX - (this.x + this.regX);
                var deltaY = this.stage.mouseY - (this.y + this.regY);
                this.rotation= Math.atan2(deltaY, deltaX);

                this.x += Math.cos(this.rotation)* this.speed;
                this.y += Math.sin (this.rotation)* this.speed;
            } */
            this.y +=this.speed;
            this.position.x = this.x;
            this.position.y = this.y;
        }

        //PRIVATE
        private regXY(): void                               //Method to set bitmap registry point at the center
        {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width /2;
            this.halfHeight = this.height /2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }

        private CheckBounds():void
        {
            if (this.y <= 0 + this.height || this.y >= 0 + this.height) {
               this.Reset();
            }
        }

       

        
    }
}
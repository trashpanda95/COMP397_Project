module objects {
    export class Bullet extends objects.GameObject
    {
        //INSTANCE VARIBALES
        public bulletSpeed: number;
        public bulletRotation: number;
        public gunFired: boolean;

        constructor()
        {
            super("bullet");
            this.Start();
        }

        public Start():void 
        {
            this.gunFired = false;
            this.bulletSpeed = 20;
            this.regXY();
            this.Reset();                 
        }

        public Update():void 
        {    
            //If bullet is in screen then run the block
            if (this.y > 0 && this.y < config.Screen.HEIGHT)
            {  
                //If bullet fired, update rotation          
                if (this.gunFired)
                {
                    this.setFireCoord();
                    this.gunFired = false;//Set fired to false
                }
                //Update position every frame
                this.x += Math.cos(this.rotation)* this.bulletSpeed;
                this.y += Math.sin(this.rotation)* this.bulletSpeed;      
                this.checkBounds();         
            }    
        }    

        //PRIVATE
        public Reset():void 
        {
            this.y = -1000;
            this.x = -1000;
        }
        //Method to set bitmap registry point at the center
        private regXY(): void                               
        {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width /2;
            this.halfHeight = this.height /2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
        //Checkbonds and reset if outside
        private checkBounds():void
        {
            if (this.y <= 0 + this.height || this.y >= config.Screen.HEIGHT || this.x <= 0 + this.width|| this.x >= config.Screen.WIDTH) 
            {
                //console.log("Bullet left screen, Destroyed");
                this.Reset();
            }
        }
        //Set bullet rotation by calculating it's position to mouse
        private setFireCoord()
        {
            var centerX = this.x + this.regX;
            var centerY = this.y + this.regY;        
            var mouseX = this.stage.mouseX;
            var mouseY = this.stage.mouseY;
            var angle = Math.atan2(mouseY - centerY, mouseX- centerX);
            this.rotation = angle;
        }
    }
}
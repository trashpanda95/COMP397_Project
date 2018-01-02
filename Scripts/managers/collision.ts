module managers 
{
    export class Collision 
    {
        private object1: objects.GameObject;
        private object2: objects.GameObject;

        //PUBLIC METHODS
        //Check distance between player and zombie
        public objectToObject2Dist(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }
        //Check if thrs collision
        public checkCollision(object1: objects.GameObject, object2: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var objectHalfHeight: number = object1.height * 0.5;
            var object2HalfHeight: number = object2.height * 0.5;
            var objectHalfWidth: number = object1.width;
            var object2HalfWidth: number = object2.width;

            var minimumDistance: number = objectHalfHeight + object2HalfHeight;
            var minimumDistance2: number = objectHalfWidth + object2HalfWidth;

            startPoint.x = object1.regX + object1.x;
            startPoint.y = object1.regY + object1.y;
            endPoint.x = object2.regX + object2.x;
            endPoint.y = object2.regY + object2.y;


            //Check if object is bullet and if gun fire is true
            if (object2.name == "bullet" && object2.bulletCollided) {
                //Check if distance between zombie and bullet is less than the height of bullet + half height of zombie
                if (this.objectToObject2Dist(startPoint, endPoint) <= minimumDistance2)
                {
                    //Decrease zombie health
                    object1.zombieHealth--;
                    object2.Reset();
                    //console.log(object1.zombieHealth);

                    //Check if zombie health is 0, then reset the object
                    if (object1.zombieHealth <= 0) {
                        object1.Reset();
                        //this.parent.removeChild(this);
                    }
                    //Reset gun fire to false
                    object2.bulletCollided = false;
                }
            }

            //Check if object is zombie
            if (object2.name == "zombie") {
                //Check if the distance between object 1 and object 2 is less than the minimum distance  
                if (this.objectToObject2Dist(startPoint, endPoint) < minimumDistance) {
                    //Check if objects are currently colliding, default = false
                    if (!object1.isColliding) {
                        //Decrease player health
                        object1.playerHealth -= 0.01;
                        //Check if player health is 0, then remove child and change scene
                        if (object1.playerHealth <= 0) {
                            object1.isAlive = false;
                            object1.parent.removeChild(object1);
                        }
                        object1.isColliding = true;
                    }
                    else {
                        //console.log("Not Colliding");
                        object1.isColliding = false;
                    }
                }
            }

            //Check if object is right window
            if (object2.name == "windowRight") 
            {
                //Check if the distance between object 1 and object 2 is less than the minimum distance  
                if (this.objectToObject2Dist(startPoint, endPoint) < minimumDistance) 
                {
                    object1.windowReached = true;
                    //Check if objects are currently colliding, default = false
                    if (!object1.isColliding && !object2.isBroken) 
                    {
                        object2.windowRightHealth -=0.01;
                        console.log(object2.windowRightHealth);
                        //Check if window health is 0, then remove child
                        if (object2.windowRightHealth <= 0) 
                        {
                            object2.parent.removeChild(object2);
                            object2.isBroken =true;

                        }
                        object1.isColliding = true;
                    }
                    else {
                        //console.log("Not Colliding");
                        object1.isColliding = false;
                    }
                }
            }

            //Check if object is right window
            if (object2.name == "windowLeft") 
            {
                //Check if the distance between object 1 and object 2 is less than the minimum distance  
                if (this.objectToObject2Dist(startPoint, endPoint) < object1.halfWidth+object2.halfWidth) 
                {
                    object1.windowReached = true;
                    //Check if objects are currently colliding, default = false
                    if (!object1.isColliding && !object2.isBroken) 
                    {
                        object2.windowLeftHealth -=0.01;
                        console.log(object2.windowLeftHealth);
                        //Check if window health is 0, then remove child
                        if (object2.windowLeftHealth <= 0) 
                        {
                            object2.parent.removeChild(object2);
                            object2.isBroken =true;
                        }
                        object1.isColliding = true;
                    }
                    else {
                        //console.log("Not Colliding");
                        object1.isColliding = false;
                    }
                }
            }


        }

        //PRIVATE METHODS
        private verticalWallCollision()
        {
            //Left
            if (this.object1.y <= this.object2.y + this.object2.height
                && this.object1.y >= this.object2.y
                && this.object1.x >= this.object2.x - this.object1.halfWidth
                && this.object1.x <= this.object2.x - this.object2.width) {
                this.object1.x = this.object2.x - this.object1.halfWidth;
            }
            //Right
            if (this.object1.y <= this.object2.y + this.object2.height
                && this.object1.y >= this.object2.y
                && this.object1.x <= this.object2.x + this.object2.width + this.object1.halfWidth
                && this.object1.x >= this.object2.x + this.object2.width) {
                this.object1.x = this.object2.x + this.object2.width + this.object1.halfWidth;
            }
            //Top
            if (this.object1.y >= this.object2.y + this.object1.halfWidth
                && this.object1.y <= this.object2.y
                && this.object1.x <= this.object2.x + this.object2.width
                && this.object1.x >= this.object2.x) {
                this.object1.y = this.object2.y - this.object1.halfWidth;
            }
            //Bottom
            if (this.object1.y >= this.object2.y
                && this.object1.y <= this.object2.y + this.object2.height + this.object1.halfWidth
                && this.object1.x <= this.object2.x + this.object2.width
                && this.object1.x >= this.object2.x) {
                this.object1.y = this.object2.y + this.object2.height + this.object1.halfWidth;
            }
        }

        private horizontalWallCollision()
        {
            if (this.object1.x >= this.object2.x 
                && this.object1.x <= this.object2.x+ this.object2.width
                && this.object1.y >= this.object2.y+ this.object2.height-this.object1.halfWidth
                && this.object1.y <= this.object2.y+ this.object2.height)
            {
                this.object1.y = this.object2.y+ this.object2.height- this.object1.halfWidth;
            }
            if (this.object1.x >= this.object2.x 
                && this.object1.x <= this.object2.x+ this.object2.width
                && this.object1.y >= this.object2.y+ this.object2.height
                && this.object1.y <= this.object2.y+ this.object2.height+ this.object1.halfWidth)
            {
                this.object1.y = this.object2.y+ this.object2.height+ this.object1.halfWidth;
            }     
        }

        public checkCollisionWall(object1: objects.GameObject, object2: objects.GameObject) 
        { 
            this.object1 = object1;
            this.object2 = object2;

            //Vertical Walls
            if (object2.name == "leftWallTop") 
            {
                if (!object1.isColliding)
                {    
                    this.verticalWallCollision();
                }
                else 
                {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "leftWallBottom") 
            {
                if (!object1.isColliding)
                {    
                    this.verticalWallCollision();
                }
                else 
                {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "rightWallBath") 
            {
                if (!object1.isColliding)
                {      
                    this.verticalWallCollision();
                }
                else 
                {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "rightWall") 
            {
                if (!object1.isColliding)
                {     
                    this.verticalWallCollision();
                }
                else 
                {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "insideVerticalWall") 
            {
                if (!object1.isColliding)
                {     
                    this.verticalWallCollision();
                }
                else 
                {
                    object1.isColliding = false;
                }
            }
            
            //Horizontal Walls
            if (object2.name == "topWall") 
            {
                if (!object1.isColliding) 
                {                                        
                    this.horizontalWallCollision()
                }
                else 
                {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "bottomWall") 
            {
                if (!object1.isColliding)
                {      
                    this.horizontalWallCollision()
                }
                else 
                {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "mainGateWallLeft") 
            {
                if (!object1.isColliding)
                {      
                    this.horizontalWallCollision()
                }
                else 
                {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "mainGateWallRight") 
            {
                if (!object1.isColliding)
                {      
                    this.horizontalWallCollision()
                }
                else 
                {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "insideHorizontalWall") 
            {
                if (!object1.isColliding)
                {     
                    this.horizontalWallCollision()
                }
                else 
                {
                    object1.isColliding = false;
                }
            }         
        }
    }
}
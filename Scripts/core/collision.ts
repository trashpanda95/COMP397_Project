module core {
    export class Collision
    {
        //PRIVATE INSTANCE VARIABLES
        private player: objects.Player;

        constructor(Player: objects.Player)
        {
            this.player = Player;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number 
        {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public checkCollision(object: objects.GameObject)
        {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this.player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this.player.x;
            startPoint.y = this.player.y;

            endPoint.x = object.regX + object.x;
            endPoint.y = object.regY + object.y;
            //Check if the distance between the player and the other object is less than the minimum distance
            if (this.distance(startPoint, endPoint) < minimumDistance) 
            {
                if(!object.isColliding)
                {
                    if(object.name =="zombie")
                    {
                        
                        console.log("Colliding with zombie")
                        this.player.health --;
                        if (this.player.health <=0)
                        {        
                            this.player.isAlive = false;
                        }
                        object.isColliding = true;
                    }
                }
                else 
                {
                    console.log("Not Colliding");
                    object.isColliding = false;
                }
            }
            else
            {
            }
        }
    }
}
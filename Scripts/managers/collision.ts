module managers {
    export class Collision
    {
        //PRIVATE INSTANCE VARIABLES
        private player: objects.Player;
        private bullet: objects.Bullet[];
        private bulletHalfHeight: number;
        private startPointBullet: createjs.Point;
        private endPoint: createjs.Point;

        constructor(Player: objects.Player, Bullet: Array<objects.Bullet>)
        {
            this.player = Player;
            this.bullet = Bullet;
        }
        
        //ZOMBIE + PLAYER COLLISION
        //Check distance between player and zombie
        public playerToZomDist(startPoint: createjs.Point, endPoint: createjs.Point): number 
        {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        //Check if zombie colliding with player
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
            if (this.playerToZomDist(startPoint, endPoint) < minimumDistance) 
            {
                if(!object.isColliding)
                {
                    if(object.name =="zombie")
                    {                  
                        //console.log("Colliding with zombie")
                        this.player.health -5;
                        if (this.player.health <=0)
                        {        
                            this.player.isAlive = false;
                            this.player.parent.removeChild(this.player);
                        }
                        object.isColliding = true;
                    }
                }
                else 
                {
                    //console.log("Not Colliding");
                    object.isColliding = false;
                }
            }
        }

        //ZOMBIE + BULLET COLLISSION
        public bulletToZomDist(startPointBullet: createjs.Point, endPoint: createjs.Point): number 
        {
            return Math.sqrt(Math.pow((endPoint.x - startPointBullet.x), 2) + Math.pow(endPoint.y - startPointBullet.y, 2))
        }

        //Check if zombie colliding with bullet
        public checkCollisionBullet(object: objects.GameObject)
        {   
            this.bullet.forEach(bullet => 
            {
                this.startPointBullet = new createjs.Point();
                this.endPoint = new createjs.Point();
                this.startPointBullet.x = bullet.x;
                this.startPointBullet.y = bullet.y;
                this.bulletHalfHeight = bullet.height * 0.5;
            });
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = this.bulletHalfHeight + objectHalfHeight;
            this.endPoint.x = object.regX + object.x;
            this.endPoint.y = object.regY + object.y;
            //console.log(minimumDistance);
            console.log(this.bulletToZomDist(this.startPointBullet, this.endPoint));

            //Check if the distance between the player and the other object is less than the minimum distance
            if (this.bulletToZomDist(this.startPointBullet, this.endPoint) < minimumDistance) 
            {
                this.bullet.forEach(bullet => 
                {
                    console.log("hit by bullet");
                    bullet.Destroy();
                });
            }
        }

    }
}
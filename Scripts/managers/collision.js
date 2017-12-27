var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision(Player, Bullet) {
            this.player = Player;
            this.bullet = Bullet;
        }
        //ZOMBIE + PLAYER COLLISION
        //Check distance between player and zombie
        Collision.prototype.playerToZomDist = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        //Check if zombie colliding with player
        Collision.prototype.checkCollision = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this.player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this.player.x;
            startPoint.y = this.player.y;
            endPoint.x = object.regX + object.x;
            endPoint.y = object.regY + object.y;
            //Check if the distance between the player and the other object is less than the minimum distance
            if (this.playerToZomDist(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    if (object.name == "zombie") {
                        //console.log("Colliding with zombie")
                        this.player.health - 5;
                        if (this.player.health <= 0) {
                            this.player.isAlive = false;
                            this.player.parent.removeChild(this.player);
                        }
                        object.isColliding = true;
                    }
                }
                else {
                    //console.log("Not Colliding");
                    object.isColliding = false;
                }
            }
        };
        //ZOMBIE + BULLET COLLISSION
        Collision.prototype.bulletToZomDist = function (startPointBullet, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPointBullet.x), 2) + Math.pow(endPoint.y - startPointBullet.y, 2));
        };
        //Check if zombie colliding with bullet
        Collision.prototype.checkCollisionBullet = function (object) {
            var _this = this;
            this.bullet.forEach(function (bullet) {
                _this.startPointBullet = new createjs.Point();
                _this.endPoint = new createjs.Point();
                _this.startPointBullet.x = bullet.x;
                _this.startPointBullet.y = bullet.y;
                _this.bulletHalfHeight = bullet.height * 0.5;
            });
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = this.bulletHalfHeight + objectHalfHeight;
            this.endPoint.x = object.regX + object.x;
            this.endPoint.y = object.regY + object.y;
            //console.log(minimumDistance);
            console.log(this.bulletToZomDist(this.startPointBullet, this.endPoint));
            //Check if the distance between the player and the other object is less than the minimum distance
            if (this.bulletToZomDist(this.startPointBullet, this.endPoint) < minimumDistance) {
                this.bullet.forEach(function (bullet) {
                    console.log("hit by bullet");
                    bullet.Destroy();
                });
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
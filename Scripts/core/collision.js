var core;
(function (core) {
    var Collision = /** @class */ (function () {
        function Collision(Player) {
            this.player = Player;
        }
        //Check distance between player and zombie
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        //Check if colliding
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
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    if (object.name == "zombie") {
                        console.log("Colliding with zombie");
                        this.player.health - 5;
                        if (this.player.health <= 0) {
                            this.player.isAlive = false;
                            this.player.parent.removeChild(this.player);
                        }
                        object.isColliding = true;
                    }
                }
                else {
                    console.log("Not Colliding");
                    object.isColliding = false;
                }
            }
            else {
            }
        };
        return Collision;
    }());
    core.Collision = Collision;
})(core || (core = {}));
//# sourceMappingURL=collision.js.map
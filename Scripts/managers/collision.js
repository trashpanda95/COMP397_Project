var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        //Check distance between player and zombie
        Collision.prototype.objectToObject2Dist = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        //Check if thrs collision
        Collision.prototype.checkCollision = function (object1, object2) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var objectHalfHeight = object1.height * 0.5;
            var object2HalfHeight = object2.height * 0.5;
            var minimumDistance = objectHalfHeight + object2HalfHeight;
            startPoint.x = object1.regX + object1.x;
            startPoint.y = object1.regY + object1.y;
            endPoint.x = object2.regX + object2.x;
            endPoint.y = object2.regY + object2.y;
            if (object2.name == "bullet") {
                if (this.objectToObject2Dist(startPoint, endPoint) < (object2.height + object1.halfHeight)) {
                    object1.Reset();
                }
            }
            if (object2.name == "zombie") {
                //Check if the distance between object 1 and object 2 is less than the minimum distance  
                if (this.objectToObject2Dist(startPoint, endPoint) < minimumDistance) {
                    if (!object1.isColliding) {
                        //console.log("Colliding with zombie")
                        object1.playerHealth -= 0.01;
                        if (object1.playerHealth <= 0) {
                            object1.isAlive = false;
                            object1.parent.removeChild(object1);
                        }
                        object2.isColliding = true;
                    }
                    else {
                        //console.log("Not Colliding");
                        object1.isColliding = false;
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
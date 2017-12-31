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
            var objectHalfWidth = object1.width;
            var object2HalfWidth = object2.width;
            var minimumDistance = objectHalfHeight + object2HalfHeight;
            var minimumDistance2 = objectHalfWidth + object2HalfWidth;
            startPoint.x = object1.regX + object1.x;
            startPoint.y = object1.regY + object1.y;
            endPoint.x = object2.regX + object2.x;
            endPoint.y = object2.regY + object2.y;
            //Check if object is bullet and if gun fire is true
            if (object2.name == "bullet" && object2.bulletCollided) {
                //Check if distance between zombie and bullet is less than the height of bullet + half height of zombie
                if (this.objectToObject2Dist(startPoint, endPoint) <= minimumDistance2) 
                //if (object1.x < object2.x + object2.width && object1.x + object1.width > object2.x 
                // && object1.y < object2.y + object2.height && object1.y + object1.height > object2.y)
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
                        object2.isColliding = true;
                    }
                    else {
                        //console.log("Not Colliding");
                        object1.isColliding = false;
                    }
                }
            }
        };
        Collision.prototype.checkCollisionWall = function (object1, object2) {
            var maxWidth = object2.x + object2.width;
            var minWidth = maxWidth - object2.x;
            var maxHeight = object2.y + object2.height;
            if (object2.name == "leftWall") {
                if (!object1.isColliding) {
                    if ((object1.x + object1.halfWidth) >= (object2.x + object2.width)
                        && (object1.x) <= (object2.x + object2.width + object1.halfWidth)
                        && (object1.y + object1.height) >= object2.y
                        && (object1.y) <= (object2.y + object2.height + object1.halfHeight)) {
                        console.log("left wall collide");
                        object1.x = object2.x + object2.width + object1.halfWidth;
                    }
                }
                else {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "topWall") {
                if (!object1.isColliding) {
                    if (object1.y <= object2.y + object2.height + object1.halfWidth) {
                        console.log("Top wall collide");
                        object1.y = object2.y + object2.height + object1.halfWidth;
                    }
                }
                else {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "bottomWall") {
                if (!object1.isColliding) {
                    if ((object1.y) >= object2.y - object2.height - object1.halfHeight) {
                        object1.y = object2.y - object2.height - object1.halfHeight;
                    }
                }
                else {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "rightWallBath") {
                if (!object1.isColliding) {
                    if ((object1.x) >= (object2.x - object1.halfWidth)
                        && object1.y > object2.y
                        && object1.x < maxWidth) {
                        object1.x = object2.x - object1.halfWidth;
                    }
                }
                else {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "mainGateWallLeft") {
                if (!object1.isColliding) {
                    if ((object1.y) >= object2.y - object2.height - object1.halfHeight
                        && object1.x > object2.x
                        && object1.x < object2.x + object2.width) {
                        console.log("Main gate wall");
                        object1.y = object2.y - object2.height - object1.halfHeight;
                    }
                }
                else {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "mainGateWallRight") {
                if (!object1.isColliding) {
                    if ((object1.y) >= object2.y - object2.height - object1.halfHeight
                        && object1.x > object2.x
                        && object1.x < object2.x + object2.width) {
                        object1.y = object2.y - object2.height - object1.halfHeight;
                    }
                }
                else {
                    object1.isColliding = false;
                }
            }
            if (object2.name == "rightWall") {
                if (!object1.isColliding) {
                    if (object1.x >= object2.x - object1.halfWidth) {
                        object1.x = object2.x - object1.halfWidth;
                    }
                }
                else {
                    object1.isColliding = false;
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Zombie = /** @class */ (function (_super) {
        __extends(Zombie, _super);
        // CONSTRUCTORS
        function Zombie(targetPlayer, targetWindowLeft_level1, targetWindowRight_level1, targetWindowLeft_level2, targetWindowRight_level2) {
            var _this = _super.call(this, "zombie") || this;
            _this.range = 200;
            _this.spawnMax = 400;
            _this.spawnMin = 50;
            _this.targetPlayer = targetPlayer;
            _this.targetWindowLeft_level1 = targetWindowLeft_level1;
            _this.targetWindowRight_level1 = targetWindowRight_level1;
            _this.targetWindowLeft_level2 = targetWindowLeft_level2;
            _this.targetWindowRight_level2 = targetWindowRight_level2;
            _this.Start();
            return _this;
        }
        //PUBLIC METHODS
        Zombie.prototype.Start = function () {
            this.regXY();
            this.generateHealth();
            this.Reset();
        };
        Zombie.prototype.Update = function () {
            if (this.targetPlayer.currentScene == "level1") {
                if (this.y < this.targetWindowRight_level1.y - this.height && this.windowReached) {
                    this.ChasePlayer();
                }
                else if (this.y > this.targetWindowRight_level1.y - this.height && this.windowReached) {
                    this.y -= this.generateNormalSpeed();
                }
                if (this.x > this.targetWindowLeft_level1.x + this.halfWidth && this.windowReached) {
                    this.ChasePlayer();
                }
                else if (this.x < this.targetWindowLeft_level1.x + this.halfWidth && this.windowReached) {
                    this.x += this.generateNormalSpeed();
                }
                else {
                    this.setDestination();
                }
            }
            if (this.targetPlayer.currentScene == "level2") {
                if (this.y < this.targetWindowRight_level2.y - this.height && this.windowReached) {
                    this.ChasePlayer();
                }
                else if (this.y > this.targetWindowRight_level2.y - this.height && this.windowReached) {
                    this.y -= this.generateNormalSpeed();
                }
                if (this.x > this.targetWindowLeft_level2.x + this.halfWidth && this.windowReached) {
                    this.ChasePlayer();
                }
                else if (this.x < this.targetWindowLeft_level2.x + this.halfWidth && this.windowReached) {
                    this.x += this.generateNormalSpeed();
                }
                else {
                    this.setDestination();
                }
            }
        };
        Zombie.prototype.Reset = function () {
            this.generateHealth();
            this.zombieSpawnPoint();
            this.windowReached = false;
        };
        // PRIVATE METHODS  
        Zombie.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        Zombie.prototype.generateHealth = function () {
            this.zombieHealth = Math.random() * (8 - 5) + 5;
        };
        Zombie.prototype.generateNormalSpeed = function () {
            return Math.random() * (0.3 - 0.01) + 0.01;
        };
        Zombie.prototype.generateCloseSpeed = function () {
            return Math.random() * (0.5 - 0.2) + 0.2;
        };
        Zombie.prototype.ChasePlayer = function () {
            //Zombie rotation
            this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector(this.targetPlayer.x, this.targetPlayer.y));
            //If player is not in range, move slowly
            if (new managers.Vector(this.targetPlayer.x, this.targetPlayer.y).Add(new managers.Vector(-this.x, -this.y)).Magnitude() > this.range) {
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
            else {
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateCloseSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateCloseSpeed();
            }
        };
        Zombie.prototype.headTowardsLeftWindow = function () {
            //Zombie rotation
            if (this.targetPlayer.currentScene == "level1") {
                this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector(this.targetWindowLeft_level1.x, this.targetWindowLeft_level1.y));
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
            if (this.targetPlayer.currentScene == "level2") {
                this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector(this.targetWindowLeft_level2.x, this.targetWindowLeft_level2.y));
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
        };
        Zombie.prototype.headTowardsRightWindow = function () {
            //Zombie rotation
            if (this.targetPlayer.currentScene == "level1") {
                this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector(this.targetWindowRight_level1.x, this.targetWindowRight_level1.y));
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
            if (this.targetPlayer.currentScene == "level2") {
                this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector(this.targetWindowRight_level2.x, this.targetWindowRight_level2.y));
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
        };
        Zombie.prototype.zombieSpawnPoint = function () {
            var borderRandNum = Math.random();
            this.spawnPoint = new managers.Vector(0, 0);
            /* if (borderRandNum >0.75)
            {
                //Spawn Top
                this.spawnPoint.x = (Math.random() * config.Screen.WIDTH)+(this.spawnMax- this.spawnMin)+this.spawnMin ;
                this.spawnPoint.y = ((config.Screen.HEIGHT*-0.1) - (Math.random()* (this.spawnMax- this.spawnMin)+ this.spawnMin));
                console.log("Spawned Top "+ this.spawnPoint.y);
            }
            else if (borderRandNum > 0.25)
            {
                //Spawn Right
                this.spawnPoint.x = ((config.Screen.WIDTH) + (Math.random()* (this.spawnMax- this.spawnMin)+ this.spawnMin));
                this.spawnPoint.y = (Math.random() * config.Screen.HEIGHT) + (this.spawnMax- this.spawnMin)+this.spawnMin;
                console.log("Spawned Right "+ this.spawnPoint.x);
            }*/
            if (borderRandNum > 0.5) {
                //Spawn Left
                this.spawnPoint.x = ((config.Screen.WIDTH * -0.1) - (Math.random() * (this.spawnMax - this.spawnMin) + this.spawnMin));
                this.spawnPoint.y = (Math.random() * config.Screen.HEIGHT) + (this.spawnMax - this.spawnMin) + this.spawnMin;
                console.log("Spawned Left " + " X: " + this.spawnPoint.x + " Y: " + this.spawnPoint.y);
            }
            else {
                //Spwan Bottom Right 
                this.spawnPoint.x = (config.Screen.WIDTH / 2) + (Math.random() * (this.spawnMax - this.spawnMin) + this.spawnMin);
                this.spawnPoint.y = (config.Screen.HEIGHT) + (Math.random() * (this.spawnMax - this.spawnMin) + this.spawnMin);
                console.log("Spawned Bottom " + " X: " + this.spawnPoint.x + " Y: " + this.spawnPoint.y);
            }
            this.x = this.spawnPoint.x;
            this.y = this.spawnPoint.y;
        };
        Zombie.prototype.setDestination = function () {
            /* //BOTTOM LEFT
            if(this.spawnPoint.x < (config.Screen.WIDTH/2) && this.spawnPoint.y > (config.Screen.HEIGHT/2))
            {
                this.headTowardsWindow();
            }
            //TOP RIGHT
            if(this.spawnPoint.x > (config.Screen.WIDTH/2) && this.spawnPoint.y < (config.Screen.HEIGHT/2))
            {
                this.headTowardsRightWindow();
            } */
            //LEFT
            if (this.spawnPoint.x < (config.Screen.WIDTH / 2)) {
                this.headTowardsLeftWindow();
            }
            //RIGHT
            if (this.spawnPoint.x > (config.Screen.WIDTH / 2)
                && this.spawnPoint.y > (config.Screen.HEIGHT / 2)) {
                this.headTowardsRightWindow();
            }
        };
        return Zombie;
    }(objects.GameObject));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map
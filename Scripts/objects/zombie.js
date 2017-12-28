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
        function Zombie(assetManager, target) {
            var _this = _super.call(this, assetManager, "zombie") || this;
            _this.range = 200;
            _this.spawnMax = 5;
            _this.spawnMin = -1;
            _this.target = target;
            _this.Start();
            return _this;
        }
        //PUBLIC METHODS
        Zombie.prototype.Start = function () {
            this.generateHealth();
            this.Reset();
        };
        Zombie.prototype.Update = function () {
            this.CheckBounds();
            this.ChasePlayer();
        };
        Zombie.prototype.Reset = function () {
            this.generateHealth();
            var borderRandNum = Math.random();
            var spawnPoint = new managers.Vector(0, 0);
            //console.log(borderRandNum);
            if (borderRandNum > 0.75) {
                //Spawn Top
                spawnPoint.x = (Math.random() * config.Screen.WIDTH) + (this.spawnMax - this.spawnMin) + this.spawnMin;
                spawnPoint.y = -0.1 * config.Screen.HEIGHT;
                //console.log("Spawned top"+ spawnPoint.y);
            }
            else if (borderRandNum > 0.5) {
                //Spaen Left
                spawnPoint.x = -0.1 * config.Screen.WIDTH;
                spawnPoint.y = Math.random() * config.Screen.HEIGHT;
            }
            else if (borderRandNum > 0.25) {
                //Spawn Right
                spawnPoint.x = 1.1 * config.Screen.WIDTH;
                spawnPoint.y = Math.random() * config.Screen.HEIGHT;
            }
            else {
                //Spwan Bottom
                spawnPoint.x = Math.random() * config.Screen.WIDTH;
                spawnPoint.y = 1.1 * config.Screen.HEIGHT;
            }
            this.x = spawnPoint.x;
            this.y = spawnPoint.y;
        };
        // PRIVATE METHODS  
        Zombie.prototype.generateHealth = function () {
            this.zombieHealth = Math.random() * (10 - 5) + 5;
        };
        Zombie.prototype.generateNormalSpeed = function () {
            return Math.random() * (0.2 - 0.03) + 0.03;
        };
        Zombie.prototype.generateCloseSpeed = function () {
            return Math.random() * (0.5 - 0.2) + 0.2;
        };
        Zombie.prototype.CheckBounds = function () {
            if (this.x >= config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        Zombie.prototype.ChasePlayer = function () {
            //Zombie rotation
            this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector(this.target.x, this.target.y));
            //If player is not in range, move slowly
            if (new managers.Vector(this.target.x, this.target.y).Add(new managers.Vector(-this.x, -this.y)).Magnitude() > this.range) {
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
            else {
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateCloseSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateCloseSpeed();
            }
        };
        return Zombie;
    }(objects.GameObject));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map
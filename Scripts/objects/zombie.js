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
            _this.screenWidth = 640;
            _this.screenHeight = 480;
            _this.spawnMax = 1;
            _this.spawnMin = -1;
            _this.Start();
            _this.health = 1;
            _this.target = target;
            return _this;
        }
        //PUBLIC METHODS
        Zombie.prototype.Start = function () {
            this.Reset();
        };
        Zombie.prototype.Update = function () {
            //this.CheckBounds()
            this.ChasePlayer();
        };
        //Zombie gets hit by bullet
        Zombie.prototype.GetHit = function () {
            this.health--;
            if (this.health <= 0) {
                this.parent.removeChild(this);
            }
        };
        // PRIVATE METHODS
        Zombie.prototype.Reset = function () {
            this.health = 1;
            var borderRandNum = Math.random();
            var spawnPoint = new managers.Vector(0, 0);
            //console.log(borderRandNum);
            if (borderRandNum > 0.75) {
                //Spawn Top
                spawnPoint.x = (Math.random() * this.screenWidth) + (this.spawnMax - this.spawnMin) + this.spawnMin;
                spawnPoint.y = -0.1 * this.screenHeight;
                //console.log("Spawned top"+ spawnPoint.y);
            }
            else if (borderRandNum > 0.5) {
                //Spaen Left
                spawnPoint.x = -0.1 * this.screenWidth;
                spawnPoint.y = Math.random() * this.screenHeight;
            }
            else if (borderRandNum > 0.25) {
                //Spawn Right
                spawnPoint.x = 1.1 * this.screenWidth;
                spawnPoint.y = Math.random() * this.screenHeight;
            }
            else {
                //Spwan Bottom
                spawnPoint.x = Math.random() * this.screenWidth;
                spawnPoint.y = 1.1 * this.screenHeight;
            }
            this.x = spawnPoint.x;
            this.y = spawnPoint.y;
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
                this.x += managers.Vector.DegreeToVector(this.rotation).x * 0.1;
                this.y += managers.Vector.DegreeToVector(this.rotation).y * 0.1;
            }
            else {
                this.x += managers.Vector.DegreeToVector(this.rotation).x * 0.3;
                this.y += managers.Vector.DegreeToVector(this.rotation).y * 0.3;
            }
        };
        return Zombie;
    }(objects.GameObject));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map
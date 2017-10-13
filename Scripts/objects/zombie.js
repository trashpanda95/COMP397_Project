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
        //PRIVATE INSTANCE VARIBALES
        //CONSTRUCTORS
        function Zombie(assetManager) {
            var _this = _super.call(this, assetManager, "zombie") || this;
            _this.Start();
            return _this;
        }
        //PUBLIC METHODS
        Zombie.prototype.Start = function () {
            this.reset();
        };
        Zombie.prototype.Update = function () {
            this.y += this.verticalSpeed;
            this.x += this.horizontalSpeed;
            //this.checkBounds();
        };
        //PRIVATE METHODS
        Zombie.prototype.checkBounds = function () {
            if (this.x >= 850 - this.halfWidth) {
                this.x = 850 - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= 600 - this.halfWidth) {
                this.y = 600 - this.halfWidth;
            }
            if (this.y <= this.halfWidth) {
                this.y = this.halfWidth;
            }
        };
        Zombie.prototype.reset = function () {
            this.y = -this.height;
            this.x = (Math.random() * (640 - this.width)) + this.halfWidth;
            this.verticalSpeed = (Math.random() * 5) + 5;
            this.horizontalSpeed = (Math.random() * 4) - 2;
        };
        return Zombie;
    }(objects.GameObject));
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map
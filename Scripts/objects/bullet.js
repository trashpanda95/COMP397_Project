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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        function Bullet(assetManager, position) {
            var _this = _super.call(this, assetManager, "bullet") || this;
            _this.position = position;
            _this.Start();
            return _this;
            //this.x = position.x;
            //this.y = position.y;
        }
        Bullet.prototype.Start = function () {
            this.regXY();
            this.speed = 10;
            this.Reset();
        };
        Bullet.prototype.Reset = function () {
            this.y = -1000;
            this.x = -1000;
        };
        Bullet.prototype.Update = function () {
            //this.CheckBounds();
            if (this.speed > 0) {
                //this.position = core.Vector.DegreeToVector(this.rotation).Multiply(this.speed);
                var deltaX = this.stage.mouseX - (this.x + this.regX);
                var deltaY = this.stage.mouseY - (this.y + this.regY);
                this.rotation = Math.atan2(deltaY, deltaX);
                this.x += Math.cos(this.rotation) * this.speed;
                this.y += Math.sin(this.rotation) * this.speed;
            }
        };
        //PRIVATE
        Bullet.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        Bullet.prototype.CheckBounds = function () {
            if (this.y <= 0 + this.height || this.y >= 0 + this.height) {
                this.Reset();
            }
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map
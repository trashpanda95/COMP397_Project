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
        function Bullet() {
            var _this = _super.call(this, "bullet") || this;
            _this.Start();
            return _this;
        }
        Bullet.prototype.Start = function () {
            this.gunFired = false;
            this.bulletSpeed = 20;
            this.regXY();
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            //If bullet is in screen then run the block
            if (this.y > 0 && this.y < config.Screen.HEIGHT) {
                //If bullet fired, update rotation          
                if (this.gunFired) {
                    this.setFireCoord();
                    this.gunFired = false; //Set fired to false
                }
                //Update position every frame
                this.x += Math.cos(this.rotation) * this.bulletSpeed;
                this.y += Math.sin(this.rotation) * this.bulletSpeed;
                this.checkBounds();
            }
        };
        //PRIVATE
        Bullet.prototype.Reset = function () {
            this.y = -1000;
            this.x = -1000;
        };
        //Method to set bitmap registry point at the center
        Bullet.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        //Checkbonds and reset if outside
        Bullet.prototype.checkBounds = function () {
            if (this.y <= 0 + this.height || this.y >= config.Screen.HEIGHT || this.x <= 0 + this.width || this.x >= config.Screen.WIDTH) {
                //console.log("Bullet left screen, Destroyed");
                this.Reset();
            }
        };
        //Set bullet rotation by calculating it's position to mouse
        Bullet.prototype.setFireCoord = function () {
            var centerX = this.x + this.regX;
            var centerY = this.y + this.regY;
            var mouseX = this.stage.mouseX;
            var mouseY = this.stage.mouseY;
            var angle = Math.atan2(mouseY - centerY, mouseX - centerX);
            this.rotation = angle;
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map
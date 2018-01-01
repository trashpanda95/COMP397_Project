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
    var WallRightBath = /** @class */ (function (_super) {
        __extends(WallRightBath, _super);
        // PRIVATE INSTANCE VARIABLES
        // CONSTRUCTORS
        function WallRightBath() {
            var _this = _super.call(this, "rightWallBath") || this;
            _this.y = 368;
            _this.x = 615;
            return _this;
        }
        // PRIVATE METHODS
        WallRightBath.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        WallRightBath.prototype.Start = function () { };
        WallRightBath.prototype.Update = function () { };
        WallRightBath.prototype.Reset = function () { };
        return WallRightBath;
    }(objects.GameObject));
    objects.WallRightBath = WallRightBath;
})(objects || (objects = {}));
//# sourceMappingURL=rightWallBath.js.map
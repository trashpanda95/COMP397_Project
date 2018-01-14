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
    var WallRight = /** @class */ (function (_super) {
        __extends(WallRight, _super);
        // CONSTRUCTORS
        function WallRight() {
            var _this = _super.call(this, "level2_wallRight") || this;
            _this.y = 163;
            _this.x = 978;
            return _this;
        }
        // PRIVATE METHODS
        WallRight.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        WallRight.prototype.Start = function () { };
        WallRight.prototype.Update = function () { };
        WallRight.prototype.Reset = function () { };
        return WallRight;
    }(objects.GameObject));
    objects.WallRight = WallRight;
})(objects || (objects = {}));
//# sourceMappingURL=wall_right.js.map
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
    var WallBottomLeft = /** @class */ (function (_super) {
        __extends(WallBottomLeft, _super);
        // CONSTRUCTORS
        function WallBottomLeft() {
            var _this = _super.call(this, "level2_wallBottomLeft") || this;
            _this.y = 666;
            _this.x = 64;
            return _this;
        }
        // PRIVATE METHODS
        WallBottomLeft.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        WallBottomLeft.prototype.Start = function () { };
        WallBottomLeft.prototype.Update = function () { };
        WallBottomLeft.prototype.Reset = function () { };
        return WallBottomLeft;
    }(objects.GameObject));
    objects.WallBottomLeft = WallBottomLeft;
})(objects || (objects = {}));
//# sourceMappingURL=wall_bottomLeft.js.map
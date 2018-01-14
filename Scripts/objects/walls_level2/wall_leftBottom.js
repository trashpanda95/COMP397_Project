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
    var WallLeftBottom = /** @class */ (function (_super) {
        __extends(WallLeftBottom, _super);
        // CONSTRUCTORS
        function WallLeftBottom() {
            var _this = _super.call(this, "level2_wallLeftBottom") || this;
            _this.y = 353;
            _this.x = 64;
            return _this;
        }
        // PRIVATE METHODS
        WallLeftBottom.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        WallLeftBottom.prototype.Start = function () { };
        WallLeftBottom.prototype.Update = function () { };
        WallLeftBottom.prototype.Reset = function () { };
        return WallLeftBottom;
    }(objects.GameObject));
    objects.WallLeftBottom = WallLeftBottom;
})(objects || (objects = {}));
//# sourceMappingURL=wall_leftBottom.js.map
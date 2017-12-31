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
    var WallLeft = /** @class */ (function (_super) {
        __extends(WallLeft, _super);
        // CONSTRUCTORS
        function WallLeft() {
            var _this = _super.call(this, "leftWall") || this;
            _this.y = 71;
            _this.x = 113;
            return _this;
        }
        // PRIVATE METHODS
        WallLeft.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        WallLeft.prototype.Start = function () { };
        WallLeft.prototype.Update = function () { };
        WallLeft.prototype.Reset = function () { };
        return WallLeft;
    }(objects.GameObject));
    objects.WallLeft = WallLeft;
})(objects || (objects = {}));
//# sourceMappingURL=wallLeft.js.map
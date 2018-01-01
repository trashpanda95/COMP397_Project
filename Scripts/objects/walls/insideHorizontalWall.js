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
    var InsideHorizontalWall = /** @class */ (function (_super) {
        __extends(InsideHorizontalWall, _super);
        // CONSTRUCTORS
        function InsideHorizontalWall() {
            var _this = _super.call(this, "insideHorizontalWall") || this;
            _this.y = 371;
            _this.x = 241;
            return _this;
        }
        // PRIVATE METHODS
        InsideHorizontalWall.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        InsideHorizontalWall.prototype.Start = function () { };
        InsideHorizontalWall.prototype.Update = function () { };
        InsideHorizontalWall.prototype.Reset = function () { };
        return InsideHorizontalWall;
    }(objects.GameObject));
    objects.InsideHorizontalWall = InsideHorizontalWall;
})(objects || (objects = {}));
//# sourceMappingURL=insideHorizontalWall.js.map
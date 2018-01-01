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
    var InsideVerticalWall = /** @class */ (function (_super) {
        __extends(InsideVerticalWall, _super);
        // CONSTRUCTORS
        function InsideVerticalWall() {
            var _this = _super.call(this, "insideVerticalWall") || this;
            _this.y = 84;
            _this.x = 614;
            return _this;
        }
        // PRIVATE METHODS
        InsideVerticalWall.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        InsideVerticalWall.prototype.Start = function () { };
        InsideVerticalWall.prototype.Update = function () { };
        InsideVerticalWall.prototype.Reset = function () { };
        return InsideVerticalWall;
    }(objects.GameObject));
    objects.InsideVerticalWall = InsideVerticalWall;
})(objects || (objects = {}));
//# sourceMappingURL=insideVerticalWall.js.map
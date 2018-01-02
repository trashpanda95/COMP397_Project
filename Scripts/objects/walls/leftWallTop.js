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
    var LeftWallTop = /** @class */ (function (_super) {
        __extends(LeftWallTop, _super);
        // PRIVATE INSTANCE VARIABLES
        // CONSTRUCTORS
        function LeftWallTop() {
            var _this = _super.call(this, "leftWallTop") || this;
            _this.y = 71;
            _this.x = 110;
            return _this;
        }
        // PRIVATE METHODS
        LeftWallTop.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        LeftWallTop.prototype.Start = function () { };
        LeftWallTop.prototype.Update = function () { };
        LeftWallTop.prototype.Reset = function () { };
        return LeftWallTop;
    }(objects.GameObject));
    objects.LeftWallTop = LeftWallTop;
})(objects || (objects = {}));
//# sourceMappingURL=leftWallTop.js.map
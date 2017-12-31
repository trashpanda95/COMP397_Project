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
    var MainGateWallLeft = /** @class */ (function (_super) {
        __extends(MainGateWallLeft, _super);
        // CONSTRUCTORS
        function MainGateWallLeft() {
            var _this = _super.call(this, "mainGateWallLeft") || this;
            _this.y = 368;
            _this.x = 613;
            return _this;
        }
        // PRIVATE METHODS
        MainGateWallLeft.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        MainGateWallLeft.prototype.Start = function () { };
        MainGateWallLeft.prototype.Update = function () { };
        MainGateWallLeft.prototype.Reset = function () { };
        return MainGateWallLeft;
    }(objects.GameObject));
    objects.MainGateWallLeft = MainGateWallLeft;
})(objects || (objects = {}));
//# sourceMappingURL=mainGateWallLeft.js.map
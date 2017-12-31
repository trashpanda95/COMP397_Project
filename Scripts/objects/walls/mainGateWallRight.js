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
    var MainGateWallRight = /** @class */ (function (_super) {
        __extends(MainGateWallRight, _super);
        // CONSTRUCTORS
        function MainGateWallRight() {
            var _this = _super.call(this, "mainGateWallRight") || this;
            _this.y = 368;
            _this.x = 870;
            return _this;
        }
        // PRIVATE METHODS
        MainGateWallRight.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        MainGateWallRight.prototype.Start = function () { };
        MainGateWallRight.prototype.Update = function () { };
        MainGateWallRight.prototype.Reset = function () { };
        return MainGateWallRight;
    }(objects.GameObject));
    objects.MainGateWallRight = MainGateWallRight;
})(objects || (objects = {}));
//# sourceMappingURL=mainGateWallRight.js.map
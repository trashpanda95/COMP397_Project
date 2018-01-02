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
    var WindowLeft = /** @class */ (function (_super) {
        __extends(WindowLeft, _super);
        // PRIVATE INSTANCE VARIABLES
        // CONSTRUCTORS
        function WindowLeft() {
            var _this = _super.call(this, "windowLeft") || this;
            _this.Start();
            return _this;
        }
        WindowLeft.prototype.Start = function () {
            this.y = 338;
            this.x = 115;
            this.windowLeftHealth = 100;
            this.isBroken = false;
            this.regXY();
        };
        WindowLeft.prototype.Update = function () { };
        WindowLeft.prototype.Reset = function () { };
        // PRIVATE METHODS   
        WindowLeft.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        return WindowLeft;
    }(objects.GameObject));
    objects.WindowLeft = WindowLeft;
})(objects || (objects = {}));
//# sourceMappingURL=windowLeft.js.map
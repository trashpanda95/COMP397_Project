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
    var WindowRight_Level2 = /** @class */ (function (_super) {
        __extends(WindowRight_Level2, _super);
        // PRIVATE INSTANCE VARIABLES
        // CONSTRUCTORS
        function WindowRight_Level2() {
            var _this = _super.call(this, "level2_windowRight") || this;
            _this.Start();
            return _this;
        }
        WindowRight_Level2.prototype.Start = function () {
            this.y = 668;
            this.x = 774;
            this.windowRightHealth = 1000;
            this.isBroken = false;
            this.regXY();
        };
        WindowRight_Level2.prototype.Update = function () { };
        WindowRight_Level2.prototype.Reset = function () { };
        // PRIVATE METHODS   
        WindowRight_Level2.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        return WindowRight_Level2;
    }(objects.GameObject));
    objects.WindowRight_Level2 = WindowRight_Level2;
})(objects || (objects = {}));
//# sourceMappingURL=level2_windowRight.js.map
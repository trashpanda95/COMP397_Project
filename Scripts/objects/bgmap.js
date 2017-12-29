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
    var Bgmap = /** @class */ (function (_super) {
        __extends(Bgmap, _super);
        // CONSTRUCTORS
        function Bgmap(imageString) {
            var _this = this;
            var graphics = new createjs.Graphics().beginBitmapFill(imageString).drawRect(0, 0, config.Screen.WIDTH, config.Screen.HEIGHT);
            _this = _super.call(this, graphics) || this;
            console.log("Map Created");
            return _this;
        }
        // PRIVATE METHODS
        Bgmap.prototype.Reset = function () {
            this.y = 0;
        };
        Bgmap.prototype._checkBounds = function () {
            if (this.y > 0) {
                this.Reset();
            }
        };
        // PUBLIC METHODS
        Bgmap.prototype.Start = function () {
            console.log("Floor start");
            this.Reset();
        };
        Bgmap.prototype.Update = function () {
            this._checkBounds();
        };
        return Bgmap;
    }(createjs.Shape));
    objects.Bgmap = Bgmap;
})(objects || (objects = {}));
//# sourceMappingURL=bgmap.js.map
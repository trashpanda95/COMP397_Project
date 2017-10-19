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
    var bgmap = /** @class */ (function (_super) {
        __extends(bgmap, _super);
        // PRIVATE INSTANCE VARIABLES
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function bgmap(assetManager) {
            var _this = _super.call(this, assetManager.getResult("bgmap")) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        bgmap.prototype.Start = function () {
        };
        bgmap.prototype.Update = function () {
        };
        return bgmap;
    }(createjs.Bitmap));
    objects.bgmap = bgmap;
})(objects || (objects = {}));
//# sourceMappingURL=bgmap.js.map
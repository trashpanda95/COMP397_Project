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
/*
  Sets the background for the End screen
*/
var objects;
(function (objects) {
    var DeathScreen = /** @class */ (function (_super) {
        __extends(DeathScreen, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function DeathScreen(assetManager) {
            var _this = _super.call(this, assetManager.getResult("dead")) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        DeathScreen.prototype.Start = function () {
        };
        DeathScreen.prototype.Update = function () {
        };
        return DeathScreen;
    }(createjs.Bitmap));
    objects.DeathScreen = DeathScreen;
})(objects || (objects = {}));
//# sourceMappingURL=deathscreen.js.map
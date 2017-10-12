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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        //PUBLIC PROPERTIES
        //CONSTRUCTORS
        function Player(assetManager) {
            var _this = _super.call(this, assetManager.getResult("player")) || this;
            _this.Start();
            return _this;
        }
        //PRIVATE METHODS
        Player.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        Player.prototype._checkBounds = function () {
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        //PUBLIC METHODS
        Player.prototype.Start = function () {
            this.regXY();
            this.x = 400;
            this.y = 300;
            this.scaleX = 0.3;
            this.scaleY = 0.3;
        };
        Player.prototype.Update = function () {
            console.log("player.ts Update");
            this.x = this.stage.mouseX;
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
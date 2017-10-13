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
        //CONSTRUCTORS
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            //PRIVATE INSTANCE VARIBALES 
            //Game
            _this.keyBoardKey = new core.keyBoardInput();
            _this.Start();
            return _this;
        }
        //PUBLIC PROPERTIES
        Player.prototype.getPlayerXY = function () {
            return this.x;
        };
        //PUBLIC METHODS             
        Player.prototype.Start = function () {
            this.x = 400;
            this.y = 300;
            this.keyBoardKey = new core.keyBoardInput();
        };
        Player.prototype.Update = function () {
            this.checkBounds();
            this.playerMovement();
        };
        //PRIVATE METHODS
        Player.prototype.regXY = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        Player.prototype.checkBounds = function () {
            if (this.x >= 850 - this.halfWidth) {
                this.x = 850 - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= 600 - this.halfWidth) {
                this.y = 600 - this.halfWidth;
            }
            if (this.y <= this.halfWidth) {
                this.y = this.halfWidth;
            }
        };
        Player.prototype.playerMovement = function () {
            var getKey = this.keyBoardKey.getkeyInput();
            if (getKey != null && getKey == 37) {
                this.x -= this.playerSpeed;
            }
            else if (getKey != null && getKey == 38) {
                this.y -= this.playerSpeed;
            }
            else if (getKey != null && getKey == 39) {
                this.x += this.playerSpeed;
            }
            else if (getKey != null && getKey == 40) {
                this.y += this.playerSpeed;
            }
            this.setPlayerRotation();
        };
        Player.prototype.setPlayerRotation = function () {
            var xAngle = this.stage.mouseX - this.x;
            var yAngle = this.stage.mouseY - this.y;
            this.playerAngle = Math.atan2(yAngle, xAngle) * (180 / Math.PI);
            this.rotation = this.playerAngle;
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
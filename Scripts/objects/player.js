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
        //Game
        //PUBLIC PROPERTIES
        //CONSTRUCTORS
        function Player(assetManager) {
            var _this = _super.call(this, assetManager.getResult("player")) || this;
            //Player
            _this.playerSpeed = 2;
            _this.friction = 0.98;
            _this.velocityX = 0;
            _this.velocityY = 0;
            _this.playerRoataion = 0;
            _this.Start();
            return _this;
        }
        //PUBLIC METHODS             
        Player.prototype.Start = function () {
            this.regXY();
            this.x = 400;
            this.y = 300;
            this.keyboardInputListener();
        };
        Player.prototype.Update = function () {
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
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        //-----------------------Player Movement---------------------------
        Player.prototype.keyboardInputListener = function () {
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        };
        Player.prototype.onControlDown = function (e) {
            //LEFT ARROW
            if (e.keyCode == 37) {
                console.log("Left Arrow");
                Player.moveLeft = true;
            }
            else if (e.keyCode == 38) {
                console.log("Up Arrow");
                Player.moveUp = true;
            }
            else if (e.keyCode == 39) {
                console.log("Right Arrow");
                Player.moveRight = true;
            }
            else if (e.keyCode == 40) {
                console.log("Down Arrow");
                Player.moveDown = true;
            }
        };
        Player.prototype.onControlUp = function (e) {
            //LEFT ARROW
            if (e.keyCode == 37) {
                console.log("Left Arrow");
                Player.moveLeft = false;
            }
            else if (e.keyCode == 38) {
                console.log("Up Arrow");
                Player.moveUp = false;
            }
            else if (e.keyCode == 39) {
                console.log("Right Arrow");
                Player.moveRight = false;
            }
            else if (e.keyCode == 40) {
                console.log("Down Arrow");
                Player.moveDown = false;
            }
        };
        Player.prototype.playerMovement = function () {
            if (Player.moveLeft) {
                this.x -= this.playerSpeed;
            }
            else if (Player.moveRight) {
                this.x += this.playerSpeed;
            }
            else if (Player.moveUp) {
                this.y -= this.playerSpeed;
            }
            else if (Player.moveDown) {
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
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
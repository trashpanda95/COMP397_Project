// Taken from Midterm Template
var managers;
(function (managers) {
    var GamePad = /** @class */ (function () {
        // CONSTRUCTORS
        function GamePad(player, gamepadIndex) {
            this.axis = new Array();
            this.direction = 0;
            this.player = player;
            this._gamepadIndex = gamepadIndex;
        }
        GamePad.prototype.GetInput = function () {
            this._gamepad = window.navigator.getGamepads()[this._gamepadIndex];
            if (this._gamepad) {
                // check Buttons
                for (var button = 0; button < this._gamepad.buttons.length; button++) {
                    if (this._gamepad.buttons[button].pressed) {
                        console.log("button " + button + " pressed");
                    }
                }
                // check Axes
                for (var index = 0; index < this._gamepad.axes.length; index++) {
                    if ((this._gamepad.axes[index] > 0.2) || (this._gamepad.axes[index] < -0.2)) {
                        this.axis[index] = this._gamepad.axes[index];
                        /*
                        if((index == 1) && (this.axis[index] > 0)) {
                          this.axis[index] = 0; // don't allow backward movement
                        }
                        */
                    }
                    else if ((this._gamepad.axes[index] > -0.2) && (this._gamepad.axes[index] < 0.2)) {
                        this.axis[index] = 0;
                    }
                } // end check Axes
            } // end check if gamepad is connected
        };
        GamePad.prototype.MovePlayer = function () {
            // correct direction
            var newDirection = 90 - this.player.rotation;
            this.direction = newDirection;
            if (newDirection > 360) {
                this.direction -= 360;
            }
            if (newDirection < 0) {
                this.direction += 360;
            }
            // forward and back movement
            this.player.x -= this.axis[config.Gamepad.VERTICAL] * 5 * Math.cos(this.direction * (Math.PI / 180));
            this.player.y += this.axis[config.Gamepad.VERTICAL] * 5 * Math.sin(this.direction * (Math.PI / 180));
            // left and right movement
            this.player.x += this.axis[config.Gamepad.HORIZONTAL] * 2 * Math.sin(this.direction * (Math.PI / 180));
            this.player.y += this.axis[config.Gamepad.HORIZONTAL] * 2 * Math.cos(this.direction * (Math.PI / 180));
            // change direction
            this.player.rotation += this.axis[config.Gamepad.ROTATION] * 2;
        };
        GamePad.prototype.Update = function () {
            this.GetInput();
            this.MovePlayer();
        };
        return GamePad;
    }());
    managers.GamePad = GamePad;
})(managers || (managers = {}));
//# sourceMappingURL=gamepad.js.map
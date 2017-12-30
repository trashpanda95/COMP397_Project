var core;
(function (core) {
    var keyBoardInput = /** @class */ (function () {
        // CONSTRUCTORS
        function keyBoardInput() {
            this.keyboardInputListener();
        }
        // PUBLIC PROPERTIES
        keyBoardInput.prototype.getkeyInput = function () {
            return keyBoardInput.key;
        };
        //-----------------------Player Movement---------------------------
        /*
        * keyboardInputListener checks to see if a key is being pressed on the keyboard
        */
        keyBoardInput.prototype.keyboardInputListener = function () {
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        };
        /*
        * onControlDown determines what action will take place when a key being pressed is detected
        */
        keyBoardInput.prototype.onControlDown = function (e) {
            if (e.keyCode == config.Key.LEFT_ARROW) {
                console.log("Left Arrow"); // Debugger
                keyBoardInput.moveLeft = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == config.Key.UP_ARROW) {
                console.log("Up Arrow"); // Debugger
                keyBoardInput.moveUp = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == config.Key.RIGHT_ARROW) {
                console.log("Right Arrow"); // Debugger
                keyBoardInput.moveRight = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == config.Key.DOWN_ARROW) {
                console.log("Down Arrow"); // Debugger
                keyBoardInput.moveDown = true;
                keyBoardInput.key = e.keyCode;
            }
        };
        /*
        * onControlUp determines what action will take place when a key released
        */
        keyBoardInput.prototype.onControlUp = function (e) {
            if (e.keyCode == config.Key.LEFT_ARROW) {
                keyBoardInput.moveLeft = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == config.Key.UP_ARROW) {
                keyBoardInput.moveUp = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == config.Key.RIGHT_ARROW) {
                keyBoardInput.moveRight = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == config.Key.DOWN_ARROW) {
                keyBoardInput.moveDown = false;
                keyBoardInput.key = null;
            }
        };
        return keyBoardInput;
    }());
    core.keyBoardInput = keyBoardInput;
})(core || (core = {}));
//# sourceMappingURL=keyBoardInput.js.map
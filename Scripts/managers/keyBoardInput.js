var managers;
(function (managers) {
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
                //console.log("Left Arrow");
                keyBoardInput.moveLeft = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == config.Key.UP_ARROW) {
                //console.log("Up Arrow");
                keyBoardInput.moveUp = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == config.Key.RIGHT_ARROW) {
                //console.log("Right Arrow");
                keyBoardInput.moveRight = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == config.Key.DOWN_ARROW) {
                //console.log("Down Arrow");
                keyBoardInput.moveDown = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == config.Key.SPACEBAR) {
                keyBoardInput.spaceBar = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == config.Key.CTRL) {
                keyBoardInput.ctrl = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == config.Key.NUM_PAD_0) {
                keyBoardInput.numPadZero = true;
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
            else if (e.keyCode == config.Key.SPACEBAR) {
                keyBoardInput.spaceBar = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == config.Key.CTRL) {
                keyBoardInput.ctrl = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == config.Key.NUM_PAD_0) {
                keyBoardInput.numPadZero = false;
                keyBoardInput.key = null;
            }
        };
        return keyBoardInput;
    }());
    managers.keyBoardInput = keyBoardInput;
})(managers || (managers = {}));
//# sourceMappingURL=keyBoardInput.js.map
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
            if (e.keyCode == 37) {
                //console.log("Left Arrow");
                keyBoardInput.moveLeft = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == 38) {
                //console.log("Up Arrow");
                keyBoardInput.moveUp = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == 39) {
                //console.log("Right Arrow");
                keyBoardInput.moveRight = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == 40) {
                //console.log("Down Arrow");
                keyBoardInput.moveDown = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == 32) {
                keyBoardInput.spaceBar = true;
                keyBoardInput.key = e.keyCode;
            }
        };
        /*
        * onControlUp determines what action will take place when a key released
        */
        keyBoardInput.prototype.onControlUp = function (e) {
            if (e.keyCode == 37) {
                keyBoardInput.moveLeft = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == 38) {
                keyBoardInput.moveUp = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == 39) {
                keyBoardInput.moveRight = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == 40) {
                keyBoardInput.moveDown = false;
                keyBoardInput.key = null;
            }
            else if (e.keyCode == 32) {
                keyBoardInput.spaceBar = false;
                keyBoardInput.key = null;
            }
        };
        return keyBoardInput;
    }());
    core.keyBoardInput = keyBoardInput;
})(core || (core = {}));
//# sourceMappingURL=keyBoardInput.js.map
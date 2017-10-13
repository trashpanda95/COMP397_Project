var core;
(function (core) {
    var keyBoardInput = /** @class */ (function () {
        //CONSTRUCTORS
        function keyBoardInput() {
            this.keyboardInputListener();
            //this.keyPressed();        
        }
        //PUBLIC PROPERTIES
        keyBoardInput.prototype.getkeyInput = function () {
            return keyBoardInput.key;
        };
        //-----------------------Player Movement---------------------------
        keyBoardInput.prototype.keyboardInputListener = function () {
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        };
        keyBoardInput.prototype.onControlDown = function (e) {
            //LEFT ARROW
            if (e.keyCode == 37) {
                console.log("Left Arrow");
                keyBoardInput.moveLeft = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == 38) {
                console.log("Up Arrow");
                keyBoardInput.moveUp = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == 39) {
                console.log("Right Arrow");
                keyBoardInput.moveRight = true;
                keyBoardInput.key = e.keyCode;
            }
            else if (e.keyCode == 40) {
                console.log("Down Arrow");
                keyBoardInput.moveDown = true;
                keyBoardInput.key = e.keyCode;
            }
        };
        keyBoardInput.prototype.onControlUp = function (e) {
            //LEFT ARROW
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
        };
        return keyBoardInput;
    }());
    core.keyBoardInput = keyBoardInput;
})(core || (core = {}));
//# sourceMappingURL=keyBoardInput.js.map
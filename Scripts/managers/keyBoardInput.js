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
            keyBoardInput.key = e.keyCode;
        };
        /*
        * onControlUp determines what action will take place when a key released
        */
        keyBoardInput.prototype.onControlUp = function (e) {
            keyBoardInput.key = null;
        };
        return keyBoardInput;
    }());
    managers.keyBoardInput = keyBoardInput;
})(managers || (managers = {}));
//# sourceMappingURL=keyBoardInput.js.map
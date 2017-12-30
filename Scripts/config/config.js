var config;
(function (config) {
    //Scene Constants
    var Scene = /** @class */ (function () {
        function Scene() {
        }
        Scene.START = 0;
        Scene.PLAY = 1;
        Scene.END = 2;
        return Scene;
    }());
    config.Scene = Scene;
    //Screen Constants
    var Screen = /** @class */ (function () {
        function Screen() {
        }
        Screen.WIDTH = 800;
        Screen.HEIGHT = 550;
        return Screen;
    }());
    config.Screen = Screen;
    // Game Constants
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
    var Gamepad;
    (function (Gamepad) {
        Gamepad[Gamepad["HORIZONTAL"] = 0] = "HORIZONTAL";
        Gamepad[Gamepad["VERTICAL"] = 1] = "VERTICAL";
        Gamepad[Gamepad["ROTATION"] = 2] = "ROTATION";
    })(Gamepad = config.Gamepad || (config.Gamepad = {}));
    var Key = /** @class */ (function () {
        function Key() {
        }
        // Keyboard values
        Key.A = 65;
        Key.CTRL = 17;
        Key.D = 68;
        Key.DOWN_ARROW = 40;
        Key.ESCAPE = 27;
        Key.LEFT_ARROW = 37;
        Key.RIGHT_ARROW = 39;
        Key.S = 83;
        Key.SHIFT = 16;
        Key.SPACEBAR = 32;
        Key.UP_ARROW = 38;
        Key.W = 87;
        return Key;
    }());
    config.Key = Key;
})(config || (config = {}));
//# sourceMappingURL=config.js.map
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
        Screen.WIDTH = 1000;
        Screen.HEIGHT = 700;
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
})(config || (config = {}));
//# sourceMappingURL=config.js.map
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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        //PUBLIC PROPETIES
        //CONSTRUCTORS
        function Play(assetManager, currentScene) {
            var _this = _super.call(this) || this;
            _this.assetManager = assetManager;
            _this.currentScene = currentScene;
            _this.Start();
            return _this;
        }
        //PRIVATE METHOS
        //PUBLIC METHODS
        Play.prototype.Start = function () {
            this.player = new objects.Player(this.assetManager);
            this.zombie = new Array();
            this.Main();
        };
        Play.prototype.Update = function () {
            this.player.Update();
            this.zombie.forEach(function (zombies) { zombies.Update(); });
            return this.currentScene;
        };
        Play.prototype.Main = function () {
            this.addChild(this.player);
            for (var count = 0; count < 10; count++) {
                this.zombie[count] = new objects.Zombie(this.assetManager);
                this.addChild(this.zombie[count]);
                console.log(this.zombie[count]);
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map
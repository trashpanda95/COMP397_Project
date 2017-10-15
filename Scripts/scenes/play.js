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
        // PUBLIC PROPETIES
        // CONSTRUCTORS
        function Play(assetManager, currentScene) {
            var _this = _super.call(this) || this;
            _this.assetManager = assetManager;
            _this.currentScene = currentScene;
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this.player = new objects.Player(this.assetManager);
            this.zombie = new Array();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this.player.Update();
            this.zombie.forEach(function (zombies) {
                zombies.Update();
                _this.zombieFollowPlayer(zombies);
                zombies.rotation = ((Math.atan2(zombies.x - _this.player.y, zombies.x - _this.player.x) * (180 / Math.PI)) - 180);
            });
            return this.currentScene;
        };
        Play.prototype.Main = function () {
            this.addChild(this.player); //Add Player
            for (var count = 0; count < 10; count++) {
                this.zombie[count] = new objects.Zombie(this.assetManager);
                this.zombie[count].x = Math.floor(Math.random() * 800) + 800;
                this.zombie[count].y = Math.floor(Math.random() * 600) + 600;
                console.log();
                this.addChild(this.zombie[count]); // Add Zombies
            }
        };
        // PRIVATE METHOD
        Play.prototype.zombieFollowPlayer = function (other) {
            if (this.player.x != other.x) {
                if (this.player.x > other.x) {
                    other.x += other.zombieSpeed;
                }
                else {
                    other.x -= other.zombieSpeed;
                }
                if (this.player.y > other.y) {
                    other.y += other.zombieSpeed;
                }
                else {
                    other.y -= other.zombieSpeed;
                }
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map
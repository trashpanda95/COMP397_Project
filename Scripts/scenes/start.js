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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        //PUBLIC PROPETIES
        //CONSTRUCTORS
        function Start(currentScene) {
            var _this = _super.call(this) || this;
            _this.currentScene = currentScene;
            _this.Start();
            return _this;
        }
        //PRIVATE METHOS
        //PUBLIC METHODS
        Start.prototype.Start = function () {
            this.backgroundMusic = createjs.Sound.play("backgroundStart", 0, 0, 0, -1, 0.25, 0);
            this.startImage = new objects.Image("startimage");
            this.startButton = new objects.Button("startBtn", config.Screen.WIDTH / 2, config.Screen.HEIGHT / 2, true);
            this.gameTitle = new objects.Label("THE INVASION", "100px", "Boycott", "#000000", config.Screen.WIDTH / 4 * 2.3, config.Screen.HEIGHT / 4, true);
            //this.gameTitleOutline = new objects.Label("THE INVASION", "100px", "Boycott", "#FFFFFF", config.Screen.WIDTH/4*2.3, config.Screen.HEIGHT/4, true);
            //this.gameTitleOutline.outline = 1;
            this.addChild(this.startImage);
            this.addChild(this.startButton);
            //this.addChild(this.gameTitleOutline);
            this.addChild(this.gameTitle);
            this.onClickStartBtn();
        };
        Start.prototype.Update = function () {
            return this.currentScene;
        };
        Start.prototype.onClickStartBtn = function () {
            var _this = this;
            this.startButton.on("click", function () {
                _this.backgroundMusic.stop();
                _this.currentScene = config.Scene.LEVEL1;
                _this.removeAllChildren();
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map
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
        function Start(assetManager, currentScene) {
            var _this = _super.call(this) || this;
            _this.assetManager = assetManager;
            _this.currentScene = currentScene;
            _this.Start();
            return _this;
        }
        //PRIVATE METHOS
        //PUBLIC METHODS
        Start.prototype.Start = function () {
            // Outlines the Title
            this.gameTitleOutline = new objects.Label("THE INVASION", "80px", "Dock51", "#FFFFFF", 400, 250, true);
            this.gameTitleOutline.outline = 1;
            // Fills the Title Outline in Black
            this.gameTitle = new objects.Label("THE INVASION", "80px", "Dock51", "#00000", 400, 250, true);
            // Initialize Background Image
            this.backgroundImage = new objects.StartBackGround(this.assetManager);
            // Initialize Start Button
            this.startButton = new objects.Button(this.assetManager, "startBtn", 400, 350, true);
            // Adds Background Image to Screen
            this.addChild(this.backgroundImage);
            // Adds Both the Label Outline & Fill onto Screen
            this.addChild(this.gameTitleOutline);
            this.addChild(this.gameTitle);
            // Adds Start Button onto Screen
            this.addChild(this.startButton);
            this.onClickStartBtn();
        };
        Start.prototype.Update = function () {
            return this.currentScene;
        };
        Start.prototype.onClickStartBtn = function () {
            var _this = this;
            this.startButton.on("click", function () {
                _this.currentScene = config.Scene.PLAY;
                _this.removeAllChildren();
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map
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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        //PUBLIC PROPETIES
        //CONSTRUCTORS
        function End(assetManager, currentScene) {
            var _this = _super.call(this) || this;
            _this.assetManager = assetManager;
            _this.currentScene = currentScene;
            _this.Start();
            return _this;
        }
        //PRIVATE METHOS
        //PUBLIC METHODS
        End.prototype.Start = function () {
            // Initialize Game Title Outline
            this.gameTitleOutline = new objects.Label("GAME OVER", "80px", "Dock51", "#000000", 400, 250, true);
            this.gameTitleOutline.outline = 1; // Set Outline Property to True
            // Initialize Game Title
            this.gameTitle = new objects.Label("GAME OVER", "80px", "Dock51", "#ff0000", 400, 250, true);
            // Initialize BackGroundImage
            this.backgroundImage = new objects.DeathScreen(this.assetManager);
            this.backgroundImageFill = new objects.BlackScreen(this.assetManager);
            // Initialize Restart Button
            this.restartButton = new objects.Button(this.assetManager, "reStartBtn", 400, 350, true);
            // Add Background Image to Screen
            this.addChild(this.backgroundImageFill);
            this.addChild(this.backgroundImage);
            // Add Outline & Title onto Screen - Unnecessary since background image has text
            //this.addChild(this.gameTitleOutline);      
            //this.addChild(this.gameTitle);    
            // Add Restart Button onto Screen
            this.addChild(this.restartButton);
            this.onClickStartBtn();
        };
        End.prototype.Update = function () {
            return this.currentScene;
        };
        End.prototype.onClickStartBtn = function () {
            var _this = this;
            this.restartButton.on("click", function () {
                _this.currentScene = config.Scene.PLAY;
                _this.removeAllChildren();
            });
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map
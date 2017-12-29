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
        function End(currentScene) {
            var _this = _super.call(this) || this;
            _this.currentScene = currentScene;
            _this.Start();
            return _this;
        }
        //PRIVATE METHOS
        //PUBLIC METHODS
        End.prototype.Start = function () {
            this.gameTitle = new objects.Label("GAME OVER", "80px", "Dock51", "#ff0000", 400, 250, true);
            this.addChild(this.gameTitle);
            this.startButton = new objects.Button("reStartBtn", 400, 350, true);
            this.addChild(this.startButton);
            this.onClickStartBtn();
        };
        End.prototype.Update = function () {
            return this.currentScene;
        };
        End.prototype.onClickStartBtn = function () {
            var _this = this;
            this.startButton.on("click", function () {
                _this.currentScene = config.Scene.PLAY;
                _this.removeAllChildren();
            });
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map
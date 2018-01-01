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
//Asset Manager
var managers;
(function (managers) {
    var assetManifest = [
        { id: "startBtn", src: "./Assets/startButton.png" },
        { id: "reStartBtn", src: "./Assets/reStartButton.png" },
        { id: "player", src: "./Assets/images/player_test.png" },
        { id: "zombie", src: "./Assets/images/zombie_test.png" },
        { id: "bg", src: "./Assets/images/background_test.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "level1BG", src: "./Assets/images/Level1BG.png" },
        { id: "leftWall", src: "./Assets/images/walls/leftWall.png" },
        { id: "topWall", src: "./Assets/images/walls/topWall.png" },
        { id: "bottomWall", src: "./Assets/images/walls/bottomWall.png" },
        { id: "rightWallBath", src: "./Assets/images/walls/rightWallBath.png" },
        { id: "mainGateWallLeft", src: "./Assets/images/walls/mainGateWallLeft.png" },
        { id: "mainGateWallRight", src: "./Assets/images/walls/mainGateWallRight.png" },
        { id: "insideHorizontalWall", src: "./Assets/images/walls/insideHorizontalWall.png" },
        { id: "rightWall", src: "./Assets/images/walls/rightWall.png" },
        { id: "windowLeft", src: "./Assets/images/window/windowLeft.png" },
        { id: "windowRight", src: "./Assets/images/window/windowRight.png" }
    ];
    var AssetManager = /** @class */ (function (_super) {
        __extends(AssetManager, _super);
        function AssetManager() {
            var _this = _super.call(this) || this;
            _this.manifest = new Array();
            _this.manifest = assetManifest;
            _this.installPlugin(createjs.Sound);
            _this.loadManifest(_this.manifest);
            return _this;
        }
        AssetManager.prototype.addItem = function (id, src) {
            this.manifest.push({ id: id, src: src });
            this.loadManifest(this.manifest);
        };
        return AssetManager;
    }(createjs.LoadQueue));
    managers.AssetManager = AssetManager;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map
//IIFE - Immediately Invoked Function Expression
(function () {
    var stage;
    var canvas;
    var gameName;
    var assetManager;
    var assetManifest = [
        { id: "player", src: "../../Assets/images/player_test.png" },
        { id: "enemy", src: "../../Assets/images/zombie_test.png" },
        { id: "bg", src: "../../Assets/images/background_test.png" }
    ];
    var currentScene;
    var currentState;
    function Init() {
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.on("complete", Start);
        assetManager.loadManifest(assetManifest);
    }
    function Start() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        currentState = config.START;
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        console.log("Game Started...");
        gameName = new objects.Label("The Invasion", "50px", "Consolas", "#000000", 425, 300, true);
        stage.addChild(gameName);
        currentScene = new scenes.Start(assetManager, currentState);
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
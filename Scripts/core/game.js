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
    //let currentState:number;
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
        //currentState = config.START;
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        //Add start scene to the stage
        console.log("Game Started");
        currentScene = new scenes.Start(assetManager);
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
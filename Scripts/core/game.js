//IIFE - Immediately Invoked Function Expression
(function () {
    //Global Variables
    var stage;
    var canvas;
    var assetManager;
    var currentScene;
    var currentState = 0;
    // Load Assets
    var assetManifest = [
        { id: "startBtn", src: "./Assets/startButton.png" },
        { id: "reStartBtn", src: "./Assets/reStartButton.png" },
        { id: "player", src: "./Assets/images/player_test.png" },
        { id: "zombie", src: "./Assets/images/zombie_test.png" },
        { id: "sbg", src: "./Assets/images/startscreenbg.jpg" }
    ];
    function Init() {
        // Load Assets
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.on("complete", Start);
        assetManager.loadManifest(assetManifest);
    }
    function Start() {
        // Setup createjs
        canvas = document.getElementById("canvas"); // reference to canvas element
        stage = new createjs.Stage(canvas); // passing canvas to stage
        createjs.Ticker.setFPS(config.Game.FPS); // set frame rate to 60 fps
        createjs.Ticker.on("tick", Update); // update game every frame
        stage.enableMouseOver(20); // Enable mouse movement within stage
        Main();
    }
    function Update() {
        var newState = currentScene.Update();
        if (newState != currentState) {
            currentState = newState;
            Main();
        }
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        switch (currentState) {
            // Add start scene to the stage, later add more scenes
            case config.Scene.START:
                currentScene = new scenes.Start(assetManager, currentState);
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play(assetManager, currentState);
                break;
            case config.Scene.END:
                currentScene = new scenes.End(assetManager, currentState);
                break;
        }
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
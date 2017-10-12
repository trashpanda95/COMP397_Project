//IIFE - Immediately Invoked Function Expression
(function () {
    var stage;
    var canvas;
    var assetManager;
    //Load Assets
    var assetManifest = [
        { id: "player", src: "../../Assets/images/player_test.png" },
        { id: "enemy", src: "../../Assets/images/zombie_test.png" },
        { id: "bg", src: "../../Assets/images/background_test.png" }
    ];
    var currentScene;
    var currentState = 0;
    function Init() {
        //Load Assets
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.on("complete", Start);
        assetManager.loadManifest(assetManifest);
    }
    function Start() {
        //Setup createjs
        canvas = document.getElementById("canvas"); //reference to canvas element
        stage = new createjs.Stage(canvas); //passing canvas to stage
        createjs.Ticker.framerate = 60; //set frame rate to 60 fps
        createjs.Ticker.on("tick", Update); //update game every frame
        //Enable mouse movement within stage
        stage.enableMouseOver(20);
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
            //Add start scene to the stage, later add more scenes
            case config.START:
                currentScene = new scenes.Start(assetManager, currentState);
                break;
        }
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
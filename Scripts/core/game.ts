//IIFE - Immediately Invoked Function Expression
(function()
{
    let stage:createjs.Stage;
    let canvas:any;
    let gameName:objects.Label;
    let assetManager:createjs.LoadQueue;
    
    //Load Assets
    let assetManifest =[
        {id: "player", src:"../../Assets/images/player_test.png"},
        {id: "enemy", src:"../../Assets/images/zombie_test.png"},
        {id: "bg", src:"../../Assets/images/background_test.png"}
    ];  
    let currentScene: objects.Scene;
    //let currentState:number;

    function Init()
    {
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.on("complete", Start);
        assetManager.loadManifest (assetManifest);
    }

    function Start()
    {
        //Get canvas from inde.html
        canvas = document.getElementById("canvas");
        //New instance of stage
        stage = new createjs.Stage(canvas);
        //Enable mouse movement within stage
        stage.enableMouseOver(20);
        //Update function
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        Main();
        
    }

    function Update()
    {
        let testScene = new scenes.Start(assetManager)
        testScene.Update();
        stage.update();
    }

    function Main()
    {
        console.log("Game Started");
        //Add start scene to the stage
        currentScene = new scenes.Start(assetManager);
        stage.addChild(currentScene);
    }
    window.onload = Init;

})();
//IIFE - Immediately Invoked Function Expression
(function()
{
    let stage:createjs.Stage;
    let canvas:any;
    let gameName:objects.Label;
    let assetManager:createjs.LoadQueue;

    let assetManifest =[
        {id: "player", src:"../../Assets/images/player_test.png"},
        {id: "player", src:"../../Assets/images/zombie_test.png"},
        {id: "player", src:"../../Assets/images/background_test.png"}
    ];

    function Init()
    {
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.on("complete", Start);
        assetManager.loadManifest (assetManifest);
    }

    function Start()
    {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update()
    {
        stage.update();
    }

    function Main()
    {
        console.log("Game Started...");
        gameName = new objects.Label("The Invasion", "50px", "Consolas", "#000000", 425, 300, true);
        stage.addChild(gameName);
    }
    window.onload = Init;

})();
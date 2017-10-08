//IIFE - Immediately Invoked Function Expression
(function()
{
    let stage:createjs.Stage;
    let canvas:any;
    let gameName:objects.Label;

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
        gameName = new objects.Label("The", "50px", "Consolas", "#000000", 425, 300, true);
        stage.addChild(gameName);
    }
    window.onload = Start;

})();
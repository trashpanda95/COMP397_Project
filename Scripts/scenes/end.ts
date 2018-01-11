module scenes {
    export class End extends objects.Scene
    {
          //PRIVATE INSTANCE VARIABLES
          private assetManager: createjs.LoadQueue;
          private gameTitle: objects.Label;
          private startButton: objects.Button;
          private endImage:objects.Image;
          private blackoutImage:objects.Image;
          private ambianceSound: createjs.AbstractSoundInstance;
          //PUBLIC PROPETIES
  
          //CONSTRUCTORS
          constructor( currentScene: number)
          {
              super();
              this.currentScene = currentScene;
              this.Start(); 
          }
  
          //PRIVATE METHOS
  
          //PUBLIC METHODS
          public Start():void
          {
              this.ambianceSound = createjs.Sound.play("endSound",0,0,0,-1,0.2,0);
              this.endImage = new objects.Image("endimage");
              this.blackoutImage = new objects.Image("blackout");
              //this.gameTitle = new objects.Label("GAME OVER", "80px", "Gesso", "#ff0000", 400, 250, true);
              this.startButton = new objects.Button("reStartBtn", config.Screen.WIDTH/2, config.Screen.HEIGHT/4*2.2, true);

              //this.addChild(this.gameTitle);
              this.addChild(this.blackoutImage);
              this.addChild(this.endImage);
              this.addChild(this.startButton);
              
              this.onClickStartBtn();
          }
  
          public Update():number
          {
              return this.currentScene;
          }
  
          public onClickStartBtn()
          {
              this.startButton.on("click", () =>
              {
                  this.ambianceSound.stop();
                  this.removeAllChildren();
                  this.currentScene = config.Scene.PLAY;
              });
          }
      }
}
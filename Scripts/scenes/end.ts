module scenes {
    export class End extends objects.Scene
    {
          //PRIVATE INSTANCE VARIABLES
          private assetManager: createjs.LoadQueue;
          private gameTitleOutline: objects.Label;
          private gameTitle: objects.Label;
          private restartButton: objects.Button;
  
          private backgroundImageFill: objects.BlackScreen;
          private backgroundImage: objects.DeathScreen;
          //PUBLIC PROPETIES
  
          //CONSTRUCTORS
          constructor(assetManager:createjs.LoadQueue, currentScene: number)
          {
              super();
              this.assetManager = assetManager;
              this.currentScene = currentScene;
              this.Start(); 
          }
  
          //PRIVATE METHOS
  
          //PUBLIC METHODS
          public Start():void
          {
              // Initialize Game Title Outline
              this.gameTitleOutline = new objects.Label("GAME OVER", "80px", "Dock51", "#000000", 400, 250, true);
              this.gameTitleOutline.outline = 1;                       // Set Outline Property to True

              // Initialize Game Title
              this.gameTitle = new objects.Label("GAME OVER", "80px", "Dock51", "#ff0000", 400, 250, true);

              // Initialize BackGroundImage
              this.backgroundImage = new objects.DeathScreen(this.assetManager);
              this.backgroundImageFill = new objects.BlackScreen(this.assetManager);
              
              // Initialize Restart Button
              this.restartButton = new objects.Button(this.assetManager, "reStartBtn", 400, 350, true);


              // Add Background Image to Screen
              this.addChild(this.backgroundImageFill);
              this.addChild(this.backgroundImage);     

              // Add Outline & Title onto Screen - Unnecessary since background image has text
              //this.addChild(this.gameTitleOutline);      
              //this.addChild(this.gameTitle);    
              
              // Add Restart Button onto Screen
              this.addChild(this.restartButton);
              this.onClickStartBtn();
          }
  
          public Update():number
          {
              return this.currentScene;
          }
  
          public onClickStartBtn()
          {
              this.restartButton.on("click", () =>
              {
                  this.currentScene = config.Scene.PLAY;
                  this.removeAllChildren();
              });
          }
      }
}
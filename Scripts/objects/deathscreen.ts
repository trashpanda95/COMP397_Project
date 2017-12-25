/*
  Sets the background for the End screen
*/
module objects {
    export class DeathScreen extends createjs.Bitmap {
      // PUBLIC PROPERTIES
  
      // CONSTRUCTORS
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager.getResult("dead"));
  
        this.Start();
      }
      // PRIVATE METHODS
  
      // PUBLIC METHODS
      public Start():void {
      }
  
      public Update():void {
      }
    }
  }
  
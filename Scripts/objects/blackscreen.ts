/*
  Sets the background for the End screen
*/
module objects {
    export class BlackScreen extends createjs.Bitmap {
      // PUBLIC PROPERTIES
  
      // CONSTRUCTORS
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager.getResult("fillBlack"));
  
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
  
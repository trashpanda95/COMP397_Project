/*
  Sets the background for the start screen
*/
module objects {
  export class StartBackGround extends createjs.Bitmap {
    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager.getResult("sbg"));

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

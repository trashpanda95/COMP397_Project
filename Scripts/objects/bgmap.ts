module objects {
    export class bgmap extends createjs.Bitmap {
      // PRIVATE INSTANCE VARIABLES
      // PUBLIC PROPERTIES
  
      // CONSTRUCTORS
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager.getResult("bgmap"));
  
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
  